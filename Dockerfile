# --- BASE ---
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=true
RUN corepack enable
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
RUN npm install -g prisma@5.8.1
WORKDIR /app

# --- BUILDER ---
FROM base AS builder
# Use pnpm fetch to cache dependencies
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml tsconfig.base.json ./
COPY packages/chain-adapters/package.json ./packages/chain-adapters/
COPY packages/database/package.json ./packages/database/
COPY packages/frontend/package.json ./packages/frontend/
COPY packages/indexer-worker/package.json ./packages/indexer-worker/
COPY packages/ingestion-service/package.json ./packages/ingestion-service/
COPY packages/query-api/package.json ./packages/query-api/
COPY packages/reorg-service/package.json ./packages/reorg-service/
COPY packages/shared/package.json ./packages/shared/

RUN pnpm install --frozen-lockfile

COPY . .

# Generate Prisma and build everything
RUN cd packages/database && npx prisma generate
RUN pnpm build

# Prune dev dependencies to save space
# RUN pnpm prune --prod

# --- TARGETS ---
# We use the builder as base for runner to keep symlinks intact
# but we only copy the necessary bits.

FROM base AS ingestion-service
COPY --from=builder /app /app
WORKDIR /app/packages/ingestion-service
# Remove source files to save space
RUN rm -rf src
CMD ["node", "dist/index.js"]

FROM base AS indexer-worker
COPY --from=builder /app /app
WORKDIR /app/packages/indexer-worker
RUN rm -rf src
CMD ["node", "dist/index.js"]

FROM base AS reorg-service
COPY --from=builder /app /app
WORKDIR /app/packages/reorg-service
RUN rm -rf src
CMD ["node", "dist/index.js"]

FROM base AS query-api
COPY --from=builder /app /app
WORKDIR /app/packages/query-api
RUN rm -rf src
CMD ["node", "dist/index.js"]

FROM base AS database-utils
COPY --from=builder /app /app
WORKDIR /app/packages/database
RUN rm -rf src
# CMD is overridden in compose

FROM base AS frontend
ENV NODE_ENV=production
COPY --from=builder /app/packages/frontend/public ./public
COPY --from=builder /app/packages/frontend/.next/standalone ./
COPY --from=builder /app/packages/frontend/.next/static ./.next/static
EXPOSE 3000
ENTRYPOINT ["node", "server.js"]

FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
WORKDIR /app

FROM base AS builder
COPY . .
RUN pnpm install --no-frozen-lockfile --config.node-linker=hoisted
RUN cd packages/database && npx prisma generate
RUN cd packages/database && pnpm build
RUN pnpm -r --workspace-concurrency=1 run build

FROM base AS runner
WORKDIR /app/packages/ingestion-service
COPY --from=builder /app /app
CMD ["node", "dist/index.js"]

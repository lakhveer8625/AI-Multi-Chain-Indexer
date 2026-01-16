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

FROM base AS runner
WORKDIR /app/packages/database
COPY --from=builder /app /app
# Used for seeding and migrations
CMD ["node", "dist/prisma/seed.js"]

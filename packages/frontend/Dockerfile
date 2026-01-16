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
ENV NODE_ENV=production
WORKDIR /app/packages/frontend
COPY --from=builder /app/packages/frontend/public ./public
COPY --from=builder /app/packages/frontend/.next/standalone ./
COPY --from=builder /app/packages/frontend/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]

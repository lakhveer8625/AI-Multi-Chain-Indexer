# Use Node.js base image
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# --- DEPENDENCIES ---
FROM base AS deps
# Copy workspace configuration and lockfile
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./

# Copy package.json for each package to leverage Docker cache
COPY packages/chain-adapters/package.json ./packages/chain-adapters/
COPY packages/database/package.json ./packages/database/
COPY packages/frontend/package.json ./packages/frontend/
COPY packages/indexer-worker/package.json ./packages/indexer-worker/
COPY packages/ingestion-service/package.json ./packages/ingestion-service/
COPY packages/query-api/package.json ./packages/query-api/
COPY packages/reorg-service/package.json ./packages/reorg-service/
COPY packages/shared/package.json ./packages/shared/

# Install dependencies
RUN pnpm install --frozen-lockfile

# --- BUILD ---
FROM deps AS build
COPY . .

# Set environment variables for build time (e.g. for Next.js)
ARG NEXT_PUBLIC_GRAPHQL_URL
ENV NEXT_PUBLIC_GRAPHQL_URL=$NEXT_PUBLIC_GRAPHQL_URL

# Generate Prisma client
RUN cd packages/database && npx prisma generate

# Build all packages
RUN pnpm build

# --- PRODUCTION RUNNER ---
FROM base AS runner
WORKDIR /app

# Copy built assets and dependencies
COPY --from=build /app /app

# Metadata
LABEL maintainer="Multi-Chain Indexer Team"
LABEL version="1.0.0"

# The command will be overridden in docker-compose.yml for each service
CMD ["pnpm", "run", "start"]

# Case Study: Multi-Chain Indexer (MCI)

## Overview
The Multi-Chain Indexer is a high-performance, real-time data indexing solution for blockchain networks (EVM-compatible). It provides a unified GraphQL API and a premium dashboard to explore transactions, blocks, and events across multiple chains simultaneously.

## Architecture
The system follows a microservices architecture to ensure scalability and reliability:

1.  **Ingestion Service**: Monitors various blockchain networks for new blocks and logs. It publishes raw event data to a Redis queue.
2.  **Indexer Worker**: Consumes events from Redis and processes them into a canonical format, storing them in a MySQL database.
3.  **Reorg Service**: Monitors the state of indexed blocks and detects chain reorganizations, automatically rolling back non-canonical data to maintain integrity.
4.  **Query API**: A robust GraphQL server that serves the indexed data to the frontend and external consumers.
5.  **Frontend**: A modern, premium Next.js dashboard with real-time updates and advanced filtering.

## Tech Stack
-   **Language**: TypeScript (Monorepo with pnpm)
-   **Database**: MySQL with Prisma ORM
-   **Caching/Queue**: Redis with BullMQ
-   **API**: Apollo Server (GraphQL)
-   **Frontend**: Next.js, Tailwind CSS, Apollo Client, Recharts
-   **Infrastructure**: Docker & Docker Compose

## Key Features Implemented
-   **Multi-Chain Support**: Simultaneously index Ethereum Mainnet, Sepolia, Polygon, and more.
-   **Real-time Dashboard**: Auto-refreshing tables and stats (every 10 seconds) without page reloads.
-   **Advanced Filtering**: Filter by chain, event type, status, and full-text search across hashes and addresses.
-   **Reliability**: Multi-stage Docker setup for production, including health checks and automatic database migrations/seeding.
-   **Premium UI**: Glassmorphism design, skeleton loading states, and responsive charts.

## Setup & Deployment
The entire stack can be launched using a single command:
```bash
docker-compose up --build
```
This automatically handles:
1.  Launching MySQL & Redis.
2.  Running Prisma migrations.
3.  Seeding the database with initial chain configurations.
4.  Starting all indexing and API services.
5.  Serving the premium frontend.

## Conclusion
The MCI project provides a scalable foundation for building blockchain explorers and analytical tools, focusing on data integrity, performance, and user experience.

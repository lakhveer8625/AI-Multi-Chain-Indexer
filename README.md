# Multi-Chain Indexer (MCI)

A high-performance, scalable blockchain indexer and explorer for multiple EVM-compatible chains. This project provides real-time indexing of blockchain events, transactions, and blocks with a modern web interface for querying and visualizing on-chain data.

📄 **Check out our [Detailed Case Study](./CaseStudy.md) for architecture insights and features.**

## 🚀 Features

- **Multi-Chain Support**: Index and query data from multiple EVM-compatible chains (Ethereum, Sepolia, Polygon, etc.)
- **Real-time Indexing**: Continuously sync blockchain data with configurable block ranges
- **GraphQL API**: Powerful query interface for accessing indexed data
- **Modern Web UI**: Beautiful, responsive dashboard built with Next.js and Tailwind CSS
- **Event Processing**: Advanced event decoding and processing pipeline
- **Reorganization Handling**: Automatic detection and handling of chain reorganizations
- **Caching Layer**: Redis-based caching for optimized query performance
- **Database**: MySQL-based storage with Prisma ORM

## 📋 Architecture

This is a monorepo project built with pnpm workspaces, consisting of the following packages:

### Core Services

- **`frontend`**: Next.js 16 web application with Apollo Client
  - Modern UI with Tailwind CSS
  - Transaction and block explorer
  - Real-time statistics and charts
  - Multi-chain filtering and pagination

- **`query-api`**: GraphQL API server (Apollo Server)
  - Provides data access layer
  - Swagger documentation
  - RESTful endpoints alongside GraphQL

- **`ingestion-service`**: Blockchain data ingestion service
  - Fetches blocks and transactions from RPC endpoints
  - Handles event decoding
  - Queues data for processing

- **`indexer-worker`**: Background worker for processing blockchain data
  - Event processing pipeline
  - Database persistence
  - Transaction decoding

- **`reorg-service`**: Chain reorganization detection and handling
  - Monitors for reorgs
  - Rollback and re-index affected blocks

### Supporting Packages

- **`database`**: Prisma schema and database utilities
  - MySQL database schema
  - Migrations
  - Database utilities and scripts

- **`chain-adapters`**: Blockchain RPC adapters
  - Provider abstraction
  - Multi-chain support
  - RPC utilities

- **`shared`**: Shared utilities and types
  - Common TypeScript types
  - Utility functions
  - Shared constants

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS, Apollo Client, Recharts |
| **Backend** | Node.js, TypeScript, Apollo Server, Express |
| **Database** | MySQL 8.0, Prisma ORM |
| **Caching** | Redis 7 |
| **Blockchain** | ethers.js, JSON-RPC |
| **DevOps** | Docker, Docker Compose, pnpm |

## 📦 Prerequisites

- **Node.js** >= 18.x
- **pnpm** >= 8.x
- **Docker** and **Docker Compose**
- **MySQL** 8.0 (via Docker or local install)
- **Redis** 7.x (via Docker or local install)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd AI-Test
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Infrastructure Services

Start MySQL, Redis, and Adminer using Docker Compose:

```bash
docker-compose up -d
```

This will start:
- **MySQL** on port `3307`
- **Redis** on port `6380`
- **Adminer** (database UI) on port `8080`

### 4. Configure Environment Variables

The project uses a root `.env` file. Update it if needed:

```env
DATABASE_URL="mysql://indexer_user:indexer_password@localhost:3307/indexer_db"
REDIS_URL="redis://localhost:6380"
NODE_ENV="development"

# RPC Endpoints - Update with your preferred providers
ETH_MAINNET_RPC_URL="https://rpc.ankr.com/eth"
ETH_SEPOLIA_RPC_URL="https://rpc.ankr.com/eth_sepolia"
```

**Important**: For production, use authenticated RPC endpoints (Alchemy, Infura, QuickNode) to avoid rate limiting.

See [Configuration Guide](./docs/CONFIGURATION.md) for detailed setup instructions.

### 5. Run Database Migrations

```bash
cd packages/database
pnpm prisma migrate dev
```

### 6. Start Development Servers

From the root directory:

```bash
# Start all services
pnpm dev

# Or start individual services:
pnpm -F @mci/frontend dev          # Frontend on http://localhost:3000
pnpm -F @mci/query-api dev         # GraphQL API on http://localhost:4000
pnpm -F @mci/ingestion-service dev # Ingestion service
pnpm -F @mci/indexer-worker dev    # Worker processes
```

### 7. Access the Application

- **Web UI**: http://localhost:3000
- **GraphQL Playground**: http://localhost:4000/graphql
- **Adminer (DB UI)**: http://localhost:8080
  - System: `MySQL`
  - Server: `mysql`
  - Username: `indexer_user`
  - Password: `indexer_password`
  - Database: `indexer_db`

## 📚 Package Details

### Frontend (`@mci/frontend`)

Modern web application for exploring indexed blockchain data.

**Key Features:**
- Home dashboard with network statistics
- Transaction list with advanced filtering
- Block explorer
- Wallet/address lookup
- Responsive design with dark mode support

**Scripts:**
```bash
pnpm dev    # Start development server
pnpm build  # Build for production
pnpm start  # Start production server
```

### Query API (`@mci/query-api`)

GraphQL API for accessing indexed blockchain data.

**Endpoints:**
- `/graphql` - GraphQL endpoint
- `/api/docs` - Swagger documentation

**Example Queries:**
```graphql
query {
  eventsPage(limit: 10, offset: 0, chainId: 1) {
    totalCount
    nodes {
      id
      txHash
      blockNumber
      chainId
      eventType
      status
    }
  }
}
```

### Ingestion Service (`@mci/ingestion-service`)

Handles real-time blockchain data ingestion from RPC endpoints.

**Configuration:**
- Configure RPC endpoints in the service configuration
- Supports multiple chains simultaneously
- Configurable block range and polling intervals

### Indexer Worker (`@mci/indexer-worker`)

Background worker for processing and indexing blockchain data.

**Responsibilities:**
- Event processing and decoding
- Transaction parsing
- Database persistence
- Queue management

## 🔧 Development

### Project Structure

```
AI-Test/
├── packages/
│   ├── frontend/           # Next.js web app
│   ├── query-api/          # GraphQL API server
│   ├── ingestion-service/  # Data ingestion
│   ├── indexer-worker/     # Background workers
│   ├── reorg-service/      # Reorg detection
│   ├── database/           # Prisma schema & migrations
│   ├── chain-adapters/     # Blockchain adapters
│   └── shared/             # Shared utilities
├── docker-compose.yml      # Infrastructure services
├── pnpm-workspace.yaml     # pnpm workspace config
├── package.json            # Root package config
└── tsconfig.base.json      # Base TypeScript config
```

### Available Scripts

From the root directory:

```bash
pnpm build       # Build all packages
pnpm test        # Run tests across all packages
pnpm dev         # Start all services in development mode
pnpm lint        # Lint all packages
```

### Database Management

```bash
# Generate Prisma client
cd packages/database
pnpm prisma generate

# Create a new migration
pnpm prisma migrate dev --name <migration-name>

# View database in Prisma Studio
pnpm prisma studio

# Reset database (⚠️ destructive)
pnpm prisma migrate reset
```

### Adding a New Chain

1. Update chain configuration in `chain-adapters`
2. Add RPC endpoint configuration
3. Update frontend chain selector
4. Restart ingestion service

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm -F @mci/shared test
```

## 📝 Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

Run linting:
```bash
pnpm lint
```

## 🐳 Docker

### Start Infrastructure

```bash
docker-compose up -d
```

### Stop Infrastructure

```bash
docker-compose down
```

### View Logs

```bash
docker-compose logs -f
```

## 🔍 Troubleshooting

### Database Connection Issues

1. Ensure Docker services are running: `docker-compose ps`
2. Check database credentials in `.env`
3. Verify port 3307 is not in use: `lsof -i :3307`

### Frontend Not Loading Data

1. Verify GraphQL API is running on port 4000
2. Check browser console for errors
3. Ensure database has indexed data

### RPC Rate Limiting

1. Configure multiple RPC endpoints
2. Implement request throttling
3. Use paid RPC providers for production

## 📖 Documentation

Comprehensive documentation is available in the `/docs` directory:

### Architecture & Design
- **[Architecture Guide](./docs/ARCHITECTURE.md)** - Complete system architecture with diagrams
  - Component overview and interactions
  - Data flow diagrams
  - Deployment architecture
  - Scalability considerations
  - Technology stack details

### API Reference
- **[API Documentation](./docs/API.md)** - Complete API reference
  - GraphQL schema and queries
  - REST endpoints
  - Authentication guide
  - Rate limiting
  - Code examples for all endpoints

### Configuration
- **[Configuration Guide](./docs/CONFIGURATION.md)** - Detailed configuration instructions
  - Environment variables reference
  - RPC endpoint setup
  - Database configuration
  - Security settings
  - Production deployment
  - Performance tuning

### Quick Links
- 🏗️ [System Architecture](./docs/ARCHITECTURE.md#architecture-diagram) - Visual system overview
- 🔌 [GraphQL API](./docs/API.md#graphql-api) - API queries and examples
- ⚙️ [Environment Setup](./docs/CONFIGURATION.md#environment-variables) - Configuration guide
- 🚀 [Production Deployment](./docs/CONFIGURATION.md#production-setup) - Production best practices

## 📄 License

[Add your license here]

## 👥 Contributing

[Add contributing guidelines here]

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [Prisma](https://www.prisma.io/)
- [ethers.js](https://docs.ethers.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Multi-Chain Indexer** - Index the blockchain, explore the future 🚀

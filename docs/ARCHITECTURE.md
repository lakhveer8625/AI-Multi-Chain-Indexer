# Multi-Chain Indexer - System Architecture

## Table of Contents
- [Overview](#overview)
- [Architecture Diagram](#architecture-diagram)
- [System Components](#system-components)
- [Data Flow](#data-flow)
- [Technology Stack](#technology-stack)
- [Deployment Architecture](#deployment-architecture)

---

## Overview

The Multi-Chain Indexer (MCI) is a distributed system designed to index, process, and serve blockchain data from multiple EVM-compatible chains. The architecture follows a microservices pattern with clear separation of concerns:

- **Data Ingestion**: Real-time blockchain data collection
- **Event Processing**: Asynchronous event decoding and transformation
- **Data Storage**: Persistent storage with caching layer
- **Query API**: GraphQL interface for data access
- **Frontend**: Modern web interface for data exploration

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          BLOCKCHAIN LAYER                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐                │
│   │   Ethereum   │    │   Sepolia    │    │   Polygon    │                │
│   │   Mainnet    │    │   Testnet    │    │   Mainnet    │                │
│   │  (Chain: 1)  │    │ (Chain: 11..1)│   │  (Chain: 137)│                │
│   └──────┬───────┘    └──────┬───────┘    └──────┬───────┘                │
│          │                    │                    │                         │
│          │  JSON-RPC          │  JSON-RPC         │  JSON-RPC               │
│          │                    │                    │                         │
└──────────┼────────────────────┼────────────────────┼─────────────────────────┘
           │                    │                    │
           └────────────────────┼────────────────────┘
                                │
┌───────────────────────────────▼─────────────────────────────────────────────┐
│                       INGESTION LAYER                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌────────────────────────────────────────────────────────────────────┐     │
│  │               Ingestion Service (@mci/ingestion-service)           │     │
│  ├────────────────────────────────────────────────────────────────────┤     │
│  │                                                                     │     │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │     │
│  │  │ EVM Adapter  │  │ EVM Adapter  │  │ EVM Adapter  │           │     │
│  │  │  (Chain 1)   │  │ (Chain 11..1)│  │ (Chain 137)  │           │     │
│  │  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘           │     │
│  │         │                  │                  │                    │     │
│  │         └──────────────────┼──────────────────┘                   │     │
│  │                            │                                       │     │
│  │                   ┌────────▼────────┐                             │     │
│  │                   │ Event Publisher │                             │     │
│  │                   └────────┬────────┘                             │     │
│  └────────────────────────────┼──────────────────────────────────────┘     │
│                                │                                             │
└────────────────────────────────┼─────────────────────────────────────────────┘
                                 │
                                 │ Publish Events
                                 │
┌────────────────────────────────▼─────────────────────────────────────────────┐
│                          MESSAGE QUEUE LAYER                                  │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                                │
│                        ┌─────────────────────┐                               │
│                        │       Redis         │                               │
│                        │   Message Queue     │                               │
│                        │   (Port: 6380)      │                               │
│                        └──────────┬──────────┘                               │
│                                   │                                           │
└───────────────────────────────────┼───────────────────────────────────────────┘
                                    │ Consume Events
                                    │
┌───────────────────────────────────▼───────────────────────────────────────────┐
│                          PROCESSING LAYER                                      │
├────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────────┐    │
│  │              Indexer Worker (@mci/indexer-worker)                    │    │
│  ├──────────────────────────────────────────────────────────────────────┤    │
│  │                                                                       │    │
│  │   ┌────────────────┐       ┌────────────────┐                       │    │
│  │   │ Event Consumer │──────▶│ Event Processor│                       │    │
│  │   └────────────────┘       └────────┬───────┘                       │    │
│  │                                      │                                │    │
│  │                                      │ Decode & Transform            │    │
│  │                                      │                                │    │
│  │                            ┌─────────▼─────────┐                     │    │
│  │                            │  Database Writer  │                     │    │
│  │                            └─────────┬─────────┘                     │    │
│  └──────────────────────────────────────┼───────────────────────────────┘    │
│                                          │                                     │
│  ┌──────────────────────────────────────┼───────────────────────────────┐    │
│  │           Reorg Service (@mci/reorg-service)                         │    │
│  ├──────────────────────────────────────┼───────────────────────────────┤    │
│  │                                       │                                │    │
│  │   ┌────────────────┐     ┌──────────▼──────────┐                    │    │
│  │   │ Reorg Detector │────▶│  Rollback Handler   │                    │    │
│  │   └────────────────┘     └─────────────────────┘                    │    │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                          │                                     │
└──────────────────────────────────────────┼─────────────────────────────────────┘
                                           │
┌──────────────────────────────────────────▼─────────────────────────────────────┐
│                           DATA LAYER                                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│   ┌───────────────────────────┐          ┌──────────────────────────┐         │
│   │   MySQL Database          │          │    Redis Cache           │         │
│   │   (@mci/database)         │          │                          │         │
│   │   (Port: 3307)            │          │    (Port: 6380)          │         │
│   ├───────────────────────────┤          └──────────────────────────┘         │
│   │                           │                                                 │
│   │  ┌─────────────────┐     │                                                 │
│   │  │ Tables:         │     │                                                 │
│   │  │ - chains        │     │                                                 │
│   │  │ - blocks        │     │                                                 │
│   │  │ - events        │     │                                                 │
│   │  │ - transactions  │     │                                                 │
│   │  └─────────────────┘     │                                                 │
│   │                           │                                                 │
│   │  Managed by: Prisma ORM  │                                                 │
│   └───────────┬───────────────┘                                                │
│               │                                                                 │
└───────────────┼─────────────────────────────────────────────────────────────────┘
                │
┌───────────────▼─────────────────────────────────────────────────────────────────┐
│                           API LAYER                                              │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                   │
│  ┌────────────────────────────────────────────────────────────────────────┐    │
│  │                 Query API (@mci/query-api)                             │    │
│  │                 (Port: 4000)                                            │    │
│  ├────────────────────────────────────────────────────────────────────────┤    │
│  │                                                                         │    │
│  │   ┌──────────────────┐        ┌──────────────────┐                    │    │
│  │   │  GraphQL Server  │        │   REST API       │                    │    │
│  │   │  (Apollo Server) │        │   (Express)      │                    │    │
│  │   └────────┬─────────┘        └────────┬─────────┘                    │    │
│  │            │                            │                               │    │
│  │            │   ┌────────────────────────▼────────┐                     │    │
│  │            └──▶│      Resolvers & Controllers     │                    │    │
│  │                └──────────────┬──────────────────┘                     │    │
│  │                               │                                         │    │
│  │                     ┌─────────▼─────────┐                              │    │
│  │                     │  Prisma Client    │                              │    │
│  │                     └───────────────────┘                              │    │
│  │                                                                         │    │
│  │   Endpoints:                                                           │    │
│  │   - /graphql       (GraphQL API)                                       │    │
│  │   - /api-docs      (Swagger UI)                                        │    │
│  │   - /health        (Health Check)                                      │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│                                  │                                              │
└──────────────────────────────────┼──────────────────────────────────────────────┘
                                   │ GraphQL/REST
┌──────────────────────────────────▼──────────────────────────────────────────────┐
│                        PRESENTATION LAYER                                        │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                   │
│  ┌────────────────────────────────────────────────────────────────────────┐    │
│  │                   Frontend (@mci/frontend)                             │    │
│  │                   (Port: 3000)                                          │    │
│  ├────────────────────────────────────────────────────────────────────────┤    │
│  │                                                                         │    │
│  │   ┌──────────────────┐                                                 │    │
│  │   │   Next.js App    │                                                 │    │
│  │   │   (React 19)     │                                                 │    │
│  │   └────────┬─────────┘                                                 │    │
│  │            │                                                            │    │
│  │   ┌────────▼─────────┐      ┌──────────────────┐                      │    │
│  │   │ Apollo Client    │      │   UI Components  │                      │    │
│  │   │ (GraphQL Client) │      │   (Tailwind CSS) │                      │    │
│  │   └──────────────────┘      └──────────────────┘                      │    │
│  │                                                                         │    │
│  │   Pages:                                                               │    │
│  │   - /              (Home Dashboard)                                    │    │
│  │   - /transactions  (Transactions List)                                 │    │
│  │   - /blocks        (Blocks List)                                       │    │
│  │   - /wallet/[addr] (Wallet Details)                                    │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
                                   │
                                   │ Browser
                                   │
                            ┌──────▼──────┐
                            │    Users    │
                            └─────────────┘
```

---

## System Components

### 1. **Ingestion Service** (`@mci/ingestion-service`)

**Purpose**: Connects to blockchain RPC endpoints and fetches real-time data

**Responsibilities**:
- Maintains WebSocket/HTTP connections to multiple blockchain networks
- Subscribes to new blocks and transactions
- Fetches historical data for initial indexing
- Publishes raw blockchain data to message queue

**Technology**: Node.js, ethers.js, Chain Adapters

**Configuration**:
- Environment variables for RPC URLs
- Configurable polling intervals
- Support for multiple chains simultaneously

---

### 2. **Indexer Worker** (`@mci/indexer-worker`)

**Purpose**: Processes blockchain events and persists them to database

**Responsibilities**:
- Consumes events from Redis queue
- Decodes smart contract events and transaction data
- Transforms raw blockchain data into structured format
- Writes processed data to MySQL database
- Handles data validation and error recovery

**Technology**: Node.js, TypeScript, Prisma ORM

**Processing Pipeline**:
```
Redis Queue → Event Consumer → Event Processor → Database Writer
                                      ↓
                              [Decode & Transform]
                              [Validate Data]
                              [Enrich Metadata]
```

---

### 3. **Reorg Service** (`@mci/reorg-service`)

**Purpose**: Detects and handles blockchain reorganizations

**Responsibilities**:
- Monitors blockchain for reorganization events
- Detects when indexed blocks become orphaned
- Triggers rollback of affected data
- Re-indexes correct blockchain state
- Maintains data consistency

**Technology**: Node.js, TypeScript

**Reorg Detection**:
- Compares block hashes at same height
- Maximum configurable reorg depth
- Automatic retry mechanism

---

### 4. **Query API** (`@mci/query-api`)

**Purpose**: Provides data access interface via GraphQL and REST

**Responsibilities**:
- Exposes GraphQL endpoint for flexible queries
- Provides REST API for specific operations
- Implements authentication and authorization
- Caching layer for performance
- Rate limiting and request validation

**Technology**: Apollo Server, Express.js, Prisma

**GraphQL Schema**:
- `eventsPage()` - Paginated events query
- `blocksPage()` - Paginated blocks query
- `chains` - Supported chains list
- `networkStats()` - Network statistics
- `transactionHistory()` - Historical transaction data

**Endpoints**:
- `POST /graphql` - GraphQL queries
- `GET /api-docs` - Swagger documentation
- `GET /health` - Health check

---

### 5. **Frontend** (`@mci/frontend`)

**Purpose**: Web-based user interface for exploring blockchain data

**Responsibilities**:
- Display real-time blockchain statistics
- Browse transactions and blocks
- Search by address, tx hash, or block number
- Multi-chain filtering
- Responsive, accessible UI

**Technology**: Next.js 16, React 19, Apollo Client, Tailwind CSS

**Features**:
- Server-side rendering (SSR) for SEO
- Client-side routing
- Real-time updates via GraphQL
- Responsive design
- Dark mode support

---

### 6. **Database** (`@mci/database`)

**Purpose**: Data persistence and schema management

**Responsibilities**:
- Prisma schema definition
- Database migrations
- Seed data for chains
- Database utilities and scripts

**Technology**: Prisma ORM, MySQL 8.0

**Schema**:
```prisma
model Chain {
  chainId  Int    @id
  name     String
  rpcUrl   String
  type     String // EVM, SOLANA
}

model Block {
  id          String   @id
  chainId     Int
  number      BigInt
  hash        String
  timestamp   DateTime
  isCanonical Boolean
}

model Event {
  id              String   @id
  chainId         Int
  txHash          String
  blockNumber     BigInt
  eventType       String
  contractAddress String?
  from            String?
  to              String?
  amount          String?
  timestamp       DateTime
  status          String
}
```

---

### 7. **Chain Adapters** (`@mci/chain-adapters`)

**Purpose**: Abstract blockchain interactions

**Responsibilities**:
- Provide unified interface for different chains
- Handle RPC communication
- Parse blockchain-specific data formats
- Implement retry logic and error handling

**Supported Chains**:
- EVM-compatible chains (Ethereum, Polygon, etc.)
- Solana (partial support)

---

### 8. **Shared** (`@mci/shared`)

**Purpose**: Common utilities and types

**Responsibilities**:
- TypeScript type definitions
- Shared constants
- Utility functions
- Event signatures and ABIs

---

## Data Flow

### Indexing Flow (Real-time)

```
1. Blockchain emits new block
   ↓
2. Ingestion Service detects via WebSocket
   ↓
3. Fetches block details and transactions
   ↓
4. Publishes to Redis queue
   ↓
5. Indexer Worker consumes from queue
   ↓
6. Processes and decodes events
   ↓
7. Writes to MySQL database
   ↓
8. Data available via Query API
   ↓
9. Frontend displays to users
```

### Query Flow

```
1. User opens frontend in browser
   ↓
2. Frontend sends GraphQL query to API
   ↓
3. Apollo Server receives request
   ↓
4. Resolver queries database via Prisma
   ↓
5. Data returned to frontend
   ↓
6. React components render data
   ↓
7. User sees blockchain information
```

### Reorg Handling Flow

```
1. Reorg Service detects block hash mismatch
   ↓
2. Identifies affected blocks and depth
   ↓
3. Marks orphaned blocks as non-canonical
   ↓
4. Deletes or marks related events as invalid
   ↓
5. Triggers re-indexing of correct chain
   ↓
6. Normal indexing resumes
```

---

## Technology Stack

### Backend Services
- **Runtime**: Node.js 18+
- **Language**: TypeScript 5.x
- **Framework**: Express.js
- **GraphQL**: Apollo Server 4
- **ORM**: Prisma 5.x

### Frontend
- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **GraphQL Client**: Apollo Client 4
- **Charts**: Recharts

### Data Storage
- **Database**: MySQL 8.0
- **Cache/Queue**: Redis 7
- **ORM**: Prisma

### Blockchain
- **Library**: ethers.js v6
- **RPC**: JSON-RPC 2.0
- **Networks**: EVM-compatible

### DevOps
- **Package Manager**: pnpm 8.x
- **Containerization**: Docker, Docker Compose
- **Monorepo**: pnpm workspaces

---

## Deployment Architecture

### Development Environment
```
Developer Machine
├── Docker Compose
│   ├── MySQL (Port 3307)
│   ├── Redis (Port 6380)
│   └── Adminer (Port 8080)
│
├── Node Services (Local)
│   ├── Frontend (Port 3000)
│   ├── Query API (Port 4000)
│   ├── Ingestion Service
│   ├── Indexer Worker
│   └── Reorg Service
```

### Production Environment (Recommended)

```
Load Balancer
    ↓
┌───────────────────────────────┐
│   Frontend (Next.js)          │
│   - Auto-scaling (2-10 pods)  │
│   - CDN for static assets     │
└───────────────────────────────┘
    ↓
┌───────────────────────────────┐
│   API Gateway / Load Balancer │
└───────────────────────────────┘
    ↓
┌───────────────────────────────┐
│   Query API Cluster           │
│   - Auto-scaling (2-5 pods)   │
│   - Stateless                 │
└───────────────────────────────┘
    ↓
┌───────────────────────────────┐
│   Managed Database            │
│   - MySQL (Primary/Replica)   │
│   - Automated backups         │
│   - Read replicas             │
└───────────────────────────────┘

┌───────────────────────────────┐  ┌───────────────────────────────┐
│   Ingestion Service           │  │   Background Workers          │
│   - Replicated per chain      │  │   - Indexer Worker (3-10)     │
│   - Dedicated resources       │  │   - Reorg Service (2)         │
└───────────────────────────────┘  └───────────────────────────────┘
    ↓                                   ↑
┌───────────────────────────────────────┐
│   Redis Cluster                       │
│   - Managed service (ElastiCache)    │
│   - Master/Replica setup              │
└───────────────────────────────────────┘
```

---

## Scalability Considerations

### Horizontal Scaling
- **Query API**: Stateless, can scale to multiple instances
- **Indexer Workers**: Can run multiple workers per chain
- **Frontend**: Can be distributed via CDN

### Vertical Scaling
- **Database**: Increase resources for MySQL
- **Redis**: Larger instance for queue/cache

### Performance Optimization
- **Caching**: Redis for frequently accessed data
- **Database Indexing**: Optimize queries with proper indexes
- **Connection Pooling**: Reuse database connections
- **Batch Processing**: Process events in batches

---

## Security Considerations

1. **API Security**
   - Rate limiting
   - API authentication (JWT recommended)
   - CORS configuration
   - Input validation

2. **Database Security**
   - Encrypted connections
   - Principle of least privilege
   - Regular backups
   - SQL injection prevention via Prisma

3. **Infrastructure Security**
   - Network isolation
   - Firewall rules
   - Secrets management
   - Regular security updates

4. **RPC Security**
   - Use authenticated RPC endpoints in production
   - Implement retry logic for failures
   - Monitor for rate limiting

---

## Monitoring & Observability

### Recommended Tools
- **Application Monitoring**: New Relic, Datadog
- **Log Aggregation**: ELK Stack, Loki
- **Metrics**: Prometheus + Grafana
- **Error Tracking**: Sentry
- **Uptime Monitoring**: Pingdom, UptimeRobot

### Key Metrics to Monitor
- RPC endpoint response times
- Queue depth (Redis)
- Database query performance
- API response times
- Indexing lag (blocks behind)
- Error rates per service

---

## Conclusion

This architecture provides a robust, scalable foundation for indexing multi-chain blockchain data. The microservices approach allows independent scaling and deployment of components, while the message queue ensures reliable data processing even under high load.

For production deployment, consider:
- Using managed services (RDS, ElastiCache, etc.)
- Implementing comprehensive monitoring
- Setting up CI/CD pipelines
- Configuring automated backups
- Implementing disaster recovery procedures

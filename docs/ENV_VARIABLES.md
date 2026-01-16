# Environment Variables Flow

This document shows how environment variables are used throughout the Multi-Chain Indexer system.

## Environment Variables Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      .env File (Root)                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  DATABASE_URL="mysql://user:pass@localhost:3307/indexer_db" │
│  REDIS_URL="redis://localhost:6380"                         │
│  NODE_ENV="development"                                      │
│                                                              │
│  # RPC Endpoints                                            │
│  ETH_MAINNET_RPC_URL="https://rpc.ankr.com/eth"            │
│  ETH_SEPOLIA_RPC_URL="https://rpc.ankr.com/eth_sepolia"    │
│  POLYGON_MAINNET_RPC_URL="https://polygon-rpc.com"         │
│                                                              │
│  # Configuration                                             │
│  PORT=4000                                                   │
│  NEXT_PUBLIC_GRAPHQL_URL="http://localhost:4000/graphql"   │
│  ENABLE_SOLANA=false                                         │
│                                                              │
└──────────────────┬───────────────────────────────────────────┘
                   │
                   │ Loaded by dotenv in each service
                   │
        ┌──────────┴──────────┐
        │                     │
        ▼                     ▼
┌──────────────┐      ┌──────────────┐
│   Services   │      │   Database   │
└──────────────┘      └──────────────┘
```

---

## Variable Distribution by Service

### 1. Database Service (`@mci/database`)

**File**: `packages/database/prisma/seed.ts`

```typescript
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../../.env') });

const ETH_MAINNET_RPC = process.env.ETH_MAINNET_RPC_URL;
const ETH_SEPOLIA_RPC = process.env.ETH_SEPOLIA_RPC_URL;
const ENABLE_SOLANA = process.env.ENABLE_SOLANA === 'true';
```

**Used Variables**:
- ✅ `DATABASE_URL` - Prisma connection (via schema.prisma)
- ✅ `ETH_MAINNET_RPC_URL` - Ethereum Mainnet RPC endpoint
- ✅ `ETH_SEPOLIA_RPC_URL` - Sepolia Testnet RPC endpoint
- ✅ `SOLANA_MAINNET_RPC_URL` - Solana RPC endpoint
- ✅ `ENABLE_SOLANA` - Enable/disable Solana indexing

**Usage**:
```
.env → dotenv.config() → process.env → Seed Script → Database
```

---

### 2. Query API (`@mci/query-api`)

**File**: `packages/query-api/src/index.ts`

```typescript
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../../../.env') });

const port = process.env.PORT || 4000;
```

**Used Variables**:
- ✅ `DATABASE_URL` - Database connection via Prisma
- ✅ `PORT` - API server port
- ⚙️ `API_SECRET` - JWT authentication (optional)
- ⚙️ `CORS_ORIGINS` - CORS configuration (optional)

**Usage**:
```
.env → dotenv.config() → Express Server → GraphQL API
                              ↓
                        Prisma Client → Database
```

---

### 3. Ingestion Service (`@mci/ingestion-service`)

**File**: `packages/ingestion-service/src/index.ts`

```typescript
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../../../.env') });

const REDIS_URL = process.env.REDIS_URL;
```

**File**: `packages/ingestion-service/src/ingestor.ts`

```typescript
// Loads chains from database, which contains RPC URLs from seed
const chains = await prisma.chain.findMany({ where: { type: 'EVM' } });

for (const chain of chains) {
    this.addAdapter(new EVMAdapter(chain.chainId, chain.rpcUrl));
}
```

**Used Variables**:
- ✅ `DATABASE_URL` - Fetch chain configurations
- ✅ `REDIS_URL` - Redis queue connection
- ✅ RPC URLs (indirect via database) - Blockchain connections

**Data Flow**:
```
.env → Seed Script → Database (stores RPC URLs)
         ↓                          ↓
    Redis Config              Chain Config
         ↓                          ↓
    Ingestion Service → Creates Adapters → Blockchain RPCs
```

---

### 4. Indexer Worker (`@mci/indexer-worker`)

**File**: `packages/indexer-worker/src/index.ts`

```typescript
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../../../.env') });

const REDIS_URL = process.env.REDIS_URL;
```

**Used Variables**:
- ✅ `DATABASE_URL` - Database persistence
- ✅ `REDIS_URL` - Queue consumer connection

**Usage**:
```
.env → dotenv.config() → Redis Consumer → Process Events → Database
```

---

### 5. Frontend (`@mci/frontend`)

**File**: `packages/frontend/lib/apollo-client.tsx`

```typescript
// Next.js automatically loads NEXT_PUBLIC_ vars
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;
```

**Used Variables**:
- ✅ `NEXT_PUBLIC_GRAPHQL_URL` - GraphQL API endpoint

**Note**: Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

**Usage**:
```
.env → Next.js Build → Browser Bundle (client-side)
```

---

## Complete Flow Diagram

```
┌───────────────────────────────────────────────────────────────┐
│                         .env File                              │
└────────────┬──────────────────────────────────────────────────┘
             │
             ├─────────────┬────────────┬─────────────┬─────────┐
             │             │            │             │         │
             ▼             ▼            ▼             ▼         ▼
       ┌─────────┐  ┌──────────┐  ┌────────┐  ┌─────────┐  ┌─────────┐
       │Database │  │Query API │  │Ingestion│  │ Indexer │  │Frontend │
       │ Seed    │  │          │  │ Service │  │ Worker  │  │         │
       └────┬────┘  └─────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘
            │             │            │            │            │
            │             │            │            │            │
            ▼             │            │            │            │
       ┌─────────┐        │            │            │            │
       │ MySQL   │◄───────┴────────────┴────────────┘            │
       │Database │                                                │
       └────┬────┘                                                │
            │                                                     │
            │ Stores chain configs with RPC URLs                 │
            │                                                     │
            ▼                                                     │
       ┌─────────────────┐                                        │
       │ Chain Records:  │                                        │
       │ - chainId: 1    │                                        │
       │ - rpcUrl: ...   │                                        │
       └────┬────────────┘                                        │
            │                                                     │
            │ Read by Ingestion Service                          │
            │                                                     │
            ▼                                                     │
       ┌──────────────┐                                           │
       │  Blockchain  │                                           │
       │  RPC Nodes   │                                           │
       └──────────────┘                                           │
                                                                  │
       ┌──────────────┐                                           │
       │    Redis     │◄──── REDIS_URL ───────────────────────────┤
       │    Queue     │                                           │
       └──────────────┘                                           │
                                                                  │
       ┌──────────────┐                                           │
       │  GraphQL API │◄──── NEXT_PUBLIC_GRAPHQL_URL ────────────┘
       │ (Port: 4000) │
       └──────────────┘
```

---

## Environment Variable Categories

### 🔐 Infrastructure (Required)
- `DATABASE_URL` - MySQL connection
- `REDIS_URL` - Redis connection
- `NODE_ENV` - Environment (development/production)

### 🌐 Blockchain RPC Endpoints (Required)
- `ETH_MAINNET_RPC_URL` - Ethereum Mainnet
- `ETH_SEPOLIA_RPC_URL` - Sepolia Testnet
- `POLYGON_MAINNET_RPC_URL` - Polygon Mainnet
- `SOLANA_MAINNET_RPC_URL` - Solana Mainnet

### ⚙️ Application Configuration
- `PORT` - API server port (default: 4000)
- `NEXT_PUBLIC_GRAPHQL_URL` - Frontend GraphQL endpoint
- `ENABLE_SOLANA` - Enable Solana indexing

### 🔒 Security (Production)
- `API_SECRET` - JWT authentication secret
- `CORS_ORIGINS` - Allowed origins
- `RATE_LIMIT_RPM` - Rate limiting

### 📊 Performance (Optional)
- `INDEXER_BATCH_SIZE` - Batch processing size
- `INDEXER_POLL_INTERVAL` - Polling interval
- `DATABASE_POOL_SIZE` - Connection pool size

---

## Adding a New Environment Variable

### Step 1: Add to `.env`
```bash
echo 'NEW_VAR="value"' >> .env
```

### Step 2: Add to `.env.example`
```bash
# Add documentation
vim .env.example
```

### Step 3: Use in Code
```typescript
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../../../.env') });

const newVar = process.env.NEW_VAR;
```

### Step 4: Document
Update this file with the new variable's purpose and usage.

---

## Best Practices

### ✅ DO
- Use descriptive variable names
- Provide fallback defaults where appropriate
- Document all variables in `.env.example`
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Load `.env` at the service entry point

### ❌ DON'T
- Commit `.env` to version control
- Hardcode sensitive values
- Use different variable names across services
- Expose secrets to the browser
- Skip documenting new variables

---

## Validation

Check if all required variables are set:

```typescript
const required = [
  'DATABASE_URL',
  'REDIS_URL',
  'ETH_MAINNET_RPC_URL',
  'ETH_SEPOLIA_RPC_URL'
];

required.forEach(key => {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
});
```

---

## Troubleshooting

### Variables Not Loading

**Problem**: Service can't read environment variables

**Solutions**:
1. Check `.env` file exists in root
2. Verify `dotenv.config()` is called early
3. Check the path: `path.join(__dirname, '../../../.env')`
4. Restart the service

### RPC Endpoint Not Working

**Problem**: Blockchain connection fails

**Solutions**:
1. Check RPC URL is correct
2. Verify RPC endpoint is accessible
3. Re-run database seed: `pnpm prisma db seed`
4. Check database has correct RPC URLs

### Frontend Can't Connect to API

**Problem**: CORS or connection errors

**Solutions**:
1. Check `NEXT_PUBLIC_GRAPHQL_URL` is set
2. Verify API is running on specified port
3. Check CORS configuration
4. Rebuild frontend: `pnpm build`

---

## Quick Reference

| Variable | Service | Usage |
|----------|---------|-------|
| `DATABASE_URL` | All | Database connection |
| `REDIS_URL` | Ingestion, Indexer | Queue/Cache |
| `PORT` | Query API | Server port |
| `ETH_*_RPC_URL` | Database Seed | Blockchain RPCs |
| `NEXT_PUBLIC_GRAPHQL_URL` | Frontend | API endpoint |
| `NODE_ENV` | All | Environment |
| `ENABLE_SOLANA` | Database Seed | Feature flag |

---

For more information:
- [Configuration Guide](./CONFIGURATION.md)
- [Architecture Documentation](./ARCHITECTURE.md)

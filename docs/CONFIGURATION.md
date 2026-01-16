# Configuration Guide

## Table of Contents
- [Environment Variables](#environment-variables)
- [Chain Configuration](#chain-configuration)
- [Database Configuration](#database-configuration)
- [RPC Endpoints](#rpc-endpoints)
- [Service Configuration](#service-configuration)
- [Production Setup](#production-setup)

---

## Environment Variables

### Required Variables

Create a `.env` file in the root directory. Use `.env.example` as a template:

```bash
cp .env.example .env
```

### Core Configuration

#### Database
```bash
# MySQL connection string
DATABASE_URL="mysql://indexer_user:indexer_password@localhost:3307/indexer_db"
```

**Format**: `mysql://USER:PASSWORD@HOST:PORT/DATABASE`

**Production Example**:
```bash
DATABASE_URL="mysql://prod_user:secure_password@db.example.com:3306/indexer_prod"
```

#### Redis
```bash
# Redis connection for caching and queues
REDIS_URL="redis://localhost:6380"
```

**With Authentication**:
```bash
REDIS_URL="redis://:password@localhost:6380"
```

**Redis Cluster**:
```bash
REDIS_URL="redis://node1:6379,redis://node2:6379,redis://node3:6379"
```

#### Application
```bash
# Environment
NODE_ENV="development"  # development, production, test

# API Port
PORT=4000

# Frontend GraphQL URL
NEXT_PUBLIC_GRAPHQL_URL="http://localhost:4000/graphql"
```

---

## RPC Endpoints

### Ethereum Mainnet

```bash
ETH_MAINNET_RPC_URL="https://rpc.ankr.com/eth"
```

**Free Public RPCs**:
- Ankr: `https://rpc.ankr.com/eth`
- LlamaRPC: `https://eth.llamarpc.com`
- Cloudflare: `https://cloudflare-eth.com`

**Paid/Authenticated RPCs** (Recommended for Production):
- Alchemy: `https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY`
- Infura: `https://mainnet.infura.io/v3/YOUR_PROJECT_ID`
- QuickNode: `https://YOUR_ENDPOINT.quiknode.pro/YOUR_TOKEN/`

### Sepolia Testnet

```bash
ETH_SEPOLIA_RPC_URL="https://rpc.ankr.com/eth_sepolia"
```

**Options**:
- Ankr: `https://rpc.ankr.com/eth_sepolia`
- DRPC: `https://sepolia.drpc.org`
- Alchemy: `https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY`
- Infura: `https://sepolia.infura.io/v3/YOUR_PROJECT_ID`

### Polygon Mainnet

```bash
POLYGON_MAINNET_RPC_URL="https://polygon-rpc.com"
```

**Options**:
- Official: `https://polygon-rpc.com`
- Ankr: `https://rpc.ankr.com/polygon`
- Alchemy: `https://polygon-mainnet.g.alchemy.com/v2/YOUR_API_KEY`

### Custom Chain

To add a custom EVM-compatible chain:

```bash
# Example: Arbitrum
ARBITRUM_MAINNET_RPC_URL="https://arb1.arbitrum.io/rpc"

# Example: Optimism
OPTIMISM_MAINNET_RPC_URL="https://mainnet.optimism.io"

# Example: Base
BASE_MAINNET_RPC_URL="https://mainnet.base.org"
```

---

## Chain Configuration

### Add a New Chain

1. **Update `.env` with RPC URL**:
```bash
BASE_MAINNET_RPC_URL="https://mainnet.base.org"
```

2. **Update seed script** (`packages/database/prisma/seed.ts`):
```typescript
// Add this block to seed.ts
if (process.env.BASE_MAINNET_RPC_URL) {
    await prisma.chain.upsert({
        where: { chainId: 8453 },
        update: { rpcUrl: process.env.BASE_MAINNET_RPC_URL },
        create: {
            chainId: 8453,
            name: 'Base',
            rpcUrl: process.env.BASE_MAINNET_RPC_URL,
            type: 'EVM'
        },
    });
    console.log(`✓ Base configured with RPC: ${process.env.BASE_MAINNET_RPC_URL}`);
}
```

3. **Update frontend chain selector** (`packages/frontend/app/blocks/page.tsx`):
```tsx
<option value="8453">Base</option>
```

4. **Run database seed**:
```bash
cd packages/database
pnpm prisma db seed
```

5. **Restart services**:
```bash
pnpm dev
```

---

## Database Configuration

### Connection Pool

```bash
# Add to DATABASE_URL
DATABASE_URL="mysql://user:pass@host:3306/db?connection_limit=10"
```

### Enable Query Logging (Development)

```bash
PRISMA_QUERY_LOG=true
```

This will log all SQL queries to console.

### Database Migrations

```bash
# Create new migration
cd packages/database
pnpm prisma migrate dev --name your_migration_name

# Apply migrations in production
pnpm prisma migrate deploy

# Reset database (⚠️ destructive)
pnpm prisma migrate reset
```

---

## Service Configuration

### Ingestion Service

```bash
# Starting block for indexing
ETH_MAINNET_START_BLOCK=0
ETH_SEPOLIA_START_BLOCK=0

# Batch size for processing
INDEXER_BATCH_SIZE=100

# Polling interval (milliseconds)
INDEXER_POLL_INTERVAL=12000
```

### Indexer Worker

```bash
# Number of worker threads
WORKER_THREADS=4

# Processing batch size
WORKER_BATCH_SIZE=50
```

### Reorg Service

```bash
# Enable/disable reorg detection
ENABLE_REORG_DETECTION=true

# Maximum reorg depth to handle
MAX_REORG_DEPTH=20

# Check interval (milliseconds)
REORG_CHECK_INTERVAL=30000
```

---

## Logging Configuration

```bash
# Log level: debug, info, warn, error
LOG_LEVEL="info"

# Enable query logging
ENABLE_QUERY_LOGGING=false

# Log format: json, pretty
LOG_FORMAT="pretty"
```

**Development**:
```bash
LOG_LEVEL="debug"
LOG_FORMAT="pretty"
```

**Production**:
```bash
LOG_LEVEL="info"
LOG_FORMAT="json"
```

---

## Security Configuration

### API Authentication

```bash
# JWT secret (generate a strong random string)
API_SECRET="your-256-bit-secret-here"

# Token expiration
JWT_EXPIRATION="24h"
```

**Generate a secure secret**:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### CORS Configuration

```bash
# Allowed origins (comma-separated)
CORS_ORIGINS="http://localhost:3000,https://yourdomain.com"
```

### Rate Limiting

```bash
# Requests per minute
RATE_LIMIT_RPM=100

# Authenticated user limit
AUTHENTICATED_RATE_LIMIT_RPM=1000
```

---

## Production Setup

### Environment Variables

```bash
# Application
NODE_ENV="production"
PORT=4000

# Database (Use managed service)
DATABASE_URL="mysql://user:pass@prod-db.region.rds.amazonaws.com:3306/indexer_prod"

# Redis (Use managed service)
REDIS_URL="redis://prod-redis.region.cache.amazonaws.com:6379"

# RPC Endpoints (Use authenticated endpoints)
ETH_MAINNET_RPC_URL="https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY"
ETH_SEPOLIA_RPC_URL="https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY"

# Security
API_SECRET="generated-secure-secret-256-bit"
CORS_ORIGINS="https://yourdomain.com"
RATE_LIMIT_RPM=1000

# Logging
LOG_LEVEL="info"
LOG_FORMAT="json"

# Frontend
NEXT_PUBLIC_GRAPHQL_URL="https://api.yourdomain.com/graphql"
```

### Database Optimization

```bash
# Connection pooling
DATABASE_URL="mysql://user:pass@host:3306/db?connection_limit=50&pool_timeout=30"

# Read replicas (if using)
DATABASE_READ_REPLICA_URL="mysql://user:pass@replica.host:3306/db"
```

### Redis Configuration

```bash
# Redis cluster
REDIS_URL="redis://cluster-node-1:6379,redis://cluster-node-2:6379"

# Redis password
REDIS_URL="redis://:your-password@redis-host:6379"

# Key prefix for environment isolation
REDIS_KEY_PREFIX="mci:prod:"
```

---

## Docker Configuration

### Docker Compose Override

Create `docker-compose.override.yml` for local customization:

```yaml
version: '3.8'

services:
  mysql:
    environment:
      MYSQL_ROOT_PASSWORD: custom_password
    ports:
      - "3306:3306"  # Use standard port
  
  redis:
    ports:
      - "6379:6379"  # Use standard port
    command: redis-server --requirepass your_password
```

### Environment-Specific Compose Files

**Development**: `docker-compose.dev.yml`
**Production**: `docker-compose.prod.yml`

```bash
# Use specific compose file
docker-compose -f docker-compose.prod.yml up -d
```

---

## Monitoring & Observability

```bash
# Enable metrics endpoint
ENABLE_METRICS=true
METRICS_PORT=9090

# Sentry (Error tracking)
SENTRY_DSN="https://your-key@sentry.io/project-id"

# DataDog (APM)
DD_API_KEY="your-datadog-api-key"
DD_SERVICE="multi-chain-indexer"
DD_ENV="production"
```

---

## Performance Tuning

### Database

```bash
# Increase pool size for high load
DATABASE_POOL_SIZE=50

# Query timeout (milliseconds)
DATABASE_QUERY_TIMEOUT=30000

# Prisma middleware caching
ENABLE_PRISMA_CACHE=true
```

### Redis

```bash
# Cache TTL (seconds)
CACHE_TTL=300

# Max memory policy
REDIS_MAXMEMORY_POLICY="allkeys-lru"
```

### Indexer

```bash
# Concurrent RPC requests
MAX_CONCURRENT_REQUESTS=10

# Retry configuration
MAX_RETRIES=3
RETRY_DELAY=1000

# Enable parallel processing
ENABLE_PARALLEL_PROCESSING=true
PARALLEL_WORKERS=4
```

---

## Health Checks

```bash
# Health check endpoints
HEALTH_CHECK_INTERVAL=30000
ENABLE_DETAILED_HEALTH_CHECK=true
```

### Health Check Response

```json
{
  "status": "healthy",
  "database": "connected",
  "redis": "connected",
  "uptime": 3600,
  "version": "1.0.0"
}
```

---

## Backup Configuration

```bash
# Automated backups
ENABLE_AUTO_BACKUP=true
BACKUP_INTERVAL="0 2 * * *"  # Daily at 2 AM
BACKUP_RETENTION_DAYS=30

# Backup destination
BACKUP_S3_BUCKET="s3://your-backup-bucket"
```

---

## Example Configurations

### Minimal Development Setup

```bash
DATABASE_URL="mysql://indexer_user:indexer_password@localhost:3307/indexer_db"
REDIS_URL="redis://localhost:6380"
NODE_ENV="development"
ETH_SEPOLIA_RPC_URL="https://rpc.ankr.com/eth_sepolia"
```

### Production Setup

```bash
# Application
NODE_ENV="production"
PORT=4000
LOG_LEVEL="info"
LOG_FORMAT="json"

# Database
DATABASE_URL="mysql://prod_user:secure_pass@prod-db.us-east-1.rds.amazonaws.com:3306/indexer?connection_limit=50"

# Redis
REDIS_URL="redis://:redis_password@prod-redis.cache.amazonaws.com:6379"
REDIS_KEY_PREFIX="mci:prod:"

# RPC
ETH_MAINNET_RPC_URL="https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY"
ETH_SEPOLIA_RPC_URL="https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY"
POLYGON_MAINNET_RPC_URL="https://polygon-mainnet.g.alchemy.com/v2/YOUR_KEY"

# Security
API_SECRET="generated-secure-256-bit-secret-key"
CORS_ORIGINS="https://explorer.yourdomain.com"
RATE_LIMIT_RPM=1000

# Frontend
NEXT_PUBLIC_GRAPHQL_URL="https://api.yourdomain.com/graphql"

# Monitoring
SENTRY_DSN="https://key@sentry.io/project"
ENABLE_METRICS=true
METRICS_PORT=9090

# Performance
INDEXER_BATCH_SIZE=200
MAX_CONCURRENT_REQUESTS=20
ENABLE_PARALLEL_PROCESSING=true
```

---

## Troubleshooting

### Connection Issues

**Problem**: Cannot connect to database
```bash
# Check connection
mysql -h localhost -P 3307 -u indexer_user -p

# Verify environment variable
echo $DATABASE_URL
```

**Problem**: Redis connection timeout
```bash
# Test Redis connection
redis-cli -h localhost -p 6380 ping

# Should return: PONG
```

### RPC Issues

**Problem**: RPC rate limiting
```bash
# Use multiple RPC endpoints
ETH_MAINNET_RPC_URL="https://primary-rpc.com,https://backup-rpc.com"
```

**Problem**: Slow RPC responses
```bash
# Increase timeout
RPC_TIMEOUT=30000

# Enable caching
ENABLE_RPC_CACHE=true
```

---

## Configuration Validation

Create a script to validate configuration:

```bash
# Run validation
pnpm run validate-config
```

**Expected output**:
```
✓ Database connection successful
✓ Redis connection successful  
✓ RPC endpoints accessible
✓ All required environment variables set
✓ Configuration valid
```

---

## Next Steps

1. ✅ Copy `.env.example` to `.env`
2. ✅ Update RPC URLs with your endpoints
3. ✅ Configure database credentials
4. ✅ Run database migrations
5. ✅ Seed initial chain data
6. ✅ Start services
7. ✅ Verify configuration

For more information:
- [Architecture Documentation](./ARCHITECTURE.md)
- [API Documentation](./API.md)
- [Main README](../README.md)

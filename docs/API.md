# Multi-Chain Indexer - API Documentation

## Table of Contents
- [Overview](#overview)
- [GraphQL API](#graphql-api)
- [REST API](#rest-api)
- [Authentication](#authentication)
- [Rate Limiting](#rate-limiting)
- [Error Handling](#error-handling)
- [Examples](#examples)

---

## Overview

The Multi-Chain Indexer provides two API interfaces:

1. **GraphQL API** (Primary) - Flexible query interface at `/graphql`
2. **REST API** (Secondary) - Traditional REST endpoints for specific operations

**Base URL**: `http://localhost:4000` (Development)

**Production URL**: Update with your domain

---

## GraphQL API

### Endpoint

```
POST http://localhost:4000/graphql
```

### GraphQL Playground

Visit `http://localhost:4000/graphql` in your browser for an interactive playground.

---

### Schema Overview

#### Types

##### Chain
```graphql
type Chain {
  chainId: Int!
  name: String!
  type: String!
}
```

##### Block
```graphql
type Block {
  id: String!
  chainId: Int!
  number: String!
  hash: String!
  parentHash: String
  timestamp: String!
  isCanonical: Boolean!
}
```

##### Event
```graphql
type Event {
  id: String!
  chainId: Int!
  blockNumber: String!
  txHash: String!
  eventType: String!
  contractAddress: String
  from: String
  to: String
  amount: String
  timestamp: String!
  status: String
}
```

##### NetworkStats
```graphql
type NetworkStats {
  chainId: Int!
  transactionCount: Int!
  totalEvents: Int!
  latestBlock: String!
  medianGasPrice: String
  tps: Float
}
```

##### TransactionHistory
```graphql
type TransactionHistory {
  date: String!
  count: Int!
}
```

---

### Queries

#### 1. Query Events (Paginated)

Fetch events with filtering and pagination.

**Query**:
```graphql
query EventsPage(
  $limit: Int!
  $offset: Int!
  $chainId: Int
  $type: String
  $status: String
  $search: String
) {
  eventsPage(
    limit: $limit
    offset: $offset
    chainId: $chainId
    type: $type
    status: $status
    search: $search
  ) {
    totalCount
    nodes {
      id
      chainId
      blockNumber
      txHash
      eventType
      contractAddress
      from
      to
      amount
      timestamp
      status
    }
  }
}
```

**Variables**:
```json
{
  "limit": 25,
  "offset": 0,
  "chainId": 1,
  "type": "Transaction",
  "status": "Success",
  "search": "0x..."
}
```

**Response**:
```json
{
  "data": {
    "eventsPage": {
      "totalCount": 1523,
      "nodes": [
        {
          "id": "event_123",
          "chainId": 1,
          "blockNumber": "18500000",
          "txHash": "0xabc...",
          "eventType": "Transaction",
          "contractAddress": null,
          "from": "0x123...",
          "to": "0x456...",
          "amount": "1000000000000000000",
          "timestamp": "2024-01-15T10:30:00Z",
          "status": "Success"
        }
      ]
    }
  }
}
```

---

#### 2. Query Blocks (Paginated)

Fetch blocks with filtering.

**Query**:
```graphql
query BlocksPage(
  $limit: Int!
  $offset: Int!
  $chainId: Int
) {
  blocksPage(
    limit: $limit
    offset: $offset
    chainId: $chainId
  ) {
    totalCount
    nodes {
      id
      chainId
      number
      hash
      parentHash
      timestamp
      isCanonical
    }
  }
}
```

**Variables**:
```json
{
  "limit": 50,
  "offset": 0,
  "chainId": 11155111
}
```

---

#### 3. Query Supported Chains

Get list of all supported blockchain networks.

**Query**:
```graphql
query {
  chains {
    chainId
    name
    type
  }
}
```

**Response**:
```json
{
  "data": {
    "chains": [
      {
        "chainId": 1,
        "name": "Ethereum Mainnet",
        "type": "EVM"
      },
      {
        "chainId": 11155111,
        "name": "Sepolia",
        "type": "EVM"
      },
      {
        "chainId": 137,
        "name": "Polygon",
        "type": "EVM"
      }
    ]
  }
}
```

---

#### 4. Query Network Statistics

Get real-time network statistics for a specific chain.

**Query**:
```graphql
query NetworkStats($chainId: Int!) {
  networkStats(chainId: $chainId) {
    chainId
    transactionCount
    totalEvents
    latestBlock
    medianGasPrice
    tps
  }
}
```

**Variables**:
```json
{
  "chainId": 1
}
```

**Response**:
```json
{
  "data": {
    "networkStats": {
      "chainId": 1,
      "transactionCount": 25430,
      "totalEvents": 89234,
      "latestBlock": "18500123",
      "medianGasPrice": "25000000000",
      "tps": 15.3
    }
  }
}
```

---

#### 5. Query Transaction History

Get historical transaction data for charts.

**Query**:
```graphql
query TransactionHistory($days: Int!, $chainId: Int) {
  transactionHistory(days: $days, chainId: $chainId) {
    date
    count
  }
}
```

**Variables**:
```json
{
  "days": 14,
  "chainId": 1
}
```

**Response**:
```json
{
  "data": {
    "transactionHistory": [
      {
        "date": "2024-01-01",
        "count": 1250
      },
      {
        "date": "2024-01-02",
        "count": 1430
      }
    ]
  }
}
```

---

### Using GraphQL with Apollo Client (JavaScript/TypeScript)

```typescript
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

// Query events
const GET_EVENTS = gql`
  query EventsPage($limit: Int!, $offset: Int!) {
    eventsPage(limit: $limit, offset: $offset) {
      totalCount
      nodes {
        id
        txHash
        eventType
        timestamp
      }
    }
  }
`;

const { data } = await client.query({
  query: GET_EVENTS,
  variables: { limit: 10, offset: 0 },
});

console.log(data.eventsPage);
```

---

### Using GraphQL with cURL

```bash
curl -X POST http://localhost:4000/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "query { chains { chainId name type } }"
  }'
```

With variables:

```bash
curl -X POST http://localhost:4000/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "query EventsPage($limit: Int!, $offset: Int!) { eventsPage(limit: $limit, offset: $offset) { totalCount nodes { id txHash } } }",
    "variables": {
      "limit": 10,
      "offset": 0
    }
  }'
```

---

## REST API

### Health Check

Check API health status.

**Endpoint**: `GET /health`

**Response**:
```json
{
  "status": "ok"
}
```

**Example**:
```bash
curl http://localhost:4000/health
```

---

### Swagger Documentation

Interactive API documentation available at:

```
GET /api-docs
```

Visit `http://localhost:4000/api-docs` in your browser for full REST API documentation.

---

## Authentication

### Development
No authentication required for local development.

### Production (Recommended)

Implement JWT-based authentication:

**Headers**:
```
Authorization: Bearer <your-jwt-token>
```

**Example**:
```bash
curl -X POST http://localhost:4000/graphql \
  -H "Authorization: Bearer eyJhbGc..." \
  -H "Content-Type: application/json" \
  -d '{"query": "{ chains { chainId } }"}'
```

---

## Rate Limiting

### Default Limits (Production)
- **Anonymous users**: 100 requests/minute
- **Authenticated users**: 1000 requests/minute

### Headers
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642345678
```

### Rate Limit Exceeded Response
```json
{
  "errors": [
    {
      "message": "Rate limit exceeded",
      "extensions": {
        "code": "RATE_LIMIT_EXCEEDED",
        "retryAfter": 60
      }
    }
  ]
}
```

---

## Error Handling

### GraphQL Errors

**Format**:
```json
{
  "errors": [
    {
      "message": "Error description",
      "extensions": {
        "code": "ERROR_CODE"
      },
      "path": ["fieldName"],
      "locations": [{ "line": 2, "column": 3 }]
    }
  ],
  "data": null
}
```

### Common Error Codes

| Code | Description |
|------|-------------|
| `UNAUTHENTICATED` | Authentication required |
| `FORBIDDEN` | Insufficient permissions |
| `BAD_USER_INPUT` | Invalid input parameters |
| `INTERNAL_SERVER_ERROR` | Server error |
| `NOT_FOUND` | Resource not found |

---

## Examples

### Example 1: Get Latest Transactions for Ethereum

```graphql
query {
  eventsPage(
    limit: 10
    offset: 0
    chainId: 1
    type: "Transaction"
  ) {
    totalCount
    nodes {
      txHash
      from
      to
      amount
      timestamp
      status
    }
  }
}
```

---

### Example 2: Search for Specific Transaction

```graphql
query {
  eventsPage(
    limit: 1
    offset: 0
    search: "0xabc123..."
  ) {
    nodes {
      txHash
      blockNumber
      eventType
      status
      timestamp
    }
  }
}
```

---

### Example 3: Get Recent Blocks for Sepolia

```graphql
query {
  blocksPage(
    limit: 20
    offset: 0
    chainId: 11155111
  ) {
    totalCount
    nodes {
      number
      hash
      timestamp
    }
  }
}
```

---

### Example 4: Get Transaction Stats for Dashboard

```graphql
query {
  networkStats(chainId: 1) {
    transactionCount
    totalEvents
    latestBlock
    tps
  }
  
  transactionHistory(days: 7, chainId: 1) {
    date
    count
  }
  
  chains {
    chainId
    name
  }
}
```

---

### Example 5: Filter Failed Transactions

```graphql
query {
  eventsPage(
    limit: 25
    offset: 0
    status: "Failed"
    chainId: 1
  ) {
    totalCount
    nodes {
      txHash
      blockNumber
      from
      to
      timestamp
    }
  }
}
```

---

## Frontend Integration Example

### React Component with Apollo Client

```tsx
import { useQuery, gql } from '@apollo/client';

const GET_LATEST_EVENTS = gql`
  query GetLatestEvents($limit: Int!, $offset: Int!) {
    eventsPage(limit: $limit, offset: $offset) {
      totalCount
      nodes {
        id
        txHash
        eventType
        timestamp
      }
    }
  }
`;

function EventsList() {
  const { loading, error, data } = useQuery(GET_LATEST_EVENTS, {
    variables: { limit: 10, offset: 0 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Total Events: {data.eventsPage.totalCount}</h2>
      <ul>
        {data.eventsPage.nodes.map((event) => (
          <li key={event.id}>
            {event.txHash} - {event.eventType}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Best Practices

### 1. Use Pagination
Always use `limit` and `offset` for large datasets:
```graphql
eventsPage(limit: 25, offset: 0)
```

### 2. Request Only Needed Fields
Only query fields you actually need:
```graphql
query {
  eventsPage(limit: 10, offset: 0) {
    nodes {
      txHash
      timestamp
      # Don't request all fields if not needed
    }
  }
}
```

### 3. Use Variables
Use GraphQL variables instead of string concatenation:
```graphql
# Good
query EventsPage($chainId: Int!) {
  eventsPage(chainId: $chainId, limit: 10, offset: 0) { ... }
}

# Bad - Don't build queries with string concatenation
```

### 4. Handle Errors Gracefully
Always check for errors in responses:
```typescript
const { data, error } = await client.query(...);
if (error) {
  console.error('GraphQL error:', error);
  // Handle error appropriately
}
```

### 5. Use Caching
Configure Apollo Client cache for better performance:
```typescript
const client = new ApolloClient({
  uri: '...',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          eventsPage: {
            keyArgs: ['chainId', 'type', 'status'],
          },
        },
      },
    },
  }),
});
```

---

## Testing the API

### Using Postman

1. Create a new POST request to `http://localhost:4000/graphql`
2. Set header: `Content-Type: application/json`
3. In the body (raw JSON):
```json
{
  "query": "query { chains { chainId name } }"
}
```

### Using Insomnia

1. New Request → GraphQL
2. URL: `http://localhost:4000/graphql`
3. Write queries in the query pane
4. Add variables in the variables pane

---

## Support & Feedback

For issues or questions:
- GitHub Issues: [Repository URL]
- Documentation: Check `/docs` folder
- API Playground: `http://localhost:4000/graphql`

---

**Last Updated**: 2024-01-16  
**API Version**: 1.0.0

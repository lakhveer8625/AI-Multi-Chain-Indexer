export const typeDefs = `#graphql
  type Event {
    id: ID!
    chainId: Int!
    blockNumber: String!
    txHash: String!
    logIndex: Int!
    eventType: String!
    contractAddress: String!
    from: String
    to: String
    amount: String
    timestamp: String!
    version: Int
    status: String
    gasUsed: String
    gasPrice: String
    effectiveGasPrice: String
    gasLimit: String
    maxFeePerGas: String
    maxPriorityFeePerGas: String
    input: String
    nonce: Int
    transactionIndex: Int
    txType: Int
  }

  type Block {
    id: ID!
    chainId: Int!
    number: String!
    hash: String!
    parentHash: String!
    timestamp: String!
    isCanonical: Boolean!
    transactionCount: Int
  }

  type NetworkStats {
    chainId: Int!
    transactionCount: Int!
    totalEvents: Int!
    latestBlock: String!
    medianGasPrice: String
    tps: Float
  }

  type Chain {
    id: ID!
    chainId: Int!
    name: String!
    type: String!
  }

  type EventPage {
    nodes: [Event!]!
    totalCount: Int!
  }

  type BlockPage {
    nodes: [Block!]!
    totalCount: Int!
  }

  type TransactionHistory {
    date: String!
    count: Int!
  }

  type ErrorLog {
    id: ID!
    chainId: Int
    errorType: String!
    errorSource: String!
    errorMessage: String!
    stackTrace: String
    context: String
    severity: String!
    isResolved: Boolean!
    retryCount: Int!
    createdAt: String!
    resolvedAt: String
  }

  type ErrorStats {
    total: Int!
    byType: String!
    bySeverity: String!
    criticalCount: Int!
    recentErrors: [ErrorLog!]!
  }

  type Query {
    events(limit: Int, offset: Int, chainId: Int, type: String, status: String, search: String): [Event!]!
    eventsPage(limit: Int, offset: Int, chainId: Int, type: String, status: String, search: String): EventPage!
    event(id: ID!): Event
    blocksPage(limit: Int, offset: Int, chainId: Int): BlockPage!
    block(chainId: Int!, number: String!): Block
    transactionHistory(days: Int, chainId: Int): [TransactionHistory!]!
    networkStats(chainId: Int!): NetworkStats
    chains: [Chain!]!
    errorLogs(limit: Int, offset: Int, severity: String, errorType: String, isResolved: Boolean): [ErrorLog!]!
    errorStats(hours: Int): ErrorStats!
  }
`;

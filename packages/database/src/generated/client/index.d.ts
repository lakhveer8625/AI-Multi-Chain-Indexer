
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Chain
 * 
 */
export type Chain = $Result.DefaultSelection<Prisma.$ChainPayload>
/**
 * Model Block
 * 
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model RawEvent
 * 
 */
export type RawEvent = $Result.DefaultSelection<Prisma.$RawEventPayload>
/**
 * Model IndexedEvent
 * 
 */
export type IndexedEvent = $Result.DefaultSelection<Prisma.$IndexedEventPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model ErrorLog
 * 
 */
export type ErrorLog = $Result.DefaultSelection<Prisma.$ErrorLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chains
 * const chains = await prisma.chain.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Chains
   * const chains = await prisma.chain.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.chain`: Exposes CRUD operations for the **Chain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chains
    * const chains = await prisma.chain.findMany()
    * ```
    */
  get chain(): Prisma.ChainDelegate<ExtArgs>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs>;

  /**
   * `prisma.rawEvent`: Exposes CRUD operations for the **RawEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RawEvents
    * const rawEvents = await prisma.rawEvent.findMany()
    * ```
    */
  get rawEvent(): Prisma.RawEventDelegate<ExtArgs>;

  /**
   * `prisma.indexedEvent`: Exposes CRUD operations for the **IndexedEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndexedEvents
    * const indexedEvents = await prisma.indexedEvent.findMany()
    * ```
    */
  get indexedEvent(): Prisma.IndexedEventDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs>;

  /**
   * `prisma.errorLog`: Exposes CRUD operations for the **ErrorLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ErrorLogs
    * const errorLogs = await prisma.errorLog.findMany()
    * ```
    */
  get errorLog(): Prisma.ErrorLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Chain: 'Chain',
    Block: 'Block',
    Contract: 'Contract',
    RawEvent: 'RawEvent',
    IndexedEvent: 'IndexedEvent',
    User: 'User',
    ApiKey: 'ApiKey',
    ErrorLog: 'ErrorLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "chain" | "block" | "contract" | "rawEvent" | "indexedEvent" | "user" | "apiKey" | "errorLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Chain: {
        payload: Prisma.$ChainPayload<ExtArgs>
        fields: Prisma.ChainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          findFirst: {
            args: Prisma.ChainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          findMany: {
            args: Prisma.ChainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>[]
          }
          create: {
            args: Prisma.ChainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          createMany: {
            args: Prisma.ChainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          update: {
            args: Prisma.ChainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          deleteMany: {
            args: Prisma.ChainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          aggregate: {
            args: Prisma.ChainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChain>
          }
          groupBy: {
            args: Prisma.ChainGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChainGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChainCountArgs<ExtArgs>
            result: $Utils.Optional<ChainCountAggregateOutputType> | number
          }
        }
      }
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      RawEvent: {
        payload: Prisma.$RawEventPayload<ExtArgs>
        fields: Prisma.RawEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RawEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RawEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          findFirst: {
            args: Prisma.RawEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RawEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          findMany: {
            args: Prisma.RawEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>[]
          }
          create: {
            args: Prisma.RawEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          createMany: {
            args: Prisma.RawEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RawEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          update: {
            args: Prisma.RawEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          deleteMany: {
            args: Prisma.RawEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RawEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RawEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          aggregate: {
            args: Prisma.RawEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRawEvent>
          }
          groupBy: {
            args: Prisma.RawEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<RawEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.RawEventCountArgs<ExtArgs>
            result: $Utils.Optional<RawEventCountAggregateOutputType> | number
          }
        }
      }
      IndexedEvent: {
        payload: Prisma.$IndexedEventPayload<ExtArgs>
        fields: Prisma.IndexedEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndexedEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexedEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndexedEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexedEventPayload>
          }
          findFirst: {
            args: Prisma.IndexedEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexedEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndexedEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexedEventPayload>
          }
          findMany: {
            args: Prisma.IndexedEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexedEventPayload>[]
          }
          create: {
            args: Prisma.IndexedEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexedEventPayload>
          }
          createMany: {
            args: Prisma.IndexedEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IndexedEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexedEventPayload>
          }
          update: {
            args: Prisma.IndexedEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexedEventPayload>
          }
          deleteMany: {
            args: Prisma.IndexedEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndexedEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IndexedEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexedEventPayload>
          }
          aggregate: {
            args: Prisma.IndexedEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndexedEvent>
          }
          groupBy: {
            args: Prisma.IndexedEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndexedEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndexedEventCountArgs<ExtArgs>
            result: $Utils.Optional<IndexedEventCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      ErrorLog: {
        payload: Prisma.$ErrorLogPayload<ExtArgs>
        fields: Prisma.ErrorLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ErrorLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ErrorLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          findFirst: {
            args: Prisma.ErrorLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ErrorLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          findMany: {
            args: Prisma.ErrorLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          create: {
            args: Prisma.ErrorLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          createMany: {
            args: Prisma.ErrorLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ErrorLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          update: {
            args: Prisma.ErrorLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          deleteMany: {
            args: Prisma.ErrorLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ErrorLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ErrorLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          aggregate: {
            args: Prisma.ErrorLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateErrorLog>
          }
          groupBy: {
            args: Prisma.ErrorLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ErrorLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ErrorLogCountArgs<ExtArgs>
            result: $Utils.Optional<ErrorLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ChainCountOutputType
   */

  export type ChainCountOutputType = {
    blocks: number
    contracts: number
    indexedEvents: number
    rawEvents: number
  }

  export type ChainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | ChainCountOutputTypeCountBlocksArgs
    contracts?: boolean | ChainCountOutputTypeCountContractsArgs
    indexedEvents?: boolean | ChainCountOutputTypeCountIndexedEventsArgs
    rawEvents?: boolean | ChainCountOutputTypeCountRawEventsArgs
  }

  // Custom InputTypes
  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainCountOutputType
     */
    select?: ChainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountIndexedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexedEventWhereInput
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountRawEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawEventWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    apiKeys: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Chain
   */

  export type AggregateChain = {
    _count: ChainCountAggregateOutputType | null
    _avg: ChainAvgAggregateOutputType | null
    _sum: ChainSumAggregateOutputType | null
    _min: ChainMinAggregateOutputType | null
    _max: ChainMaxAggregateOutputType | null
  }

  export type ChainAvgAggregateOutputType = {
    id: number | null
    chainId: number | null
  }

  export type ChainSumAggregateOutputType = {
    id: number | null
    chainId: number | null
  }

  export type ChainMinAggregateOutputType = {
    id: number | null
    chainId: number | null
    name: string | null
    rpcUrl: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChainMaxAggregateOutputType = {
    id: number | null
    chainId: number | null
    name: string | null
    rpcUrl: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChainCountAggregateOutputType = {
    id: number
    chainId: number
    name: number
    rpcUrl: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChainAvgAggregateInputType = {
    id?: true
    chainId?: true
  }

  export type ChainSumAggregateInputType = {
    id?: true
    chainId?: true
  }

  export type ChainMinAggregateInputType = {
    id?: true
    chainId?: true
    name?: true
    rpcUrl?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChainMaxAggregateInputType = {
    id?: true
    chainId?: true
    name?: true
    rpcUrl?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChainCountAggregateInputType = {
    id?: true
    chainId?: true
    name?: true
    rpcUrl?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chain to aggregate.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chains
    **/
    _count?: true | ChainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChainMaxAggregateInputType
  }

  export type GetChainAggregateType<T extends ChainAggregateArgs> = {
        [P in keyof T & keyof AggregateChain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChain[P]>
      : GetScalarType<T[P], AggregateChain[P]>
  }




  export type ChainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChainWhereInput
    orderBy?: ChainOrderByWithAggregationInput | ChainOrderByWithAggregationInput[]
    by: ChainScalarFieldEnum[] | ChainScalarFieldEnum
    having?: ChainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChainCountAggregateInputType | true
    _avg?: ChainAvgAggregateInputType
    _sum?: ChainSumAggregateInputType
    _min?: ChainMinAggregateInputType
    _max?: ChainMaxAggregateInputType
  }

  export type ChainGroupByOutputType = {
    id: number
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt: Date
    updatedAt: Date
    _count: ChainCountAggregateOutputType | null
    _avg: ChainAvgAggregateOutputType | null
    _sum: ChainSumAggregateOutputType | null
    _min: ChainMinAggregateOutputType | null
    _max: ChainMaxAggregateOutputType | null
  }

  type GetChainGroupByPayload<T extends ChainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChainGroupByOutputType[P]>
            : GetScalarType<T[P], ChainGroupByOutputType[P]>
        }
      >
    >


  export type ChainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chainId?: boolean
    name?: boolean
    rpcUrl?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blocks?: boolean | Chain$blocksArgs<ExtArgs>
    contracts?: boolean | Chain$contractsArgs<ExtArgs>
    indexedEvents?: boolean | Chain$indexedEventsArgs<ExtArgs>
    rawEvents?: boolean | Chain$rawEventsArgs<ExtArgs>
    _count?: boolean | ChainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chain"]>


  export type ChainSelectScalar = {
    id?: boolean
    chainId?: boolean
    name?: boolean
    rpcUrl?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | Chain$blocksArgs<ExtArgs>
    contracts?: boolean | Chain$contractsArgs<ExtArgs>
    indexedEvents?: boolean | Chain$indexedEventsArgs<ExtArgs>
    rawEvents?: boolean | Chain$rawEventsArgs<ExtArgs>
    _count?: boolean | ChainCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chain"
    objects: {
      blocks: Prisma.$BlockPayload<ExtArgs>[]
      contracts: Prisma.$ContractPayload<ExtArgs>[]
      indexedEvents: Prisma.$IndexedEventPayload<ExtArgs>[]
      rawEvents: Prisma.$RawEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chainId: number
      name: string
      rpcUrl: string
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chain"]>
    composites: {}
  }

  type ChainGetPayload<S extends boolean | null | undefined | ChainDefaultArgs> = $Result.GetResult<Prisma.$ChainPayload, S>

  type ChainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChainCountAggregateInputType | true
    }

  export interface ChainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chain'], meta: { name: 'Chain' } }
    /**
     * Find zero or one Chain that matches the filter.
     * @param {ChainFindUniqueArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChainFindUniqueArgs>(args: SelectSubset<T, ChainFindUniqueArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Chain that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChainFindUniqueOrThrowArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChainFindUniqueOrThrowArgs>(args: SelectSubset<T, ChainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Chain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainFindFirstArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChainFindFirstArgs>(args?: SelectSubset<T, ChainFindFirstArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Chain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainFindFirstOrThrowArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChainFindFirstOrThrowArgs>(args?: SelectSubset<T, ChainFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Chains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chains
     * const chains = await prisma.chain.findMany()
     * 
     * // Get first 10 Chains
     * const chains = await prisma.chain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chainWithIdOnly = await prisma.chain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChainFindManyArgs>(args?: SelectSubset<T, ChainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Chain.
     * @param {ChainCreateArgs} args - Arguments to create a Chain.
     * @example
     * // Create one Chain
     * const Chain = await prisma.chain.create({
     *   data: {
     *     // ... data to create a Chain
     *   }
     * })
     * 
     */
    create<T extends ChainCreateArgs>(args: SelectSubset<T, ChainCreateArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Chains.
     * @param {ChainCreateManyArgs} args - Arguments to create many Chains.
     * @example
     * // Create many Chains
     * const chain = await prisma.chain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChainCreateManyArgs>(args?: SelectSubset<T, ChainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chain.
     * @param {ChainDeleteArgs} args - Arguments to delete one Chain.
     * @example
     * // Delete one Chain
     * const Chain = await prisma.chain.delete({
     *   where: {
     *     // ... filter to delete one Chain
     *   }
     * })
     * 
     */
    delete<T extends ChainDeleteArgs>(args: SelectSubset<T, ChainDeleteArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Chain.
     * @param {ChainUpdateArgs} args - Arguments to update one Chain.
     * @example
     * // Update one Chain
     * const chain = await prisma.chain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChainUpdateArgs>(args: SelectSubset<T, ChainUpdateArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Chains.
     * @param {ChainDeleteManyArgs} args - Arguments to filter Chains to delete.
     * @example
     * // Delete a few Chains
     * const { count } = await prisma.chain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChainDeleteManyArgs>(args?: SelectSubset<T, ChainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chains
     * const chain = await prisma.chain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChainUpdateManyArgs>(args: SelectSubset<T, ChainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chain.
     * @param {ChainUpsertArgs} args - Arguments to update or create a Chain.
     * @example
     * // Update or create a Chain
     * const chain = await prisma.chain.upsert({
     *   create: {
     *     // ... data to create a Chain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chain we want to update
     *   }
     * })
     */
    upsert<T extends ChainUpsertArgs>(args: SelectSubset<T, ChainUpsertArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Chains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainCountArgs} args - Arguments to filter Chains to count.
     * @example
     * // Count the number of Chains
     * const count = await prisma.chain.count({
     *   where: {
     *     // ... the filter for the Chains we want to count
     *   }
     * })
    **/
    count<T extends ChainCountArgs>(
      args?: Subset<T, ChainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChainAggregateArgs>(args: Subset<T, ChainAggregateArgs>): Prisma.PrismaPromise<GetChainAggregateType<T>>

    /**
     * Group by Chain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChainGroupByArgs['orderBy'] }
        : { orderBy?: ChainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chain model
   */
  readonly fields: ChainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blocks<T extends Chain$blocksArgs<ExtArgs> = {}>(args?: Subset<T, Chain$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany"> | Null>
    contracts<T extends Chain$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Chain$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany"> | Null>
    indexedEvents<T extends Chain$indexedEventsArgs<ExtArgs> = {}>(args?: Subset<T, Chain$indexedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexedEventPayload<ExtArgs>, T, "findMany"> | Null>
    rawEvents<T extends Chain$rawEventsArgs<ExtArgs> = {}>(args?: Subset<T, Chain$rawEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chain model
   */ 
  interface ChainFieldRefs {
    readonly id: FieldRef<"Chain", 'Int'>
    readonly chainId: FieldRef<"Chain", 'Int'>
    readonly name: FieldRef<"Chain", 'String'>
    readonly rpcUrl: FieldRef<"Chain", 'String'>
    readonly type: FieldRef<"Chain", 'String'>
    readonly createdAt: FieldRef<"Chain", 'DateTime'>
    readonly updatedAt: FieldRef<"Chain", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chain findUnique
   */
  export type ChainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain findUniqueOrThrow
   */
  export type ChainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain findFirst
   */
  export type ChainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chains.
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chains.
     */
    distinct?: ChainScalarFieldEnum | ChainScalarFieldEnum[]
  }

  /**
   * Chain findFirstOrThrow
   */
  export type ChainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chains.
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chains.
     */
    distinct?: ChainScalarFieldEnum | ChainScalarFieldEnum[]
  }

  /**
   * Chain findMany
   */
  export type ChainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chains to fetch.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chains.
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    distinct?: ChainScalarFieldEnum | ChainScalarFieldEnum[]
  }

  /**
   * Chain create
   */
  export type ChainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * The data needed to create a Chain.
     */
    data: XOR<ChainCreateInput, ChainUncheckedCreateInput>
  }

  /**
   * Chain createMany
   */
  export type ChainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chains.
     */
    data: ChainCreateManyInput | ChainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chain update
   */
  export type ChainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * The data needed to update a Chain.
     */
    data: XOR<ChainUpdateInput, ChainUncheckedUpdateInput>
    /**
     * Choose, which Chain to update.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain updateMany
   */
  export type ChainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chains.
     */
    data: XOR<ChainUpdateManyMutationInput, ChainUncheckedUpdateManyInput>
    /**
     * Filter which Chains to update
     */
    where?: ChainWhereInput
  }

  /**
   * Chain upsert
   */
  export type ChainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * The filter to search for the Chain to update in case it exists.
     */
    where: ChainWhereUniqueInput
    /**
     * In case the Chain found by the `where` argument doesn't exist, create a new Chain with this data.
     */
    create: XOR<ChainCreateInput, ChainUncheckedCreateInput>
    /**
     * In case the Chain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChainUpdateInput, ChainUncheckedUpdateInput>
  }

  /**
   * Chain delete
   */
  export type ChainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter which Chain to delete.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain deleteMany
   */
  export type ChainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chains to delete
     */
    where?: ChainWhereInput
  }

  /**
   * Chain.blocks
   */
  export type Chain$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    cursor?: BlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Chain.contracts
   */
  export type Chain$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Chain.indexedEvents
   */
  export type Chain$indexedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexedEvent
     */
    select?: IndexedEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexedEventInclude<ExtArgs> | null
    where?: IndexedEventWhereInput
    orderBy?: IndexedEventOrderByWithRelationInput | IndexedEventOrderByWithRelationInput[]
    cursor?: IndexedEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndexedEventScalarFieldEnum | IndexedEventScalarFieldEnum[]
  }

  /**
   * Chain.rawEvents
   */
  export type Chain$rawEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    where?: RawEventWhereInput
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    cursor?: RawEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RawEventScalarFieldEnum | RawEventScalarFieldEnum[]
  }

  /**
   * Chain without action
   */
  export type ChainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
  }


  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockAvgAggregateOutputType = {
    id: number | null
    chainId: number | null
    number: number | null
  }

  export type BlockSumAggregateOutputType = {
    id: number | null
    chainId: number | null
    number: bigint | null
  }

  export type BlockMinAggregateOutputType = {
    id: number | null
    chainId: number | null
    number: bigint | null
    hash: string | null
    parentHash: string | null
    timestamp: Date | null
    isCanonical: boolean | null
    createdAt: Date | null
  }

  export type BlockMaxAggregateOutputType = {
    id: number | null
    chainId: number | null
    number: bigint | null
    hash: string | null
    parentHash: string | null
    timestamp: Date | null
    isCanonical: boolean | null
    createdAt: Date | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    chainId: number
    number: number
    hash: number
    parentHash: number
    timestamp: number
    isCanonical: number
    createdAt: number
    _all: number
  }


  export type BlockAvgAggregateInputType = {
    id?: true
    chainId?: true
    number?: true
  }

  export type BlockSumAggregateInputType = {
    id?: true
    chainId?: true
    number?: true
  }

  export type BlockMinAggregateInputType = {
    id?: true
    chainId?: true
    number?: true
    hash?: true
    parentHash?: true
    timestamp?: true
    isCanonical?: true
    createdAt?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    chainId?: true
    number?: true
    hash?: true
    parentHash?: true
    timestamp?: true
    isCanonical?: true
    createdAt?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    chainId?: true
    number?: true
    hash?: true
    parentHash?: true
    timestamp?: true
    isCanonical?: true
    createdAt?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _avg?: BlockAvgAggregateInputType
    _sum?: BlockSumAggregateInputType
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: number
    chainId: number
    number: bigint
    hash: string
    parentHash: string
    timestamp: Date
    isCanonical: boolean
    createdAt: Date
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chainId?: boolean
    number?: boolean
    hash?: boolean
    parentHash?: boolean
    timestamp?: boolean
    isCanonical?: boolean
    createdAt?: boolean
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>


  export type BlockSelectScalar = {
    id?: boolean
    chainId?: boolean
    number?: boolean
    hash?: boolean
    parentHash?: boolean
    timestamp?: boolean
    isCanonical?: boolean
    createdAt?: boolean
  }

  export type BlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }

  export type $BlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {
      chain: Prisma.$ChainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chainId: number
      number: bigint
      hash: string
      parentHash: string
      timestamp: Date
      isCanonical: boolean
      createdAt: Date
    }, ExtArgs["result"]["block"]>
    composites: {}
  }

  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockFindUniqueArgs>(args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockFindFirstArgs>(args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockFindManyArgs>(args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
     */
    create<T extends BlockCreateArgs>(args: SelectSubset<T, BlockCreateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Blocks.
     * @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockCreateManyArgs>(args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
     */
    delete<T extends BlockDeleteArgs>(args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockUpdateArgs>(args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockDeleteManyArgs>(args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockUpdateManyArgs>(args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
     */
    upsert<T extends BlockUpsertArgs>(args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chain<T extends ChainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainDefaultArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Block model
   */ 
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", 'Int'>
    readonly chainId: FieldRef<"Block", 'Int'>
    readonly number: FieldRef<"Block", 'BigInt'>
    readonly hash: FieldRef<"Block", 'String'>
    readonly parentHash: FieldRef<"Block", 'String'>
    readonly timestamp: FieldRef<"Block", 'DateTime'>
    readonly isCanonical: FieldRef<"Block", 'Boolean'>
    readonly createdAt: FieldRef<"Block", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }

  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
  }

  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }

  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
  }

  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    id: number | null
    chainId: number | null
  }

  export type ContractSumAggregateOutputType = {
    id: number | null
    chainId: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: number | null
    chainId: number | null
    address: string | null
    type: string | null
    createdAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: number | null
    chainId: number | null
    address: string | null
    type: string | null
    createdAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    chainId: number
    address: number
    type: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    id?: true
    chainId?: true
  }

  export type ContractSumAggregateInputType = {
    id?: true
    chainId?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    chainId?: true
    address?: true
    type?: true
    createdAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    chainId?: true
    address?: true
    type?: true
    createdAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    chainId?: true
    address?: true
    type?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: number
    chainId: number
    address: string
    type: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chainId?: boolean
    address?: boolean
    type?: boolean
    metadata?: boolean
    createdAt?: boolean
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>


  export type ContractSelectScalar = {
    id?: boolean
    chainId?: boolean
    address?: boolean
    type?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      chain: Prisma.$ChainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chainId: number
      address: string
      type: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chain<T extends ChainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainDefaultArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contract model
   */ 
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'Int'>
    readonly chainId: FieldRef<"Contract", 'Int'>
    readonly address: FieldRef<"Contract", 'String'>
    readonly type: FieldRef<"Contract", 'String'>
    readonly metadata: FieldRef<"Contract", 'Json'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model RawEvent
   */

  export type AggregateRawEvent = {
    _count: RawEventCountAggregateOutputType | null
    _avg: RawEventAvgAggregateOutputType | null
    _sum: RawEventSumAggregateOutputType | null
    _min: RawEventMinAggregateOutputType | null
    _max: RawEventMaxAggregateOutputType | null
  }

  export type RawEventAvgAggregateOutputType = {
    id: number | null
    chainId: number | null
    blockNumber: number | null
    logIndex: number | null
  }

  export type RawEventSumAggregateOutputType = {
    id: bigint | null
    chainId: number | null
    blockNumber: bigint | null
    logIndex: number | null
  }

  export type RawEventMinAggregateOutputType = {
    id: bigint | null
    chainId: number | null
    blockNumber: bigint | null
    txHash: string | null
    logIndex: number | null
    eventSignature: string | null
    createdAt: Date | null
  }

  export type RawEventMaxAggregateOutputType = {
    id: bigint | null
    chainId: number | null
    blockNumber: bigint | null
    txHash: string | null
    logIndex: number | null
    eventSignature: string | null
    createdAt: Date | null
  }

  export type RawEventCountAggregateOutputType = {
    id: number
    chainId: number
    blockNumber: number
    txHash: number
    logIndex: number
    eventSignature: number
    data: number
    createdAt: number
    _all: number
  }


  export type RawEventAvgAggregateInputType = {
    id?: true
    chainId?: true
    blockNumber?: true
    logIndex?: true
  }

  export type RawEventSumAggregateInputType = {
    id?: true
    chainId?: true
    blockNumber?: true
    logIndex?: true
  }

  export type RawEventMinAggregateInputType = {
    id?: true
    chainId?: true
    blockNumber?: true
    txHash?: true
    logIndex?: true
    eventSignature?: true
    createdAt?: true
  }

  export type RawEventMaxAggregateInputType = {
    id?: true
    chainId?: true
    blockNumber?: true
    txHash?: true
    logIndex?: true
    eventSignature?: true
    createdAt?: true
  }

  export type RawEventCountAggregateInputType = {
    id?: true
    chainId?: true
    blockNumber?: true
    txHash?: true
    logIndex?: true
    eventSignature?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type RawEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawEvent to aggregate.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RawEvents
    **/
    _count?: true | RawEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RawEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RawEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RawEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RawEventMaxAggregateInputType
  }

  export type GetRawEventAggregateType<T extends RawEventAggregateArgs> = {
        [P in keyof T & keyof AggregateRawEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRawEvent[P]>
      : GetScalarType<T[P], AggregateRawEvent[P]>
  }




  export type RawEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawEventWhereInput
    orderBy?: RawEventOrderByWithAggregationInput | RawEventOrderByWithAggregationInput[]
    by: RawEventScalarFieldEnum[] | RawEventScalarFieldEnum
    having?: RawEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RawEventCountAggregateInputType | true
    _avg?: RawEventAvgAggregateInputType
    _sum?: RawEventSumAggregateInputType
    _min?: RawEventMinAggregateInputType
    _max?: RawEventMaxAggregateInputType
  }

  export type RawEventGroupByOutputType = {
    id: bigint
    chainId: number
    blockNumber: bigint
    txHash: string
    logIndex: number
    eventSignature: string | null
    data: JsonValue
    createdAt: Date
    _count: RawEventCountAggregateOutputType | null
    _avg: RawEventAvgAggregateOutputType | null
    _sum: RawEventSumAggregateOutputType | null
    _min: RawEventMinAggregateOutputType | null
    _max: RawEventMaxAggregateOutputType | null
  }

  type GetRawEventGroupByPayload<T extends RawEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RawEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RawEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RawEventGroupByOutputType[P]>
            : GetScalarType<T[P], RawEventGroupByOutputType[P]>
        }
      >
    >


  export type RawEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chainId?: boolean
    blockNumber?: boolean
    txHash?: boolean
    logIndex?: boolean
    eventSignature?: boolean
    data?: boolean
    createdAt?: boolean
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawEvent"]>


  export type RawEventSelectScalar = {
    id?: boolean
    chainId?: boolean
    blockNumber?: boolean
    txHash?: boolean
    logIndex?: boolean
    eventSignature?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type RawEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }

  export type $RawEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RawEvent"
    objects: {
      chain: Prisma.$ChainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      chainId: number
      blockNumber: bigint
      txHash: string
      logIndex: number
      eventSignature: string | null
      data: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["rawEvent"]>
    composites: {}
  }

  type RawEventGetPayload<S extends boolean | null | undefined | RawEventDefaultArgs> = $Result.GetResult<Prisma.$RawEventPayload, S>

  type RawEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RawEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RawEventCountAggregateInputType | true
    }

  export interface RawEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RawEvent'], meta: { name: 'RawEvent' } }
    /**
     * Find zero or one RawEvent that matches the filter.
     * @param {RawEventFindUniqueArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RawEventFindUniqueArgs>(args: SelectSubset<T, RawEventFindUniqueArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RawEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RawEventFindUniqueOrThrowArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RawEventFindUniqueOrThrowArgs>(args: SelectSubset<T, RawEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RawEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventFindFirstArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RawEventFindFirstArgs>(args?: SelectSubset<T, RawEventFindFirstArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RawEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventFindFirstOrThrowArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RawEventFindFirstOrThrowArgs>(args?: SelectSubset<T, RawEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RawEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RawEvents
     * const rawEvents = await prisma.rawEvent.findMany()
     * 
     * // Get first 10 RawEvents
     * const rawEvents = await prisma.rawEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rawEventWithIdOnly = await prisma.rawEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RawEventFindManyArgs>(args?: SelectSubset<T, RawEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RawEvent.
     * @param {RawEventCreateArgs} args - Arguments to create a RawEvent.
     * @example
     * // Create one RawEvent
     * const RawEvent = await prisma.rawEvent.create({
     *   data: {
     *     // ... data to create a RawEvent
     *   }
     * })
     * 
     */
    create<T extends RawEventCreateArgs>(args: SelectSubset<T, RawEventCreateArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RawEvents.
     * @param {RawEventCreateManyArgs} args - Arguments to create many RawEvents.
     * @example
     * // Create many RawEvents
     * const rawEvent = await prisma.rawEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RawEventCreateManyArgs>(args?: SelectSubset<T, RawEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RawEvent.
     * @param {RawEventDeleteArgs} args - Arguments to delete one RawEvent.
     * @example
     * // Delete one RawEvent
     * const RawEvent = await prisma.rawEvent.delete({
     *   where: {
     *     // ... filter to delete one RawEvent
     *   }
     * })
     * 
     */
    delete<T extends RawEventDeleteArgs>(args: SelectSubset<T, RawEventDeleteArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RawEvent.
     * @param {RawEventUpdateArgs} args - Arguments to update one RawEvent.
     * @example
     * // Update one RawEvent
     * const rawEvent = await prisma.rawEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RawEventUpdateArgs>(args: SelectSubset<T, RawEventUpdateArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RawEvents.
     * @param {RawEventDeleteManyArgs} args - Arguments to filter RawEvents to delete.
     * @example
     * // Delete a few RawEvents
     * const { count } = await prisma.rawEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RawEventDeleteManyArgs>(args?: SelectSubset<T, RawEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RawEvents
     * const rawEvent = await prisma.rawEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RawEventUpdateManyArgs>(args: SelectSubset<T, RawEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RawEvent.
     * @param {RawEventUpsertArgs} args - Arguments to update or create a RawEvent.
     * @example
     * // Update or create a RawEvent
     * const rawEvent = await prisma.rawEvent.upsert({
     *   create: {
     *     // ... data to create a RawEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RawEvent we want to update
     *   }
     * })
     */
    upsert<T extends RawEventUpsertArgs>(args: SelectSubset<T, RawEventUpsertArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RawEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventCountArgs} args - Arguments to filter RawEvents to count.
     * @example
     * // Count the number of RawEvents
     * const count = await prisma.rawEvent.count({
     *   where: {
     *     // ... the filter for the RawEvents we want to count
     *   }
     * })
    **/
    count<T extends RawEventCountArgs>(
      args?: Subset<T, RawEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RawEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RawEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RawEventAggregateArgs>(args: Subset<T, RawEventAggregateArgs>): Prisma.PrismaPromise<GetRawEventAggregateType<T>>

    /**
     * Group by RawEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RawEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RawEventGroupByArgs['orderBy'] }
        : { orderBy?: RawEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RawEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRawEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RawEvent model
   */
  readonly fields: RawEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RawEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RawEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chain<T extends ChainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainDefaultArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RawEvent model
   */ 
  interface RawEventFieldRefs {
    readonly id: FieldRef<"RawEvent", 'BigInt'>
    readonly chainId: FieldRef<"RawEvent", 'Int'>
    readonly blockNumber: FieldRef<"RawEvent", 'BigInt'>
    readonly txHash: FieldRef<"RawEvent", 'String'>
    readonly logIndex: FieldRef<"RawEvent", 'Int'>
    readonly eventSignature: FieldRef<"RawEvent", 'String'>
    readonly data: FieldRef<"RawEvent", 'Json'>
    readonly createdAt: FieldRef<"RawEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RawEvent findUnique
   */
  export type RawEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent findUniqueOrThrow
   */
  export type RawEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent findFirst
   */
  export type RawEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawEvents.
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawEvents.
     */
    distinct?: RawEventScalarFieldEnum | RawEventScalarFieldEnum[]
  }

  /**
   * RawEvent findFirstOrThrow
   */
  export type RawEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawEvents.
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawEvents.
     */
    distinct?: RawEventScalarFieldEnum | RawEventScalarFieldEnum[]
  }

  /**
   * RawEvent findMany
   */
  export type RawEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter, which RawEvents to fetch.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RawEvents.
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    distinct?: RawEventScalarFieldEnum | RawEventScalarFieldEnum[]
  }

  /**
   * RawEvent create
   */
  export type RawEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * The data needed to create a RawEvent.
     */
    data: XOR<RawEventCreateInput, RawEventUncheckedCreateInput>
  }

  /**
   * RawEvent createMany
   */
  export type RawEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RawEvents.
     */
    data: RawEventCreateManyInput | RawEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RawEvent update
   */
  export type RawEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * The data needed to update a RawEvent.
     */
    data: XOR<RawEventUpdateInput, RawEventUncheckedUpdateInput>
    /**
     * Choose, which RawEvent to update.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent updateMany
   */
  export type RawEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RawEvents.
     */
    data: XOR<RawEventUpdateManyMutationInput, RawEventUncheckedUpdateManyInput>
    /**
     * Filter which RawEvents to update
     */
    where?: RawEventWhereInput
  }

  /**
   * RawEvent upsert
   */
  export type RawEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * The filter to search for the RawEvent to update in case it exists.
     */
    where: RawEventWhereUniqueInput
    /**
     * In case the RawEvent found by the `where` argument doesn't exist, create a new RawEvent with this data.
     */
    create: XOR<RawEventCreateInput, RawEventUncheckedCreateInput>
    /**
     * In case the RawEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RawEventUpdateInput, RawEventUncheckedUpdateInput>
  }

  /**
   * RawEvent delete
   */
  export type RawEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
    /**
     * Filter which RawEvent to delete.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent deleteMany
   */
  export type RawEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawEvents to delete
     */
    where?: RawEventWhereInput
  }

  /**
   * RawEvent without action
   */
  export type RawEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawEventInclude<ExtArgs> | null
  }


  /**
   * Model IndexedEvent
   */

  export type AggregateIndexedEvent = {
    _count: IndexedEventCountAggregateOutputType | null
    _avg: IndexedEventAvgAggregateOutputType | null
    _sum: IndexedEventSumAggregateOutputType | null
    _min: IndexedEventMinAggregateOutputType | null
    _max: IndexedEventMaxAggregateOutputType | null
  }

  export type IndexedEventAvgAggregateOutputType = {
    id: number | null
    chainId: number | null
    blockNumber: number | null
    logIndex: number | null
    version: number | null
    nonce: number | null
    transactionIndex: number | null
    txType: number | null
  }

  export type IndexedEventSumAggregateOutputType = {
    id: bigint | null
    chainId: number | null
    blockNumber: bigint | null
    logIndex: number | null
    version: number | null
    nonce: number | null
    transactionIndex: number | null
    txType: number | null
  }

  export type IndexedEventMinAggregateOutputType = {
    id: bigint | null
    chainId: number | null
    blockNumber: bigint | null
    txHash: string | null
    logIndex: number | null
    eventType: string | null
    contractAddress: string | null
    from: string | null
    to: string | null
    value: string | null
    tokenId: string | null
    amount: string | null
    timestamp: Date | null
    isCanonical: boolean | null
    version: number | null
    createdAt: Date | null
    effectiveGasPrice: string | null
    gasPrice: string | null
    gasUsed: string | null
    gasLimit: string | null
    input: string | null
    maxFeePerGas: string | null
    maxPriorityFeePerGas: string | null
    nonce: number | null
    transactionIndex: number | null
    txType: number | null
  }

  export type IndexedEventMaxAggregateOutputType = {
    id: bigint | null
    chainId: number | null
    blockNumber: bigint | null
    txHash: string | null
    logIndex: number | null
    eventType: string | null
    contractAddress: string | null
    from: string | null
    to: string | null
    value: string | null
    tokenId: string | null
    amount: string | null
    timestamp: Date | null
    isCanonical: boolean | null
    version: number | null
    createdAt: Date | null
    effectiveGasPrice: string | null
    gasPrice: string | null
    gasUsed: string | null
    gasLimit: string | null
    input: string | null
    maxFeePerGas: string | null
    maxPriorityFeePerGas: string | null
    nonce: number | null
    transactionIndex: number | null
    txType: number | null
  }

  export type IndexedEventCountAggregateOutputType = {
    id: number
    chainId: number
    blockNumber: number
    txHash: number
    logIndex: number
    eventType: number
    contractAddress: number
    from: number
    to: number
    value: number
    tokenId: number
    amount: number
    metadata: number
    timestamp: number
    isCanonical: number
    version: number
    createdAt: number
    effectiveGasPrice: number
    gasPrice: number
    gasUsed: number
    gasLimit: number
    input: number
    maxFeePerGas: number
    maxPriorityFeePerGas: number
    nonce: number
    transactionIndex: number
    txType: number
    _all: number
  }


  export type IndexedEventAvgAggregateInputType = {
    id?: true
    chainId?: true
    blockNumber?: true
    logIndex?: true
    version?: true
    nonce?: true
    transactionIndex?: true
    txType?: true
  }

  export type IndexedEventSumAggregateInputType = {
    id?: true
    chainId?: true
    blockNumber?: true
    logIndex?: true
    version?: true
    nonce?: true
    transactionIndex?: true
    txType?: true
  }

  export type IndexedEventMinAggregateInputType = {
    id?: true
    chainId?: true
    blockNumber?: true
    txHash?: true
    logIndex?: true
    eventType?: true
    contractAddress?: true
    from?: true
    to?: true
    value?: true
    tokenId?: true
    amount?: true
    timestamp?: true
    isCanonical?: true
    version?: true
    createdAt?: true
    effectiveGasPrice?: true
    gasPrice?: true
    gasUsed?: true
    gasLimit?: true
    input?: true
    maxFeePerGas?: true
    maxPriorityFeePerGas?: true
    nonce?: true
    transactionIndex?: true
    txType?: true
  }

  export type IndexedEventMaxAggregateInputType = {
    id?: true
    chainId?: true
    blockNumber?: true
    txHash?: true
    logIndex?: true
    eventType?: true
    contractAddress?: true
    from?: true
    to?: true
    value?: true
    tokenId?: true
    amount?: true
    timestamp?: true
    isCanonical?: true
    version?: true
    createdAt?: true
    effectiveGasPrice?: true
    gasPrice?: true
    gasUsed?: true
    gasLimit?: true
    input?: true
    maxFeePerGas?: true
    maxPriorityFeePerGas?: true
    nonce?: true
    transactionIndex?: true
    txType?: true
  }

  export type IndexedEventCountAggregateInputType = {
    id?: true
    chainId?: true
    blockNumber?: true
    txHash?: true
    logIndex?: true
    eventType?: true
    contractAddress?: true
    from?: true
    to?: true
    value?: true
    tokenId?: true
    amount?: true
    metadata?: true
    timestamp?: true
    isCanonical?: true
    version?: true
    createdAt?: true
    effectiveGasPrice?: true
    gasPrice?: true
    gasUsed?: true
    gasLimit?: true
    input?: true
    maxFeePerGas?: true
    maxPriorityFeePerGas?: true
    nonce?: true
    transactionIndex?: true
    txType?: true
    _all?: true
  }

  export type IndexedEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexedEvent to aggregate.
     */
    where?: IndexedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexedEvents to fetch.
     */
    orderBy?: IndexedEventOrderByWithRelationInput | IndexedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndexedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndexedEvents
    **/
    _count?: true | IndexedEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndexedEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndexedEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndexedEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndexedEventMaxAggregateInputType
  }

  export type GetIndexedEventAggregateType<T extends IndexedEventAggregateArgs> = {
        [P in keyof T & keyof AggregateIndexedEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndexedEvent[P]>
      : GetScalarType<T[P], AggregateIndexedEvent[P]>
  }




  export type IndexedEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexedEventWhereInput
    orderBy?: IndexedEventOrderByWithAggregationInput | IndexedEventOrderByWithAggregationInput[]
    by: IndexedEventScalarFieldEnum[] | IndexedEventScalarFieldEnum
    having?: IndexedEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndexedEventCountAggregateInputType | true
    _avg?: IndexedEventAvgAggregateInputType
    _sum?: IndexedEventSumAggregateInputType
    _min?: IndexedEventMinAggregateInputType
    _max?: IndexedEventMaxAggregateInputType
  }

  export type IndexedEventGroupByOutputType = {
    id: bigint
    chainId: number
    blockNumber: bigint
    txHash: string
    logIndex: number
    eventType: string
    contractAddress: string
    from: string | null
    to: string | null
    value: string | null
    tokenId: string | null
    amount: string | null
    metadata: JsonValue | null
    timestamp: Date
    isCanonical: boolean
    version: number
    createdAt: Date
    effectiveGasPrice: string | null
    gasPrice: string | null
    gasUsed: string | null
    gasLimit: string | null
    input: string | null
    maxFeePerGas: string | null
    maxPriorityFeePerGas: string | null
    nonce: number | null
    transactionIndex: number | null
    txType: number | null
    _count: IndexedEventCountAggregateOutputType | null
    _avg: IndexedEventAvgAggregateOutputType | null
    _sum: IndexedEventSumAggregateOutputType | null
    _min: IndexedEventMinAggregateOutputType | null
    _max: IndexedEventMaxAggregateOutputType | null
  }

  type GetIndexedEventGroupByPayload<T extends IndexedEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndexedEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndexedEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndexedEventGroupByOutputType[P]>
            : GetScalarType<T[P], IndexedEventGroupByOutputType[P]>
        }
      >
    >


  export type IndexedEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chainId?: boolean
    blockNumber?: boolean
    txHash?: boolean
    logIndex?: boolean
    eventType?: boolean
    contractAddress?: boolean
    from?: boolean
    to?: boolean
    value?: boolean
    tokenId?: boolean
    amount?: boolean
    metadata?: boolean
    timestamp?: boolean
    isCanonical?: boolean
    version?: boolean
    createdAt?: boolean
    effectiveGasPrice?: boolean
    gasPrice?: boolean
    gasUsed?: boolean
    gasLimit?: boolean
    input?: boolean
    maxFeePerGas?: boolean
    maxPriorityFeePerGas?: boolean
    nonce?: boolean
    transactionIndex?: boolean
    txType?: boolean
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indexedEvent"]>


  export type IndexedEventSelectScalar = {
    id?: boolean
    chainId?: boolean
    blockNumber?: boolean
    txHash?: boolean
    logIndex?: boolean
    eventType?: boolean
    contractAddress?: boolean
    from?: boolean
    to?: boolean
    value?: boolean
    tokenId?: boolean
    amount?: boolean
    metadata?: boolean
    timestamp?: boolean
    isCanonical?: boolean
    version?: boolean
    createdAt?: boolean
    effectiveGasPrice?: boolean
    gasPrice?: boolean
    gasUsed?: boolean
    gasLimit?: boolean
    input?: boolean
    maxFeePerGas?: boolean
    maxPriorityFeePerGas?: boolean
    nonce?: boolean
    transactionIndex?: boolean
    txType?: boolean
  }

  export type IndexedEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }

  export type $IndexedEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndexedEvent"
    objects: {
      chain: Prisma.$ChainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      chainId: number
      blockNumber: bigint
      txHash: string
      logIndex: number
      eventType: string
      contractAddress: string
      from: string | null
      to: string | null
      value: string | null
      tokenId: string | null
      amount: string | null
      metadata: Prisma.JsonValue | null
      timestamp: Date
      isCanonical: boolean
      version: number
      createdAt: Date
      effectiveGasPrice: string | null
      gasPrice: string | null
      gasUsed: string | null
      gasLimit: string | null
      input: string | null
      maxFeePerGas: string | null
      maxPriorityFeePerGas: string | null
      nonce: number | null
      transactionIndex: number | null
      txType: number | null
    }, ExtArgs["result"]["indexedEvent"]>
    composites: {}
  }

  type IndexedEventGetPayload<S extends boolean | null | undefined | IndexedEventDefaultArgs> = $Result.GetResult<Prisma.$IndexedEventPayload, S>

  type IndexedEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IndexedEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IndexedEventCountAggregateInputType | true
    }

  export interface IndexedEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndexedEvent'], meta: { name: 'IndexedEvent' } }
    /**
     * Find zero or one IndexedEvent that matches the filter.
     * @param {IndexedEventFindUniqueArgs} args - Arguments to find a IndexedEvent
     * @example
     * // Get one IndexedEvent
     * const indexedEvent = await prisma.indexedEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndexedEventFindUniqueArgs>(args: SelectSubset<T, IndexedEventFindUniqueArgs<ExtArgs>>): Prisma__IndexedEventClient<$Result.GetResult<Prisma.$IndexedEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IndexedEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IndexedEventFindUniqueOrThrowArgs} args - Arguments to find a IndexedEvent
     * @example
     * // Get one IndexedEvent
     * const indexedEvent = await prisma.indexedEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndexedEventFindUniqueOrThrowArgs>(args: SelectSubset<T, IndexedEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndexedEventClient<$Result.GetResult<Prisma.$IndexedEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IndexedEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexedEventFindFirstArgs} args - Arguments to find a IndexedEvent
     * @example
     * // Get one IndexedEvent
     * const indexedEvent = await prisma.indexedEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndexedEventFindFirstArgs>(args?: SelectSubset<T, IndexedEventFindFirstArgs<ExtArgs>>): Prisma__IndexedEventClient<$Result.GetResult<Prisma.$IndexedEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IndexedEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexedEventFindFirstOrThrowArgs} args - Arguments to find a IndexedEvent
     * @example
     * // Get one IndexedEvent
     * const indexedEvent = await prisma.indexedEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndexedEventFindFirstOrThrowArgs>(args?: SelectSubset<T, IndexedEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndexedEventClient<$Result.GetResult<Prisma.$IndexedEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IndexedEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexedEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndexedEvents
     * const indexedEvents = await prisma.indexedEvent.findMany()
     * 
     * // Get first 10 IndexedEvents
     * const indexedEvents = await prisma.indexedEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indexedEventWithIdOnly = await prisma.indexedEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndexedEventFindManyArgs>(args?: SelectSubset<T, IndexedEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexedEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IndexedEvent.
     * @param {IndexedEventCreateArgs} args - Arguments to create a IndexedEvent.
     * @example
     * // Create one IndexedEvent
     * const IndexedEvent = await prisma.indexedEvent.create({
     *   data: {
     *     // ... data to create a IndexedEvent
     *   }
     * })
     * 
     */
    create<T extends IndexedEventCreateArgs>(args: SelectSubset<T, IndexedEventCreateArgs<ExtArgs>>): Prisma__IndexedEventClient<$Result.GetResult<Prisma.$IndexedEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IndexedEvents.
     * @param {IndexedEventCreateManyArgs} args - Arguments to create many IndexedEvents.
     * @example
     * // Create many IndexedEvents
     * const indexedEvent = await prisma.indexedEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndexedEventCreateManyArgs>(args?: SelectSubset<T, IndexedEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IndexedEvent.
     * @param {IndexedEventDeleteArgs} args - Arguments to delete one IndexedEvent.
     * @example
     * // Delete one IndexedEvent
     * const IndexedEvent = await prisma.indexedEvent.delete({
     *   where: {
     *     // ... filter to delete one IndexedEvent
     *   }
     * })
     * 
     */
    delete<T extends IndexedEventDeleteArgs>(args: SelectSubset<T, IndexedEventDeleteArgs<ExtArgs>>): Prisma__IndexedEventClient<$Result.GetResult<Prisma.$IndexedEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IndexedEvent.
     * @param {IndexedEventUpdateArgs} args - Arguments to update one IndexedEvent.
     * @example
     * // Update one IndexedEvent
     * const indexedEvent = await prisma.indexedEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndexedEventUpdateArgs>(args: SelectSubset<T, IndexedEventUpdateArgs<ExtArgs>>): Prisma__IndexedEventClient<$Result.GetResult<Prisma.$IndexedEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IndexedEvents.
     * @param {IndexedEventDeleteManyArgs} args - Arguments to filter IndexedEvents to delete.
     * @example
     * // Delete a few IndexedEvents
     * const { count } = await prisma.indexedEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndexedEventDeleteManyArgs>(args?: SelectSubset<T, IndexedEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexedEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexedEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndexedEvents
     * const indexedEvent = await prisma.indexedEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndexedEventUpdateManyArgs>(args: SelectSubset<T, IndexedEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IndexedEvent.
     * @param {IndexedEventUpsertArgs} args - Arguments to update or create a IndexedEvent.
     * @example
     * // Update or create a IndexedEvent
     * const indexedEvent = await prisma.indexedEvent.upsert({
     *   create: {
     *     // ... data to create a IndexedEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndexedEvent we want to update
     *   }
     * })
     */
    upsert<T extends IndexedEventUpsertArgs>(args: SelectSubset<T, IndexedEventUpsertArgs<ExtArgs>>): Prisma__IndexedEventClient<$Result.GetResult<Prisma.$IndexedEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IndexedEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexedEventCountArgs} args - Arguments to filter IndexedEvents to count.
     * @example
     * // Count the number of IndexedEvents
     * const count = await prisma.indexedEvent.count({
     *   where: {
     *     // ... the filter for the IndexedEvents we want to count
     *   }
     * })
    **/
    count<T extends IndexedEventCountArgs>(
      args?: Subset<T, IndexedEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndexedEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndexedEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexedEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndexedEventAggregateArgs>(args: Subset<T, IndexedEventAggregateArgs>): Prisma.PrismaPromise<GetIndexedEventAggregateType<T>>

    /**
     * Group by IndexedEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexedEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndexedEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndexedEventGroupByArgs['orderBy'] }
        : { orderBy?: IndexedEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndexedEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndexedEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndexedEvent model
   */
  readonly fields: IndexedEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndexedEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndexedEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chain<T extends ChainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainDefaultArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IndexedEvent model
   */ 
  interface IndexedEventFieldRefs {
    readonly id: FieldRef<"IndexedEvent", 'BigInt'>
    readonly chainId: FieldRef<"IndexedEvent", 'Int'>
    readonly blockNumber: FieldRef<"IndexedEvent", 'BigInt'>
    readonly txHash: FieldRef<"IndexedEvent", 'String'>
    readonly logIndex: FieldRef<"IndexedEvent", 'Int'>
    readonly eventType: FieldRef<"IndexedEvent", 'String'>
    readonly contractAddress: FieldRef<"IndexedEvent", 'String'>
    readonly from: FieldRef<"IndexedEvent", 'String'>
    readonly to: FieldRef<"IndexedEvent", 'String'>
    readonly value: FieldRef<"IndexedEvent", 'String'>
    readonly tokenId: FieldRef<"IndexedEvent", 'String'>
    readonly amount: FieldRef<"IndexedEvent", 'String'>
    readonly metadata: FieldRef<"IndexedEvent", 'Json'>
    readonly timestamp: FieldRef<"IndexedEvent", 'DateTime'>
    readonly isCanonical: FieldRef<"IndexedEvent", 'Boolean'>
    readonly version: FieldRef<"IndexedEvent", 'Int'>
    readonly createdAt: FieldRef<"IndexedEvent", 'DateTime'>
    readonly effectiveGasPrice: FieldRef<"IndexedEvent", 'String'>
    readonly gasPrice: FieldRef<"IndexedEvent", 'String'>
    readonly gasUsed: FieldRef<"IndexedEvent", 'String'>
    readonly gasLimit: FieldRef<"IndexedEvent", 'String'>
    readonly input: FieldRef<"IndexedEvent", 'String'>
    readonly maxFeePerGas: FieldRef<"IndexedEvent", 'String'>
    readonly maxPriorityFeePerGas: FieldRef<"IndexedEvent", 'String'>
    readonly nonce: FieldRef<"IndexedEvent", 'Int'>
    readonly transactionIndex: FieldRef<"IndexedEvent", 'Int'>
    readonly txType: FieldRef<"IndexedEvent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * IndexedEvent findUnique
   */
  export type IndexedEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexedEvent
     */
    select?: IndexedEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexedEventInclude<ExtArgs> | null
    /**
     * Filter, which IndexedEvent to fetch.
     */
    where: IndexedEventWhereUniqueInput
  }

  /**
   * IndexedEvent findUniqueOrThrow
   */
  export type IndexedEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexedEvent
     */
    select?: IndexedEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexedEventInclude<ExtArgs> | null
    /**
     * Filter, which IndexedEvent to fetch.
     */
    where: IndexedEventWhereUniqueInput
  }

  /**
   * IndexedEvent findFirst
   */
  export type IndexedEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexedEvent
     */
    select?: IndexedEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexedEventInclude<ExtArgs> | null
    /**
     * Filter, which IndexedEvent to fetch.
     */
    where?: IndexedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexedEvents to fetch.
     */
    orderBy?: IndexedEventOrderByWithRelationInput | IndexedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexedEvents.
     */
    cursor?: IndexedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexedEvents.
     */
    distinct?: IndexedEventScalarFieldEnum | IndexedEventScalarFieldEnum[]
  }

  /**
   * IndexedEvent findFirstOrThrow
   */
  export type IndexedEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexedEvent
     */
    select?: IndexedEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexedEventInclude<ExtArgs> | null
    /**
     * Filter, which IndexedEvent to fetch.
     */
    where?: IndexedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexedEvents to fetch.
     */
    orderBy?: IndexedEventOrderByWithRelationInput | IndexedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexedEvents.
     */
    cursor?: IndexedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexedEvents.
     */
    distinct?: IndexedEventScalarFieldEnum | IndexedEventScalarFieldEnum[]
  }

  /**
   * IndexedEvent findMany
   */
  export type IndexedEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexedEvent
     */
    select?: IndexedEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexedEventInclude<ExtArgs> | null
    /**
     * Filter, which IndexedEvents to fetch.
     */
    where?: IndexedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexedEvents to fetch.
     */
    orderBy?: IndexedEventOrderByWithRelationInput | IndexedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndexedEvents.
     */
    cursor?: IndexedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexedEvents.
     */
    skip?: number
    distinct?: IndexedEventScalarFieldEnum | IndexedEventScalarFieldEnum[]
  }

  /**
   * IndexedEvent create
   */
  export type IndexedEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexedEvent
     */
    select?: IndexedEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexedEventInclude<ExtArgs> | null
    /**
     * The data needed to create a IndexedEvent.
     */
    data: XOR<IndexedEventCreateInput, IndexedEventUncheckedCreateInput>
  }

  /**
   * IndexedEvent createMany
   */
  export type IndexedEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndexedEvents.
     */
    data: IndexedEventCreateManyInput | IndexedEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndexedEvent update
   */
  export type IndexedEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexedEvent
     */
    select?: IndexedEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexedEventInclude<ExtArgs> | null
    /**
     * The data needed to update a IndexedEvent.
     */
    data: XOR<IndexedEventUpdateInput, IndexedEventUncheckedUpdateInput>
    /**
     * Choose, which IndexedEvent to update.
     */
    where: IndexedEventWhereUniqueInput
  }

  /**
   * IndexedEvent updateMany
   */
  export type IndexedEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndexedEvents.
     */
    data: XOR<IndexedEventUpdateManyMutationInput, IndexedEventUncheckedUpdateManyInput>
    /**
     * Filter which IndexedEvents to update
     */
    where?: IndexedEventWhereInput
  }

  /**
   * IndexedEvent upsert
   */
  export type IndexedEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexedEvent
     */
    select?: IndexedEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexedEventInclude<ExtArgs> | null
    /**
     * The filter to search for the IndexedEvent to update in case it exists.
     */
    where: IndexedEventWhereUniqueInput
    /**
     * In case the IndexedEvent found by the `where` argument doesn't exist, create a new IndexedEvent with this data.
     */
    create: XOR<IndexedEventCreateInput, IndexedEventUncheckedCreateInput>
    /**
     * In case the IndexedEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndexedEventUpdateInput, IndexedEventUncheckedUpdateInput>
  }

  /**
   * IndexedEvent delete
   */
  export type IndexedEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexedEvent
     */
    select?: IndexedEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexedEventInclude<ExtArgs> | null
    /**
     * Filter which IndexedEvent to delete.
     */
    where: IndexedEventWhereUniqueInput
  }

  /**
   * IndexedEvent deleteMany
   */
  export type IndexedEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexedEvents to delete
     */
    where?: IndexedEventWhereInput
  }

  /**
   * IndexedEvent without action
   */
  export type IndexedEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexedEvent
     */
    select?: IndexedEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexedEventInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.apiKeys
   */
  export type User$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    key: string | null
    userId: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    lastUsedAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    userId: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    lastUsedAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    key: number
    userId: number
    name: number
    isActive: number
    createdAt: number
    lastUsedAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    key?: true
    userId?: true
    name?: true
    isActive?: true
    createdAt?: true
    lastUsedAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    key?: true
    userId?: true
    name?: true
    isActive?: true
    createdAt?: true
    lastUsedAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    key?: true
    userId?: true
    name?: true
    isActive?: true
    createdAt?: true
    lastUsedAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    key: string
    userId: string
    name: string | null
    isActive: boolean
    createdAt: Date
    lastUsedAt: Date | null
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    lastUsedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>


  export type ApiKeySelectScalar = {
    id?: boolean
    key?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    lastUsedAt?: boolean
  }

  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      userId: string
      name: string | null
      isActive: boolean
      createdAt: Date
      lastUsedAt: Date | null
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */ 
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly key: FieldRef<"ApiKey", 'String'>
    readonly userId: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model ErrorLog
   */

  export type AggregateErrorLog = {
    _count: ErrorLogCountAggregateOutputType | null
    _avg: ErrorLogAvgAggregateOutputType | null
    _sum: ErrorLogSumAggregateOutputType | null
    _min: ErrorLogMinAggregateOutputType | null
    _max: ErrorLogMaxAggregateOutputType | null
  }

  export type ErrorLogAvgAggregateOutputType = {
    id: number | null
    chainId: number | null
    retryCount: number | null
  }

  export type ErrorLogSumAggregateOutputType = {
    id: bigint | null
    chainId: number | null
    retryCount: number | null
  }

  export type ErrorLogMinAggregateOutputType = {
    id: bigint | null
    chainId: number | null
    errorType: string | null
    errorSource: string | null
    errorMessage: string | null
    stackTrace: string | null
    severity: string | null
    isResolved: boolean | null
    retryCount: number | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type ErrorLogMaxAggregateOutputType = {
    id: bigint | null
    chainId: number | null
    errorType: string | null
    errorSource: string | null
    errorMessage: string | null
    stackTrace: string | null
    severity: string | null
    isResolved: boolean | null
    retryCount: number | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type ErrorLogCountAggregateOutputType = {
    id: number
    chainId: number
    errorType: number
    errorSource: number
    errorMessage: number
    stackTrace: number
    context: number
    severity: number
    isResolved: number
    retryCount: number
    createdAt: number
    resolvedAt: number
    _all: number
  }


  export type ErrorLogAvgAggregateInputType = {
    id?: true
    chainId?: true
    retryCount?: true
  }

  export type ErrorLogSumAggregateInputType = {
    id?: true
    chainId?: true
    retryCount?: true
  }

  export type ErrorLogMinAggregateInputType = {
    id?: true
    chainId?: true
    errorType?: true
    errorSource?: true
    errorMessage?: true
    stackTrace?: true
    severity?: true
    isResolved?: true
    retryCount?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type ErrorLogMaxAggregateInputType = {
    id?: true
    chainId?: true
    errorType?: true
    errorSource?: true
    errorMessage?: true
    stackTrace?: true
    severity?: true
    isResolved?: true
    retryCount?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type ErrorLogCountAggregateInputType = {
    id?: true
    chainId?: true
    errorType?: true
    errorSource?: true
    errorMessage?: true
    stackTrace?: true
    context?: true
    severity?: true
    isResolved?: true
    retryCount?: true
    createdAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type ErrorLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorLog to aggregate.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ErrorLogs
    **/
    _count?: true | ErrorLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ErrorLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ErrorLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ErrorLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ErrorLogMaxAggregateInputType
  }

  export type GetErrorLogAggregateType<T extends ErrorLogAggregateArgs> = {
        [P in keyof T & keyof AggregateErrorLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateErrorLog[P]>
      : GetScalarType<T[P], AggregateErrorLog[P]>
  }




  export type ErrorLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorLogWhereInput
    orderBy?: ErrorLogOrderByWithAggregationInput | ErrorLogOrderByWithAggregationInput[]
    by: ErrorLogScalarFieldEnum[] | ErrorLogScalarFieldEnum
    having?: ErrorLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ErrorLogCountAggregateInputType | true
    _avg?: ErrorLogAvgAggregateInputType
    _sum?: ErrorLogSumAggregateInputType
    _min?: ErrorLogMinAggregateInputType
    _max?: ErrorLogMaxAggregateInputType
  }

  export type ErrorLogGroupByOutputType = {
    id: bigint
    chainId: number | null
    errorType: string
    errorSource: string
    errorMessage: string
    stackTrace: string | null
    context: JsonValue | null
    severity: string
    isResolved: boolean
    retryCount: number
    createdAt: Date
    resolvedAt: Date | null
    _count: ErrorLogCountAggregateOutputType | null
    _avg: ErrorLogAvgAggregateOutputType | null
    _sum: ErrorLogSumAggregateOutputType | null
    _min: ErrorLogMinAggregateOutputType | null
    _max: ErrorLogMaxAggregateOutputType | null
  }

  type GetErrorLogGroupByPayload<T extends ErrorLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ErrorLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ErrorLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ErrorLogGroupByOutputType[P]>
            : GetScalarType<T[P], ErrorLogGroupByOutputType[P]>
        }
      >
    >


  export type ErrorLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chainId?: boolean
    errorType?: boolean
    errorSource?: boolean
    errorMessage?: boolean
    stackTrace?: boolean
    context?: boolean
    severity?: boolean
    isResolved?: boolean
    retryCount?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }, ExtArgs["result"]["errorLog"]>


  export type ErrorLogSelectScalar = {
    id?: boolean
    chainId?: boolean
    errorType?: boolean
    errorSource?: boolean
    errorMessage?: boolean
    stackTrace?: boolean
    context?: boolean
    severity?: boolean
    isResolved?: boolean
    retryCount?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }


  export type $ErrorLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ErrorLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      chainId: number | null
      errorType: string
      errorSource: string
      errorMessage: string
      stackTrace: string | null
      context: Prisma.JsonValue | null
      severity: string
      isResolved: boolean
      retryCount: number
      createdAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["errorLog"]>
    composites: {}
  }

  type ErrorLogGetPayload<S extends boolean | null | undefined | ErrorLogDefaultArgs> = $Result.GetResult<Prisma.$ErrorLogPayload, S>

  type ErrorLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ErrorLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ErrorLogCountAggregateInputType | true
    }

  export interface ErrorLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ErrorLog'], meta: { name: 'ErrorLog' } }
    /**
     * Find zero or one ErrorLog that matches the filter.
     * @param {ErrorLogFindUniqueArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ErrorLogFindUniqueArgs>(args: SelectSubset<T, ErrorLogFindUniqueArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ErrorLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ErrorLogFindUniqueOrThrowArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ErrorLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ErrorLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ErrorLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindFirstArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ErrorLogFindFirstArgs>(args?: SelectSubset<T, ErrorLogFindFirstArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ErrorLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindFirstOrThrowArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ErrorLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ErrorLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ErrorLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ErrorLogs
     * const errorLogs = await prisma.errorLog.findMany()
     * 
     * // Get first 10 ErrorLogs
     * const errorLogs = await prisma.errorLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const errorLogWithIdOnly = await prisma.errorLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ErrorLogFindManyArgs>(args?: SelectSubset<T, ErrorLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ErrorLog.
     * @param {ErrorLogCreateArgs} args - Arguments to create a ErrorLog.
     * @example
     * // Create one ErrorLog
     * const ErrorLog = await prisma.errorLog.create({
     *   data: {
     *     // ... data to create a ErrorLog
     *   }
     * })
     * 
     */
    create<T extends ErrorLogCreateArgs>(args: SelectSubset<T, ErrorLogCreateArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ErrorLogs.
     * @param {ErrorLogCreateManyArgs} args - Arguments to create many ErrorLogs.
     * @example
     * // Create many ErrorLogs
     * const errorLog = await prisma.errorLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ErrorLogCreateManyArgs>(args?: SelectSubset<T, ErrorLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ErrorLog.
     * @param {ErrorLogDeleteArgs} args - Arguments to delete one ErrorLog.
     * @example
     * // Delete one ErrorLog
     * const ErrorLog = await prisma.errorLog.delete({
     *   where: {
     *     // ... filter to delete one ErrorLog
     *   }
     * })
     * 
     */
    delete<T extends ErrorLogDeleteArgs>(args: SelectSubset<T, ErrorLogDeleteArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ErrorLog.
     * @param {ErrorLogUpdateArgs} args - Arguments to update one ErrorLog.
     * @example
     * // Update one ErrorLog
     * const errorLog = await prisma.errorLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ErrorLogUpdateArgs>(args: SelectSubset<T, ErrorLogUpdateArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ErrorLogs.
     * @param {ErrorLogDeleteManyArgs} args - Arguments to filter ErrorLogs to delete.
     * @example
     * // Delete a few ErrorLogs
     * const { count } = await prisma.errorLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ErrorLogDeleteManyArgs>(args?: SelectSubset<T, ErrorLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ErrorLogs
     * const errorLog = await prisma.errorLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ErrorLogUpdateManyArgs>(args: SelectSubset<T, ErrorLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ErrorLog.
     * @param {ErrorLogUpsertArgs} args - Arguments to update or create a ErrorLog.
     * @example
     * // Update or create a ErrorLog
     * const errorLog = await prisma.errorLog.upsert({
     *   create: {
     *     // ... data to create a ErrorLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ErrorLog we want to update
     *   }
     * })
     */
    upsert<T extends ErrorLogUpsertArgs>(args: SelectSubset<T, ErrorLogUpsertArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogCountArgs} args - Arguments to filter ErrorLogs to count.
     * @example
     * // Count the number of ErrorLogs
     * const count = await prisma.errorLog.count({
     *   where: {
     *     // ... the filter for the ErrorLogs we want to count
     *   }
     * })
    **/
    count<T extends ErrorLogCountArgs>(
      args?: Subset<T, ErrorLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ErrorLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ErrorLogAggregateArgs>(args: Subset<T, ErrorLogAggregateArgs>): Prisma.PrismaPromise<GetErrorLogAggregateType<T>>

    /**
     * Group by ErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ErrorLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ErrorLogGroupByArgs['orderBy'] }
        : { orderBy?: ErrorLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ErrorLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErrorLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ErrorLog model
   */
  readonly fields: ErrorLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ErrorLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ErrorLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ErrorLog model
   */ 
  interface ErrorLogFieldRefs {
    readonly id: FieldRef<"ErrorLog", 'BigInt'>
    readonly chainId: FieldRef<"ErrorLog", 'Int'>
    readonly errorType: FieldRef<"ErrorLog", 'String'>
    readonly errorSource: FieldRef<"ErrorLog", 'String'>
    readonly errorMessage: FieldRef<"ErrorLog", 'String'>
    readonly stackTrace: FieldRef<"ErrorLog", 'String'>
    readonly context: FieldRef<"ErrorLog", 'Json'>
    readonly severity: FieldRef<"ErrorLog", 'String'>
    readonly isResolved: FieldRef<"ErrorLog", 'Boolean'>
    readonly retryCount: FieldRef<"ErrorLog", 'Int'>
    readonly createdAt: FieldRef<"ErrorLog", 'DateTime'>
    readonly resolvedAt: FieldRef<"ErrorLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ErrorLog findUnique
   */
  export type ErrorLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog findUniqueOrThrow
   */
  export type ErrorLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog findFirst
   */
  export type ErrorLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorLogs.
     */
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog findFirstOrThrow
   */
  export type ErrorLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorLogs.
     */
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog findMany
   */
  export type ErrorLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Filter, which ErrorLogs to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog create
   */
  export type ErrorLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * The data needed to create a ErrorLog.
     */
    data: XOR<ErrorLogCreateInput, ErrorLogUncheckedCreateInput>
  }

  /**
   * ErrorLog createMany
   */
  export type ErrorLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ErrorLogs.
     */
    data: ErrorLogCreateManyInput | ErrorLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ErrorLog update
   */
  export type ErrorLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * The data needed to update a ErrorLog.
     */
    data: XOR<ErrorLogUpdateInput, ErrorLogUncheckedUpdateInput>
    /**
     * Choose, which ErrorLog to update.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog updateMany
   */
  export type ErrorLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ErrorLogs.
     */
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyInput>
    /**
     * Filter which ErrorLogs to update
     */
    where?: ErrorLogWhereInput
  }

  /**
   * ErrorLog upsert
   */
  export type ErrorLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * The filter to search for the ErrorLog to update in case it exists.
     */
    where: ErrorLogWhereUniqueInput
    /**
     * In case the ErrorLog found by the `where` argument doesn't exist, create a new ErrorLog with this data.
     */
    create: XOR<ErrorLogCreateInput, ErrorLogUncheckedCreateInput>
    /**
     * In case the ErrorLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ErrorLogUpdateInput, ErrorLogUncheckedUpdateInput>
  }

  /**
   * ErrorLog delete
   */
  export type ErrorLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Filter which ErrorLog to delete.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog deleteMany
   */
  export type ErrorLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorLogs to delete
     */
    where?: ErrorLogWhereInput
  }

  /**
   * ErrorLog without action
   */
  export type ErrorLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChainScalarFieldEnum: {
    id: 'id',
    chainId: 'chainId',
    name: 'name',
    rpcUrl: 'rpcUrl',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChainScalarFieldEnum = (typeof ChainScalarFieldEnum)[keyof typeof ChainScalarFieldEnum]


  export const BlockScalarFieldEnum: {
    id: 'id',
    chainId: 'chainId',
    number: 'number',
    hash: 'hash',
    parentHash: 'parentHash',
    timestamp: 'timestamp',
    isCanonical: 'isCanonical',
    createdAt: 'createdAt'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    chainId: 'chainId',
    address: 'address',
    type: 'type',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const RawEventScalarFieldEnum: {
    id: 'id',
    chainId: 'chainId',
    blockNumber: 'blockNumber',
    txHash: 'txHash',
    logIndex: 'logIndex',
    eventSignature: 'eventSignature',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type RawEventScalarFieldEnum = (typeof RawEventScalarFieldEnum)[keyof typeof RawEventScalarFieldEnum]


  export const IndexedEventScalarFieldEnum: {
    id: 'id',
    chainId: 'chainId',
    blockNumber: 'blockNumber',
    txHash: 'txHash',
    logIndex: 'logIndex',
    eventType: 'eventType',
    contractAddress: 'contractAddress',
    from: 'from',
    to: 'to',
    value: 'value',
    tokenId: 'tokenId',
    amount: 'amount',
    metadata: 'metadata',
    timestamp: 'timestamp',
    isCanonical: 'isCanonical',
    version: 'version',
    createdAt: 'createdAt',
    effectiveGasPrice: 'effectiveGasPrice',
    gasPrice: 'gasPrice',
    gasUsed: 'gasUsed',
    gasLimit: 'gasLimit',
    input: 'input',
    maxFeePerGas: 'maxFeePerGas',
    maxPriorityFeePerGas: 'maxPriorityFeePerGas',
    nonce: 'nonce',
    transactionIndex: 'transactionIndex',
    txType: 'txType'
  };

  export type IndexedEventScalarFieldEnum = (typeof IndexedEventScalarFieldEnum)[keyof typeof IndexedEventScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    userId: 'userId',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    lastUsedAt: 'lastUsedAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const ErrorLogScalarFieldEnum: {
    id: 'id',
    chainId: 'chainId',
    errorType: 'errorType',
    errorSource: 'errorSource',
    errorMessage: 'errorMessage',
    stackTrace: 'stackTrace',
    context: 'context',
    severity: 'severity',
    isResolved: 'isResolved',
    retryCount: 'retryCount',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt'
  };

  export type ErrorLogScalarFieldEnum = (typeof ErrorLogScalarFieldEnum)[keyof typeof ErrorLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ChainWhereInput = {
    AND?: ChainWhereInput | ChainWhereInput[]
    OR?: ChainWhereInput[]
    NOT?: ChainWhereInput | ChainWhereInput[]
    id?: IntFilter<"Chain"> | number
    chainId?: IntFilter<"Chain"> | number
    name?: StringFilter<"Chain"> | string
    rpcUrl?: StringFilter<"Chain"> | string
    type?: StringFilter<"Chain"> | string
    createdAt?: DateTimeFilter<"Chain"> | Date | string
    updatedAt?: DateTimeFilter<"Chain"> | Date | string
    blocks?: BlockListRelationFilter
    contracts?: ContractListRelationFilter
    indexedEvents?: IndexedEventListRelationFilter
    rawEvents?: RawEventListRelationFilter
  }

  export type ChainOrderByWithRelationInput = {
    id?: SortOrder
    chainId?: SortOrder
    name?: SortOrder
    rpcUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blocks?: BlockOrderByRelationAggregateInput
    contracts?: ContractOrderByRelationAggregateInput
    indexedEvents?: IndexedEventOrderByRelationAggregateInput
    rawEvents?: RawEventOrderByRelationAggregateInput
  }

  export type ChainWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chainId?: number
    AND?: ChainWhereInput | ChainWhereInput[]
    OR?: ChainWhereInput[]
    NOT?: ChainWhereInput | ChainWhereInput[]
    name?: StringFilter<"Chain"> | string
    rpcUrl?: StringFilter<"Chain"> | string
    type?: StringFilter<"Chain"> | string
    createdAt?: DateTimeFilter<"Chain"> | Date | string
    updatedAt?: DateTimeFilter<"Chain"> | Date | string
    blocks?: BlockListRelationFilter
    contracts?: ContractListRelationFilter
    indexedEvents?: IndexedEventListRelationFilter
    rawEvents?: RawEventListRelationFilter
  }, "id" | "chainId">

  export type ChainOrderByWithAggregationInput = {
    id?: SortOrder
    chainId?: SortOrder
    name?: SortOrder
    rpcUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChainCountOrderByAggregateInput
    _avg?: ChainAvgOrderByAggregateInput
    _max?: ChainMaxOrderByAggregateInput
    _min?: ChainMinOrderByAggregateInput
    _sum?: ChainSumOrderByAggregateInput
  }

  export type ChainScalarWhereWithAggregatesInput = {
    AND?: ChainScalarWhereWithAggregatesInput | ChainScalarWhereWithAggregatesInput[]
    OR?: ChainScalarWhereWithAggregatesInput[]
    NOT?: ChainScalarWhereWithAggregatesInput | ChainScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chain"> | number
    chainId?: IntWithAggregatesFilter<"Chain"> | number
    name?: StringWithAggregatesFilter<"Chain"> | string
    rpcUrl?: StringWithAggregatesFilter<"Chain"> | string
    type?: StringWithAggregatesFilter<"Chain"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chain"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chain"> | Date | string
  }

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    id?: IntFilter<"Block"> | number
    chainId?: IntFilter<"Block"> | number
    number?: BigIntFilter<"Block"> | bigint | number
    hash?: StringFilter<"Block"> | string
    parentHash?: StringFilter<"Block"> | string
    timestamp?: DateTimeFilter<"Block"> | Date | string
    isCanonical?: BoolFilter<"Block"> | boolean
    createdAt?: DateTimeFilter<"Block"> | Date | string
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
  }

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder
    chainId?: SortOrder
    number?: SortOrder
    hash?: SortOrder
    parentHash?: SortOrder
    timestamp?: SortOrder
    isCanonical?: SortOrder
    createdAt?: SortOrder
    chain?: ChainOrderByWithRelationInput
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chainId_number?: BlockChainIdNumberCompoundUniqueInput
    chainId_hash?: BlockChainIdHashCompoundUniqueInput
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    chainId?: IntFilter<"Block"> | number
    number?: BigIntFilter<"Block"> | bigint | number
    hash?: StringFilter<"Block"> | string
    parentHash?: StringFilter<"Block"> | string
    timestamp?: DateTimeFilter<"Block"> | Date | string
    isCanonical?: BoolFilter<"Block"> | boolean
    createdAt?: DateTimeFilter<"Block"> | Date | string
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
  }, "id" | "chainId_number" | "chainId_hash">

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder
    chainId?: SortOrder
    number?: SortOrder
    hash?: SortOrder
    parentHash?: SortOrder
    timestamp?: SortOrder
    isCanonical?: SortOrder
    createdAt?: SortOrder
    _count?: BlockCountOrderByAggregateInput
    _avg?: BlockAvgOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
    _sum?: BlockSumOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Block"> | number
    chainId?: IntWithAggregatesFilter<"Block"> | number
    number?: BigIntWithAggregatesFilter<"Block"> | bigint | number
    hash?: StringWithAggregatesFilter<"Block"> | string
    parentHash?: StringWithAggregatesFilter<"Block"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Block"> | Date | string
    isCanonical?: BoolWithAggregatesFilter<"Block"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: IntFilter<"Contract"> | number
    chainId?: IntFilter<"Contract"> | number
    address?: StringFilter<"Contract"> | string
    type?: StringNullableFilter<"Contract"> | string | null
    metadata?: JsonNullableFilter<"Contract">
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    chainId?: SortOrder
    address?: SortOrder
    type?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    chain?: ChainOrderByWithRelationInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chainId_address?: ContractChainIdAddressCompoundUniqueInput
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    chainId?: IntFilter<"Contract"> | number
    address?: StringFilter<"Contract"> | string
    type?: StringNullableFilter<"Contract"> | string | null
    metadata?: JsonNullableFilter<"Contract">
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
  }, "id" | "chainId_address">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    chainId?: SortOrder
    address?: SortOrder
    type?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contract"> | number
    chainId?: IntWithAggregatesFilter<"Contract"> | number
    address?: StringWithAggregatesFilter<"Contract"> | string
    type?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Contract">
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type RawEventWhereInput = {
    AND?: RawEventWhereInput | RawEventWhereInput[]
    OR?: RawEventWhereInput[]
    NOT?: RawEventWhereInput | RawEventWhereInput[]
    id?: BigIntFilter<"RawEvent"> | bigint | number
    chainId?: IntFilter<"RawEvent"> | number
    blockNumber?: BigIntFilter<"RawEvent"> | bigint | number
    txHash?: StringFilter<"RawEvent"> | string
    logIndex?: IntFilter<"RawEvent"> | number
    eventSignature?: StringNullableFilter<"RawEvent"> | string | null
    data?: JsonFilter<"RawEvent">
    createdAt?: DateTimeFilter<"RawEvent"> | Date | string
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
  }

  export type RawEventOrderByWithRelationInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventSignature?: SortOrderInput | SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    chain?: ChainOrderByWithRelationInput
  }

  export type RawEventWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    chainId_txHash_logIndex?: RawEventChainIdTxHashLogIndexCompoundUniqueInput
    AND?: RawEventWhereInput | RawEventWhereInput[]
    OR?: RawEventWhereInput[]
    NOT?: RawEventWhereInput | RawEventWhereInput[]
    chainId?: IntFilter<"RawEvent"> | number
    blockNumber?: BigIntFilter<"RawEvent"> | bigint | number
    txHash?: StringFilter<"RawEvent"> | string
    logIndex?: IntFilter<"RawEvent"> | number
    eventSignature?: StringNullableFilter<"RawEvent"> | string | null
    data?: JsonFilter<"RawEvent">
    createdAt?: DateTimeFilter<"RawEvent"> | Date | string
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
  }, "id" | "chainId_txHash_logIndex">

  export type RawEventOrderByWithAggregationInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventSignature?: SortOrderInput | SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: RawEventCountOrderByAggregateInput
    _avg?: RawEventAvgOrderByAggregateInput
    _max?: RawEventMaxOrderByAggregateInput
    _min?: RawEventMinOrderByAggregateInput
    _sum?: RawEventSumOrderByAggregateInput
  }

  export type RawEventScalarWhereWithAggregatesInput = {
    AND?: RawEventScalarWhereWithAggregatesInput | RawEventScalarWhereWithAggregatesInput[]
    OR?: RawEventScalarWhereWithAggregatesInput[]
    NOT?: RawEventScalarWhereWithAggregatesInput | RawEventScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"RawEvent"> | bigint | number
    chainId?: IntWithAggregatesFilter<"RawEvent"> | number
    blockNumber?: BigIntWithAggregatesFilter<"RawEvent"> | bigint | number
    txHash?: StringWithAggregatesFilter<"RawEvent"> | string
    logIndex?: IntWithAggregatesFilter<"RawEvent"> | number
    eventSignature?: StringNullableWithAggregatesFilter<"RawEvent"> | string | null
    data?: JsonWithAggregatesFilter<"RawEvent">
    createdAt?: DateTimeWithAggregatesFilter<"RawEvent"> | Date | string
  }

  export type IndexedEventWhereInput = {
    AND?: IndexedEventWhereInput | IndexedEventWhereInput[]
    OR?: IndexedEventWhereInput[]
    NOT?: IndexedEventWhereInput | IndexedEventWhereInput[]
    id?: BigIntFilter<"IndexedEvent"> | bigint | number
    chainId?: IntFilter<"IndexedEvent"> | number
    blockNumber?: BigIntFilter<"IndexedEvent"> | bigint | number
    txHash?: StringFilter<"IndexedEvent"> | string
    logIndex?: IntFilter<"IndexedEvent"> | number
    eventType?: StringFilter<"IndexedEvent"> | string
    contractAddress?: StringFilter<"IndexedEvent"> | string
    from?: StringNullableFilter<"IndexedEvent"> | string | null
    to?: StringNullableFilter<"IndexedEvent"> | string | null
    value?: StringNullableFilter<"IndexedEvent"> | string | null
    tokenId?: StringNullableFilter<"IndexedEvent"> | string | null
    amount?: StringNullableFilter<"IndexedEvent"> | string | null
    metadata?: JsonNullableFilter<"IndexedEvent">
    timestamp?: DateTimeFilter<"IndexedEvent"> | Date | string
    isCanonical?: BoolFilter<"IndexedEvent"> | boolean
    version?: IntFilter<"IndexedEvent"> | number
    createdAt?: DateTimeFilter<"IndexedEvent"> | Date | string
    effectiveGasPrice?: StringNullableFilter<"IndexedEvent"> | string | null
    gasPrice?: StringNullableFilter<"IndexedEvent"> | string | null
    gasUsed?: StringNullableFilter<"IndexedEvent"> | string | null
    gasLimit?: StringNullableFilter<"IndexedEvent"> | string | null
    input?: StringNullableFilter<"IndexedEvent"> | string | null
    maxFeePerGas?: StringNullableFilter<"IndexedEvent"> | string | null
    maxPriorityFeePerGas?: StringNullableFilter<"IndexedEvent"> | string | null
    nonce?: IntNullableFilter<"IndexedEvent"> | number | null
    transactionIndex?: IntNullableFilter<"IndexedEvent"> | number | null
    txType?: IntNullableFilter<"IndexedEvent"> | number | null
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
  }

  export type IndexedEventOrderByWithRelationInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventType?: SortOrder
    contractAddress?: SortOrder
    from?: SortOrderInput | SortOrder
    to?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    tokenId?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    isCanonical?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    effectiveGasPrice?: SortOrderInput | SortOrder
    gasPrice?: SortOrderInput | SortOrder
    gasUsed?: SortOrderInput | SortOrder
    gasLimit?: SortOrderInput | SortOrder
    input?: SortOrderInput | SortOrder
    maxFeePerGas?: SortOrderInput | SortOrder
    maxPriorityFeePerGas?: SortOrderInput | SortOrder
    nonce?: SortOrderInput | SortOrder
    transactionIndex?: SortOrderInput | SortOrder
    txType?: SortOrderInput | SortOrder
    chain?: ChainOrderByWithRelationInput
  }

  export type IndexedEventWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    chainId_txHash_logIndex_version?: IndexedEventChainIdTxHashLogIndexVersionCompoundUniqueInput
    AND?: IndexedEventWhereInput | IndexedEventWhereInput[]
    OR?: IndexedEventWhereInput[]
    NOT?: IndexedEventWhereInput | IndexedEventWhereInput[]
    chainId?: IntFilter<"IndexedEvent"> | number
    blockNumber?: BigIntFilter<"IndexedEvent"> | bigint | number
    txHash?: StringFilter<"IndexedEvent"> | string
    logIndex?: IntFilter<"IndexedEvent"> | number
    eventType?: StringFilter<"IndexedEvent"> | string
    contractAddress?: StringFilter<"IndexedEvent"> | string
    from?: StringNullableFilter<"IndexedEvent"> | string | null
    to?: StringNullableFilter<"IndexedEvent"> | string | null
    value?: StringNullableFilter<"IndexedEvent"> | string | null
    tokenId?: StringNullableFilter<"IndexedEvent"> | string | null
    amount?: StringNullableFilter<"IndexedEvent"> | string | null
    metadata?: JsonNullableFilter<"IndexedEvent">
    timestamp?: DateTimeFilter<"IndexedEvent"> | Date | string
    isCanonical?: BoolFilter<"IndexedEvent"> | boolean
    version?: IntFilter<"IndexedEvent"> | number
    createdAt?: DateTimeFilter<"IndexedEvent"> | Date | string
    effectiveGasPrice?: StringNullableFilter<"IndexedEvent"> | string | null
    gasPrice?: StringNullableFilter<"IndexedEvent"> | string | null
    gasUsed?: StringNullableFilter<"IndexedEvent"> | string | null
    gasLimit?: StringNullableFilter<"IndexedEvent"> | string | null
    input?: StringNullableFilter<"IndexedEvent"> | string | null
    maxFeePerGas?: StringNullableFilter<"IndexedEvent"> | string | null
    maxPriorityFeePerGas?: StringNullableFilter<"IndexedEvent"> | string | null
    nonce?: IntNullableFilter<"IndexedEvent"> | number | null
    transactionIndex?: IntNullableFilter<"IndexedEvent"> | number | null
    txType?: IntNullableFilter<"IndexedEvent"> | number | null
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
  }, "id" | "chainId_txHash_logIndex_version">

  export type IndexedEventOrderByWithAggregationInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventType?: SortOrder
    contractAddress?: SortOrder
    from?: SortOrderInput | SortOrder
    to?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    tokenId?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    isCanonical?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    effectiveGasPrice?: SortOrderInput | SortOrder
    gasPrice?: SortOrderInput | SortOrder
    gasUsed?: SortOrderInput | SortOrder
    gasLimit?: SortOrderInput | SortOrder
    input?: SortOrderInput | SortOrder
    maxFeePerGas?: SortOrderInput | SortOrder
    maxPriorityFeePerGas?: SortOrderInput | SortOrder
    nonce?: SortOrderInput | SortOrder
    transactionIndex?: SortOrderInput | SortOrder
    txType?: SortOrderInput | SortOrder
    _count?: IndexedEventCountOrderByAggregateInput
    _avg?: IndexedEventAvgOrderByAggregateInput
    _max?: IndexedEventMaxOrderByAggregateInput
    _min?: IndexedEventMinOrderByAggregateInput
    _sum?: IndexedEventSumOrderByAggregateInput
  }

  export type IndexedEventScalarWhereWithAggregatesInput = {
    AND?: IndexedEventScalarWhereWithAggregatesInput | IndexedEventScalarWhereWithAggregatesInput[]
    OR?: IndexedEventScalarWhereWithAggregatesInput[]
    NOT?: IndexedEventScalarWhereWithAggregatesInput | IndexedEventScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"IndexedEvent"> | bigint | number
    chainId?: IntWithAggregatesFilter<"IndexedEvent"> | number
    blockNumber?: BigIntWithAggregatesFilter<"IndexedEvent"> | bigint | number
    txHash?: StringWithAggregatesFilter<"IndexedEvent"> | string
    logIndex?: IntWithAggregatesFilter<"IndexedEvent"> | number
    eventType?: StringWithAggregatesFilter<"IndexedEvent"> | string
    contractAddress?: StringWithAggregatesFilter<"IndexedEvent"> | string
    from?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    to?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    value?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    tokenId?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    amount?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"IndexedEvent">
    timestamp?: DateTimeWithAggregatesFilter<"IndexedEvent"> | Date | string
    isCanonical?: BoolWithAggregatesFilter<"IndexedEvent"> | boolean
    version?: IntWithAggregatesFilter<"IndexedEvent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"IndexedEvent"> | Date | string
    effectiveGasPrice?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    gasPrice?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    gasUsed?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    gasLimit?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    input?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    maxFeePerGas?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    maxPriorityFeePerGas?: StringNullableWithAggregatesFilter<"IndexedEvent"> | string | null
    nonce?: IntNullableWithAggregatesFilter<"IndexedEvent"> | number | null
    transactionIndex?: IntNullableWithAggregatesFilter<"IndexedEvent"> | number | null
    txType?: IntNullableWithAggregatesFilter<"IndexedEvent"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    apiKeys?: ApiKeyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiKeys?: ApiKeyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    apiKeys?: ApiKeyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    name?: StringNullableFilter<"ApiKey"> | string | null
    isActive?: BoolFilter<"ApiKey"> | boolean
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    userId?: StringFilter<"ApiKey"> | string
    name?: StringNullableFilter<"ApiKey"> | string | null
    isActive?: BoolFilter<"ApiKey"> | boolean
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "key">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    userId?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
  }

  export type ErrorLogWhereInput = {
    AND?: ErrorLogWhereInput | ErrorLogWhereInput[]
    OR?: ErrorLogWhereInput[]
    NOT?: ErrorLogWhereInput | ErrorLogWhereInput[]
    id?: BigIntFilter<"ErrorLog"> | bigint | number
    chainId?: IntNullableFilter<"ErrorLog"> | number | null
    errorType?: StringFilter<"ErrorLog"> | string
    errorSource?: StringFilter<"ErrorLog"> | string
    errorMessage?: StringFilter<"ErrorLog"> | string
    stackTrace?: StringNullableFilter<"ErrorLog"> | string | null
    context?: JsonNullableFilter<"ErrorLog">
    severity?: StringFilter<"ErrorLog"> | string
    isResolved?: BoolFilter<"ErrorLog"> | boolean
    retryCount?: IntFilter<"ErrorLog"> | number
    createdAt?: DateTimeFilter<"ErrorLog"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"ErrorLog"> | Date | string | null
  }

  export type ErrorLogOrderByWithRelationInput = {
    id?: SortOrder
    chainId?: SortOrderInput | SortOrder
    errorType?: SortOrder
    errorSource?: SortOrder
    errorMessage?: SortOrder
    stackTrace?: SortOrderInput | SortOrder
    context?: SortOrderInput | SortOrder
    severity?: SortOrder
    isResolved?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
  }

  export type ErrorLogWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ErrorLogWhereInput | ErrorLogWhereInput[]
    OR?: ErrorLogWhereInput[]
    NOT?: ErrorLogWhereInput | ErrorLogWhereInput[]
    chainId?: IntNullableFilter<"ErrorLog"> | number | null
    errorType?: StringFilter<"ErrorLog"> | string
    errorSource?: StringFilter<"ErrorLog"> | string
    errorMessage?: StringFilter<"ErrorLog"> | string
    stackTrace?: StringNullableFilter<"ErrorLog"> | string | null
    context?: JsonNullableFilter<"ErrorLog">
    severity?: StringFilter<"ErrorLog"> | string
    isResolved?: BoolFilter<"ErrorLog"> | boolean
    retryCount?: IntFilter<"ErrorLog"> | number
    createdAt?: DateTimeFilter<"ErrorLog"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"ErrorLog"> | Date | string | null
  }, "id">

  export type ErrorLogOrderByWithAggregationInput = {
    id?: SortOrder
    chainId?: SortOrderInput | SortOrder
    errorType?: SortOrder
    errorSource?: SortOrder
    errorMessage?: SortOrder
    stackTrace?: SortOrderInput | SortOrder
    context?: SortOrderInput | SortOrder
    severity?: SortOrder
    isResolved?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: ErrorLogCountOrderByAggregateInput
    _avg?: ErrorLogAvgOrderByAggregateInput
    _max?: ErrorLogMaxOrderByAggregateInput
    _min?: ErrorLogMinOrderByAggregateInput
    _sum?: ErrorLogSumOrderByAggregateInput
  }

  export type ErrorLogScalarWhereWithAggregatesInput = {
    AND?: ErrorLogScalarWhereWithAggregatesInput | ErrorLogScalarWhereWithAggregatesInput[]
    OR?: ErrorLogScalarWhereWithAggregatesInput[]
    NOT?: ErrorLogScalarWhereWithAggregatesInput | ErrorLogScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ErrorLog"> | bigint | number
    chainId?: IntNullableWithAggregatesFilter<"ErrorLog"> | number | null
    errorType?: StringWithAggregatesFilter<"ErrorLog"> | string
    errorSource?: StringWithAggregatesFilter<"ErrorLog"> | string
    errorMessage?: StringWithAggregatesFilter<"ErrorLog"> | string
    stackTrace?: StringNullableWithAggregatesFilter<"ErrorLog"> | string | null
    context?: JsonNullableWithAggregatesFilter<"ErrorLog">
    severity?: StringWithAggregatesFilter<"ErrorLog"> | string
    isResolved?: BoolWithAggregatesFilter<"ErrorLog"> | boolean
    retryCount?: IntWithAggregatesFilter<"ErrorLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ErrorLog"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"ErrorLog"> | Date | string | null
  }

  export type ChainCreateInput = {
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockCreateNestedManyWithoutChainInput
    contracts?: ContractCreateNestedManyWithoutChainInput
    indexedEvents?: IndexedEventCreateNestedManyWithoutChainInput
    rawEvents?: RawEventCreateNestedManyWithoutChainInput
  }

  export type ChainUncheckedCreateInput = {
    id?: number
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutChainInput
    contracts?: ContractUncheckedCreateNestedManyWithoutChainInput
    indexedEvents?: IndexedEventUncheckedCreateNestedManyWithoutChainInput
    rawEvents?: RawEventUncheckedCreateNestedManyWithoutChainInput
  }

  export type ChainUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUpdateManyWithoutChainNestedInput
    contracts?: ContractUpdateManyWithoutChainNestedInput
    indexedEvents?: IndexedEventUpdateManyWithoutChainNestedInput
    rawEvents?: RawEventUpdateManyWithoutChainNestedInput
  }

  export type ChainUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutChainNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutChainNestedInput
    indexedEvents?: IndexedEventUncheckedUpdateManyWithoutChainNestedInput
    rawEvents?: RawEventUncheckedUpdateManyWithoutChainNestedInput
  }

  export type ChainCreateManyInput = {
    id?: number
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChainUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChainUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateInput = {
    number: bigint | number
    hash: string
    parentHash: string
    timestamp: Date | string
    isCanonical?: boolean
    createdAt?: Date | string
    chain: ChainCreateNestedOneWithoutBlocksInput
  }

  export type BlockUncheckedCreateInput = {
    id?: number
    chainId: number
    number: bigint | number
    hash: string
    parentHash: string
    timestamp: Date | string
    isCanonical?: boolean
    createdAt?: Date | string
  }

  export type BlockUpdateInput = {
    number?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: StringFieldUpdateOperationsInput | string
    parentHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chain?: ChainUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type BlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    number?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: StringFieldUpdateOperationsInput | string
    parentHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateManyInput = {
    id?: number
    chainId: number
    number: bigint | number
    hash: string
    parentHash: string
    timestamp: Date | string
    isCanonical?: boolean
    createdAt?: Date | string
  }

  export type BlockUpdateManyMutationInput = {
    number?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: StringFieldUpdateOperationsInput | string
    parentHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    number?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: StringFieldUpdateOperationsInput | string
    parentHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateInput = {
    address: string
    type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    chain: ChainCreateNestedOneWithoutContractsInput
  }

  export type ContractUncheckedCreateInput = {
    id?: number
    chainId: number
    address: string
    type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ContractUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chain?: ChainUpdateOneRequiredWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyInput = {
    id?: number
    chainId: number
    address: string
    type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawEventCreateInput = {
    id?: bigint | number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventSignature?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    chain: ChainCreateNestedOneWithoutRawEventsInput
  }

  export type RawEventUncheckedCreateInput = {
    id?: bigint | number
    chainId: number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventSignature?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RawEventUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventSignature?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chain?: ChainUpdateOneRequiredWithoutRawEventsNestedInput
  }

  export type RawEventUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chainId?: IntFieldUpdateOperationsInput | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventSignature?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawEventCreateManyInput = {
    id?: bigint | number
    chainId: number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventSignature?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RawEventUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventSignature?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawEventUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chainId?: IntFieldUpdateOperationsInput | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventSignature?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexedEventCreateInput = {
    id?: bigint | number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventType: string
    contractAddress: string
    from?: string | null
    to?: string | null
    value?: string | null
    tokenId?: string | null
    amount?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
    isCanonical?: boolean
    version?: number
    createdAt?: Date | string
    effectiveGasPrice?: string | null
    gasPrice?: string | null
    gasUsed?: string | null
    gasLimit?: string | null
    input?: string | null
    maxFeePerGas?: string | null
    maxPriorityFeePerGas?: string | null
    nonce?: number | null
    transactionIndex?: number | null
    txType?: number | null
    chain: ChainCreateNestedOneWithoutIndexedEventsInput
  }

  export type IndexedEventUncheckedCreateInput = {
    id?: bigint | number
    chainId: number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventType: string
    contractAddress: string
    from?: string | null
    to?: string | null
    value?: string | null
    tokenId?: string | null
    amount?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
    isCanonical?: boolean
    version?: number
    createdAt?: Date | string
    effectiveGasPrice?: string | null
    gasPrice?: string | null
    gasUsed?: string | null
    gasLimit?: string | null
    input?: string | null
    maxFeePerGas?: string | null
    maxPriorityFeePerGas?: string | null
    nonce?: number | null
    transactionIndex?: number | null
    txType?: number | null
  }

  export type IndexedEventUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveGasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    gasLimit?: NullableStringFieldUpdateOperationsInput | string | null
    input?: NullableStringFieldUpdateOperationsInput | string | null
    maxFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    maxPriorityFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    nonce?: NullableIntFieldUpdateOperationsInput | number | null
    transactionIndex?: NullableIntFieldUpdateOperationsInput | number | null
    txType?: NullableIntFieldUpdateOperationsInput | number | null
    chain?: ChainUpdateOneRequiredWithoutIndexedEventsNestedInput
  }

  export type IndexedEventUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chainId?: IntFieldUpdateOperationsInput | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveGasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    gasLimit?: NullableStringFieldUpdateOperationsInput | string | null
    input?: NullableStringFieldUpdateOperationsInput | string | null
    maxFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    maxPriorityFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    nonce?: NullableIntFieldUpdateOperationsInput | number | null
    transactionIndex?: NullableIntFieldUpdateOperationsInput | number | null
    txType?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IndexedEventCreateManyInput = {
    id?: bigint | number
    chainId: number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventType: string
    contractAddress: string
    from?: string | null
    to?: string | null
    value?: string | null
    tokenId?: string | null
    amount?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
    isCanonical?: boolean
    version?: number
    createdAt?: Date | string
    effectiveGasPrice?: string | null
    gasPrice?: string | null
    gasUsed?: string | null
    gasLimit?: string | null
    input?: string | null
    maxFeePerGas?: string | null
    maxPriorityFeePerGas?: string | null
    nonce?: number | null
    transactionIndex?: number | null
    txType?: number | null
  }

  export type IndexedEventUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveGasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    gasLimit?: NullableStringFieldUpdateOperationsInput | string | null
    input?: NullableStringFieldUpdateOperationsInput | string | null
    maxFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    maxPriorityFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    nonce?: NullableIntFieldUpdateOperationsInput | number | null
    transactionIndex?: NullableIntFieldUpdateOperationsInput | number | null
    txType?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IndexedEventUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chainId?: IntFieldUpdateOperationsInput | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveGasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    gasLimit?: NullableStringFieldUpdateOperationsInput | string | null
    input?: NullableStringFieldUpdateOperationsInput | string | null
    maxFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    maxPriorityFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    nonce?: NullableIntFieldUpdateOperationsInput | number | null
    transactionIndex?: NullableIntFieldUpdateOperationsInput | number | null
    txType?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    key: string
    name?: string | null
    isActive?: boolean
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    user: UserCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    key: string
    userId: string
    name?: string | null
    isActive?: boolean
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    key: string
    userId: string
    name?: string | null
    isActive?: boolean
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ErrorLogCreateInput = {
    id?: bigint | number
    chainId?: number | null
    errorType: string
    errorSource: string
    errorMessage: string
    stackTrace?: string | null
    context?: NullableJsonNullValueInput | InputJsonValue
    severity?: string
    isResolved?: boolean
    retryCount?: number
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type ErrorLogUncheckedCreateInput = {
    id?: bigint | number
    chainId?: number | null
    errorType: string
    errorSource: string
    errorMessage: string
    stackTrace?: string | null
    context?: NullableJsonNullValueInput | InputJsonValue
    severity?: string
    isResolved?: boolean
    retryCount?: number
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type ErrorLogUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chainId?: NullableIntFieldUpdateOperationsInput | number | null
    errorType?: StringFieldUpdateOperationsInput | string
    errorSource?: StringFieldUpdateOperationsInput | string
    errorMessage?: StringFieldUpdateOperationsInput | string
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableJsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ErrorLogUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chainId?: NullableIntFieldUpdateOperationsInput | number | null
    errorType?: StringFieldUpdateOperationsInput | string
    errorSource?: StringFieldUpdateOperationsInput | string
    errorMessage?: StringFieldUpdateOperationsInput | string
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableJsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ErrorLogCreateManyInput = {
    id?: bigint | number
    chainId?: number | null
    errorType: string
    errorSource: string
    errorMessage: string
    stackTrace?: string | null
    context?: NullableJsonNullValueInput | InputJsonValue
    severity?: string
    isResolved?: boolean
    retryCount?: number
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type ErrorLogUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chainId?: NullableIntFieldUpdateOperationsInput | number | null
    errorType?: StringFieldUpdateOperationsInput | string
    errorSource?: StringFieldUpdateOperationsInput | string
    errorMessage?: StringFieldUpdateOperationsInput | string
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableJsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ErrorLogUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chainId?: NullableIntFieldUpdateOperationsInput | number | null
    errorType?: StringFieldUpdateOperationsInput | string
    errorSource?: StringFieldUpdateOperationsInput | string
    errorMessage?: StringFieldUpdateOperationsInput | string
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableJsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BlockListRelationFilter = {
    every?: BlockWhereInput
    some?: BlockWhereInput
    none?: BlockWhereInput
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type IndexedEventListRelationFilter = {
    every?: IndexedEventWhereInput
    some?: IndexedEventWhereInput
    none?: IndexedEventWhereInput
  }

  export type RawEventListRelationFilter = {
    every?: RawEventWhereInput
    some?: RawEventWhereInput
    none?: RawEventWhereInput
  }

  export type BlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndexedEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RawEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChainCountOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    name?: SortOrder
    rpcUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChainAvgOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
  }

  export type ChainMaxOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    name?: SortOrder
    rpcUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChainMinOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    name?: SortOrder
    rpcUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChainSumOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChainRelationFilter = {
    is?: ChainWhereInput
    isNot?: ChainWhereInput
  }

  export type BlockChainIdNumberCompoundUniqueInput = {
    chainId: number
    number: bigint | number
  }

  export type BlockChainIdHashCompoundUniqueInput = {
    chainId: number
    hash: string
  }

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    number?: SortOrder
    hash?: SortOrder
    parentHash?: SortOrder
    timestamp?: SortOrder
    isCanonical?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockAvgOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    number?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    number?: SortOrder
    hash?: SortOrder
    parentHash?: SortOrder
    timestamp?: SortOrder
    isCanonical?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    number?: SortOrder
    hash?: SortOrder
    parentHash?: SortOrder
    timestamp?: SortOrder
    isCanonical?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockSumOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    number?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContractChainIdAddressCompoundUniqueInput = {
    chainId: number
    address: string
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    address?: SortOrder
    type?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RawEventChainIdTxHashLogIndexCompoundUniqueInput = {
    chainId: number
    txHash: string
    logIndex: number
  }

  export type RawEventCountOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventSignature?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type RawEventAvgOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    logIndex?: SortOrder
  }

  export type RawEventMaxOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventSignature?: SortOrder
    createdAt?: SortOrder
  }

  export type RawEventMinOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventSignature?: SortOrder
    createdAt?: SortOrder
  }

  export type RawEventSumOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    logIndex?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IndexedEventChainIdTxHashLogIndexVersionCompoundUniqueInput = {
    chainId: number
    txHash: string
    logIndex: number
    version: number
  }

  export type IndexedEventCountOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventType?: SortOrder
    contractAddress?: SortOrder
    from?: SortOrder
    to?: SortOrder
    value?: SortOrder
    tokenId?: SortOrder
    amount?: SortOrder
    metadata?: SortOrder
    timestamp?: SortOrder
    isCanonical?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    effectiveGasPrice?: SortOrder
    gasPrice?: SortOrder
    gasUsed?: SortOrder
    gasLimit?: SortOrder
    input?: SortOrder
    maxFeePerGas?: SortOrder
    maxPriorityFeePerGas?: SortOrder
    nonce?: SortOrder
    transactionIndex?: SortOrder
    txType?: SortOrder
  }

  export type IndexedEventAvgOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    logIndex?: SortOrder
    version?: SortOrder
    nonce?: SortOrder
    transactionIndex?: SortOrder
    txType?: SortOrder
  }

  export type IndexedEventMaxOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventType?: SortOrder
    contractAddress?: SortOrder
    from?: SortOrder
    to?: SortOrder
    value?: SortOrder
    tokenId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    isCanonical?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    effectiveGasPrice?: SortOrder
    gasPrice?: SortOrder
    gasUsed?: SortOrder
    gasLimit?: SortOrder
    input?: SortOrder
    maxFeePerGas?: SortOrder
    maxPriorityFeePerGas?: SortOrder
    nonce?: SortOrder
    transactionIndex?: SortOrder
    txType?: SortOrder
  }

  export type IndexedEventMinOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventType?: SortOrder
    contractAddress?: SortOrder
    from?: SortOrder
    to?: SortOrder
    value?: SortOrder
    tokenId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    isCanonical?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    effectiveGasPrice?: SortOrder
    gasPrice?: SortOrder
    gasUsed?: SortOrder
    gasLimit?: SortOrder
    input?: SortOrder
    maxFeePerGas?: SortOrder
    maxPriorityFeePerGas?: SortOrder
    nonce?: SortOrder
    transactionIndex?: SortOrder
    txType?: SortOrder
  }

  export type IndexedEventSumOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    blockNumber?: SortOrder
    logIndex?: SortOrder
    version?: SortOrder
    nonce?: SortOrder
    transactionIndex?: SortOrder
    txType?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ErrorLogCountOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    errorType?: SortOrder
    errorSource?: SortOrder
    errorMessage?: SortOrder
    stackTrace?: SortOrder
    context?: SortOrder
    severity?: SortOrder
    isResolved?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type ErrorLogAvgOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    retryCount?: SortOrder
  }

  export type ErrorLogMaxOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    errorType?: SortOrder
    errorSource?: SortOrder
    errorMessage?: SortOrder
    stackTrace?: SortOrder
    severity?: SortOrder
    isResolved?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type ErrorLogMinOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    errorType?: SortOrder
    errorSource?: SortOrder
    errorMessage?: SortOrder
    stackTrace?: SortOrder
    severity?: SortOrder
    isResolved?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type ErrorLogSumOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    retryCount?: SortOrder
  }

  export type BlockCreateNestedManyWithoutChainInput = {
    create?: XOR<BlockCreateWithoutChainInput, BlockUncheckedCreateWithoutChainInput> | BlockCreateWithoutChainInput[] | BlockUncheckedCreateWithoutChainInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutChainInput | BlockCreateOrConnectWithoutChainInput[]
    createMany?: BlockCreateManyChainInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutChainInput = {
    create?: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput> | ContractCreateWithoutChainInput[] | ContractUncheckedCreateWithoutChainInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutChainInput | ContractCreateOrConnectWithoutChainInput[]
    createMany?: ContractCreateManyChainInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type IndexedEventCreateNestedManyWithoutChainInput = {
    create?: XOR<IndexedEventCreateWithoutChainInput, IndexedEventUncheckedCreateWithoutChainInput> | IndexedEventCreateWithoutChainInput[] | IndexedEventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: IndexedEventCreateOrConnectWithoutChainInput | IndexedEventCreateOrConnectWithoutChainInput[]
    createMany?: IndexedEventCreateManyChainInputEnvelope
    connect?: IndexedEventWhereUniqueInput | IndexedEventWhereUniqueInput[]
  }

  export type RawEventCreateNestedManyWithoutChainInput = {
    create?: XOR<RawEventCreateWithoutChainInput, RawEventUncheckedCreateWithoutChainInput> | RawEventCreateWithoutChainInput[] | RawEventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: RawEventCreateOrConnectWithoutChainInput | RawEventCreateOrConnectWithoutChainInput[]
    createMany?: RawEventCreateManyChainInputEnvelope
    connect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
  }

  export type BlockUncheckedCreateNestedManyWithoutChainInput = {
    create?: XOR<BlockCreateWithoutChainInput, BlockUncheckedCreateWithoutChainInput> | BlockCreateWithoutChainInput[] | BlockUncheckedCreateWithoutChainInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutChainInput | BlockCreateOrConnectWithoutChainInput[]
    createMany?: BlockCreateManyChainInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutChainInput = {
    create?: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput> | ContractCreateWithoutChainInput[] | ContractUncheckedCreateWithoutChainInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutChainInput | ContractCreateOrConnectWithoutChainInput[]
    createMany?: ContractCreateManyChainInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type IndexedEventUncheckedCreateNestedManyWithoutChainInput = {
    create?: XOR<IndexedEventCreateWithoutChainInput, IndexedEventUncheckedCreateWithoutChainInput> | IndexedEventCreateWithoutChainInput[] | IndexedEventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: IndexedEventCreateOrConnectWithoutChainInput | IndexedEventCreateOrConnectWithoutChainInput[]
    createMany?: IndexedEventCreateManyChainInputEnvelope
    connect?: IndexedEventWhereUniqueInput | IndexedEventWhereUniqueInput[]
  }

  export type RawEventUncheckedCreateNestedManyWithoutChainInput = {
    create?: XOR<RawEventCreateWithoutChainInput, RawEventUncheckedCreateWithoutChainInput> | RawEventCreateWithoutChainInput[] | RawEventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: RawEventCreateOrConnectWithoutChainInput | RawEventCreateOrConnectWithoutChainInput[]
    createMany?: RawEventCreateManyChainInputEnvelope
    connect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BlockUpdateManyWithoutChainNestedInput = {
    create?: XOR<BlockCreateWithoutChainInput, BlockUncheckedCreateWithoutChainInput> | BlockCreateWithoutChainInput[] | BlockUncheckedCreateWithoutChainInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutChainInput | BlockCreateOrConnectWithoutChainInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutChainInput | BlockUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: BlockCreateManyChainInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutChainInput | BlockUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutChainInput | BlockUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutChainNestedInput = {
    create?: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput> | ContractCreateWithoutChainInput[] | ContractUncheckedCreateWithoutChainInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutChainInput | ContractCreateOrConnectWithoutChainInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutChainInput | ContractUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: ContractCreateManyChainInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutChainInput | ContractUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutChainInput | ContractUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type IndexedEventUpdateManyWithoutChainNestedInput = {
    create?: XOR<IndexedEventCreateWithoutChainInput, IndexedEventUncheckedCreateWithoutChainInput> | IndexedEventCreateWithoutChainInput[] | IndexedEventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: IndexedEventCreateOrConnectWithoutChainInput | IndexedEventCreateOrConnectWithoutChainInput[]
    upsert?: IndexedEventUpsertWithWhereUniqueWithoutChainInput | IndexedEventUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: IndexedEventCreateManyChainInputEnvelope
    set?: IndexedEventWhereUniqueInput | IndexedEventWhereUniqueInput[]
    disconnect?: IndexedEventWhereUniqueInput | IndexedEventWhereUniqueInput[]
    delete?: IndexedEventWhereUniqueInput | IndexedEventWhereUniqueInput[]
    connect?: IndexedEventWhereUniqueInput | IndexedEventWhereUniqueInput[]
    update?: IndexedEventUpdateWithWhereUniqueWithoutChainInput | IndexedEventUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: IndexedEventUpdateManyWithWhereWithoutChainInput | IndexedEventUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: IndexedEventScalarWhereInput | IndexedEventScalarWhereInput[]
  }

  export type RawEventUpdateManyWithoutChainNestedInput = {
    create?: XOR<RawEventCreateWithoutChainInput, RawEventUncheckedCreateWithoutChainInput> | RawEventCreateWithoutChainInput[] | RawEventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: RawEventCreateOrConnectWithoutChainInput | RawEventCreateOrConnectWithoutChainInput[]
    upsert?: RawEventUpsertWithWhereUniqueWithoutChainInput | RawEventUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: RawEventCreateManyChainInputEnvelope
    set?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    disconnect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    delete?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    connect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    update?: RawEventUpdateWithWhereUniqueWithoutChainInput | RawEventUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: RawEventUpdateManyWithWhereWithoutChainInput | RawEventUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: RawEventScalarWhereInput | RawEventScalarWhereInput[]
  }

  export type BlockUncheckedUpdateManyWithoutChainNestedInput = {
    create?: XOR<BlockCreateWithoutChainInput, BlockUncheckedCreateWithoutChainInput> | BlockCreateWithoutChainInput[] | BlockUncheckedCreateWithoutChainInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutChainInput | BlockCreateOrConnectWithoutChainInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutChainInput | BlockUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: BlockCreateManyChainInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutChainInput | BlockUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutChainInput | BlockUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutChainNestedInput = {
    create?: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput> | ContractCreateWithoutChainInput[] | ContractUncheckedCreateWithoutChainInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutChainInput | ContractCreateOrConnectWithoutChainInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutChainInput | ContractUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: ContractCreateManyChainInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutChainInput | ContractUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutChainInput | ContractUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type IndexedEventUncheckedUpdateManyWithoutChainNestedInput = {
    create?: XOR<IndexedEventCreateWithoutChainInput, IndexedEventUncheckedCreateWithoutChainInput> | IndexedEventCreateWithoutChainInput[] | IndexedEventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: IndexedEventCreateOrConnectWithoutChainInput | IndexedEventCreateOrConnectWithoutChainInput[]
    upsert?: IndexedEventUpsertWithWhereUniqueWithoutChainInput | IndexedEventUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: IndexedEventCreateManyChainInputEnvelope
    set?: IndexedEventWhereUniqueInput | IndexedEventWhereUniqueInput[]
    disconnect?: IndexedEventWhereUniqueInput | IndexedEventWhereUniqueInput[]
    delete?: IndexedEventWhereUniqueInput | IndexedEventWhereUniqueInput[]
    connect?: IndexedEventWhereUniqueInput | IndexedEventWhereUniqueInput[]
    update?: IndexedEventUpdateWithWhereUniqueWithoutChainInput | IndexedEventUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: IndexedEventUpdateManyWithWhereWithoutChainInput | IndexedEventUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: IndexedEventScalarWhereInput | IndexedEventScalarWhereInput[]
  }

  export type RawEventUncheckedUpdateManyWithoutChainNestedInput = {
    create?: XOR<RawEventCreateWithoutChainInput, RawEventUncheckedCreateWithoutChainInput> | RawEventCreateWithoutChainInput[] | RawEventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: RawEventCreateOrConnectWithoutChainInput | RawEventCreateOrConnectWithoutChainInput[]
    upsert?: RawEventUpsertWithWhereUniqueWithoutChainInput | RawEventUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: RawEventCreateManyChainInputEnvelope
    set?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    disconnect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    delete?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    connect?: RawEventWhereUniqueInput | RawEventWhereUniqueInput[]
    update?: RawEventUpdateWithWhereUniqueWithoutChainInput | RawEventUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: RawEventUpdateManyWithWhereWithoutChainInput | RawEventUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: RawEventScalarWhereInput | RawEventScalarWhereInput[]
  }

  export type ChainCreateNestedOneWithoutBlocksInput = {
    create?: XOR<ChainCreateWithoutBlocksInput, ChainUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: ChainCreateOrConnectWithoutBlocksInput
    connect?: ChainWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChainUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<ChainCreateWithoutBlocksInput, ChainUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: ChainCreateOrConnectWithoutBlocksInput
    upsert?: ChainUpsertWithoutBlocksInput
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutBlocksInput, ChainUpdateWithoutBlocksInput>, ChainUncheckedUpdateWithoutBlocksInput>
  }

  export type ChainCreateNestedOneWithoutContractsInput = {
    create?: XOR<ChainCreateWithoutContractsInput, ChainUncheckedCreateWithoutContractsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutContractsInput
    connect?: ChainWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ChainUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<ChainCreateWithoutContractsInput, ChainUncheckedCreateWithoutContractsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutContractsInput
    upsert?: ChainUpsertWithoutContractsInput
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutContractsInput, ChainUpdateWithoutContractsInput>, ChainUncheckedUpdateWithoutContractsInput>
  }

  export type ChainCreateNestedOneWithoutRawEventsInput = {
    create?: XOR<ChainCreateWithoutRawEventsInput, ChainUncheckedCreateWithoutRawEventsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutRawEventsInput
    connect?: ChainWhereUniqueInput
  }

  export type ChainUpdateOneRequiredWithoutRawEventsNestedInput = {
    create?: XOR<ChainCreateWithoutRawEventsInput, ChainUncheckedCreateWithoutRawEventsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutRawEventsInput
    upsert?: ChainUpsertWithoutRawEventsInput
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutRawEventsInput, ChainUpdateWithoutRawEventsInput>, ChainUncheckedUpdateWithoutRawEventsInput>
  }

  export type ChainCreateNestedOneWithoutIndexedEventsInput = {
    create?: XOR<ChainCreateWithoutIndexedEventsInput, ChainUncheckedCreateWithoutIndexedEventsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutIndexedEventsInput
    connect?: ChainWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChainUpdateOneRequiredWithoutIndexedEventsNestedInput = {
    create?: XOR<ChainCreateWithoutIndexedEventsInput, ChainUncheckedCreateWithoutIndexedEventsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutIndexedEventsInput
    upsert?: ChainUpsertWithoutIndexedEventsInput
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutIndexedEventsInput, ChainUpdateWithoutIndexedEventsInput>, ChainUncheckedUpdateWithoutIndexedEventsInput>
  }

  export type ApiKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ApiKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    upsert?: UserUpsertWithoutApiKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiKeysInput, UserUpdateWithoutApiKeysInput>, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BlockCreateWithoutChainInput = {
    number: bigint | number
    hash: string
    parentHash: string
    timestamp: Date | string
    isCanonical?: boolean
    createdAt?: Date | string
  }

  export type BlockUncheckedCreateWithoutChainInput = {
    id?: number
    number: bigint | number
    hash: string
    parentHash: string
    timestamp: Date | string
    isCanonical?: boolean
    createdAt?: Date | string
  }

  export type BlockCreateOrConnectWithoutChainInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutChainInput, BlockUncheckedCreateWithoutChainInput>
  }

  export type BlockCreateManyChainInputEnvelope = {
    data: BlockCreateManyChainInput | BlockCreateManyChainInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutChainInput = {
    address: string
    type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ContractUncheckedCreateWithoutChainInput = {
    id?: number
    address: string
    type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutChainInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput>
  }

  export type ContractCreateManyChainInputEnvelope = {
    data: ContractCreateManyChainInput | ContractCreateManyChainInput[]
    skipDuplicates?: boolean
  }

  export type IndexedEventCreateWithoutChainInput = {
    id?: bigint | number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventType: string
    contractAddress: string
    from?: string | null
    to?: string | null
    value?: string | null
    tokenId?: string | null
    amount?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
    isCanonical?: boolean
    version?: number
    createdAt?: Date | string
    effectiveGasPrice?: string | null
    gasPrice?: string | null
    gasUsed?: string | null
    gasLimit?: string | null
    input?: string | null
    maxFeePerGas?: string | null
    maxPriorityFeePerGas?: string | null
    nonce?: number | null
    transactionIndex?: number | null
    txType?: number | null
  }

  export type IndexedEventUncheckedCreateWithoutChainInput = {
    id?: bigint | number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventType: string
    contractAddress: string
    from?: string | null
    to?: string | null
    value?: string | null
    tokenId?: string | null
    amount?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
    isCanonical?: boolean
    version?: number
    createdAt?: Date | string
    effectiveGasPrice?: string | null
    gasPrice?: string | null
    gasUsed?: string | null
    gasLimit?: string | null
    input?: string | null
    maxFeePerGas?: string | null
    maxPriorityFeePerGas?: string | null
    nonce?: number | null
    transactionIndex?: number | null
    txType?: number | null
  }

  export type IndexedEventCreateOrConnectWithoutChainInput = {
    where: IndexedEventWhereUniqueInput
    create: XOR<IndexedEventCreateWithoutChainInput, IndexedEventUncheckedCreateWithoutChainInput>
  }

  export type IndexedEventCreateManyChainInputEnvelope = {
    data: IndexedEventCreateManyChainInput | IndexedEventCreateManyChainInput[]
    skipDuplicates?: boolean
  }

  export type RawEventCreateWithoutChainInput = {
    id?: bigint | number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventSignature?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RawEventUncheckedCreateWithoutChainInput = {
    id?: bigint | number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventSignature?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RawEventCreateOrConnectWithoutChainInput = {
    where: RawEventWhereUniqueInput
    create: XOR<RawEventCreateWithoutChainInput, RawEventUncheckedCreateWithoutChainInput>
  }

  export type RawEventCreateManyChainInputEnvelope = {
    data: RawEventCreateManyChainInput | RawEventCreateManyChainInput[]
    skipDuplicates?: boolean
  }

  export type BlockUpsertWithWhereUniqueWithoutChainInput = {
    where: BlockWhereUniqueInput
    update: XOR<BlockUpdateWithoutChainInput, BlockUncheckedUpdateWithoutChainInput>
    create: XOR<BlockCreateWithoutChainInput, BlockUncheckedCreateWithoutChainInput>
  }

  export type BlockUpdateWithWhereUniqueWithoutChainInput = {
    where: BlockWhereUniqueInput
    data: XOR<BlockUpdateWithoutChainInput, BlockUncheckedUpdateWithoutChainInput>
  }

  export type BlockUpdateManyWithWhereWithoutChainInput = {
    where: BlockScalarWhereInput
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyWithoutChainInput>
  }

  export type BlockScalarWhereInput = {
    AND?: BlockScalarWhereInput | BlockScalarWhereInput[]
    OR?: BlockScalarWhereInput[]
    NOT?: BlockScalarWhereInput | BlockScalarWhereInput[]
    id?: IntFilter<"Block"> | number
    chainId?: IntFilter<"Block"> | number
    number?: BigIntFilter<"Block"> | bigint | number
    hash?: StringFilter<"Block"> | string
    parentHash?: StringFilter<"Block"> | string
    timestamp?: DateTimeFilter<"Block"> | Date | string
    isCanonical?: BoolFilter<"Block"> | boolean
    createdAt?: DateTimeFilter<"Block"> | Date | string
  }

  export type ContractUpsertWithWhereUniqueWithoutChainInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutChainInput, ContractUncheckedUpdateWithoutChainInput>
    create: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutChainInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutChainInput, ContractUncheckedUpdateWithoutChainInput>
  }

  export type ContractUpdateManyWithWhereWithoutChainInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutChainInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: IntFilter<"Contract"> | number
    chainId?: IntFilter<"Contract"> | number
    address?: StringFilter<"Contract"> | string
    type?: StringNullableFilter<"Contract"> | string | null
    metadata?: JsonNullableFilter<"Contract">
    createdAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type IndexedEventUpsertWithWhereUniqueWithoutChainInput = {
    where: IndexedEventWhereUniqueInput
    update: XOR<IndexedEventUpdateWithoutChainInput, IndexedEventUncheckedUpdateWithoutChainInput>
    create: XOR<IndexedEventCreateWithoutChainInput, IndexedEventUncheckedCreateWithoutChainInput>
  }

  export type IndexedEventUpdateWithWhereUniqueWithoutChainInput = {
    where: IndexedEventWhereUniqueInput
    data: XOR<IndexedEventUpdateWithoutChainInput, IndexedEventUncheckedUpdateWithoutChainInput>
  }

  export type IndexedEventUpdateManyWithWhereWithoutChainInput = {
    where: IndexedEventScalarWhereInput
    data: XOR<IndexedEventUpdateManyMutationInput, IndexedEventUncheckedUpdateManyWithoutChainInput>
  }

  export type IndexedEventScalarWhereInput = {
    AND?: IndexedEventScalarWhereInput | IndexedEventScalarWhereInput[]
    OR?: IndexedEventScalarWhereInput[]
    NOT?: IndexedEventScalarWhereInput | IndexedEventScalarWhereInput[]
    id?: BigIntFilter<"IndexedEvent"> | bigint | number
    chainId?: IntFilter<"IndexedEvent"> | number
    blockNumber?: BigIntFilter<"IndexedEvent"> | bigint | number
    txHash?: StringFilter<"IndexedEvent"> | string
    logIndex?: IntFilter<"IndexedEvent"> | number
    eventType?: StringFilter<"IndexedEvent"> | string
    contractAddress?: StringFilter<"IndexedEvent"> | string
    from?: StringNullableFilter<"IndexedEvent"> | string | null
    to?: StringNullableFilter<"IndexedEvent"> | string | null
    value?: StringNullableFilter<"IndexedEvent"> | string | null
    tokenId?: StringNullableFilter<"IndexedEvent"> | string | null
    amount?: StringNullableFilter<"IndexedEvent"> | string | null
    metadata?: JsonNullableFilter<"IndexedEvent">
    timestamp?: DateTimeFilter<"IndexedEvent"> | Date | string
    isCanonical?: BoolFilter<"IndexedEvent"> | boolean
    version?: IntFilter<"IndexedEvent"> | number
    createdAt?: DateTimeFilter<"IndexedEvent"> | Date | string
    effectiveGasPrice?: StringNullableFilter<"IndexedEvent"> | string | null
    gasPrice?: StringNullableFilter<"IndexedEvent"> | string | null
    gasUsed?: StringNullableFilter<"IndexedEvent"> | string | null
    gasLimit?: StringNullableFilter<"IndexedEvent"> | string | null
    input?: StringNullableFilter<"IndexedEvent"> | string | null
    maxFeePerGas?: StringNullableFilter<"IndexedEvent"> | string | null
    maxPriorityFeePerGas?: StringNullableFilter<"IndexedEvent"> | string | null
    nonce?: IntNullableFilter<"IndexedEvent"> | number | null
    transactionIndex?: IntNullableFilter<"IndexedEvent"> | number | null
    txType?: IntNullableFilter<"IndexedEvent"> | number | null
  }

  export type RawEventUpsertWithWhereUniqueWithoutChainInput = {
    where: RawEventWhereUniqueInput
    update: XOR<RawEventUpdateWithoutChainInput, RawEventUncheckedUpdateWithoutChainInput>
    create: XOR<RawEventCreateWithoutChainInput, RawEventUncheckedCreateWithoutChainInput>
  }

  export type RawEventUpdateWithWhereUniqueWithoutChainInput = {
    where: RawEventWhereUniqueInput
    data: XOR<RawEventUpdateWithoutChainInput, RawEventUncheckedUpdateWithoutChainInput>
  }

  export type RawEventUpdateManyWithWhereWithoutChainInput = {
    where: RawEventScalarWhereInput
    data: XOR<RawEventUpdateManyMutationInput, RawEventUncheckedUpdateManyWithoutChainInput>
  }

  export type RawEventScalarWhereInput = {
    AND?: RawEventScalarWhereInput | RawEventScalarWhereInput[]
    OR?: RawEventScalarWhereInput[]
    NOT?: RawEventScalarWhereInput | RawEventScalarWhereInput[]
    id?: BigIntFilter<"RawEvent"> | bigint | number
    chainId?: IntFilter<"RawEvent"> | number
    blockNumber?: BigIntFilter<"RawEvent"> | bigint | number
    txHash?: StringFilter<"RawEvent"> | string
    logIndex?: IntFilter<"RawEvent"> | number
    eventSignature?: StringNullableFilter<"RawEvent"> | string | null
    data?: JsonFilter<"RawEvent">
    createdAt?: DateTimeFilter<"RawEvent"> | Date | string
  }

  export type ChainCreateWithoutBlocksInput = {
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractCreateNestedManyWithoutChainInput
    indexedEvents?: IndexedEventCreateNestedManyWithoutChainInput
    rawEvents?: RawEventCreateNestedManyWithoutChainInput
  }

  export type ChainUncheckedCreateWithoutBlocksInput = {
    id?: number
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractUncheckedCreateNestedManyWithoutChainInput
    indexedEvents?: IndexedEventUncheckedCreateNestedManyWithoutChainInput
    rawEvents?: RawEventUncheckedCreateNestedManyWithoutChainInput
  }

  export type ChainCreateOrConnectWithoutBlocksInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutBlocksInput, ChainUncheckedCreateWithoutBlocksInput>
  }

  export type ChainUpsertWithoutBlocksInput = {
    update: XOR<ChainUpdateWithoutBlocksInput, ChainUncheckedUpdateWithoutBlocksInput>
    create: XOR<ChainCreateWithoutBlocksInput, ChainUncheckedCreateWithoutBlocksInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutBlocksInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutBlocksInput, ChainUncheckedUpdateWithoutBlocksInput>
  }

  export type ChainUpdateWithoutBlocksInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUpdateManyWithoutChainNestedInput
    indexedEvents?: IndexedEventUpdateManyWithoutChainNestedInput
    rawEvents?: RawEventUpdateManyWithoutChainNestedInput
  }

  export type ChainUncheckedUpdateWithoutBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUncheckedUpdateManyWithoutChainNestedInput
    indexedEvents?: IndexedEventUncheckedUpdateManyWithoutChainNestedInput
    rawEvents?: RawEventUncheckedUpdateManyWithoutChainNestedInput
  }

  export type ChainCreateWithoutContractsInput = {
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockCreateNestedManyWithoutChainInput
    indexedEvents?: IndexedEventCreateNestedManyWithoutChainInput
    rawEvents?: RawEventCreateNestedManyWithoutChainInput
  }

  export type ChainUncheckedCreateWithoutContractsInput = {
    id?: number
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutChainInput
    indexedEvents?: IndexedEventUncheckedCreateNestedManyWithoutChainInput
    rawEvents?: RawEventUncheckedCreateNestedManyWithoutChainInput
  }

  export type ChainCreateOrConnectWithoutContractsInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutContractsInput, ChainUncheckedCreateWithoutContractsInput>
  }

  export type ChainUpsertWithoutContractsInput = {
    update: XOR<ChainUpdateWithoutContractsInput, ChainUncheckedUpdateWithoutContractsInput>
    create: XOR<ChainCreateWithoutContractsInput, ChainUncheckedCreateWithoutContractsInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutContractsInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutContractsInput, ChainUncheckedUpdateWithoutContractsInput>
  }

  export type ChainUpdateWithoutContractsInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUpdateManyWithoutChainNestedInput
    indexedEvents?: IndexedEventUpdateManyWithoutChainNestedInput
    rawEvents?: RawEventUpdateManyWithoutChainNestedInput
  }

  export type ChainUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutChainNestedInput
    indexedEvents?: IndexedEventUncheckedUpdateManyWithoutChainNestedInput
    rawEvents?: RawEventUncheckedUpdateManyWithoutChainNestedInput
  }

  export type ChainCreateWithoutRawEventsInput = {
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockCreateNestedManyWithoutChainInput
    contracts?: ContractCreateNestedManyWithoutChainInput
    indexedEvents?: IndexedEventCreateNestedManyWithoutChainInput
  }

  export type ChainUncheckedCreateWithoutRawEventsInput = {
    id?: number
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutChainInput
    contracts?: ContractUncheckedCreateNestedManyWithoutChainInput
    indexedEvents?: IndexedEventUncheckedCreateNestedManyWithoutChainInput
  }

  export type ChainCreateOrConnectWithoutRawEventsInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutRawEventsInput, ChainUncheckedCreateWithoutRawEventsInput>
  }

  export type ChainUpsertWithoutRawEventsInput = {
    update: XOR<ChainUpdateWithoutRawEventsInput, ChainUncheckedUpdateWithoutRawEventsInput>
    create: XOR<ChainCreateWithoutRawEventsInput, ChainUncheckedCreateWithoutRawEventsInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutRawEventsInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutRawEventsInput, ChainUncheckedUpdateWithoutRawEventsInput>
  }

  export type ChainUpdateWithoutRawEventsInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUpdateManyWithoutChainNestedInput
    contracts?: ContractUpdateManyWithoutChainNestedInput
    indexedEvents?: IndexedEventUpdateManyWithoutChainNestedInput
  }

  export type ChainUncheckedUpdateWithoutRawEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutChainNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutChainNestedInput
    indexedEvents?: IndexedEventUncheckedUpdateManyWithoutChainNestedInput
  }

  export type ChainCreateWithoutIndexedEventsInput = {
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockCreateNestedManyWithoutChainInput
    contracts?: ContractCreateNestedManyWithoutChainInput
    rawEvents?: RawEventCreateNestedManyWithoutChainInput
  }

  export type ChainUncheckedCreateWithoutIndexedEventsInput = {
    id?: number
    chainId: number
    name: string
    rpcUrl: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutChainInput
    contracts?: ContractUncheckedCreateNestedManyWithoutChainInput
    rawEvents?: RawEventUncheckedCreateNestedManyWithoutChainInput
  }

  export type ChainCreateOrConnectWithoutIndexedEventsInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutIndexedEventsInput, ChainUncheckedCreateWithoutIndexedEventsInput>
  }

  export type ChainUpsertWithoutIndexedEventsInput = {
    update: XOR<ChainUpdateWithoutIndexedEventsInput, ChainUncheckedUpdateWithoutIndexedEventsInput>
    create: XOR<ChainCreateWithoutIndexedEventsInput, ChainUncheckedCreateWithoutIndexedEventsInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutIndexedEventsInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutIndexedEventsInput, ChainUncheckedUpdateWithoutIndexedEventsInput>
  }

  export type ChainUpdateWithoutIndexedEventsInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUpdateManyWithoutChainNestedInput
    contracts?: ContractUpdateManyWithoutChainNestedInput
    rawEvents?: RawEventUpdateManyWithoutChainNestedInput
  }

  export type ChainUncheckedUpdateWithoutIndexedEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rpcUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutChainNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutChainNestedInput
    rawEvents?: RawEventUncheckedUpdateManyWithoutChainNestedInput
  }

  export type ApiKeyCreateWithoutUserInput = {
    id?: string
    key: string
    name?: string | null
    isActive?: boolean
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
  }

  export type ApiKeyUncheckedCreateWithoutUserInput = {
    id?: string
    key: string
    name?: string | null
    isActive?: boolean
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
  }

  export type ApiKeyCreateOrConnectWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreateManyUserInputEnvelope = {
    data: ApiKeyCreateManyUserInput | ApiKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    name?: StringNullableFilter<"ApiKey"> | string | null
    isActive?: BoolFilter<"ApiKey"> | boolean
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
  }

  export type UserCreateWithoutApiKeysInput = {
    id?: string
    email: string
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: string
    email: string
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type UserUpsertWithoutApiKeysInput = {
    update: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateManyChainInput = {
    id?: number
    number: bigint | number
    hash: string
    parentHash: string
    timestamp: Date | string
    isCanonical?: boolean
    createdAt?: Date | string
  }

  export type ContractCreateManyChainInput = {
    id?: number
    address: string
    type?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IndexedEventCreateManyChainInput = {
    id?: bigint | number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventType: string
    contractAddress: string
    from?: string | null
    to?: string | null
    value?: string | null
    tokenId?: string | null
    amount?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
    isCanonical?: boolean
    version?: number
    createdAt?: Date | string
    effectiveGasPrice?: string | null
    gasPrice?: string | null
    gasUsed?: string | null
    gasLimit?: string | null
    input?: string | null
    maxFeePerGas?: string | null
    maxPriorityFeePerGas?: string | null
    nonce?: number | null
    transactionIndex?: number | null
    txType?: number | null
  }

  export type RawEventCreateManyChainInput = {
    id?: bigint | number
    blockNumber: bigint | number
    txHash: string
    logIndex: number
    eventSignature?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BlockUpdateWithoutChainInput = {
    number?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: StringFieldUpdateOperationsInput | string
    parentHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateWithoutChainInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: StringFieldUpdateOperationsInput | string
    parentHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyWithoutChainInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: StringFieldUpdateOperationsInput | string
    parentHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUpdateWithoutChainInput = {
    address?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateWithoutChainInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyWithoutChainInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexedEventUpdateWithoutChainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveGasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    gasLimit?: NullableStringFieldUpdateOperationsInput | string | null
    input?: NullableStringFieldUpdateOperationsInput | string | null
    maxFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    maxPriorityFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    nonce?: NullableIntFieldUpdateOperationsInput | number | null
    transactionIndex?: NullableIntFieldUpdateOperationsInput | number | null
    txType?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IndexedEventUncheckedUpdateWithoutChainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveGasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    gasLimit?: NullableStringFieldUpdateOperationsInput | string | null
    input?: NullableStringFieldUpdateOperationsInput | string | null
    maxFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    maxPriorityFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    nonce?: NullableIntFieldUpdateOperationsInput | number | null
    transactionIndex?: NullableIntFieldUpdateOperationsInput | number | null
    txType?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IndexedEventUncheckedUpdateManyWithoutChainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isCanonical?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveGasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    gasLimit?: NullableStringFieldUpdateOperationsInput | string | null
    input?: NullableStringFieldUpdateOperationsInput | string | null
    maxFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    maxPriorityFeePerGas?: NullableStringFieldUpdateOperationsInput | string | null
    nonce?: NullableIntFieldUpdateOperationsInput | number | null
    transactionIndex?: NullableIntFieldUpdateOperationsInput | number | null
    txType?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RawEventUpdateWithoutChainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventSignature?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawEventUncheckedUpdateWithoutChainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventSignature?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawEventUncheckedUpdateManyWithoutChainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventSignature?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyUserInput = {
    id?: string
    key: string
    name?: string | null
    isActive?: boolean
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
  }

  export type ApiKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ChainCountOutputTypeDefaultArgs instead
     */
    export type ChainCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChainCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChainDefaultArgs instead
     */
    export type ChainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockDefaultArgs instead
     */
    export type BlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractDefaultArgs instead
     */
    export type ContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RawEventDefaultArgs instead
     */
    export type RawEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RawEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IndexedEventDefaultArgs instead
     */
    export type IndexedEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IndexedEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApiKeyDefaultArgs instead
     */
    export type ApiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApiKeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ErrorLogDefaultArgs instead
     */
    export type ErrorLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ErrorLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
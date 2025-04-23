
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
 * Model MediaRecord
 * 
 */
export type MediaRecord = $Result.DefaultSelection<Prisma.$MediaRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MediaRecords
 * const mediaRecords = await prisma.mediaRecord.findMany()
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
   * // Fetch zero or more MediaRecords
   * const mediaRecords = await prisma.mediaRecord.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.mediaRecord`: Exposes CRUD operations for the **MediaRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaRecords
    * const mediaRecords = await prisma.mediaRecord.findMany()
    * ```
    */
  get mediaRecord(): Prisma.MediaRecordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    MediaRecord: 'MediaRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "mediaRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MediaRecord: {
        payload: Prisma.$MediaRecordPayload<ExtArgs>
        fields: Prisma.MediaRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRecordPayload>
          }
          findFirst: {
            args: Prisma.MediaRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRecordPayload>
          }
          findMany: {
            args: Prisma.MediaRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRecordPayload>[]
          }
          create: {
            args: Prisma.MediaRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRecordPayload>
          }
          createMany: {
            args: Prisma.MediaRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRecordPayload>[]
          }
          delete: {
            args: Prisma.MediaRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRecordPayload>
          }
          update: {
            args: Prisma.MediaRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRecordPayload>
          }
          deleteMany: {
            args: Prisma.MediaRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRecordPayload>[]
          }
          upsert: {
            args: Prisma.MediaRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRecordPayload>
          }
          aggregate: {
            args: Prisma.MediaRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaRecord>
          }
          groupBy: {
            args: Prisma.MediaRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MediaRecordCountAggregateOutputType> | number
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    mediaRecord?: MediaRecordOmit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model MediaRecord
   */

  export type AggregateMediaRecord = {
    _count: MediaRecordCountAggregateOutputType | null
    _avg: MediaRecordAvgAggregateOutputType | null
    _sum: MediaRecordSumAggregateOutputType | null
    _min: MediaRecordMinAggregateOutputType | null
    _max: MediaRecordMaxAggregateOutputType | null
  }

  export type MediaRecordAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type MediaRecordSumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type MediaRecordMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mediaType: string | null
    title: string | null
    rating: number | null
    comment: string | null
    userId: string | null
  }

  export type MediaRecordMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mediaType: string | null
    title: string | null
    rating: number | null
    comment: string | null
    userId: string | null
  }

  export type MediaRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    mediaType: number
    title: number
    rating: number
    comment: number
    userId: number
    _all: number
  }


  export type MediaRecordAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type MediaRecordSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type MediaRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mediaType?: true
    title?: true
    rating?: true
    comment?: true
    userId?: true
  }

  export type MediaRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mediaType?: true
    title?: true
    rating?: true
    comment?: true
    userId?: true
  }

  export type MediaRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mediaType?: true
    title?: true
    rating?: true
    comment?: true
    userId?: true
    _all?: true
  }

  export type MediaRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaRecord to aggregate.
     */
    where?: MediaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRecords to fetch.
     */
    orderBy?: MediaRecordOrderByWithRelationInput | MediaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaRecords
    **/
    _count?: true | MediaRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaRecordMaxAggregateInputType
  }

  export type GetMediaRecordAggregateType<T extends MediaRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaRecord[P]>
      : GetScalarType<T[P], AggregateMediaRecord[P]>
  }




  export type MediaRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaRecordWhereInput
    orderBy?: MediaRecordOrderByWithAggregationInput | MediaRecordOrderByWithAggregationInput[]
    by: MediaRecordScalarFieldEnum[] | MediaRecordScalarFieldEnum
    having?: MediaRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaRecordCountAggregateInputType | true
    _avg?: MediaRecordAvgAggregateInputType
    _sum?: MediaRecordSumAggregateInputType
    _min?: MediaRecordMinAggregateInputType
    _max?: MediaRecordMaxAggregateInputType
  }

  export type MediaRecordGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    mediaType: string
    title: string
    rating: number
    comment: string | null
    userId: string
    _count: MediaRecordCountAggregateOutputType | null
    _avg: MediaRecordAvgAggregateOutputType | null
    _sum: MediaRecordSumAggregateOutputType | null
    _min: MediaRecordMinAggregateOutputType | null
    _max: MediaRecordMaxAggregateOutputType | null
  }

  type GetMediaRecordGroupByPayload<T extends MediaRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MediaRecordGroupByOutputType[P]>
        }
      >
    >


  export type MediaRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mediaType?: boolean
    title?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
  }, ExtArgs["result"]["mediaRecord"]>

  export type MediaRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mediaType?: boolean
    title?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
  }, ExtArgs["result"]["mediaRecord"]>

  export type MediaRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mediaType?: boolean
    title?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
  }, ExtArgs["result"]["mediaRecord"]>

  export type MediaRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mediaType?: boolean
    title?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
  }

  export type MediaRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "mediaType" | "title" | "rating" | "comment" | "userId", ExtArgs["result"]["mediaRecord"]>

  export type $MediaRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      mediaType: string
      title: string
      rating: number
      comment: string | null
      userId: string
    }, ExtArgs["result"]["mediaRecord"]>
    composites: {}
  }

  type MediaRecordGetPayload<S extends boolean | null | undefined | MediaRecordDefaultArgs> = $Result.GetResult<Prisma.$MediaRecordPayload, S>

  type MediaRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaRecordCountAggregateInputType | true
    }

  export interface MediaRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaRecord'], meta: { name: 'MediaRecord' } }
    /**
     * Find zero or one MediaRecord that matches the filter.
     * @param {MediaRecordFindUniqueArgs} args - Arguments to find a MediaRecord
     * @example
     * // Get one MediaRecord
     * const mediaRecord = await prisma.mediaRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaRecordFindUniqueArgs>(args: SelectSubset<T, MediaRecordFindUniqueArgs<ExtArgs>>): Prisma__MediaRecordClient<$Result.GetResult<Prisma.$MediaRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaRecordFindUniqueOrThrowArgs} args - Arguments to find a MediaRecord
     * @example
     * // Get one MediaRecord
     * const mediaRecord = await prisma.mediaRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaRecordClient<$Result.GetResult<Prisma.$MediaRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRecordFindFirstArgs} args - Arguments to find a MediaRecord
     * @example
     * // Get one MediaRecord
     * const mediaRecord = await prisma.mediaRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaRecordFindFirstArgs>(args?: SelectSubset<T, MediaRecordFindFirstArgs<ExtArgs>>): Prisma__MediaRecordClient<$Result.GetResult<Prisma.$MediaRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRecordFindFirstOrThrowArgs} args - Arguments to find a MediaRecord
     * @example
     * // Get one MediaRecord
     * const mediaRecord = await prisma.mediaRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaRecordClient<$Result.GetResult<Prisma.$MediaRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaRecords
     * const mediaRecords = await prisma.mediaRecord.findMany()
     * 
     * // Get first 10 MediaRecords
     * const mediaRecords = await prisma.mediaRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaRecordWithIdOnly = await prisma.mediaRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaRecordFindManyArgs>(args?: SelectSubset<T, MediaRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaRecord.
     * @param {MediaRecordCreateArgs} args - Arguments to create a MediaRecord.
     * @example
     * // Create one MediaRecord
     * const MediaRecord = await prisma.mediaRecord.create({
     *   data: {
     *     // ... data to create a MediaRecord
     *   }
     * })
     * 
     */
    create<T extends MediaRecordCreateArgs>(args: SelectSubset<T, MediaRecordCreateArgs<ExtArgs>>): Prisma__MediaRecordClient<$Result.GetResult<Prisma.$MediaRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaRecords.
     * @param {MediaRecordCreateManyArgs} args - Arguments to create many MediaRecords.
     * @example
     * // Create many MediaRecords
     * const mediaRecord = await prisma.mediaRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaRecordCreateManyArgs>(args?: SelectSubset<T, MediaRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaRecords and returns the data saved in the database.
     * @param {MediaRecordCreateManyAndReturnArgs} args - Arguments to create many MediaRecords.
     * @example
     * // Create many MediaRecords
     * const mediaRecord = await prisma.mediaRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaRecords and only return the `id`
     * const mediaRecordWithIdOnly = await prisma.mediaRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaRecord.
     * @param {MediaRecordDeleteArgs} args - Arguments to delete one MediaRecord.
     * @example
     * // Delete one MediaRecord
     * const MediaRecord = await prisma.mediaRecord.delete({
     *   where: {
     *     // ... filter to delete one MediaRecord
     *   }
     * })
     * 
     */
    delete<T extends MediaRecordDeleteArgs>(args: SelectSubset<T, MediaRecordDeleteArgs<ExtArgs>>): Prisma__MediaRecordClient<$Result.GetResult<Prisma.$MediaRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaRecord.
     * @param {MediaRecordUpdateArgs} args - Arguments to update one MediaRecord.
     * @example
     * // Update one MediaRecord
     * const mediaRecord = await prisma.mediaRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaRecordUpdateArgs>(args: SelectSubset<T, MediaRecordUpdateArgs<ExtArgs>>): Prisma__MediaRecordClient<$Result.GetResult<Prisma.$MediaRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaRecords.
     * @param {MediaRecordDeleteManyArgs} args - Arguments to filter MediaRecords to delete.
     * @example
     * // Delete a few MediaRecords
     * const { count } = await prisma.mediaRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaRecordDeleteManyArgs>(args?: SelectSubset<T, MediaRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaRecords
     * const mediaRecord = await prisma.mediaRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaRecordUpdateManyArgs>(args: SelectSubset<T, MediaRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaRecords and returns the data updated in the database.
     * @param {MediaRecordUpdateManyAndReturnArgs} args - Arguments to update many MediaRecords.
     * @example
     * // Update many MediaRecords
     * const mediaRecord = await prisma.mediaRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaRecords and only return the `id`
     * const mediaRecordWithIdOnly = await prisma.mediaRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaRecord.
     * @param {MediaRecordUpsertArgs} args - Arguments to update or create a MediaRecord.
     * @example
     * // Update or create a MediaRecord
     * const mediaRecord = await prisma.mediaRecord.upsert({
     *   create: {
     *     // ... data to create a MediaRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaRecord we want to update
     *   }
     * })
     */
    upsert<T extends MediaRecordUpsertArgs>(args: SelectSubset<T, MediaRecordUpsertArgs<ExtArgs>>): Prisma__MediaRecordClient<$Result.GetResult<Prisma.$MediaRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRecordCountArgs} args - Arguments to filter MediaRecords to count.
     * @example
     * // Count the number of MediaRecords
     * const count = await prisma.mediaRecord.count({
     *   where: {
     *     // ... the filter for the MediaRecords we want to count
     *   }
     * })
    **/
    count<T extends MediaRecordCountArgs>(
      args?: Subset<T, MediaRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaRecordAggregateArgs>(args: Subset<T, MediaRecordAggregateArgs>): Prisma.PrismaPromise<GetMediaRecordAggregateType<T>>

    /**
     * Group by MediaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRecordGroupByArgs} args - Group by arguments.
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
      T extends MediaRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaRecordGroupByArgs['orderBy'] }
        : { orderBy?: MediaRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaRecord model
   */
  readonly fields: MediaRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MediaRecord model
   */
  interface MediaRecordFieldRefs {
    readonly id: FieldRef<"MediaRecord", 'Int'>
    readonly createdAt: FieldRef<"MediaRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"MediaRecord", 'DateTime'>
    readonly mediaType: FieldRef<"MediaRecord", 'String'>
    readonly title: FieldRef<"MediaRecord", 'String'>
    readonly rating: FieldRef<"MediaRecord", 'Int'>
    readonly comment: FieldRef<"MediaRecord", 'String'>
    readonly userId: FieldRef<"MediaRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MediaRecord findUnique
   */
  export type MediaRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
    /**
     * Filter, which MediaRecord to fetch.
     */
    where: MediaRecordWhereUniqueInput
  }

  /**
   * MediaRecord findUniqueOrThrow
   */
  export type MediaRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
    /**
     * Filter, which MediaRecord to fetch.
     */
    where: MediaRecordWhereUniqueInput
  }

  /**
   * MediaRecord findFirst
   */
  export type MediaRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
    /**
     * Filter, which MediaRecord to fetch.
     */
    where?: MediaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRecords to fetch.
     */
    orderBy?: MediaRecordOrderByWithRelationInput | MediaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaRecords.
     */
    cursor?: MediaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaRecords.
     */
    distinct?: MediaRecordScalarFieldEnum | MediaRecordScalarFieldEnum[]
  }

  /**
   * MediaRecord findFirstOrThrow
   */
  export type MediaRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
    /**
     * Filter, which MediaRecord to fetch.
     */
    where?: MediaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRecords to fetch.
     */
    orderBy?: MediaRecordOrderByWithRelationInput | MediaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaRecords.
     */
    cursor?: MediaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaRecords.
     */
    distinct?: MediaRecordScalarFieldEnum | MediaRecordScalarFieldEnum[]
  }

  /**
   * MediaRecord findMany
   */
  export type MediaRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
    /**
     * Filter, which MediaRecords to fetch.
     */
    where?: MediaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRecords to fetch.
     */
    orderBy?: MediaRecordOrderByWithRelationInput | MediaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaRecords.
     */
    cursor?: MediaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRecords.
     */
    skip?: number
    distinct?: MediaRecordScalarFieldEnum | MediaRecordScalarFieldEnum[]
  }

  /**
   * MediaRecord create
   */
  export type MediaRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a MediaRecord.
     */
    data: XOR<MediaRecordCreateInput, MediaRecordUncheckedCreateInput>
  }

  /**
   * MediaRecord createMany
   */
  export type MediaRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaRecords.
     */
    data: MediaRecordCreateManyInput | MediaRecordCreateManyInput[]
  }

  /**
   * MediaRecord createManyAndReturn
   */
  export type MediaRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
    /**
     * The data used to create many MediaRecords.
     */
    data: MediaRecordCreateManyInput | MediaRecordCreateManyInput[]
  }

  /**
   * MediaRecord update
   */
  export type MediaRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a MediaRecord.
     */
    data: XOR<MediaRecordUpdateInput, MediaRecordUncheckedUpdateInput>
    /**
     * Choose, which MediaRecord to update.
     */
    where: MediaRecordWhereUniqueInput
  }

  /**
   * MediaRecord updateMany
   */
  export type MediaRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaRecords.
     */
    data: XOR<MediaRecordUpdateManyMutationInput, MediaRecordUncheckedUpdateManyInput>
    /**
     * Filter which MediaRecords to update
     */
    where?: MediaRecordWhereInput
    /**
     * Limit how many MediaRecords to update.
     */
    limit?: number
  }

  /**
   * MediaRecord updateManyAndReturn
   */
  export type MediaRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
    /**
     * The data used to update MediaRecords.
     */
    data: XOR<MediaRecordUpdateManyMutationInput, MediaRecordUncheckedUpdateManyInput>
    /**
     * Filter which MediaRecords to update
     */
    where?: MediaRecordWhereInput
    /**
     * Limit how many MediaRecords to update.
     */
    limit?: number
  }

  /**
   * MediaRecord upsert
   */
  export type MediaRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the MediaRecord to update in case it exists.
     */
    where: MediaRecordWhereUniqueInput
    /**
     * In case the MediaRecord found by the `where` argument doesn't exist, create a new MediaRecord with this data.
     */
    create: XOR<MediaRecordCreateInput, MediaRecordUncheckedCreateInput>
    /**
     * In case the MediaRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaRecordUpdateInput, MediaRecordUncheckedUpdateInput>
  }

  /**
   * MediaRecord delete
   */
  export type MediaRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
    /**
     * Filter which MediaRecord to delete.
     */
    where: MediaRecordWhereUniqueInput
  }

  /**
   * MediaRecord deleteMany
   */
  export type MediaRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaRecords to delete
     */
    where?: MediaRecordWhereInput
    /**
     * Limit how many MediaRecords to delete.
     */
    limit?: number
  }

  /**
   * MediaRecord without action
   */
  export type MediaRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRecord
     */
    select?: MediaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRecord
     */
    omit?: MediaRecordOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MediaRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mediaType: 'mediaType',
    title: 'title',
    rating: 'rating',
    comment: 'comment',
    userId: 'userId'
  };

  export type MediaRecordScalarFieldEnum = (typeof MediaRecordScalarFieldEnum)[keyof typeof MediaRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MediaRecordWhereInput = {
    AND?: MediaRecordWhereInput | MediaRecordWhereInput[]
    OR?: MediaRecordWhereInput[]
    NOT?: MediaRecordWhereInput | MediaRecordWhereInput[]
    id?: IntFilter<"MediaRecord"> | number
    createdAt?: DateTimeFilter<"MediaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MediaRecord"> | Date | string
    mediaType?: StringFilter<"MediaRecord"> | string
    title?: StringFilter<"MediaRecord"> | string
    rating?: IntFilter<"MediaRecord"> | number
    comment?: StringNullableFilter<"MediaRecord"> | string | null
    userId?: StringFilter<"MediaRecord"> | string
  }

  export type MediaRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mediaType?: SortOrder
    title?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
  }

  export type MediaRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaRecordWhereInput | MediaRecordWhereInput[]
    OR?: MediaRecordWhereInput[]
    NOT?: MediaRecordWhereInput | MediaRecordWhereInput[]
    createdAt?: DateTimeFilter<"MediaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MediaRecord"> | Date | string
    mediaType?: StringFilter<"MediaRecord"> | string
    title?: StringFilter<"MediaRecord"> | string
    rating?: IntFilter<"MediaRecord"> | number
    comment?: StringNullableFilter<"MediaRecord"> | string | null
    userId?: StringFilter<"MediaRecord"> | string
  }, "id">

  export type MediaRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mediaType?: SortOrder
    title?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: MediaRecordCountOrderByAggregateInput
    _avg?: MediaRecordAvgOrderByAggregateInput
    _max?: MediaRecordMaxOrderByAggregateInput
    _min?: MediaRecordMinOrderByAggregateInput
    _sum?: MediaRecordSumOrderByAggregateInput
  }

  export type MediaRecordScalarWhereWithAggregatesInput = {
    AND?: MediaRecordScalarWhereWithAggregatesInput | MediaRecordScalarWhereWithAggregatesInput[]
    OR?: MediaRecordScalarWhereWithAggregatesInput[]
    NOT?: MediaRecordScalarWhereWithAggregatesInput | MediaRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MediaRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MediaRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MediaRecord"> | Date | string
    mediaType?: StringWithAggregatesFilter<"MediaRecord"> | string
    title?: StringWithAggregatesFilter<"MediaRecord"> | string
    rating?: IntWithAggregatesFilter<"MediaRecord"> | number
    comment?: StringNullableWithAggregatesFilter<"MediaRecord"> | string | null
    userId?: StringWithAggregatesFilter<"MediaRecord"> | string
  }

  export type MediaRecordCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    mediaType: string
    title: string
    rating: number
    comment?: string | null
    userId: string
  }

  export type MediaRecordUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    mediaType: string
    title: string
    rating: number
    comment?: string | null
    userId: string
  }

  export type MediaRecordUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaRecordCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    mediaType: string
    title: string
    rating: number
    comment?: string | null
    userId: string
  }

  export type MediaRecordUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MediaRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mediaType?: SortOrder
    title?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type MediaRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type MediaRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mediaType?: SortOrder
    title?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type MediaRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mediaType?: SortOrder
    title?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type MediaRecordSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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
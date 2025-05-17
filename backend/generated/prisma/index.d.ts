
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserForm
 * 
 */
export type UserForm = $Result.DefaultSelection<Prisma.$UserFormPayload>
/**
 * Model Allergy
 * 
 */
export type Allergy = $Result.DefaultSelection<Prisma.$AllergyPayload>
/**
 * Model UserAllergy
 * 
 */
export type UserAllergy = $Result.DefaultSelection<Prisma.$UserAllergyPayload>
/**
 * Model MealPlan
 * 
 */
export type MealPlan = $Result.DefaultSelection<Prisma.$MealPlanPayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model MealIngredient
 * 
 */
export type MealIngredient = $Result.DefaultSelection<Prisma.$MealIngredientPayload>
/**
 * Model GroceryItem
 * 
 */
export type GroceryItem = $Result.DefaultSelection<Prisma.$GroceryItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userForm`: Exposes CRUD operations for the **UserForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserForms
    * const userForms = await prisma.userForm.findMany()
    * ```
    */
  get userForm(): Prisma.UserFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allergy`: Exposes CRUD operations for the **Allergy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allergies
    * const allergies = await prisma.allergy.findMany()
    * ```
    */
  get allergy(): Prisma.AllergyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAllergy`: Exposes CRUD operations for the **UserAllergy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAllergies
    * const userAllergies = await prisma.userAllergy.findMany()
    * ```
    */
  get userAllergy(): Prisma.UserAllergyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealPlan`: Exposes CRUD operations for the **MealPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealPlans
    * const mealPlans = await prisma.mealPlan.findMany()
    * ```
    */
  get mealPlan(): Prisma.MealPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealIngredient`: Exposes CRUD operations for the **MealIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealIngredients
    * const mealIngredients = await prisma.mealIngredient.findMany()
    * ```
    */
  get mealIngredient(): Prisma.MealIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groceryItem`: Exposes CRUD operations for the **GroceryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroceryItems
    * const groceryItems = await prisma.groceryItem.findMany()
    * ```
    */
  get groceryItem(): Prisma.GroceryItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    UserForm: 'UserForm',
    Allergy: 'Allergy',
    UserAllergy: 'UserAllergy',
    MealPlan: 'MealPlan',
    Meal: 'Meal',
    Ingredient: 'Ingredient',
    MealIngredient: 'MealIngredient',
    GroceryItem: 'GroceryItem'
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
      modelProps: "user" | "userForm" | "allergy" | "userAllergy" | "mealPlan" | "meal" | "ingredient" | "mealIngredient" | "groceryItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      UserForm: {
        payload: Prisma.$UserFormPayload<ExtArgs>
        fields: Prisma.UserFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormPayload>
          }
          findFirst: {
            args: Prisma.UserFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormPayload>
          }
          findMany: {
            args: Prisma.UserFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormPayload>[]
          }
          create: {
            args: Prisma.UserFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormPayload>
          }
          createMany: {
            args: Prisma.UserFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormPayload>[]
          }
          delete: {
            args: Prisma.UserFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormPayload>
          }
          update: {
            args: Prisma.UserFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormPayload>
          }
          deleteMany: {
            args: Prisma.UserFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormPayload>[]
          }
          upsert: {
            args: Prisma.UserFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormPayload>
          }
          aggregate: {
            args: Prisma.UserFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserForm>
          }
          groupBy: {
            args: Prisma.UserFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFormCountArgs<ExtArgs>
            result: $Utils.Optional<UserFormCountAggregateOutputType> | number
          }
        }
      }
      Allergy: {
        payload: Prisma.$AllergyPayload<ExtArgs>
        fields: Prisma.AllergyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllergyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllergyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          findFirst: {
            args: Prisma.AllergyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllergyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          findMany: {
            args: Prisma.AllergyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>[]
          }
          create: {
            args: Prisma.AllergyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          createMany: {
            args: Prisma.AllergyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllergyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>[]
          }
          delete: {
            args: Prisma.AllergyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          update: {
            args: Prisma.AllergyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          deleteMany: {
            args: Prisma.AllergyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllergyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllergyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>[]
          }
          upsert: {
            args: Prisma.AllergyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          aggregate: {
            args: Prisma.AllergyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllergy>
          }
          groupBy: {
            args: Prisma.AllergyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllergyCountArgs<ExtArgs>
            result: $Utils.Optional<AllergyCountAggregateOutputType> | number
          }
        }
      }
      UserAllergy: {
        payload: Prisma.$UserAllergyPayload<ExtArgs>
        fields: Prisma.UserAllergyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAllergyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAllergyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          findFirst: {
            args: Prisma.UserAllergyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAllergyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          findMany: {
            args: Prisma.UserAllergyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>[]
          }
          create: {
            args: Prisma.UserAllergyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          createMany: {
            args: Prisma.UserAllergyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAllergyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>[]
          }
          delete: {
            args: Prisma.UserAllergyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          update: {
            args: Prisma.UserAllergyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          deleteMany: {
            args: Prisma.UserAllergyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAllergyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAllergyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>[]
          }
          upsert: {
            args: Prisma.UserAllergyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          aggregate: {
            args: Prisma.UserAllergyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAllergy>
          }
          groupBy: {
            args: Prisma.UserAllergyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAllergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAllergyCountArgs<ExtArgs>
            result: $Utils.Optional<UserAllergyCountAggregateOutputType> | number
          }
        }
      }
      MealPlan: {
        payload: Prisma.$MealPlanPayload<ExtArgs>
        fields: Prisma.MealPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findFirst: {
            args: Prisma.MealPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findMany: {
            args: Prisma.MealPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          create: {
            args: Prisma.MealPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          createMany: {
            args: Prisma.MealPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          delete: {
            args: Prisma.MealPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          update: {
            args: Prisma.MealPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          deleteMany: {
            args: Prisma.MealPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          upsert: {
            args: Prisma.MealPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          aggregate: {
            args: Prisma.MealPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealPlan>
          }
          groupBy: {
            args: Prisma.MealPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealPlanCountArgs<ExtArgs>
            result: $Utils.Optional<MealPlanCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      MealIngredient: {
        payload: Prisma.$MealIngredientPayload<ExtArgs>
        fields: Prisma.MealIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          findFirst: {
            args: Prisma.MealIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          findMany: {
            args: Prisma.MealIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>[]
          }
          create: {
            args: Prisma.MealIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          createMany: {
            args: Prisma.MealIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>[]
          }
          delete: {
            args: Prisma.MealIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          update: {
            args: Prisma.MealIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          deleteMany: {
            args: Prisma.MealIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>[]
          }
          upsert: {
            args: Prisma.MealIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          aggregate: {
            args: Prisma.MealIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealIngredient>
          }
          groupBy: {
            args: Prisma.MealIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<MealIngredientCountAggregateOutputType> | number
          }
        }
      }
      GroceryItem: {
        payload: Prisma.$GroceryItemPayload<ExtArgs>
        fields: Prisma.GroceryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroceryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroceryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          findFirst: {
            args: Prisma.GroceryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroceryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          findMany: {
            args: Prisma.GroceryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>[]
          }
          create: {
            args: Prisma.GroceryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          createMany: {
            args: Prisma.GroceryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroceryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>[]
          }
          delete: {
            args: Prisma.GroceryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          update: {
            args: Prisma.GroceryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          deleteMany: {
            args: Prisma.GroceryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroceryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroceryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>[]
          }
          upsert: {
            args: Prisma.GroceryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          aggregate: {
            args: Prisma.GroceryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroceryItem>
          }
          groupBy: {
            args: Prisma.GroceryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroceryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroceryItemCountArgs<ExtArgs>
            result: $Utils.Optional<GroceryItemCountAggregateOutputType> | number
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
    user?: UserOmit
    userForm?: UserFormOmit
    allergy?: AllergyOmit
    userAllergy?: UserAllergyOmit
    mealPlan?: MealPlanOmit
    meal?: MealOmit
    ingredient?: IngredientOmit
    mealIngredient?: MealIngredientOmit
    groceryItem?: GroceryItemOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userAllergies: number
    mealPlans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAllergies?: boolean | UserCountOutputTypeCountUserAllergiesArgs
    mealPlans?: boolean | UserCountOutputTypeCountMealPlansArgs
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
  export type UserCountOutputTypeCountUserAllergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAllergyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMealPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
  }


  /**
   * Count Type AllergyCountOutputType
   */

  export type AllergyCountOutputType = {
    userAllergies: number
  }

  export type AllergyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAllergies?: boolean | AllergyCountOutputTypeCountUserAllergiesArgs
  }

  // Custom InputTypes
  /**
   * AllergyCountOutputType without action
   */
  export type AllergyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllergyCountOutputType
     */
    select?: AllergyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AllergyCountOutputType without action
   */
  export type AllergyCountOutputTypeCountUserAllergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAllergyWhereInput
  }


  /**
   * Count Type MealPlanCountOutputType
   */

  export type MealPlanCountOutputType = {
    meals: number
    groceryItems: number
  }

  export type MealPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | MealPlanCountOutputTypeCountMealsArgs
    groceryItems?: boolean | MealPlanCountOutputTypeCountGroceryItemsArgs
  }

  // Custom InputTypes
  /**
   * MealPlanCountOutputType without action
   */
  export type MealPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanCountOutputType
     */
    select?: MealPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealPlanCountOutputType without action
   */
  export type MealPlanCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }

  /**
   * MealPlanCountOutputType without action
   */
  export type MealPlanCountOutputTypeCountGroceryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryItemWhereInput
  }


  /**
   * Count Type MealCountOutputType
   */

  export type MealCountOutputType = {
    ingredients: number
  }

  export type MealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | MealCountOutputTypeCountIngredientsArgs
  }

  // Custom InputTypes
  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealIngredientWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    mealIngredients: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealIngredients?: boolean | IngredientCountOutputTypeCountMealIngredientsArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountMealIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealIngredientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    gender: string | null
    clerkUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    gender: string | null
    clerkUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    age: number
    gender: number
    clerkUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    clerkUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    clerkUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    clerkUserId?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    age: number | null
    gender: string | null
    clerkUserId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    age?: boolean
    gender?: boolean
    clerkUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userForm?: boolean | User$userFormArgs<ExtArgs>
    userAllergies?: boolean | User$userAllergiesArgs<ExtArgs>
    mealPlans?: boolean | User$mealPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    clerkUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    clerkUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    clerkUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "gender" | "clerkUserId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userForm?: boolean | User$userFormArgs<ExtArgs>
    userAllergies?: boolean | User$userAllergiesArgs<ExtArgs>
    mealPlans?: boolean | User$mealPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userForm: Prisma.$UserFormPayload<ExtArgs> | null
      userAllergies: Prisma.$UserAllergyPayload<ExtArgs>[]
      mealPlans: Prisma.$MealPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      age: number | null
      gender: string | null
      clerkUserId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userForm<T extends User$userFormArgs<ExtArgs> = {}>(args?: Subset<T, User$userFormArgs<ExtArgs>>): Prisma__UserFormClient<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userAllergies<T extends User$userAllergiesArgs<ExtArgs> = {}>(args?: Subset<T, User$userAllergiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mealPlans<T extends User$mealPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$mealPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly gender: FieldRef<"User", 'String'>
    readonly clerkUserId: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userForm
   */
  export type User$userFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormInclude<ExtArgs> | null
    where?: UserFormWhereInput
  }

  /**
   * User.userAllergies
   */
  export type User$userAllergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    where?: UserAllergyWhereInput
    orderBy?: UserAllergyOrderByWithRelationInput | UserAllergyOrderByWithRelationInput[]
    cursor?: UserAllergyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAllergyScalarFieldEnum | UserAllergyScalarFieldEnum[]
  }

  /**
   * User.mealPlans
   */
  export type User$mealPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    cursor?: MealPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserForm
   */

  export type AggregateUserForm = {
    _count: UserFormCountAggregateOutputType | null
    _avg: UserFormAvgAggregateOutputType | null
    _sum: UserFormSumAggregateOutputType | null
    _min: UserFormMinAggregateOutputType | null
    _max: UserFormMaxAggregateOutputType | null
  }

  export type UserFormAvgAggregateOutputType = {
    currentWeight: number | null
    targetWeight: number | null
    height: number | null
  }

  export type UserFormSumAggregateOutputType = {
    currentWeight: number | null
    targetWeight: number | null
    height: number | null
  }

  export type UserFormMinAggregateOutputType = {
    id: string | null
    userId: string | null
    currentWeight: number | null
    targetWeight: number | null
    height: number | null
    activityFrequency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserFormMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    currentWeight: number | null
    targetWeight: number | null
    height: number | null
    activityFrequency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserFormCountAggregateOutputType = {
    id: number
    userId: number
    currentWeight: number
    targetWeight: number
    height: number
    activityFrequency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserFormAvgAggregateInputType = {
    currentWeight?: true
    targetWeight?: true
    height?: true
  }

  export type UserFormSumAggregateInputType = {
    currentWeight?: true
    targetWeight?: true
    height?: true
  }

  export type UserFormMinAggregateInputType = {
    id?: true
    userId?: true
    currentWeight?: true
    targetWeight?: true
    height?: true
    activityFrequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserFormMaxAggregateInputType = {
    id?: true
    userId?: true
    currentWeight?: true
    targetWeight?: true
    height?: true
    activityFrequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserFormCountAggregateInputType = {
    id?: true
    userId?: true
    currentWeight?: true
    targetWeight?: true
    height?: true
    activityFrequency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserForm to aggregate.
     */
    where?: UserFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserForms to fetch.
     */
    orderBy?: UserFormOrderByWithRelationInput | UserFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserForms
    **/
    _count?: true | UserFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFormMaxAggregateInputType
  }

  export type GetUserFormAggregateType<T extends UserFormAggregateArgs> = {
        [P in keyof T & keyof AggregateUserForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserForm[P]>
      : GetScalarType<T[P], AggregateUserForm[P]>
  }




  export type UserFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFormWhereInput
    orderBy?: UserFormOrderByWithAggregationInput | UserFormOrderByWithAggregationInput[]
    by: UserFormScalarFieldEnum[] | UserFormScalarFieldEnum
    having?: UserFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFormCountAggregateInputType | true
    _avg?: UserFormAvgAggregateInputType
    _sum?: UserFormSumAggregateInputType
    _min?: UserFormMinAggregateInputType
    _max?: UserFormMaxAggregateInputType
  }

  export type UserFormGroupByOutputType = {
    id: string
    userId: string
    currentWeight: number
    targetWeight: number
    height: number
    activityFrequency: string
    createdAt: Date
    updatedAt: Date
    _count: UserFormCountAggregateOutputType | null
    _avg: UserFormAvgAggregateOutputType | null
    _sum: UserFormSumAggregateOutputType | null
    _min: UserFormMinAggregateOutputType | null
    _max: UserFormMaxAggregateOutputType | null
  }

  type GetUserFormGroupByPayload<T extends UserFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFormGroupByOutputType[P]>
            : GetScalarType<T[P], UserFormGroupByOutputType[P]>
        }
      >
    >


  export type UserFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentWeight?: boolean
    targetWeight?: boolean
    height?: boolean
    activityFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userForm"]>

  export type UserFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentWeight?: boolean
    targetWeight?: boolean
    height?: boolean
    activityFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userForm"]>

  export type UserFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentWeight?: boolean
    targetWeight?: boolean
    height?: boolean
    activityFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userForm"]>

  export type UserFormSelectScalar = {
    id?: boolean
    userId?: boolean
    currentWeight?: boolean
    targetWeight?: boolean
    height?: boolean
    activityFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "currentWeight" | "targetWeight" | "height" | "activityFrequency" | "createdAt" | "updatedAt", ExtArgs["result"]["userForm"]>
  export type UserFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserForm"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currentWeight: number
      targetWeight: number
      height: number
      activityFrequency: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userForm"]>
    composites: {}
  }

  type UserFormGetPayload<S extends boolean | null | undefined | UserFormDefaultArgs> = $Result.GetResult<Prisma.$UserFormPayload, S>

  type UserFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFormCountAggregateInputType | true
    }

  export interface UserFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserForm'], meta: { name: 'UserForm' } }
    /**
     * Find zero or one UserForm that matches the filter.
     * @param {UserFormFindUniqueArgs} args - Arguments to find a UserForm
     * @example
     * // Get one UserForm
     * const userForm = await prisma.userForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFormFindUniqueArgs>(args: SelectSubset<T, UserFormFindUniqueArgs<ExtArgs>>): Prisma__UserFormClient<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFormFindUniqueOrThrowArgs} args - Arguments to find a UserForm
     * @example
     * // Get one UserForm
     * const userForm = await prisma.userForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFormFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFormClient<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormFindFirstArgs} args - Arguments to find a UserForm
     * @example
     * // Get one UserForm
     * const userForm = await prisma.userForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFormFindFirstArgs>(args?: SelectSubset<T, UserFormFindFirstArgs<ExtArgs>>): Prisma__UserFormClient<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormFindFirstOrThrowArgs} args - Arguments to find a UserForm
     * @example
     * // Get one UserForm
     * const userForm = await prisma.userForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFormFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFormClient<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserForms
     * const userForms = await prisma.userForm.findMany()
     * 
     * // Get first 10 UserForms
     * const userForms = await prisma.userForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFormWithIdOnly = await prisma.userForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFormFindManyArgs>(args?: SelectSubset<T, UserFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserForm.
     * @param {UserFormCreateArgs} args - Arguments to create a UserForm.
     * @example
     * // Create one UserForm
     * const UserForm = await prisma.userForm.create({
     *   data: {
     *     // ... data to create a UserForm
     *   }
     * })
     * 
     */
    create<T extends UserFormCreateArgs>(args: SelectSubset<T, UserFormCreateArgs<ExtArgs>>): Prisma__UserFormClient<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserForms.
     * @param {UserFormCreateManyArgs} args - Arguments to create many UserForms.
     * @example
     * // Create many UserForms
     * const userForm = await prisma.userForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFormCreateManyArgs>(args?: SelectSubset<T, UserFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserForms and returns the data saved in the database.
     * @param {UserFormCreateManyAndReturnArgs} args - Arguments to create many UserForms.
     * @example
     * // Create many UserForms
     * const userForm = await prisma.userForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserForms and only return the `id`
     * const userFormWithIdOnly = await prisma.userForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFormCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserForm.
     * @param {UserFormDeleteArgs} args - Arguments to delete one UserForm.
     * @example
     * // Delete one UserForm
     * const UserForm = await prisma.userForm.delete({
     *   where: {
     *     // ... filter to delete one UserForm
     *   }
     * })
     * 
     */
    delete<T extends UserFormDeleteArgs>(args: SelectSubset<T, UserFormDeleteArgs<ExtArgs>>): Prisma__UserFormClient<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserForm.
     * @param {UserFormUpdateArgs} args - Arguments to update one UserForm.
     * @example
     * // Update one UserForm
     * const userForm = await prisma.userForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFormUpdateArgs>(args: SelectSubset<T, UserFormUpdateArgs<ExtArgs>>): Prisma__UserFormClient<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserForms.
     * @param {UserFormDeleteManyArgs} args - Arguments to filter UserForms to delete.
     * @example
     * // Delete a few UserForms
     * const { count } = await prisma.userForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFormDeleteManyArgs>(args?: SelectSubset<T, UserFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserForms
     * const userForm = await prisma.userForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFormUpdateManyArgs>(args: SelectSubset<T, UserFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserForms and returns the data updated in the database.
     * @param {UserFormUpdateManyAndReturnArgs} args - Arguments to update many UserForms.
     * @example
     * // Update many UserForms
     * const userForm = await prisma.userForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserForms and only return the `id`
     * const userFormWithIdOnly = await prisma.userForm.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserFormUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserForm.
     * @param {UserFormUpsertArgs} args - Arguments to update or create a UserForm.
     * @example
     * // Update or create a UserForm
     * const userForm = await prisma.userForm.upsert({
     *   create: {
     *     // ... data to create a UserForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserForm we want to update
     *   }
     * })
     */
    upsert<T extends UserFormUpsertArgs>(args: SelectSubset<T, UserFormUpsertArgs<ExtArgs>>): Prisma__UserFormClient<$Result.GetResult<Prisma.$UserFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormCountArgs} args - Arguments to filter UserForms to count.
     * @example
     * // Count the number of UserForms
     * const count = await prisma.userForm.count({
     *   where: {
     *     // ... the filter for the UserForms we want to count
     *   }
     * })
    **/
    count<T extends UserFormCountArgs>(
      args?: Subset<T, UserFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserFormAggregateArgs>(args: Subset<T, UserFormAggregateArgs>): Prisma.PrismaPromise<GetUserFormAggregateType<T>>

    /**
     * Group by UserForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormGroupByArgs} args - Group by arguments.
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
      T extends UserFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFormGroupByArgs['orderBy'] }
        : { orderBy?: UserFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserForm model
   */
  readonly fields: UserFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserForm model
   */
  interface UserFormFieldRefs {
    readonly id: FieldRef<"UserForm", 'String'>
    readonly userId: FieldRef<"UserForm", 'String'>
    readonly currentWeight: FieldRef<"UserForm", 'Float'>
    readonly targetWeight: FieldRef<"UserForm", 'Float'>
    readonly height: FieldRef<"UserForm", 'Float'>
    readonly activityFrequency: FieldRef<"UserForm", 'String'>
    readonly createdAt: FieldRef<"UserForm", 'DateTime'>
    readonly updatedAt: FieldRef<"UserForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserForm findUnique
   */
  export type UserFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormInclude<ExtArgs> | null
    /**
     * Filter, which UserForm to fetch.
     */
    where: UserFormWhereUniqueInput
  }

  /**
   * UserForm findUniqueOrThrow
   */
  export type UserFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormInclude<ExtArgs> | null
    /**
     * Filter, which UserForm to fetch.
     */
    where: UserFormWhereUniqueInput
  }

  /**
   * UserForm findFirst
   */
  export type UserFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormInclude<ExtArgs> | null
    /**
     * Filter, which UserForm to fetch.
     */
    where?: UserFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserForms to fetch.
     */
    orderBy?: UserFormOrderByWithRelationInput | UserFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserForms.
     */
    cursor?: UserFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserForms.
     */
    distinct?: UserFormScalarFieldEnum | UserFormScalarFieldEnum[]
  }

  /**
   * UserForm findFirstOrThrow
   */
  export type UserFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormInclude<ExtArgs> | null
    /**
     * Filter, which UserForm to fetch.
     */
    where?: UserFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserForms to fetch.
     */
    orderBy?: UserFormOrderByWithRelationInput | UserFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserForms.
     */
    cursor?: UserFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserForms.
     */
    distinct?: UserFormScalarFieldEnum | UserFormScalarFieldEnum[]
  }

  /**
   * UserForm findMany
   */
  export type UserFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormInclude<ExtArgs> | null
    /**
     * Filter, which UserForms to fetch.
     */
    where?: UserFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserForms to fetch.
     */
    orderBy?: UserFormOrderByWithRelationInput | UserFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserForms.
     */
    cursor?: UserFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserForms.
     */
    skip?: number
    distinct?: UserFormScalarFieldEnum | UserFormScalarFieldEnum[]
  }

  /**
   * UserForm create
   */
  export type UserFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormInclude<ExtArgs> | null
    /**
     * The data needed to create a UserForm.
     */
    data: XOR<UserFormCreateInput, UserFormUncheckedCreateInput>
  }

  /**
   * UserForm createMany
   */
  export type UserFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserForms.
     */
    data: UserFormCreateManyInput | UserFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserForm createManyAndReturn
   */
  export type UserFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * The data used to create many UserForms.
     */
    data: UserFormCreateManyInput | UserFormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserForm update
   */
  export type UserFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormInclude<ExtArgs> | null
    /**
     * The data needed to update a UserForm.
     */
    data: XOR<UserFormUpdateInput, UserFormUncheckedUpdateInput>
    /**
     * Choose, which UserForm to update.
     */
    where: UserFormWhereUniqueInput
  }

  /**
   * UserForm updateMany
   */
  export type UserFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserForms.
     */
    data: XOR<UserFormUpdateManyMutationInput, UserFormUncheckedUpdateManyInput>
    /**
     * Filter which UserForms to update
     */
    where?: UserFormWhereInput
    /**
     * Limit how many UserForms to update.
     */
    limit?: number
  }

  /**
   * UserForm updateManyAndReturn
   */
  export type UserFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * The data used to update UserForms.
     */
    data: XOR<UserFormUpdateManyMutationInput, UserFormUncheckedUpdateManyInput>
    /**
     * Filter which UserForms to update
     */
    where?: UserFormWhereInput
    /**
     * Limit how many UserForms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserForm upsert
   */
  export type UserFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormInclude<ExtArgs> | null
    /**
     * The filter to search for the UserForm to update in case it exists.
     */
    where: UserFormWhereUniqueInput
    /**
     * In case the UserForm found by the `where` argument doesn't exist, create a new UserForm with this data.
     */
    create: XOR<UserFormCreateInput, UserFormUncheckedCreateInput>
    /**
     * In case the UserForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFormUpdateInput, UserFormUncheckedUpdateInput>
  }

  /**
   * UserForm delete
   */
  export type UserFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormInclude<ExtArgs> | null
    /**
     * Filter which UserForm to delete.
     */
    where: UserFormWhereUniqueInput
  }

  /**
   * UserForm deleteMany
   */
  export type UserFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserForms to delete
     */
    where?: UserFormWhereInput
    /**
     * Limit how many UserForms to delete.
     */
    limit?: number
  }

  /**
   * UserForm without action
   */
  export type UserFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserForm
     */
    select?: UserFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserForm
     */
    omit?: UserFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFormInclude<ExtArgs> | null
  }


  /**
   * Model Allergy
   */

  export type AggregateAllergy = {
    _count: AllergyCountAggregateOutputType | null
    _min: AllergyMinAggregateOutputType | null
    _max: AllergyMaxAggregateOutputType | null
  }

  export type AllergyMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AllergyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AllergyCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AllergyMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AllergyMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AllergyCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AllergyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allergy to aggregate.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Allergies
    **/
    _count?: true | AllergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllergyMaxAggregateInputType
  }

  export type GetAllergyAggregateType<T extends AllergyAggregateArgs> = {
        [P in keyof T & keyof AggregateAllergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllergy[P]>
      : GetScalarType<T[P], AggregateAllergy[P]>
  }




  export type AllergyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllergyWhereInput
    orderBy?: AllergyOrderByWithAggregationInput | AllergyOrderByWithAggregationInput[]
    by: AllergyScalarFieldEnum[] | AllergyScalarFieldEnum
    having?: AllergyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllergyCountAggregateInputType | true
    _min?: AllergyMinAggregateInputType
    _max?: AllergyMaxAggregateInputType
  }

  export type AllergyGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: AllergyCountAggregateOutputType | null
    _min: AllergyMinAggregateOutputType | null
    _max: AllergyMaxAggregateOutputType | null
  }

  type GetAllergyGroupByPayload<T extends AllergyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllergyGroupByOutputType[P]>
            : GetScalarType<T[P], AllergyGroupByOutputType[P]>
        }
      >
    >


  export type AllergySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userAllergies?: boolean | Allergy$userAllergiesArgs<ExtArgs>
    _count?: boolean | AllergyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergy"]>

  export type AllergySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["allergy"]>

  export type AllergySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["allergy"]>

  export type AllergySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AllergyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["allergy"]>
  export type AllergyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAllergies?: boolean | Allergy$userAllergiesArgs<ExtArgs>
    _count?: boolean | AllergyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AllergyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AllergyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AllergyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Allergy"
    objects: {
      userAllergies: Prisma.$UserAllergyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["allergy"]>
    composites: {}
  }

  type AllergyGetPayload<S extends boolean | null | undefined | AllergyDefaultArgs> = $Result.GetResult<Prisma.$AllergyPayload, S>

  type AllergyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllergyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllergyCountAggregateInputType | true
    }

  export interface AllergyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Allergy'], meta: { name: 'Allergy' } }
    /**
     * Find zero or one Allergy that matches the filter.
     * @param {AllergyFindUniqueArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllergyFindUniqueArgs>(args: SelectSubset<T, AllergyFindUniqueArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Allergy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllergyFindUniqueOrThrowArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllergyFindUniqueOrThrowArgs>(args: SelectSubset<T, AllergyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyFindFirstArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllergyFindFirstArgs>(args?: SelectSubset<T, AllergyFindFirstArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyFindFirstOrThrowArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllergyFindFirstOrThrowArgs>(args?: SelectSubset<T, AllergyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allergies
     * const allergies = await prisma.allergy.findMany()
     * 
     * // Get first 10 Allergies
     * const allergies = await prisma.allergy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allergyWithIdOnly = await prisma.allergy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AllergyFindManyArgs>(args?: SelectSubset<T, AllergyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Allergy.
     * @param {AllergyCreateArgs} args - Arguments to create a Allergy.
     * @example
     * // Create one Allergy
     * const Allergy = await prisma.allergy.create({
     *   data: {
     *     // ... data to create a Allergy
     *   }
     * })
     * 
     */
    create<T extends AllergyCreateArgs>(args: SelectSubset<T, AllergyCreateArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Allergies.
     * @param {AllergyCreateManyArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergy = await prisma.allergy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllergyCreateManyArgs>(args?: SelectSubset<T, AllergyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Allergies and returns the data saved in the database.
     * @param {AllergyCreateManyAndReturnArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergy = await prisma.allergy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Allergies and only return the `id`
     * const allergyWithIdOnly = await prisma.allergy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllergyCreateManyAndReturnArgs>(args?: SelectSubset<T, AllergyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Allergy.
     * @param {AllergyDeleteArgs} args - Arguments to delete one Allergy.
     * @example
     * // Delete one Allergy
     * const Allergy = await prisma.allergy.delete({
     *   where: {
     *     // ... filter to delete one Allergy
     *   }
     * })
     * 
     */
    delete<T extends AllergyDeleteArgs>(args: SelectSubset<T, AllergyDeleteArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Allergy.
     * @param {AllergyUpdateArgs} args - Arguments to update one Allergy.
     * @example
     * // Update one Allergy
     * const allergy = await prisma.allergy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllergyUpdateArgs>(args: SelectSubset<T, AllergyUpdateArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Allergies.
     * @param {AllergyDeleteManyArgs} args - Arguments to filter Allergies to delete.
     * @example
     * // Delete a few Allergies
     * const { count } = await prisma.allergy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllergyDeleteManyArgs>(args?: SelectSubset<T, AllergyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allergies
     * const allergy = await prisma.allergy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllergyUpdateManyArgs>(args: SelectSubset<T, AllergyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies and returns the data updated in the database.
     * @param {AllergyUpdateManyAndReturnArgs} args - Arguments to update many Allergies.
     * @example
     * // Update many Allergies
     * const allergy = await prisma.allergy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Allergies and only return the `id`
     * const allergyWithIdOnly = await prisma.allergy.updateManyAndReturn({
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
    updateManyAndReturn<T extends AllergyUpdateManyAndReturnArgs>(args: SelectSubset<T, AllergyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Allergy.
     * @param {AllergyUpsertArgs} args - Arguments to update or create a Allergy.
     * @example
     * // Update or create a Allergy
     * const allergy = await prisma.allergy.upsert({
     *   create: {
     *     // ... data to create a Allergy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allergy we want to update
     *   }
     * })
     */
    upsert<T extends AllergyUpsertArgs>(args: SelectSubset<T, AllergyUpsertArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyCountArgs} args - Arguments to filter Allergies to count.
     * @example
     * // Count the number of Allergies
     * const count = await prisma.allergy.count({
     *   where: {
     *     // ... the filter for the Allergies we want to count
     *   }
     * })
    **/
    count<T extends AllergyCountArgs>(
      args?: Subset<T, AllergyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AllergyAggregateArgs>(args: Subset<T, AllergyAggregateArgs>): Prisma.PrismaPromise<GetAllergyAggregateType<T>>

    /**
     * Group by Allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyGroupByArgs} args - Group by arguments.
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
      T extends AllergyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllergyGroupByArgs['orderBy'] }
        : { orderBy?: AllergyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AllergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Allergy model
   */
  readonly fields: AllergyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Allergy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllergyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAllergies<T extends Allergy$userAllergiesArgs<ExtArgs> = {}>(args?: Subset<T, Allergy$userAllergiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Allergy model
   */
  interface AllergyFieldRefs {
    readonly id: FieldRef<"Allergy", 'String'>
    readonly name: FieldRef<"Allergy", 'String'>
    readonly createdAt: FieldRef<"Allergy", 'DateTime'>
    readonly updatedAt: FieldRef<"Allergy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Allergy findUnique
   */
  export type AllergyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy findUniqueOrThrow
   */
  export type AllergyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy findFirst
   */
  export type AllergyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allergies.
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allergies.
     */
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * Allergy findFirstOrThrow
   */
  export type AllergyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allergies.
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allergies.
     */
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * Allergy findMany
   */
  export type AllergyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergies to fetch.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Allergies.
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * Allergy create
   */
  export type AllergyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * The data needed to create a Allergy.
     */
    data: XOR<AllergyCreateInput, AllergyUncheckedCreateInput>
  }

  /**
   * Allergy createMany
   */
  export type AllergyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Allergies.
     */
    data: AllergyCreateManyInput | AllergyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Allergy createManyAndReturn
   */
  export type AllergyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * The data used to create many Allergies.
     */
    data: AllergyCreateManyInput | AllergyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Allergy update
   */
  export type AllergyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * The data needed to update a Allergy.
     */
    data: XOR<AllergyUpdateInput, AllergyUncheckedUpdateInput>
    /**
     * Choose, which Allergy to update.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy updateMany
   */
  export type AllergyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Allergies.
     */
    data: XOR<AllergyUpdateManyMutationInput, AllergyUncheckedUpdateManyInput>
    /**
     * Filter which Allergies to update
     */
    where?: AllergyWhereInput
    /**
     * Limit how many Allergies to update.
     */
    limit?: number
  }

  /**
   * Allergy updateManyAndReturn
   */
  export type AllergyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * The data used to update Allergies.
     */
    data: XOR<AllergyUpdateManyMutationInput, AllergyUncheckedUpdateManyInput>
    /**
     * Filter which Allergies to update
     */
    where?: AllergyWhereInput
    /**
     * Limit how many Allergies to update.
     */
    limit?: number
  }

  /**
   * Allergy upsert
   */
  export type AllergyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * The filter to search for the Allergy to update in case it exists.
     */
    where: AllergyWhereUniqueInput
    /**
     * In case the Allergy found by the `where` argument doesn't exist, create a new Allergy with this data.
     */
    create: XOR<AllergyCreateInput, AllergyUncheckedCreateInput>
    /**
     * In case the Allergy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllergyUpdateInput, AllergyUncheckedUpdateInput>
  }

  /**
   * Allergy delete
   */
  export type AllergyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter which Allergy to delete.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy deleteMany
   */
  export type AllergyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allergies to delete
     */
    where?: AllergyWhereInput
    /**
     * Limit how many Allergies to delete.
     */
    limit?: number
  }

  /**
   * Allergy.userAllergies
   */
  export type Allergy$userAllergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    where?: UserAllergyWhereInput
    orderBy?: UserAllergyOrderByWithRelationInput | UserAllergyOrderByWithRelationInput[]
    cursor?: UserAllergyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAllergyScalarFieldEnum | UserAllergyScalarFieldEnum[]
  }

  /**
   * Allergy without action
   */
  export type AllergyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
  }


  /**
   * Model UserAllergy
   */

  export type AggregateUserAllergy = {
    _count: UserAllergyCountAggregateOutputType | null
    _min: UserAllergyMinAggregateOutputType | null
    _max: UserAllergyMaxAggregateOutputType | null
  }

  export type UserAllergyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    allergyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAllergyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    allergyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAllergyCountAggregateOutputType = {
    id: number
    userId: number
    allergyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAllergyMinAggregateInputType = {
    id?: true
    userId?: true
    allergyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAllergyMaxAggregateInputType = {
    id?: true
    userId?: true
    allergyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAllergyCountAggregateInputType = {
    id?: true
    userId?: true
    allergyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAllergyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAllergy to aggregate.
     */
    where?: UserAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAllergies to fetch.
     */
    orderBy?: UserAllergyOrderByWithRelationInput | UserAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAllergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAllergies
    **/
    _count?: true | UserAllergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAllergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAllergyMaxAggregateInputType
  }

  export type GetUserAllergyAggregateType<T extends UserAllergyAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAllergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAllergy[P]>
      : GetScalarType<T[P], AggregateUserAllergy[P]>
  }




  export type UserAllergyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAllergyWhereInput
    orderBy?: UserAllergyOrderByWithAggregationInput | UserAllergyOrderByWithAggregationInput[]
    by: UserAllergyScalarFieldEnum[] | UserAllergyScalarFieldEnum
    having?: UserAllergyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAllergyCountAggregateInputType | true
    _min?: UserAllergyMinAggregateInputType
    _max?: UserAllergyMaxAggregateInputType
  }

  export type UserAllergyGroupByOutputType = {
    id: string
    userId: string
    allergyId: string
    createdAt: Date
    updatedAt: Date
    _count: UserAllergyCountAggregateOutputType | null
    _min: UserAllergyMinAggregateOutputType | null
    _max: UserAllergyMaxAggregateOutputType | null
  }

  type GetUserAllergyGroupByPayload<T extends UserAllergyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAllergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAllergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAllergyGroupByOutputType[P]>
            : GetScalarType<T[P], UserAllergyGroupByOutputType[P]>
        }
      >
    >


  export type UserAllergySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allergyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAllergy"]>

  export type UserAllergySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allergyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAllergy"]>

  export type UserAllergySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allergyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAllergy"]>

  export type UserAllergySelectScalar = {
    id?: boolean
    userId?: boolean
    allergyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserAllergyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "allergyId" | "createdAt" | "updatedAt", ExtArgs["result"]["userAllergy"]>
  export type UserAllergyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }
  export type UserAllergyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }
  export type UserAllergyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }

  export type $UserAllergyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAllergy"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      allergy: Prisma.$AllergyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      allergyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAllergy"]>
    composites: {}
  }

  type UserAllergyGetPayload<S extends boolean | null | undefined | UserAllergyDefaultArgs> = $Result.GetResult<Prisma.$UserAllergyPayload, S>

  type UserAllergyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAllergyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAllergyCountAggregateInputType | true
    }

  export interface UserAllergyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAllergy'], meta: { name: 'UserAllergy' } }
    /**
     * Find zero or one UserAllergy that matches the filter.
     * @param {UserAllergyFindUniqueArgs} args - Arguments to find a UserAllergy
     * @example
     * // Get one UserAllergy
     * const userAllergy = await prisma.userAllergy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAllergyFindUniqueArgs>(args: SelectSubset<T, UserAllergyFindUniqueArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAllergy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAllergyFindUniqueOrThrowArgs} args - Arguments to find a UserAllergy
     * @example
     * // Get one UserAllergy
     * const userAllergy = await prisma.userAllergy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAllergyFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAllergyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAllergy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyFindFirstArgs} args - Arguments to find a UserAllergy
     * @example
     * // Get one UserAllergy
     * const userAllergy = await prisma.userAllergy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAllergyFindFirstArgs>(args?: SelectSubset<T, UserAllergyFindFirstArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAllergy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyFindFirstOrThrowArgs} args - Arguments to find a UserAllergy
     * @example
     * // Get one UserAllergy
     * const userAllergy = await prisma.userAllergy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAllergyFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAllergyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAllergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAllergies
     * const userAllergies = await prisma.userAllergy.findMany()
     * 
     * // Get first 10 UserAllergies
     * const userAllergies = await prisma.userAllergy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAllergyWithIdOnly = await prisma.userAllergy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAllergyFindManyArgs>(args?: SelectSubset<T, UserAllergyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAllergy.
     * @param {UserAllergyCreateArgs} args - Arguments to create a UserAllergy.
     * @example
     * // Create one UserAllergy
     * const UserAllergy = await prisma.userAllergy.create({
     *   data: {
     *     // ... data to create a UserAllergy
     *   }
     * })
     * 
     */
    create<T extends UserAllergyCreateArgs>(args: SelectSubset<T, UserAllergyCreateArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAllergies.
     * @param {UserAllergyCreateManyArgs} args - Arguments to create many UserAllergies.
     * @example
     * // Create many UserAllergies
     * const userAllergy = await prisma.userAllergy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAllergyCreateManyArgs>(args?: SelectSubset<T, UserAllergyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAllergies and returns the data saved in the database.
     * @param {UserAllergyCreateManyAndReturnArgs} args - Arguments to create many UserAllergies.
     * @example
     * // Create many UserAllergies
     * const userAllergy = await prisma.userAllergy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAllergies and only return the `id`
     * const userAllergyWithIdOnly = await prisma.userAllergy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAllergyCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAllergyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAllergy.
     * @param {UserAllergyDeleteArgs} args - Arguments to delete one UserAllergy.
     * @example
     * // Delete one UserAllergy
     * const UserAllergy = await prisma.userAllergy.delete({
     *   where: {
     *     // ... filter to delete one UserAllergy
     *   }
     * })
     * 
     */
    delete<T extends UserAllergyDeleteArgs>(args: SelectSubset<T, UserAllergyDeleteArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAllergy.
     * @param {UserAllergyUpdateArgs} args - Arguments to update one UserAllergy.
     * @example
     * // Update one UserAllergy
     * const userAllergy = await prisma.userAllergy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAllergyUpdateArgs>(args: SelectSubset<T, UserAllergyUpdateArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAllergies.
     * @param {UserAllergyDeleteManyArgs} args - Arguments to filter UserAllergies to delete.
     * @example
     * // Delete a few UserAllergies
     * const { count } = await prisma.userAllergy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAllergyDeleteManyArgs>(args?: SelectSubset<T, UserAllergyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAllergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAllergies
     * const userAllergy = await prisma.userAllergy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAllergyUpdateManyArgs>(args: SelectSubset<T, UserAllergyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAllergies and returns the data updated in the database.
     * @param {UserAllergyUpdateManyAndReturnArgs} args - Arguments to update many UserAllergies.
     * @example
     * // Update many UserAllergies
     * const userAllergy = await prisma.userAllergy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAllergies and only return the `id`
     * const userAllergyWithIdOnly = await prisma.userAllergy.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserAllergyUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAllergyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAllergy.
     * @param {UserAllergyUpsertArgs} args - Arguments to update or create a UserAllergy.
     * @example
     * // Update or create a UserAllergy
     * const userAllergy = await prisma.userAllergy.upsert({
     *   create: {
     *     // ... data to create a UserAllergy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAllergy we want to update
     *   }
     * })
     */
    upsert<T extends UserAllergyUpsertArgs>(args: SelectSubset<T, UserAllergyUpsertArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAllergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyCountArgs} args - Arguments to filter UserAllergies to count.
     * @example
     * // Count the number of UserAllergies
     * const count = await prisma.userAllergy.count({
     *   where: {
     *     // ... the filter for the UserAllergies we want to count
     *   }
     * })
    **/
    count<T extends UserAllergyCountArgs>(
      args?: Subset<T, UserAllergyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAllergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAllergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAllergyAggregateArgs>(args: Subset<T, UserAllergyAggregateArgs>): Prisma.PrismaPromise<GetUserAllergyAggregateType<T>>

    /**
     * Group by UserAllergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyGroupByArgs} args - Group by arguments.
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
      T extends UserAllergyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAllergyGroupByArgs['orderBy'] }
        : { orderBy?: UserAllergyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAllergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAllergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAllergy model
   */
  readonly fields: UserAllergyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAllergy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAllergyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    allergy<T extends AllergyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AllergyDefaultArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAllergy model
   */
  interface UserAllergyFieldRefs {
    readonly id: FieldRef<"UserAllergy", 'String'>
    readonly userId: FieldRef<"UserAllergy", 'String'>
    readonly allergyId: FieldRef<"UserAllergy", 'String'>
    readonly createdAt: FieldRef<"UserAllergy", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAllergy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAllergy findUnique
   */
  export type UserAllergyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter, which UserAllergy to fetch.
     */
    where: UserAllergyWhereUniqueInput
  }

  /**
   * UserAllergy findUniqueOrThrow
   */
  export type UserAllergyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter, which UserAllergy to fetch.
     */
    where: UserAllergyWhereUniqueInput
  }

  /**
   * UserAllergy findFirst
   */
  export type UserAllergyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter, which UserAllergy to fetch.
     */
    where?: UserAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAllergies to fetch.
     */
    orderBy?: UserAllergyOrderByWithRelationInput | UserAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAllergies.
     */
    cursor?: UserAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAllergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAllergies.
     */
    distinct?: UserAllergyScalarFieldEnum | UserAllergyScalarFieldEnum[]
  }

  /**
   * UserAllergy findFirstOrThrow
   */
  export type UserAllergyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter, which UserAllergy to fetch.
     */
    where?: UserAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAllergies to fetch.
     */
    orderBy?: UserAllergyOrderByWithRelationInput | UserAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAllergies.
     */
    cursor?: UserAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAllergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAllergies.
     */
    distinct?: UserAllergyScalarFieldEnum | UserAllergyScalarFieldEnum[]
  }

  /**
   * UserAllergy findMany
   */
  export type UserAllergyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter, which UserAllergies to fetch.
     */
    where?: UserAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAllergies to fetch.
     */
    orderBy?: UserAllergyOrderByWithRelationInput | UserAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAllergies.
     */
    cursor?: UserAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAllergies.
     */
    skip?: number
    distinct?: UserAllergyScalarFieldEnum | UserAllergyScalarFieldEnum[]
  }

  /**
   * UserAllergy create
   */
  export type UserAllergyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAllergy.
     */
    data: XOR<UserAllergyCreateInput, UserAllergyUncheckedCreateInput>
  }

  /**
   * UserAllergy createMany
   */
  export type UserAllergyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAllergies.
     */
    data: UserAllergyCreateManyInput | UserAllergyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAllergy createManyAndReturn
   */
  export type UserAllergyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * The data used to create many UserAllergies.
     */
    data: UserAllergyCreateManyInput | UserAllergyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAllergy update
   */
  export type UserAllergyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAllergy.
     */
    data: XOR<UserAllergyUpdateInput, UserAllergyUncheckedUpdateInput>
    /**
     * Choose, which UserAllergy to update.
     */
    where: UserAllergyWhereUniqueInput
  }

  /**
   * UserAllergy updateMany
   */
  export type UserAllergyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAllergies.
     */
    data: XOR<UserAllergyUpdateManyMutationInput, UserAllergyUncheckedUpdateManyInput>
    /**
     * Filter which UserAllergies to update
     */
    where?: UserAllergyWhereInput
    /**
     * Limit how many UserAllergies to update.
     */
    limit?: number
  }

  /**
   * UserAllergy updateManyAndReturn
   */
  export type UserAllergyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * The data used to update UserAllergies.
     */
    data: XOR<UserAllergyUpdateManyMutationInput, UserAllergyUncheckedUpdateManyInput>
    /**
     * Filter which UserAllergies to update
     */
    where?: UserAllergyWhereInput
    /**
     * Limit how many UserAllergies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAllergy upsert
   */
  export type UserAllergyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAllergy to update in case it exists.
     */
    where: UserAllergyWhereUniqueInput
    /**
     * In case the UserAllergy found by the `where` argument doesn't exist, create a new UserAllergy with this data.
     */
    create: XOR<UserAllergyCreateInput, UserAllergyUncheckedCreateInput>
    /**
     * In case the UserAllergy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAllergyUpdateInput, UserAllergyUncheckedUpdateInput>
  }

  /**
   * UserAllergy delete
   */
  export type UserAllergyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter which UserAllergy to delete.
     */
    where: UserAllergyWhereUniqueInput
  }

  /**
   * UserAllergy deleteMany
   */
  export type UserAllergyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAllergies to delete
     */
    where?: UserAllergyWhereInput
    /**
     * Limit how many UserAllergies to delete.
     */
    limit?: number
  }

  /**
   * UserAllergy without action
   */
  export type UserAllergyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
  }


  /**
   * Model MealPlan
   */

  export type AggregateMealPlan = {
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  export type MealPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealPlanCountAggregateOutputType = {
    id: number
    userId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MealPlanMinAggregateInputType = {
    id?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealPlanCountAggregateInputType = {
    id?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MealPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlan to aggregate.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealPlans
    **/
    _count?: true | MealPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealPlanMaxAggregateInputType
  }

  export type GetMealPlanAggregateType<T extends MealPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateMealPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealPlan[P]>
      : GetScalarType<T[P], AggregateMealPlan[P]>
  }




  export type MealPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithAggregationInput | MealPlanOrderByWithAggregationInput[]
    by: MealPlanScalarFieldEnum[] | MealPlanScalarFieldEnum
    having?: MealPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealPlanCountAggregateInputType | true
    _min?: MealPlanMinAggregateInputType
    _max?: MealPlanMaxAggregateInputType
  }

  export type MealPlanGroupByOutputType = {
    id: string
    userId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  type GetMealPlanGroupByPayload<T extends MealPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
            : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
        }
      >
    >


  export type MealPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    meals?: boolean | MealPlan$mealsArgs<ExtArgs>
    groceryItems?: boolean | MealPlan$groceryItemsArgs<ExtArgs>
    _count?: boolean | MealPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MealPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["mealPlan"]>
  export type MealPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    meals?: boolean | MealPlan$mealsArgs<ExtArgs>
    groceryItems?: boolean | MealPlan$groceryItemsArgs<ExtArgs>
    _count?: boolean | MealPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MealPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      meals: Prisma.$MealPayload<ExtArgs>[]
      groceryItems: Prisma.$GroceryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mealPlan"]>
    composites: {}
  }

  type MealPlanGetPayload<S extends boolean | null | undefined | MealPlanDefaultArgs> = $Result.GetResult<Prisma.$MealPlanPayload, S>

  type MealPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealPlanCountAggregateInputType | true
    }

  export interface MealPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealPlan'], meta: { name: 'MealPlan' } }
    /**
     * Find zero or one MealPlan that matches the filter.
     * @param {MealPlanFindUniqueArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealPlanFindUniqueArgs>(args: SelectSubset<T, MealPlanFindUniqueArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealPlanFindUniqueOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, MealPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealPlanFindFirstArgs>(args?: SelectSubset<T, MealPlanFindFirstArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, MealPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealPlans
     * const mealPlans = await prisma.mealPlan.findMany()
     * 
     * // Get first 10 MealPlans
     * const mealPlans = await prisma.mealPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealPlanFindManyArgs>(args?: SelectSubset<T, MealPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealPlan.
     * @param {MealPlanCreateArgs} args - Arguments to create a MealPlan.
     * @example
     * // Create one MealPlan
     * const MealPlan = await prisma.mealPlan.create({
     *   data: {
     *     // ... data to create a MealPlan
     *   }
     * })
     * 
     */
    create<T extends MealPlanCreateArgs>(args: SelectSubset<T, MealPlanCreateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealPlans.
     * @param {MealPlanCreateManyArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealPlanCreateManyArgs>(args?: SelectSubset<T, MealPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealPlans and returns the data saved in the database.
     * @param {MealPlanCreateManyAndReturnArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, MealPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealPlan.
     * @param {MealPlanDeleteArgs} args - Arguments to delete one MealPlan.
     * @example
     * // Delete one MealPlan
     * const MealPlan = await prisma.mealPlan.delete({
     *   where: {
     *     // ... filter to delete one MealPlan
     *   }
     * })
     * 
     */
    delete<T extends MealPlanDeleteArgs>(args: SelectSubset<T, MealPlanDeleteArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealPlan.
     * @param {MealPlanUpdateArgs} args - Arguments to update one MealPlan.
     * @example
     * // Update one MealPlan
     * const mealPlan = await prisma.mealPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealPlanUpdateArgs>(args: SelectSubset<T, MealPlanUpdateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealPlans.
     * @param {MealPlanDeleteManyArgs} args - Arguments to filter MealPlans to delete.
     * @example
     * // Delete a few MealPlans
     * const { count } = await prisma.mealPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealPlanDeleteManyArgs>(args?: SelectSubset<T, MealPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealPlanUpdateManyArgs>(args: SelectSubset<T, MealPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans and returns the data updated in the database.
     * @param {MealPlanUpdateManyAndReturnArgs} args - Arguments to update many MealPlans.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, MealPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealPlan.
     * @param {MealPlanUpsertArgs} args - Arguments to update or create a MealPlan.
     * @example
     * // Update or create a MealPlan
     * const mealPlan = await prisma.mealPlan.upsert({
     *   create: {
     *     // ... data to create a MealPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealPlan we want to update
     *   }
     * })
     */
    upsert<T extends MealPlanUpsertArgs>(args: SelectSubset<T, MealPlanUpsertArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanCountArgs} args - Arguments to filter MealPlans to count.
     * @example
     * // Count the number of MealPlans
     * const count = await prisma.mealPlan.count({
     *   where: {
     *     // ... the filter for the MealPlans we want to count
     *   }
     * })
    **/
    count<T extends MealPlanCountArgs>(
      args?: Subset<T, MealPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealPlanAggregateArgs>(args: Subset<T, MealPlanAggregateArgs>): Prisma.PrismaPromise<GetMealPlanAggregateType<T>>

    /**
     * Group by MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanGroupByArgs} args - Group by arguments.
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
      T extends MealPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealPlanGroupByArgs['orderBy'] }
        : { orderBy?: MealPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealPlan model
   */
  readonly fields: MealPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meals<T extends MealPlan$mealsArgs<ExtArgs> = {}>(args?: Subset<T, MealPlan$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groceryItems<T extends MealPlan$groceryItemsArgs<ExtArgs> = {}>(args?: Subset<T, MealPlan$groceryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MealPlan model
   */
  interface MealPlanFieldRefs {
    readonly id: FieldRef<"MealPlan", 'String'>
    readonly userId: FieldRef<"MealPlan", 'String'>
    readonly isActive: FieldRef<"MealPlan", 'Boolean'>
    readonly createdAt: FieldRef<"MealPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"MealPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MealPlan findUnique
   */
  export type MealPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findUniqueOrThrow
   */
  export type MealPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findFirst
   */
  export type MealPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findFirstOrThrow
   */
  export type MealPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findMany
   */
  export type MealPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlans to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan create
   */
  export type MealPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a MealPlan.
     */
    data: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
  }

  /**
   * MealPlan createMany
   */
  export type MealPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealPlan createManyAndReturn
   */
  export type MealPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlan update
   */
  export type MealPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a MealPlan.
     */
    data: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
    /**
     * Choose, which MealPlan to update.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan updateMany
   */
  export type MealPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
  }

  /**
   * MealPlan updateManyAndReturn
   */
  export type MealPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlan upsert
   */
  export type MealPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the MealPlan to update in case it exists.
     */
    where: MealPlanWhereUniqueInput
    /**
     * In case the MealPlan found by the `where` argument doesn't exist, create a new MealPlan with this data.
     */
    create: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
    /**
     * In case the MealPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
  }

  /**
   * MealPlan delete
   */
  export type MealPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter which MealPlan to delete.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan deleteMany
   */
  export type MealPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlans to delete
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to delete.
     */
    limit?: number
  }

  /**
   * MealPlan.meals
   */
  export type MealPlan$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * MealPlan.groceryItems
   */
  export type MealPlan$groceryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    where?: GroceryItemWhereInput
    orderBy?: GroceryItemOrderByWithRelationInput | GroceryItemOrderByWithRelationInput[]
    cursor?: GroceryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[]
  }

  /**
   * MealPlan without action
   */
  export type MealPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealMinAggregateOutputType = {
    id: string | null
    name: string | null
    mealPlanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mealPlanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    name: number
    mealPlanId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MealMinAggregateInputType = {
    id?: true
    name?: true
    mealPlanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    name?: true
    mealPlanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    name?: true
    mealPlanId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: string
    name: string
    mealPlanId: string
    createdAt: Date
    updatedAt: Date
    _count: MealCountAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mealPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
    ingredients?: boolean | Meal$ingredientsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mealPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mealPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    name?: boolean
    mealPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mealPlanId" | "createdAt" | "updatedAt", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
    ingredients?: boolean | Meal$ingredientsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      mealPlan: Prisma.$MealPlanPayload<ExtArgs>
      ingredients: Prisma.$MealIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mealPlanId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mealPlan<T extends MealPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealPlanDefaultArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredients<T extends Meal$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'String'>
    readonly name: FieldRef<"Meal", 'String'>
    readonly mealPlanId: FieldRef<"Meal", 'String'>
    readonly createdAt: FieldRef<"Meal", 'DateTime'>
    readonly updatedAt: FieldRef<"Meal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal.ingredients
   */
  export type Meal$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    where?: MealIngredientWhereInput
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    cursor?: MealIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealIngredientScalarFieldEnum | MealIngredientScalarFieldEnum[]
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    caloriesPer100: number | null
    proteinPer100: number | null
    fatPer100: number | null
    carbPer100: number | null
  }

  export type IngredientSumAggregateOutputType = {
    caloriesPer100: number | null
    proteinPer100: number | null
    fatPer100: number | null
    carbPer100: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    name: string | null
    caloriesPer100: number | null
    proteinPer100: number | null
    fatPer100: number | null
    carbPer100: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    caloriesPer100: number | null
    proteinPer100: number | null
    fatPer100: number | null
    carbPer100: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    caloriesPer100: number
    proteinPer100: number
    fatPer100: number
    carbPer100: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    caloriesPer100?: true
    proteinPer100?: true
    fatPer100?: true
    carbPer100?: true
  }

  export type IngredientSumAggregateInputType = {
    caloriesPer100?: true
    proteinPer100?: true
    fatPer100?: true
    carbPer100?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
    caloriesPer100?: true
    proteinPer100?: true
    fatPer100?: true
    carbPer100?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
    caloriesPer100?: true
    proteinPer100?: true
    fatPer100?: true
    carbPer100?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    caloriesPer100?: true
    proteinPer100?: true
    fatPer100?: true
    carbPer100?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: string
    name: string
    caloriesPer100: number | null
    proteinPer100: number | null
    fatPer100: number | null
    carbPer100: number | null
    createdAt: Date
    updatedAt: Date
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    caloriesPer100?: boolean
    proteinPer100?: boolean
    fatPer100?: boolean
    carbPer100?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealIngredients?: boolean | Ingredient$mealIngredientsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    caloriesPer100?: boolean
    proteinPer100?: boolean
    fatPer100?: boolean
    carbPer100?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    caloriesPer100?: boolean
    proteinPer100?: boolean
    fatPer100?: boolean
    carbPer100?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    name?: boolean
    caloriesPer100?: boolean
    proteinPer100?: boolean
    fatPer100?: boolean
    carbPer100?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "caloriesPer100" | "proteinPer100" | "fatPer100" | "carbPer100" | "createdAt" | "updatedAt", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealIngredients?: boolean | Ingredient$mealIngredientsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      mealIngredients: Prisma.$MealIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      caloriesPer100: number | null
      proteinPer100: number | null
      fatPer100: number | null
      carbPer100: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mealIngredients<T extends Ingredient$mealIngredientsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$mealIngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly caloriesPer100: FieldRef<"Ingredient", 'Float'>
    readonly proteinPer100: FieldRef<"Ingredient", 'Float'>
    readonly fatPer100: FieldRef<"Ingredient", 'Float'>
    readonly carbPer100: FieldRef<"Ingredient", 'Float'>
    readonly createdAt: FieldRef<"Ingredient", 'DateTime'>
    readonly updatedAt: FieldRef<"Ingredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient.mealIngredients
   */
  export type Ingredient$mealIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    where?: MealIngredientWhereInput
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    cursor?: MealIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealIngredientScalarFieldEnum | MealIngredientScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model MealIngredient
   */

  export type AggregateMealIngredient = {
    _count: MealIngredientCountAggregateOutputType | null
    _avg: MealIngredientAvgAggregateOutputType | null
    _sum: MealIngredientSumAggregateOutputType | null
    _min: MealIngredientMinAggregateOutputType | null
    _max: MealIngredientMaxAggregateOutputType | null
  }

  export type MealIngredientAvgAggregateOutputType = {
    quantity: number | null
  }

  export type MealIngredientSumAggregateOutputType = {
    quantity: number | null
  }

  export type MealIngredientMinAggregateOutputType = {
    id: string | null
    mealId: string | null
    ingredientId: string | null
    quantity: number | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealIngredientMaxAggregateOutputType = {
    id: string | null
    mealId: string | null
    ingredientId: string | null
    quantity: number | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealIngredientCountAggregateOutputType = {
    id: number
    mealId: number
    ingredientId: number
    quantity: number
    unit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MealIngredientAvgAggregateInputType = {
    quantity?: true
  }

  export type MealIngredientSumAggregateInputType = {
    quantity?: true
  }

  export type MealIngredientMinAggregateInputType = {
    id?: true
    mealId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealIngredientMaxAggregateInputType = {
    id?: true
    mealId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealIngredientCountAggregateInputType = {
    id?: true
    mealId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MealIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealIngredient to aggregate.
     */
    where?: MealIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealIngredients to fetch.
     */
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealIngredients
    **/
    _count?: true | MealIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealIngredientMaxAggregateInputType
  }

  export type GetMealIngredientAggregateType<T extends MealIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateMealIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealIngredient[P]>
      : GetScalarType<T[P], AggregateMealIngredient[P]>
  }




  export type MealIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealIngredientWhereInput
    orderBy?: MealIngredientOrderByWithAggregationInput | MealIngredientOrderByWithAggregationInput[]
    by: MealIngredientScalarFieldEnum[] | MealIngredientScalarFieldEnum
    having?: MealIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealIngredientCountAggregateInputType | true
    _avg?: MealIngredientAvgAggregateInputType
    _sum?: MealIngredientSumAggregateInputType
    _min?: MealIngredientMinAggregateInputType
    _max?: MealIngredientMaxAggregateInputType
  }

  export type MealIngredientGroupByOutputType = {
    id: string
    mealId: string
    ingredientId: string
    quantity: number
    unit: string
    createdAt: Date
    updatedAt: Date
    _count: MealIngredientCountAggregateOutputType | null
    _avg: MealIngredientAvgAggregateOutputType | null
    _sum: MealIngredientSumAggregateOutputType | null
    _min: MealIngredientMinAggregateOutputType | null
    _max: MealIngredientMaxAggregateOutputType | null
  }

  type GetMealIngredientGroupByPayload<T extends MealIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], MealIngredientGroupByOutputType[P]>
        }
      >
    >


  export type MealIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealIngredient"]>

  export type MealIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealIngredient"]>

  export type MealIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealIngredient"]>

  export type MealIngredientSelectScalar = {
    id?: boolean
    mealId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MealIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mealId" | "ingredientId" | "quantity" | "unit" | "createdAt" | "updatedAt", ExtArgs["result"]["mealIngredient"]>
  export type MealIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type MealIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type MealIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }

  export type $MealIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealIngredient"
    objects: {
      meal: Prisma.$MealPayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mealId: string
      ingredientId: string
      quantity: number
      unit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mealIngredient"]>
    composites: {}
  }

  type MealIngredientGetPayload<S extends boolean | null | undefined | MealIngredientDefaultArgs> = $Result.GetResult<Prisma.$MealIngredientPayload, S>

  type MealIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealIngredientCountAggregateInputType | true
    }

  export interface MealIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealIngredient'], meta: { name: 'MealIngredient' } }
    /**
     * Find zero or one MealIngredient that matches the filter.
     * @param {MealIngredientFindUniqueArgs} args - Arguments to find a MealIngredient
     * @example
     * // Get one MealIngredient
     * const mealIngredient = await prisma.mealIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealIngredientFindUniqueArgs>(args: SelectSubset<T, MealIngredientFindUniqueArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealIngredientFindUniqueOrThrowArgs} args - Arguments to find a MealIngredient
     * @example
     * // Get one MealIngredient
     * const mealIngredient = await prisma.mealIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, MealIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientFindFirstArgs} args - Arguments to find a MealIngredient
     * @example
     * // Get one MealIngredient
     * const mealIngredient = await prisma.mealIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealIngredientFindFirstArgs>(args?: SelectSubset<T, MealIngredientFindFirstArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientFindFirstOrThrowArgs} args - Arguments to find a MealIngredient
     * @example
     * // Get one MealIngredient
     * const mealIngredient = await prisma.mealIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, MealIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealIngredients
     * const mealIngredients = await prisma.mealIngredient.findMany()
     * 
     * // Get first 10 MealIngredients
     * const mealIngredients = await prisma.mealIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealIngredientWithIdOnly = await prisma.mealIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealIngredientFindManyArgs>(args?: SelectSubset<T, MealIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealIngredient.
     * @param {MealIngredientCreateArgs} args - Arguments to create a MealIngredient.
     * @example
     * // Create one MealIngredient
     * const MealIngredient = await prisma.mealIngredient.create({
     *   data: {
     *     // ... data to create a MealIngredient
     *   }
     * })
     * 
     */
    create<T extends MealIngredientCreateArgs>(args: SelectSubset<T, MealIngredientCreateArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealIngredients.
     * @param {MealIngredientCreateManyArgs} args - Arguments to create many MealIngredients.
     * @example
     * // Create many MealIngredients
     * const mealIngredient = await prisma.mealIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealIngredientCreateManyArgs>(args?: SelectSubset<T, MealIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealIngredients and returns the data saved in the database.
     * @param {MealIngredientCreateManyAndReturnArgs} args - Arguments to create many MealIngredients.
     * @example
     * // Create many MealIngredients
     * const mealIngredient = await prisma.mealIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealIngredients and only return the `id`
     * const mealIngredientWithIdOnly = await prisma.mealIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, MealIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealIngredient.
     * @param {MealIngredientDeleteArgs} args - Arguments to delete one MealIngredient.
     * @example
     * // Delete one MealIngredient
     * const MealIngredient = await prisma.mealIngredient.delete({
     *   where: {
     *     // ... filter to delete one MealIngredient
     *   }
     * })
     * 
     */
    delete<T extends MealIngredientDeleteArgs>(args: SelectSubset<T, MealIngredientDeleteArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealIngredient.
     * @param {MealIngredientUpdateArgs} args - Arguments to update one MealIngredient.
     * @example
     * // Update one MealIngredient
     * const mealIngredient = await prisma.mealIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealIngredientUpdateArgs>(args: SelectSubset<T, MealIngredientUpdateArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealIngredients.
     * @param {MealIngredientDeleteManyArgs} args - Arguments to filter MealIngredients to delete.
     * @example
     * // Delete a few MealIngredients
     * const { count } = await prisma.mealIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealIngredientDeleteManyArgs>(args?: SelectSubset<T, MealIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealIngredients
     * const mealIngredient = await prisma.mealIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealIngredientUpdateManyArgs>(args: SelectSubset<T, MealIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealIngredients and returns the data updated in the database.
     * @param {MealIngredientUpdateManyAndReturnArgs} args - Arguments to update many MealIngredients.
     * @example
     * // Update many MealIngredients
     * const mealIngredient = await prisma.mealIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealIngredients and only return the `id`
     * const mealIngredientWithIdOnly = await prisma.mealIngredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, MealIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealIngredient.
     * @param {MealIngredientUpsertArgs} args - Arguments to update or create a MealIngredient.
     * @example
     * // Update or create a MealIngredient
     * const mealIngredient = await prisma.mealIngredient.upsert({
     *   create: {
     *     // ... data to create a MealIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealIngredient we want to update
     *   }
     * })
     */
    upsert<T extends MealIngredientUpsertArgs>(args: SelectSubset<T, MealIngredientUpsertArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientCountArgs} args - Arguments to filter MealIngredients to count.
     * @example
     * // Count the number of MealIngredients
     * const count = await prisma.mealIngredient.count({
     *   where: {
     *     // ... the filter for the MealIngredients we want to count
     *   }
     * })
    **/
    count<T extends MealIngredientCountArgs>(
      args?: Subset<T, MealIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealIngredientAggregateArgs>(args: Subset<T, MealIngredientAggregateArgs>): Prisma.PrismaPromise<GetMealIngredientAggregateType<T>>

    /**
     * Group by MealIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientGroupByArgs} args - Group by arguments.
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
      T extends MealIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealIngredientGroupByArgs['orderBy'] }
        : { orderBy?: MealIngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealIngredient model
   */
  readonly fields: MealIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MealIngredient model
   */
  interface MealIngredientFieldRefs {
    readonly id: FieldRef<"MealIngredient", 'String'>
    readonly mealId: FieldRef<"MealIngredient", 'String'>
    readonly ingredientId: FieldRef<"MealIngredient", 'String'>
    readonly quantity: FieldRef<"MealIngredient", 'Float'>
    readonly unit: FieldRef<"MealIngredient", 'String'>
    readonly createdAt: FieldRef<"MealIngredient", 'DateTime'>
    readonly updatedAt: FieldRef<"MealIngredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MealIngredient findUnique
   */
  export type MealIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MealIngredient to fetch.
     */
    where: MealIngredientWhereUniqueInput
  }

  /**
   * MealIngredient findUniqueOrThrow
   */
  export type MealIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MealIngredient to fetch.
     */
    where: MealIngredientWhereUniqueInput
  }

  /**
   * MealIngredient findFirst
   */
  export type MealIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MealIngredient to fetch.
     */
    where?: MealIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealIngredients to fetch.
     */
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealIngredients.
     */
    cursor?: MealIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealIngredients.
     */
    distinct?: MealIngredientScalarFieldEnum | MealIngredientScalarFieldEnum[]
  }

  /**
   * MealIngredient findFirstOrThrow
   */
  export type MealIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MealIngredient to fetch.
     */
    where?: MealIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealIngredients to fetch.
     */
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealIngredients.
     */
    cursor?: MealIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealIngredients.
     */
    distinct?: MealIngredientScalarFieldEnum | MealIngredientScalarFieldEnum[]
  }

  /**
   * MealIngredient findMany
   */
  export type MealIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MealIngredients to fetch.
     */
    where?: MealIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealIngredients to fetch.
     */
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealIngredients.
     */
    cursor?: MealIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealIngredients.
     */
    skip?: number
    distinct?: MealIngredientScalarFieldEnum | MealIngredientScalarFieldEnum[]
  }

  /**
   * MealIngredient create
   */
  export type MealIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a MealIngredient.
     */
    data: XOR<MealIngredientCreateInput, MealIngredientUncheckedCreateInput>
  }

  /**
   * MealIngredient createMany
   */
  export type MealIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealIngredients.
     */
    data: MealIngredientCreateManyInput | MealIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealIngredient createManyAndReturn
   */
  export type MealIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many MealIngredients.
     */
    data: MealIngredientCreateManyInput | MealIngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealIngredient update
   */
  export type MealIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a MealIngredient.
     */
    data: XOR<MealIngredientUpdateInput, MealIngredientUncheckedUpdateInput>
    /**
     * Choose, which MealIngredient to update.
     */
    where: MealIngredientWhereUniqueInput
  }

  /**
   * MealIngredient updateMany
   */
  export type MealIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealIngredients.
     */
    data: XOR<MealIngredientUpdateManyMutationInput, MealIngredientUncheckedUpdateManyInput>
    /**
     * Filter which MealIngredients to update
     */
    where?: MealIngredientWhereInput
    /**
     * Limit how many MealIngredients to update.
     */
    limit?: number
  }

  /**
   * MealIngredient updateManyAndReturn
   */
  export type MealIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * The data used to update MealIngredients.
     */
    data: XOR<MealIngredientUpdateManyMutationInput, MealIngredientUncheckedUpdateManyInput>
    /**
     * Filter which MealIngredients to update
     */
    where?: MealIngredientWhereInput
    /**
     * Limit how many MealIngredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealIngredient upsert
   */
  export type MealIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the MealIngredient to update in case it exists.
     */
    where: MealIngredientWhereUniqueInput
    /**
     * In case the MealIngredient found by the `where` argument doesn't exist, create a new MealIngredient with this data.
     */
    create: XOR<MealIngredientCreateInput, MealIngredientUncheckedCreateInput>
    /**
     * In case the MealIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealIngredientUpdateInput, MealIngredientUncheckedUpdateInput>
  }

  /**
   * MealIngredient delete
   */
  export type MealIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter which MealIngredient to delete.
     */
    where: MealIngredientWhereUniqueInput
  }

  /**
   * MealIngredient deleteMany
   */
  export type MealIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealIngredients to delete
     */
    where?: MealIngredientWhereInput
    /**
     * Limit how many MealIngredients to delete.
     */
    limit?: number
  }

  /**
   * MealIngredient without action
   */
  export type MealIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
  }


  /**
   * Model GroceryItem
   */

  export type AggregateGroceryItem = {
    _count: GroceryItemCountAggregateOutputType | null
    _avg: GroceryItemAvgAggregateOutputType | null
    _sum: GroceryItemSumAggregateOutputType | null
    _min: GroceryItemMinAggregateOutputType | null
    _max: GroceryItemMaxAggregateOutputType | null
  }

  export type GroceryItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type GroceryItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type GroceryItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    unit: string | null
    mealId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroceryItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    unit: string | null
    mealId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroceryItemCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    unit: number
    mealId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroceryItemAvgAggregateInputType = {
    quantity?: true
  }

  export type GroceryItemSumAggregateInputType = {
    quantity?: true
  }

  export type GroceryItemMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    mealId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroceryItemMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    mealId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroceryItemCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    mealId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroceryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroceryItem to aggregate.
     */
    where?: GroceryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?: GroceryItemOrderByWithRelationInput | GroceryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroceryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroceryItems
    **/
    _count?: true | GroceryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroceryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroceryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroceryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroceryItemMaxAggregateInputType
  }

  export type GetGroceryItemAggregateType<T extends GroceryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGroceryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroceryItem[P]>
      : GetScalarType<T[P], AggregateGroceryItem[P]>
  }




  export type GroceryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryItemWhereInput
    orderBy?: GroceryItemOrderByWithAggregationInput | GroceryItemOrderByWithAggregationInput[]
    by: GroceryItemScalarFieldEnum[] | GroceryItemScalarFieldEnum
    having?: GroceryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroceryItemCountAggregateInputType | true
    _avg?: GroceryItemAvgAggregateInputType
    _sum?: GroceryItemSumAggregateInputType
    _min?: GroceryItemMinAggregateInputType
    _max?: GroceryItemMaxAggregateInputType
  }

  export type GroceryItemGroupByOutputType = {
    id: string
    name: string
    quantity: number
    unit: string
    mealId: string
    createdAt: Date
    updatedAt: Date
    _count: GroceryItemCountAggregateOutputType | null
    _avg: GroceryItemAvgAggregateOutputType | null
    _sum: GroceryItemSumAggregateOutputType | null
    _min: GroceryItemMinAggregateOutputType | null
    _max: GroceryItemMaxAggregateOutputType | null
  }

  type GetGroceryItemGroupByPayload<T extends GroceryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroceryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroceryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroceryItemGroupByOutputType[P]>
            : GetScalarType<T[P], GroceryItemGroupByOutputType[P]>
        }
      >
    >


  export type GroceryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    mealId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groceryItem"]>

  export type GroceryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    mealId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groceryItem"]>

  export type GroceryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    mealId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groceryItem"]>

  export type GroceryItemSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    mealId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroceryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "quantity" | "unit" | "mealId" | "createdAt" | "updatedAt", ExtArgs["result"]["groceryItem"]>
  export type GroceryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }
  export type GroceryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }
  export type GroceryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }

  export type $GroceryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroceryItem"
    objects: {
      mealPlan: Prisma.$MealPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      quantity: number
      unit: string
      mealId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groceryItem"]>
    composites: {}
  }

  type GroceryItemGetPayload<S extends boolean | null | undefined | GroceryItemDefaultArgs> = $Result.GetResult<Prisma.$GroceryItemPayload, S>

  type GroceryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroceryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroceryItemCountAggregateInputType | true
    }

  export interface GroceryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroceryItem'], meta: { name: 'GroceryItem' } }
    /**
     * Find zero or one GroceryItem that matches the filter.
     * @param {GroceryItemFindUniqueArgs} args - Arguments to find a GroceryItem
     * @example
     * // Get one GroceryItem
     * const groceryItem = await prisma.groceryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroceryItemFindUniqueArgs>(args: SelectSubset<T, GroceryItemFindUniqueArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroceryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroceryItemFindUniqueOrThrowArgs} args - Arguments to find a GroceryItem
     * @example
     * // Get one GroceryItem
     * const groceryItem = await prisma.groceryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroceryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, GroceryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroceryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemFindFirstArgs} args - Arguments to find a GroceryItem
     * @example
     * // Get one GroceryItem
     * const groceryItem = await prisma.groceryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroceryItemFindFirstArgs>(args?: SelectSubset<T, GroceryItemFindFirstArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroceryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemFindFirstOrThrowArgs} args - Arguments to find a GroceryItem
     * @example
     * // Get one GroceryItem
     * const groceryItem = await prisma.groceryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroceryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, GroceryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroceryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroceryItems
     * const groceryItems = await prisma.groceryItem.findMany()
     * 
     * // Get first 10 GroceryItems
     * const groceryItems = await prisma.groceryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groceryItemWithIdOnly = await prisma.groceryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroceryItemFindManyArgs>(args?: SelectSubset<T, GroceryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroceryItem.
     * @param {GroceryItemCreateArgs} args - Arguments to create a GroceryItem.
     * @example
     * // Create one GroceryItem
     * const GroceryItem = await prisma.groceryItem.create({
     *   data: {
     *     // ... data to create a GroceryItem
     *   }
     * })
     * 
     */
    create<T extends GroceryItemCreateArgs>(args: SelectSubset<T, GroceryItemCreateArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroceryItems.
     * @param {GroceryItemCreateManyArgs} args - Arguments to create many GroceryItems.
     * @example
     * // Create many GroceryItems
     * const groceryItem = await prisma.groceryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroceryItemCreateManyArgs>(args?: SelectSubset<T, GroceryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroceryItems and returns the data saved in the database.
     * @param {GroceryItemCreateManyAndReturnArgs} args - Arguments to create many GroceryItems.
     * @example
     * // Create many GroceryItems
     * const groceryItem = await prisma.groceryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroceryItems and only return the `id`
     * const groceryItemWithIdOnly = await prisma.groceryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroceryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, GroceryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroceryItem.
     * @param {GroceryItemDeleteArgs} args - Arguments to delete one GroceryItem.
     * @example
     * // Delete one GroceryItem
     * const GroceryItem = await prisma.groceryItem.delete({
     *   where: {
     *     // ... filter to delete one GroceryItem
     *   }
     * })
     * 
     */
    delete<T extends GroceryItemDeleteArgs>(args: SelectSubset<T, GroceryItemDeleteArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroceryItem.
     * @param {GroceryItemUpdateArgs} args - Arguments to update one GroceryItem.
     * @example
     * // Update one GroceryItem
     * const groceryItem = await prisma.groceryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroceryItemUpdateArgs>(args: SelectSubset<T, GroceryItemUpdateArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroceryItems.
     * @param {GroceryItemDeleteManyArgs} args - Arguments to filter GroceryItems to delete.
     * @example
     * // Delete a few GroceryItems
     * const { count } = await prisma.groceryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroceryItemDeleteManyArgs>(args?: SelectSubset<T, GroceryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroceryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroceryItems
     * const groceryItem = await prisma.groceryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroceryItemUpdateManyArgs>(args: SelectSubset<T, GroceryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroceryItems and returns the data updated in the database.
     * @param {GroceryItemUpdateManyAndReturnArgs} args - Arguments to update many GroceryItems.
     * @example
     * // Update many GroceryItems
     * const groceryItem = await prisma.groceryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroceryItems and only return the `id`
     * const groceryItemWithIdOnly = await prisma.groceryItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroceryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, GroceryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroceryItem.
     * @param {GroceryItemUpsertArgs} args - Arguments to update or create a GroceryItem.
     * @example
     * // Update or create a GroceryItem
     * const groceryItem = await prisma.groceryItem.upsert({
     *   create: {
     *     // ... data to create a GroceryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroceryItem we want to update
     *   }
     * })
     */
    upsert<T extends GroceryItemUpsertArgs>(args: SelectSubset<T, GroceryItemUpsertArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroceryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemCountArgs} args - Arguments to filter GroceryItems to count.
     * @example
     * // Count the number of GroceryItems
     * const count = await prisma.groceryItem.count({
     *   where: {
     *     // ... the filter for the GroceryItems we want to count
     *   }
     * })
    **/
    count<T extends GroceryItemCountArgs>(
      args?: Subset<T, GroceryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroceryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroceryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroceryItemAggregateArgs>(args: Subset<T, GroceryItemAggregateArgs>): Prisma.PrismaPromise<GetGroceryItemAggregateType<T>>

    /**
     * Group by GroceryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemGroupByArgs} args - Group by arguments.
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
      T extends GroceryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroceryItemGroupByArgs['orderBy'] }
        : { orderBy?: GroceryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroceryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroceryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroceryItem model
   */
  readonly fields: GroceryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroceryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroceryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mealPlan<T extends MealPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealPlanDefaultArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroceryItem model
   */
  interface GroceryItemFieldRefs {
    readonly id: FieldRef<"GroceryItem", 'String'>
    readonly name: FieldRef<"GroceryItem", 'String'>
    readonly quantity: FieldRef<"GroceryItem", 'Float'>
    readonly unit: FieldRef<"GroceryItem", 'String'>
    readonly mealId: FieldRef<"GroceryItem", 'String'>
    readonly createdAt: FieldRef<"GroceryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"GroceryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroceryItem findUnique
   */
  export type GroceryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter, which GroceryItem to fetch.
     */
    where: GroceryItemWhereUniqueInput
  }

  /**
   * GroceryItem findUniqueOrThrow
   */
  export type GroceryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter, which GroceryItem to fetch.
     */
    where: GroceryItemWhereUniqueInput
  }

  /**
   * GroceryItem findFirst
   */
  export type GroceryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter, which GroceryItem to fetch.
     */
    where?: GroceryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?: GroceryItemOrderByWithRelationInput | GroceryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroceryItems.
     */
    cursor?: GroceryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroceryItems.
     */
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[]
  }

  /**
   * GroceryItem findFirstOrThrow
   */
  export type GroceryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter, which GroceryItem to fetch.
     */
    where?: GroceryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?: GroceryItemOrderByWithRelationInput | GroceryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroceryItems.
     */
    cursor?: GroceryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroceryItems.
     */
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[]
  }

  /**
   * GroceryItem findMany
   */
  export type GroceryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter, which GroceryItems to fetch.
     */
    where?: GroceryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?: GroceryItemOrderByWithRelationInput | GroceryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroceryItems.
     */
    cursor?: GroceryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryItems.
     */
    skip?: number
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[]
  }

  /**
   * GroceryItem create
   */
  export type GroceryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a GroceryItem.
     */
    data: XOR<GroceryItemCreateInput, GroceryItemUncheckedCreateInput>
  }

  /**
   * GroceryItem createMany
   */
  export type GroceryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroceryItems.
     */
    data: GroceryItemCreateManyInput | GroceryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroceryItem createManyAndReturn
   */
  export type GroceryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * The data used to create many GroceryItems.
     */
    data: GroceryItemCreateManyInput | GroceryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroceryItem update
   */
  export type GroceryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a GroceryItem.
     */
    data: XOR<GroceryItemUpdateInput, GroceryItemUncheckedUpdateInput>
    /**
     * Choose, which GroceryItem to update.
     */
    where: GroceryItemWhereUniqueInput
  }

  /**
   * GroceryItem updateMany
   */
  export type GroceryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroceryItems.
     */
    data: XOR<GroceryItemUpdateManyMutationInput, GroceryItemUncheckedUpdateManyInput>
    /**
     * Filter which GroceryItems to update
     */
    where?: GroceryItemWhereInput
    /**
     * Limit how many GroceryItems to update.
     */
    limit?: number
  }

  /**
   * GroceryItem updateManyAndReturn
   */
  export type GroceryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * The data used to update GroceryItems.
     */
    data: XOR<GroceryItemUpdateManyMutationInput, GroceryItemUncheckedUpdateManyInput>
    /**
     * Filter which GroceryItems to update
     */
    where?: GroceryItemWhereInput
    /**
     * Limit how many GroceryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroceryItem upsert
   */
  export type GroceryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the GroceryItem to update in case it exists.
     */
    where: GroceryItemWhereUniqueInput
    /**
     * In case the GroceryItem found by the `where` argument doesn't exist, create a new GroceryItem with this data.
     */
    create: XOR<GroceryItemCreateInput, GroceryItemUncheckedCreateInput>
    /**
     * In case the GroceryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroceryItemUpdateInput, GroceryItemUncheckedUpdateInput>
  }

  /**
   * GroceryItem delete
   */
  export type GroceryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter which GroceryItem to delete.
     */
    where: GroceryItemWhereUniqueInput
  }

  /**
   * GroceryItem deleteMany
   */
  export type GroceryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroceryItems to delete
     */
    where?: GroceryItemWhereInput
    /**
     * Limit how many GroceryItems to delete.
     */
    limit?: number
  }

  /**
   * GroceryItem without action
   */
  export type GroceryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    gender: 'gender',
    clerkUserId: 'clerkUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserFormScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currentWeight: 'currentWeight',
    targetWeight: 'targetWeight',
    height: 'height',
    activityFrequency: 'activityFrequency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserFormScalarFieldEnum = (typeof UserFormScalarFieldEnum)[keyof typeof UserFormScalarFieldEnum]


  export const AllergyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AllergyScalarFieldEnum = (typeof AllergyScalarFieldEnum)[keyof typeof AllergyScalarFieldEnum]


  export const UserAllergyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    allergyId: 'allergyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAllergyScalarFieldEnum = (typeof UserAllergyScalarFieldEnum)[keyof typeof UserAllergyScalarFieldEnum]


  export const MealPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MealPlanScalarFieldEnum = (typeof MealPlanScalarFieldEnum)[keyof typeof MealPlanScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mealPlanId: 'mealPlanId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    caloriesPer100: 'caloriesPer100',
    proteinPer100: 'proteinPer100',
    fatPer100: 'fatPer100',
    carbPer100: 'carbPer100',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const MealIngredientScalarFieldEnum: {
    id: 'id',
    mealId: 'mealId',
    ingredientId: 'ingredientId',
    quantity: 'quantity',
    unit: 'unit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MealIngredientScalarFieldEnum = (typeof MealIngredientScalarFieldEnum)[keyof typeof MealIngredientScalarFieldEnum]


  export const GroceryItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    unit: 'unit',
    mealId: 'mealId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroceryItemScalarFieldEnum = (typeof GroceryItemScalarFieldEnum)[keyof typeof GroceryItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    age?: IntNullableFilter<"User"> | number | null
    gender?: StringNullableFilter<"User"> | string | null
    clerkUserId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userForm?: XOR<UserFormNullableScalarRelationFilter, UserFormWhereInput> | null
    userAllergies?: UserAllergyListRelationFilter
    mealPlans?: MealPlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    clerkUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userForm?: UserFormOrderByWithRelationInput
    userAllergies?: UserAllergyOrderByRelationAggregateInput
    mealPlans?: MealPlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    age?: IntNullableFilter<"User"> | number | null
    gender?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userForm?: XOR<UserFormNullableScalarRelationFilter, UserFormWhereInput> | null
    userAllergies?: UserAllergyListRelationFilter
    mealPlans?: MealPlanListRelationFilter
  }, "id" | "clerkUserId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    clerkUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    clerkUserId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserFormWhereInput = {
    AND?: UserFormWhereInput | UserFormWhereInput[]
    OR?: UserFormWhereInput[]
    NOT?: UserFormWhereInput | UserFormWhereInput[]
    id?: StringFilter<"UserForm"> | string
    userId?: StringFilter<"UserForm"> | string
    currentWeight?: FloatFilter<"UserForm"> | number
    targetWeight?: FloatFilter<"UserForm"> | number
    height?: FloatFilter<"UserForm"> | number
    activityFrequency?: StringFilter<"UserForm"> | string
    createdAt?: DateTimeFilter<"UserForm"> | Date | string
    updatedAt?: DateTimeFilter<"UserForm"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserFormOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentWeight?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
    activityFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserFormWhereInput | UserFormWhereInput[]
    OR?: UserFormWhereInput[]
    NOT?: UserFormWhereInput | UserFormWhereInput[]
    currentWeight?: FloatFilter<"UserForm"> | number
    targetWeight?: FloatFilter<"UserForm"> | number
    height?: FloatFilter<"UserForm"> | number
    activityFrequency?: StringFilter<"UserForm"> | string
    createdAt?: DateTimeFilter<"UserForm"> | Date | string
    updatedAt?: DateTimeFilter<"UserForm"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserFormOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentWeight?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
    activityFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserFormCountOrderByAggregateInput
    _avg?: UserFormAvgOrderByAggregateInput
    _max?: UserFormMaxOrderByAggregateInput
    _min?: UserFormMinOrderByAggregateInput
    _sum?: UserFormSumOrderByAggregateInput
  }

  export type UserFormScalarWhereWithAggregatesInput = {
    AND?: UserFormScalarWhereWithAggregatesInput | UserFormScalarWhereWithAggregatesInput[]
    OR?: UserFormScalarWhereWithAggregatesInput[]
    NOT?: UserFormScalarWhereWithAggregatesInput | UserFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserForm"> | string
    userId?: StringWithAggregatesFilter<"UserForm"> | string
    currentWeight?: FloatWithAggregatesFilter<"UserForm"> | number
    targetWeight?: FloatWithAggregatesFilter<"UserForm"> | number
    height?: FloatWithAggregatesFilter<"UserForm"> | number
    activityFrequency?: StringWithAggregatesFilter<"UserForm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserForm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserForm"> | Date | string
  }

  export type AllergyWhereInput = {
    AND?: AllergyWhereInput | AllergyWhereInput[]
    OR?: AllergyWhereInput[]
    NOT?: AllergyWhereInput | AllergyWhereInput[]
    id?: StringFilter<"Allergy"> | string
    name?: StringFilter<"Allergy"> | string
    createdAt?: DateTimeFilter<"Allergy"> | Date | string
    updatedAt?: DateTimeFilter<"Allergy"> | Date | string
    userAllergies?: UserAllergyListRelationFilter
  }

  export type AllergyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAllergies?: UserAllergyOrderByRelationAggregateInput
  }

  export type AllergyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AllergyWhereInput | AllergyWhereInput[]
    OR?: AllergyWhereInput[]
    NOT?: AllergyWhereInput | AllergyWhereInput[]
    createdAt?: DateTimeFilter<"Allergy"> | Date | string
    updatedAt?: DateTimeFilter<"Allergy"> | Date | string
    userAllergies?: UserAllergyListRelationFilter
  }, "id" | "name">

  export type AllergyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AllergyCountOrderByAggregateInput
    _max?: AllergyMaxOrderByAggregateInput
    _min?: AllergyMinOrderByAggregateInput
  }

  export type AllergyScalarWhereWithAggregatesInput = {
    AND?: AllergyScalarWhereWithAggregatesInput | AllergyScalarWhereWithAggregatesInput[]
    OR?: AllergyScalarWhereWithAggregatesInput[]
    NOT?: AllergyScalarWhereWithAggregatesInput | AllergyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Allergy"> | string
    name?: StringWithAggregatesFilter<"Allergy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Allergy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Allergy"> | Date | string
  }

  export type UserAllergyWhereInput = {
    AND?: UserAllergyWhereInput | UserAllergyWhereInput[]
    OR?: UserAllergyWhereInput[]
    NOT?: UserAllergyWhereInput | UserAllergyWhereInput[]
    id?: StringFilter<"UserAllergy"> | string
    userId?: StringFilter<"UserAllergy"> | string
    allergyId?: StringFilter<"UserAllergy"> | string
    createdAt?: DateTimeFilter<"UserAllergy"> | Date | string
    updatedAt?: DateTimeFilter<"UserAllergy"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    allergy?: XOR<AllergyScalarRelationFilter, AllergyWhereInput>
  }

  export type UserAllergyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    allergyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    allergy?: AllergyOrderByWithRelationInput
  }

  export type UserAllergyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_allergyId?: UserAllergyUserIdAllergyIdCompoundUniqueInput
    AND?: UserAllergyWhereInput | UserAllergyWhereInput[]
    OR?: UserAllergyWhereInput[]
    NOT?: UserAllergyWhereInput | UserAllergyWhereInput[]
    userId?: StringFilter<"UserAllergy"> | string
    allergyId?: StringFilter<"UserAllergy"> | string
    createdAt?: DateTimeFilter<"UserAllergy"> | Date | string
    updatedAt?: DateTimeFilter<"UserAllergy"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    allergy?: XOR<AllergyScalarRelationFilter, AllergyWhereInput>
  }, "id" | "userId_allergyId">

  export type UserAllergyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    allergyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAllergyCountOrderByAggregateInput
    _max?: UserAllergyMaxOrderByAggregateInput
    _min?: UserAllergyMinOrderByAggregateInput
  }

  export type UserAllergyScalarWhereWithAggregatesInput = {
    AND?: UserAllergyScalarWhereWithAggregatesInput | UserAllergyScalarWhereWithAggregatesInput[]
    OR?: UserAllergyScalarWhereWithAggregatesInput[]
    NOT?: UserAllergyScalarWhereWithAggregatesInput | UserAllergyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAllergy"> | string
    userId?: StringWithAggregatesFilter<"UserAllergy"> | string
    allergyId?: StringWithAggregatesFilter<"UserAllergy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAllergy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAllergy"> | Date | string
  }

  export type MealPlanWhereInput = {
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    id?: StringFilter<"MealPlan"> | string
    userId?: StringFilter<"MealPlan"> | string
    isActive?: BoolFilter<"MealPlan"> | boolean
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    meals?: MealListRelationFilter
    groceryItems?: GroceryItemListRelationFilter
  }

  export type MealPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    meals?: MealOrderByRelationAggregateInput
    groceryItems?: GroceryItemOrderByRelationAggregateInput
  }

  export type MealPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    userId?: StringFilter<"MealPlan"> | string
    isActive?: BoolFilter<"MealPlan"> | boolean
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    meals?: MealListRelationFilter
    groceryItems?: GroceryItemListRelationFilter
  }, "id">

  export type MealPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MealPlanCountOrderByAggregateInput
    _max?: MealPlanMaxOrderByAggregateInput
    _min?: MealPlanMinOrderByAggregateInput
  }

  export type MealPlanScalarWhereWithAggregatesInput = {
    AND?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    OR?: MealPlanScalarWhereWithAggregatesInput[]
    NOT?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealPlan"> | string
    userId?: StringWithAggregatesFilter<"MealPlan"> | string
    isActive?: BoolWithAggregatesFilter<"MealPlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    mealPlanId?: StringFilter<"Meal"> | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    updatedAt?: DateTimeFilter<"Meal"> | Date | string
    mealPlan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
    ingredients?: MealIngredientListRelationFilter
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mealPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mealPlan?: MealPlanOrderByWithRelationInput
    ingredients?: MealIngredientOrderByRelationAggregateInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    name?: StringFilter<"Meal"> | string
    mealPlanId?: StringFilter<"Meal"> | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    updatedAt?: DateTimeFilter<"Meal"> | Date | string
    mealPlan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
    ingredients?: MealIngredientListRelationFilter
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mealPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meal"> | string
    name?: StringWithAggregatesFilter<"Meal"> | string
    mealPlanId?: StringWithAggregatesFilter<"Meal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    caloriesPer100?: FloatNullableFilter<"Ingredient"> | number | null
    proteinPer100?: FloatNullableFilter<"Ingredient"> | number | null
    fatPer100?: FloatNullableFilter<"Ingredient"> | number | null
    carbPer100?: FloatNullableFilter<"Ingredient"> | number | null
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
    mealIngredients?: MealIngredientListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    caloriesPer100?: SortOrderInput | SortOrder
    proteinPer100?: SortOrderInput | SortOrder
    fatPer100?: SortOrderInput | SortOrder
    carbPer100?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mealIngredients?: MealIngredientOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    caloriesPer100?: FloatNullableFilter<"Ingredient"> | number | null
    proteinPer100?: FloatNullableFilter<"Ingredient"> | number | null
    fatPer100?: FloatNullableFilter<"Ingredient"> | number | null
    carbPer100?: FloatNullableFilter<"Ingredient"> | number | null
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
    mealIngredients?: MealIngredientListRelationFilter
  }, "id" | "name">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    caloriesPer100?: SortOrderInput | SortOrder
    proteinPer100?: SortOrderInput | SortOrder
    fatPer100?: SortOrderInput | SortOrder
    carbPer100?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    caloriesPer100?: FloatNullableWithAggregatesFilter<"Ingredient"> | number | null
    proteinPer100?: FloatNullableWithAggregatesFilter<"Ingredient"> | number | null
    fatPer100?: FloatNullableWithAggregatesFilter<"Ingredient"> | number | null
    carbPer100?: FloatNullableWithAggregatesFilter<"Ingredient"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
  }

  export type MealIngredientWhereInput = {
    AND?: MealIngredientWhereInput | MealIngredientWhereInput[]
    OR?: MealIngredientWhereInput[]
    NOT?: MealIngredientWhereInput | MealIngredientWhereInput[]
    id?: StringFilter<"MealIngredient"> | string
    mealId?: StringFilter<"MealIngredient"> | string
    ingredientId?: StringFilter<"MealIngredient"> | string
    quantity?: FloatFilter<"MealIngredient"> | number
    unit?: StringFilter<"MealIngredient"> | string
    createdAt?: DateTimeFilter<"MealIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"MealIngredient"> | Date | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }

  export type MealIngredientOrderByWithRelationInput = {
    id?: SortOrder
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meal?: MealOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
  }

  export type MealIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mealId_ingredientId?: MealIngredientMealIdIngredientIdCompoundUniqueInput
    AND?: MealIngredientWhereInput | MealIngredientWhereInput[]
    OR?: MealIngredientWhereInput[]
    NOT?: MealIngredientWhereInput | MealIngredientWhereInput[]
    mealId?: StringFilter<"MealIngredient"> | string
    ingredientId?: StringFilter<"MealIngredient"> | string
    quantity?: FloatFilter<"MealIngredient"> | number
    unit?: StringFilter<"MealIngredient"> | string
    createdAt?: DateTimeFilter<"MealIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"MealIngredient"> | Date | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }, "id" | "mealId_ingredientId">

  export type MealIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MealIngredientCountOrderByAggregateInput
    _avg?: MealIngredientAvgOrderByAggregateInput
    _max?: MealIngredientMaxOrderByAggregateInput
    _min?: MealIngredientMinOrderByAggregateInput
    _sum?: MealIngredientSumOrderByAggregateInput
  }

  export type MealIngredientScalarWhereWithAggregatesInput = {
    AND?: MealIngredientScalarWhereWithAggregatesInput | MealIngredientScalarWhereWithAggregatesInput[]
    OR?: MealIngredientScalarWhereWithAggregatesInput[]
    NOT?: MealIngredientScalarWhereWithAggregatesInput | MealIngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealIngredient"> | string
    mealId?: StringWithAggregatesFilter<"MealIngredient"> | string
    ingredientId?: StringWithAggregatesFilter<"MealIngredient"> | string
    quantity?: FloatWithAggregatesFilter<"MealIngredient"> | number
    unit?: StringWithAggregatesFilter<"MealIngredient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MealIngredient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MealIngredient"> | Date | string
  }

  export type GroceryItemWhereInput = {
    AND?: GroceryItemWhereInput | GroceryItemWhereInput[]
    OR?: GroceryItemWhereInput[]
    NOT?: GroceryItemWhereInput | GroceryItemWhereInput[]
    id?: StringFilter<"GroceryItem"> | string
    name?: StringFilter<"GroceryItem"> | string
    quantity?: FloatFilter<"GroceryItem"> | number
    unit?: StringFilter<"GroceryItem"> | string
    mealId?: StringFilter<"GroceryItem"> | string
    createdAt?: DateTimeFilter<"GroceryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GroceryItem"> | Date | string
    mealPlan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
  }

  export type GroceryItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    mealId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mealPlan?: MealPlanOrderByWithRelationInput
  }

  export type GroceryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroceryItemWhereInput | GroceryItemWhereInput[]
    OR?: GroceryItemWhereInput[]
    NOT?: GroceryItemWhereInput | GroceryItemWhereInput[]
    name?: StringFilter<"GroceryItem"> | string
    quantity?: FloatFilter<"GroceryItem"> | number
    unit?: StringFilter<"GroceryItem"> | string
    mealId?: StringFilter<"GroceryItem"> | string
    createdAt?: DateTimeFilter<"GroceryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GroceryItem"> | Date | string
    mealPlan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
  }, "id">

  export type GroceryItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    mealId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroceryItemCountOrderByAggregateInput
    _avg?: GroceryItemAvgOrderByAggregateInput
    _max?: GroceryItemMaxOrderByAggregateInput
    _min?: GroceryItemMinOrderByAggregateInput
    _sum?: GroceryItemSumOrderByAggregateInput
  }

  export type GroceryItemScalarWhereWithAggregatesInput = {
    AND?: GroceryItemScalarWhereWithAggregatesInput | GroceryItemScalarWhereWithAggregatesInput[]
    OR?: GroceryItemScalarWhereWithAggregatesInput[]
    NOT?: GroceryItemScalarWhereWithAggregatesInput | GroceryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroceryItem"> | string
    name?: StringWithAggregatesFilter<"GroceryItem"> | string
    quantity?: FloatWithAggregatesFilter<"GroceryItem"> | number
    unit?: StringWithAggregatesFilter<"GroceryItem"> | string
    mealId?: StringWithAggregatesFilter<"GroceryItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroceryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroceryItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    age?: number | null
    gender?: string | null
    clerkUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userForm?: UserFormCreateNestedOneWithoutUserInput
    userAllergies?: UserAllergyCreateNestedManyWithoutUserInput
    mealPlans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    age?: number | null
    gender?: string | null
    clerkUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userForm?: UserFormUncheckedCreateNestedOneWithoutUserInput
    userAllergies?: UserAllergyUncheckedCreateNestedManyWithoutUserInput
    mealPlans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    clerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userForm?: UserFormUpdateOneWithoutUserNestedInput
    userAllergies?: UserAllergyUpdateManyWithoutUserNestedInput
    mealPlans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    clerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userForm?: UserFormUncheckedUpdateOneWithoutUserNestedInput
    userAllergies?: UserAllergyUncheckedUpdateManyWithoutUserNestedInput
    mealPlans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    age?: number | null
    gender?: string | null
    clerkUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    clerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    clerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFormCreateInput = {
    id?: string
    currentWeight: number
    targetWeight: number
    height: number
    activityFrequency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserFormInput
  }

  export type UserFormUncheckedCreateInput = {
    id?: string
    userId: string
    currentWeight: number
    targetWeight: number
    height: number
    activityFrequency: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    activityFrequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserFormNestedInput
  }

  export type UserFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    activityFrequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFormCreateManyInput = {
    id?: string
    userId: string
    currentWeight: number
    targetWeight: number
    height: number
    activityFrequency: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    activityFrequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    activityFrequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllergyCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userAllergies?: UserAllergyCreateNestedManyWithoutAllergyInput
  }

  export type AllergyUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userAllergies?: UserAllergyUncheckedCreateNestedManyWithoutAllergyInput
  }

  export type AllergyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAllergies?: UserAllergyUpdateManyWithoutAllergyNestedInput
  }

  export type AllergyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAllergies?: UserAllergyUncheckedUpdateManyWithoutAllergyNestedInput
  }

  export type AllergyCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AllergyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllergyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserAllergiesInput
    allergy: AllergyCreateNestedOneWithoutUserAllergiesInput
  }

  export type UserAllergyUncheckedCreateInput = {
    id?: string
    userId: string
    allergyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAllergyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserAllergiesNestedInput
    allergy?: AllergyUpdateOneRequiredWithoutUserAllergiesNestedInput
  }

  export type UserAllergyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    allergyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyCreateManyInput = {
    id?: string
    userId: string
    allergyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAllergyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    allergyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealPlanCreateInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMealPlansInput
    meals?: MealCreateNestedManyWithoutMealPlanInput
    groceryItems?: GroceryItemCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanUncheckedCreateInput = {
    id?: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutMealPlanInput
    groceryItems?: GroceryItemUncheckedCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealPlansNestedInput
    meals?: MealUpdateManyWithoutMealPlanNestedInput
    groceryItems?: GroceryItemUpdateManyWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutMealPlanNestedInput
    groceryItems?: GroceryItemUncheckedUpdateManyWithoutMealPlanNestedInput
  }

  export type MealPlanCreateManyInput = {
    id?: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mealPlan: MealPlanCreateNestedOneWithoutMealsInput
    ingredients?: MealIngredientCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateInput = {
    id?: string
    name: string
    mealPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: MealIngredientUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealPlan?: MealPlanUpdateOneRequiredWithoutMealsNestedInput
    ingredients?: MealIngredientUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mealPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: MealIngredientUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateManyInput = {
    id?: string
    name: string
    mealPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mealPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateInput = {
    id?: string
    name: string
    caloriesPer100?: number | null
    proteinPer100?: number | null
    fatPer100?: number | null
    carbPer100?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealIngredients?: MealIngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    name: string
    caloriesPer100?: number | null
    proteinPer100?: number | null
    fatPer100?: number | null
    carbPer100?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealIngredients?: MealIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    caloriesPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    fatPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    carbPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealIngredients?: MealIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    caloriesPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    fatPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    carbPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealIngredients?: MealIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: string
    name: string
    caloriesPer100?: number | null
    proteinPer100?: number | null
    fatPer100?: number | null
    carbPer100?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    caloriesPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    fatPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    carbPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    caloriesPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    fatPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    carbPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealIngredientCreateInput = {
    id?: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meal: MealCreateNestedOneWithoutIngredientsInput
    ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput
  }

  export type MealIngredientUncheckedCreateInput = {
    id?: string
    mealId: string
    ingredientId: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealIngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateOneRequiredWithoutIngredientsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput
  }

  export type MealIngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealIngredientCreateManyInput = {
    id?: string
    mealId: string
    ingredientId: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealIngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealIngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroceryItemCreateInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mealPlan: MealPlanCreateNestedOneWithoutGroceryItemsInput
  }

  export type GroceryItemUncheckedCreateInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    mealId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroceryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealPlan?: MealPlanUpdateOneRequiredWithoutGroceryItemsNestedInput
  }

  export type GroceryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroceryItemCreateManyInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    mealId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroceryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroceryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserFormNullableScalarRelationFilter = {
    is?: UserFormWhereInput | null
    isNot?: UserFormWhereInput | null
  }

  export type UserAllergyListRelationFilter = {
    every?: UserAllergyWhereInput
    some?: UserAllergyWhereInput
    none?: UserAllergyWhereInput
  }

  export type MealPlanListRelationFilter = {
    every?: MealPlanWhereInput
    some?: MealPlanWhereInput
    none?: MealPlanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserAllergyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    clerkUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    clerkUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    clerkUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserFormCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentWeight?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
    activityFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFormAvgOrderByAggregateInput = {
    currentWeight?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
  }

  export type UserFormMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentWeight?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
    activityFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFormMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentWeight?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
    activityFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFormSumOrderByAggregateInput = {
    currentWeight?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AllergyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AllergyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AllergyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AllergyScalarRelationFilter = {
    is?: AllergyWhereInput
    isNot?: AllergyWhereInput
  }

  export type UserAllergyUserIdAllergyIdCompoundUniqueInput = {
    userId: string
    allergyId: string
  }

  export type UserAllergyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allergyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAllergyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allergyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAllergyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allergyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type GroceryItemListRelationFilter = {
    every?: GroceryItemWhereInput
    some?: GroceryItemWhereInput
    none?: GroceryItemWhereInput
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroceryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MealPlanScalarRelationFilter = {
    is?: MealPlanWhereInput
    isNot?: MealPlanWhereInput
  }

  export type MealIngredientListRelationFilter = {
    every?: MealIngredientWhereInput
    some?: MealIngredientWhereInput
    none?: MealIngredientWhereInput
  }

  export type MealIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mealPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mealPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mealPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    caloriesPer100?: SortOrder
    proteinPer100?: SortOrder
    fatPer100?: SortOrder
    carbPer100?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    caloriesPer100?: SortOrder
    proteinPer100?: SortOrder
    fatPer100?: SortOrder
    carbPer100?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    caloriesPer100?: SortOrder
    proteinPer100?: SortOrder
    fatPer100?: SortOrder
    carbPer100?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    caloriesPer100?: SortOrder
    proteinPer100?: SortOrder
    fatPer100?: SortOrder
    carbPer100?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    caloriesPer100?: SortOrder
    proteinPer100?: SortOrder
    fatPer100?: SortOrder
    carbPer100?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MealScalarRelationFilter = {
    is?: MealWhereInput
    isNot?: MealWhereInput
  }

  export type IngredientScalarRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type MealIngredientMealIdIngredientIdCompoundUniqueInput = {
    mealId: string
    ingredientId: string
  }

  export type MealIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealIngredientAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type MealIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealIngredientSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type GroceryItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    mealId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroceryItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type GroceryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    mealId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroceryItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    mealId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroceryItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type UserFormCreateNestedOneWithoutUserInput = {
    create?: XOR<UserFormCreateWithoutUserInput, UserFormUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserFormCreateOrConnectWithoutUserInput
    connect?: UserFormWhereUniqueInput
  }

  export type UserAllergyCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput> | UserAllergyCreateWithoutUserInput[] | UserAllergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutUserInput | UserAllergyCreateOrConnectWithoutUserInput[]
    createMany?: UserAllergyCreateManyUserInputEnvelope
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
  }

  export type MealPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type UserFormUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserFormCreateWithoutUserInput, UserFormUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserFormCreateOrConnectWithoutUserInput
    connect?: UserFormWhereUniqueInput
  }

  export type UserAllergyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput> | UserAllergyCreateWithoutUserInput[] | UserAllergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutUserInput | UserAllergyCreateOrConnectWithoutUserInput[]
    createMany?: UserAllergyCreateManyUserInputEnvelope
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
  }

  export type MealPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserFormUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserFormCreateWithoutUserInput, UserFormUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserFormCreateOrConnectWithoutUserInput
    upsert?: UserFormUpsertWithoutUserInput
    disconnect?: UserFormWhereInput | boolean
    delete?: UserFormWhereInput | boolean
    connect?: UserFormWhereUniqueInput
    update?: XOR<XOR<UserFormUpdateToOneWithWhereWithoutUserInput, UserFormUpdateWithoutUserInput>, UserFormUncheckedUpdateWithoutUserInput>
  }

  export type UserAllergyUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput> | UserAllergyCreateWithoutUserInput[] | UserAllergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutUserInput | UserAllergyCreateOrConnectWithoutUserInput[]
    upsert?: UserAllergyUpsertWithWhereUniqueWithoutUserInput | UserAllergyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAllergyCreateManyUserInputEnvelope
    set?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    disconnect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    delete?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    update?: UserAllergyUpdateWithWhereUniqueWithoutUserInput | UserAllergyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAllergyUpdateManyWithWhereWithoutUserInput | UserAllergyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAllergyScalarWhereInput | UserAllergyScalarWhereInput[]
  }

  export type MealPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutUserInput | MealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutUserInput | MealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutUserInput | MealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type UserFormUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserFormCreateWithoutUserInput, UserFormUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserFormCreateOrConnectWithoutUserInput
    upsert?: UserFormUpsertWithoutUserInput
    disconnect?: UserFormWhereInput | boolean
    delete?: UserFormWhereInput | boolean
    connect?: UserFormWhereUniqueInput
    update?: XOR<XOR<UserFormUpdateToOneWithWhereWithoutUserInput, UserFormUpdateWithoutUserInput>, UserFormUncheckedUpdateWithoutUserInput>
  }

  export type UserAllergyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput> | UserAllergyCreateWithoutUserInput[] | UserAllergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutUserInput | UserAllergyCreateOrConnectWithoutUserInput[]
    upsert?: UserAllergyUpsertWithWhereUniqueWithoutUserInput | UserAllergyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAllergyCreateManyUserInputEnvelope
    set?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    disconnect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    delete?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    update?: UserAllergyUpdateWithWhereUniqueWithoutUserInput | UserAllergyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAllergyUpdateManyWithWhereWithoutUserInput | UserAllergyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAllergyScalarWhereInput | UserAllergyScalarWhereInput[]
  }

  export type MealPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutUserInput | MealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutUserInput | MealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutUserInput | MealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserFormInput = {
    create?: XOR<UserCreateWithoutUserFormInput, UserUncheckedCreateWithoutUserFormInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFormInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUserFormNestedInput = {
    create?: XOR<UserCreateWithoutUserFormInput, UserUncheckedCreateWithoutUserFormInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFormInput
    upsert?: UserUpsertWithoutUserFormInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserFormInput, UserUpdateWithoutUserFormInput>, UserUncheckedUpdateWithoutUserFormInput>
  }

  export type UserAllergyCreateNestedManyWithoutAllergyInput = {
    create?: XOR<UserAllergyCreateWithoutAllergyInput, UserAllergyUncheckedCreateWithoutAllergyInput> | UserAllergyCreateWithoutAllergyInput[] | UserAllergyUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutAllergyInput | UserAllergyCreateOrConnectWithoutAllergyInput[]
    createMany?: UserAllergyCreateManyAllergyInputEnvelope
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
  }

  export type UserAllergyUncheckedCreateNestedManyWithoutAllergyInput = {
    create?: XOR<UserAllergyCreateWithoutAllergyInput, UserAllergyUncheckedCreateWithoutAllergyInput> | UserAllergyCreateWithoutAllergyInput[] | UserAllergyUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutAllergyInput | UserAllergyCreateOrConnectWithoutAllergyInput[]
    createMany?: UserAllergyCreateManyAllergyInputEnvelope
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
  }

  export type UserAllergyUpdateManyWithoutAllergyNestedInput = {
    create?: XOR<UserAllergyCreateWithoutAllergyInput, UserAllergyUncheckedCreateWithoutAllergyInput> | UserAllergyCreateWithoutAllergyInput[] | UserAllergyUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutAllergyInput | UserAllergyCreateOrConnectWithoutAllergyInput[]
    upsert?: UserAllergyUpsertWithWhereUniqueWithoutAllergyInput | UserAllergyUpsertWithWhereUniqueWithoutAllergyInput[]
    createMany?: UserAllergyCreateManyAllergyInputEnvelope
    set?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    disconnect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    delete?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    update?: UserAllergyUpdateWithWhereUniqueWithoutAllergyInput | UserAllergyUpdateWithWhereUniqueWithoutAllergyInput[]
    updateMany?: UserAllergyUpdateManyWithWhereWithoutAllergyInput | UserAllergyUpdateManyWithWhereWithoutAllergyInput[]
    deleteMany?: UserAllergyScalarWhereInput | UserAllergyScalarWhereInput[]
  }

  export type UserAllergyUncheckedUpdateManyWithoutAllergyNestedInput = {
    create?: XOR<UserAllergyCreateWithoutAllergyInput, UserAllergyUncheckedCreateWithoutAllergyInput> | UserAllergyCreateWithoutAllergyInput[] | UserAllergyUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutAllergyInput | UserAllergyCreateOrConnectWithoutAllergyInput[]
    upsert?: UserAllergyUpsertWithWhereUniqueWithoutAllergyInput | UserAllergyUpsertWithWhereUniqueWithoutAllergyInput[]
    createMany?: UserAllergyCreateManyAllergyInputEnvelope
    set?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    disconnect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    delete?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    update?: UserAllergyUpdateWithWhereUniqueWithoutAllergyInput | UserAllergyUpdateWithWhereUniqueWithoutAllergyInput[]
    updateMany?: UserAllergyUpdateManyWithWhereWithoutAllergyInput | UserAllergyUpdateManyWithWhereWithoutAllergyInput[]
    deleteMany?: UserAllergyScalarWhereInput | UserAllergyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserAllergiesInput = {
    create?: XOR<UserCreateWithoutUserAllergiesInput, UserUncheckedCreateWithoutUserAllergiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAllergiesInput
    connect?: UserWhereUniqueInput
  }

  export type AllergyCreateNestedOneWithoutUserAllergiesInput = {
    create?: XOR<AllergyCreateWithoutUserAllergiesInput, AllergyUncheckedCreateWithoutUserAllergiesInput>
    connectOrCreate?: AllergyCreateOrConnectWithoutUserAllergiesInput
    connect?: AllergyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserAllergiesNestedInput = {
    create?: XOR<UserCreateWithoutUserAllergiesInput, UserUncheckedCreateWithoutUserAllergiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAllergiesInput
    upsert?: UserUpsertWithoutUserAllergiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAllergiesInput, UserUpdateWithoutUserAllergiesInput>, UserUncheckedUpdateWithoutUserAllergiesInput>
  }

  export type AllergyUpdateOneRequiredWithoutUserAllergiesNestedInput = {
    create?: XOR<AllergyCreateWithoutUserAllergiesInput, AllergyUncheckedCreateWithoutUserAllergiesInput>
    connectOrCreate?: AllergyCreateOrConnectWithoutUserAllergiesInput
    upsert?: AllergyUpsertWithoutUserAllergiesInput
    connect?: AllergyWhereUniqueInput
    update?: XOR<XOR<AllergyUpdateToOneWithWhereWithoutUserAllergiesInput, AllergyUpdateWithoutUserAllergiesInput>, AllergyUncheckedUpdateWithoutUserAllergiesInput>
  }

  export type UserCreateNestedOneWithoutMealPlansInput = {
    create?: XOR<UserCreateWithoutMealPlansInput, UserUncheckedCreateWithoutMealPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealPlansInput
    connect?: UserWhereUniqueInput
  }

  export type MealCreateNestedManyWithoutMealPlanInput = {
    create?: XOR<MealCreateWithoutMealPlanInput, MealUncheckedCreateWithoutMealPlanInput> | MealCreateWithoutMealPlanInput[] | MealUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: MealCreateOrConnectWithoutMealPlanInput | MealCreateOrConnectWithoutMealPlanInput[]
    createMany?: MealCreateManyMealPlanInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type GroceryItemCreateNestedManyWithoutMealPlanInput = {
    create?: XOR<GroceryItemCreateWithoutMealPlanInput, GroceryItemUncheckedCreateWithoutMealPlanInput> | GroceryItemCreateWithoutMealPlanInput[] | GroceryItemUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutMealPlanInput | GroceryItemCreateOrConnectWithoutMealPlanInput[]
    createMany?: GroceryItemCreateManyMealPlanInputEnvelope
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutMealPlanInput = {
    create?: XOR<MealCreateWithoutMealPlanInput, MealUncheckedCreateWithoutMealPlanInput> | MealCreateWithoutMealPlanInput[] | MealUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: MealCreateOrConnectWithoutMealPlanInput | MealCreateOrConnectWithoutMealPlanInput[]
    createMany?: MealCreateManyMealPlanInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type GroceryItemUncheckedCreateNestedManyWithoutMealPlanInput = {
    create?: XOR<GroceryItemCreateWithoutMealPlanInput, GroceryItemUncheckedCreateWithoutMealPlanInput> | GroceryItemCreateWithoutMealPlanInput[] | GroceryItemUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutMealPlanInput | GroceryItemCreateOrConnectWithoutMealPlanInput[]
    createMany?: GroceryItemCreateManyMealPlanInputEnvelope
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutMealPlansNestedInput = {
    create?: XOR<UserCreateWithoutMealPlansInput, UserUncheckedCreateWithoutMealPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealPlansInput
    upsert?: UserUpsertWithoutMealPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMealPlansInput, UserUpdateWithoutMealPlansInput>, UserUncheckedUpdateWithoutMealPlansInput>
  }

  export type MealUpdateManyWithoutMealPlanNestedInput = {
    create?: XOR<MealCreateWithoutMealPlanInput, MealUncheckedCreateWithoutMealPlanInput> | MealCreateWithoutMealPlanInput[] | MealUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: MealCreateOrConnectWithoutMealPlanInput | MealCreateOrConnectWithoutMealPlanInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutMealPlanInput | MealUpsertWithWhereUniqueWithoutMealPlanInput[]
    createMany?: MealCreateManyMealPlanInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutMealPlanInput | MealUpdateWithWhereUniqueWithoutMealPlanInput[]
    updateMany?: MealUpdateManyWithWhereWithoutMealPlanInput | MealUpdateManyWithWhereWithoutMealPlanInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type GroceryItemUpdateManyWithoutMealPlanNestedInput = {
    create?: XOR<GroceryItemCreateWithoutMealPlanInput, GroceryItemUncheckedCreateWithoutMealPlanInput> | GroceryItemCreateWithoutMealPlanInput[] | GroceryItemUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutMealPlanInput | GroceryItemCreateOrConnectWithoutMealPlanInput[]
    upsert?: GroceryItemUpsertWithWhereUniqueWithoutMealPlanInput | GroceryItemUpsertWithWhereUniqueWithoutMealPlanInput[]
    createMany?: GroceryItemCreateManyMealPlanInputEnvelope
    set?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    disconnect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    delete?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    update?: GroceryItemUpdateWithWhereUniqueWithoutMealPlanInput | GroceryItemUpdateWithWhereUniqueWithoutMealPlanInput[]
    updateMany?: GroceryItemUpdateManyWithWhereWithoutMealPlanInput | GroceryItemUpdateManyWithWhereWithoutMealPlanInput[]
    deleteMany?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[]
  }

  export type MealUncheckedUpdateManyWithoutMealPlanNestedInput = {
    create?: XOR<MealCreateWithoutMealPlanInput, MealUncheckedCreateWithoutMealPlanInput> | MealCreateWithoutMealPlanInput[] | MealUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: MealCreateOrConnectWithoutMealPlanInput | MealCreateOrConnectWithoutMealPlanInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutMealPlanInput | MealUpsertWithWhereUniqueWithoutMealPlanInput[]
    createMany?: MealCreateManyMealPlanInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutMealPlanInput | MealUpdateWithWhereUniqueWithoutMealPlanInput[]
    updateMany?: MealUpdateManyWithWhereWithoutMealPlanInput | MealUpdateManyWithWhereWithoutMealPlanInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type GroceryItemUncheckedUpdateManyWithoutMealPlanNestedInput = {
    create?: XOR<GroceryItemCreateWithoutMealPlanInput, GroceryItemUncheckedCreateWithoutMealPlanInput> | GroceryItemCreateWithoutMealPlanInput[] | GroceryItemUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutMealPlanInput | GroceryItemCreateOrConnectWithoutMealPlanInput[]
    upsert?: GroceryItemUpsertWithWhereUniqueWithoutMealPlanInput | GroceryItemUpsertWithWhereUniqueWithoutMealPlanInput[]
    createMany?: GroceryItemCreateManyMealPlanInputEnvelope
    set?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    disconnect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    delete?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    update?: GroceryItemUpdateWithWhereUniqueWithoutMealPlanInput | GroceryItemUpdateWithWhereUniqueWithoutMealPlanInput[]
    updateMany?: GroceryItemUpdateManyWithWhereWithoutMealPlanInput | GroceryItemUpdateManyWithWhereWithoutMealPlanInput[]
    deleteMany?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[]
  }

  export type MealPlanCreateNestedOneWithoutMealsInput = {
    create?: XOR<MealPlanCreateWithoutMealsInput, MealPlanUncheckedCreateWithoutMealsInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutMealsInput
    connect?: MealPlanWhereUniqueInput
  }

  export type MealIngredientCreateNestedManyWithoutMealInput = {
    create?: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput> | MealIngredientCreateWithoutMealInput[] | MealIngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutMealInput | MealIngredientCreateOrConnectWithoutMealInput[]
    createMany?: MealIngredientCreateManyMealInputEnvelope
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
  }

  export type MealIngredientUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput> | MealIngredientCreateWithoutMealInput[] | MealIngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutMealInput | MealIngredientCreateOrConnectWithoutMealInput[]
    createMany?: MealIngredientCreateManyMealInputEnvelope
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
  }

  export type MealPlanUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<MealPlanCreateWithoutMealsInput, MealPlanUncheckedCreateWithoutMealsInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutMealsInput
    upsert?: MealPlanUpsertWithoutMealsInput
    connect?: MealPlanWhereUniqueInput
    update?: XOR<XOR<MealPlanUpdateToOneWithWhereWithoutMealsInput, MealPlanUpdateWithoutMealsInput>, MealPlanUncheckedUpdateWithoutMealsInput>
  }

  export type MealIngredientUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput> | MealIngredientCreateWithoutMealInput[] | MealIngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutMealInput | MealIngredientCreateOrConnectWithoutMealInput[]
    upsert?: MealIngredientUpsertWithWhereUniqueWithoutMealInput | MealIngredientUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealIngredientCreateManyMealInputEnvelope
    set?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    disconnect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    delete?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    update?: MealIngredientUpdateWithWhereUniqueWithoutMealInput | MealIngredientUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealIngredientUpdateManyWithWhereWithoutMealInput | MealIngredientUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
  }

  export type MealIngredientUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput> | MealIngredientCreateWithoutMealInput[] | MealIngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutMealInput | MealIngredientCreateOrConnectWithoutMealInput[]
    upsert?: MealIngredientUpsertWithWhereUniqueWithoutMealInput | MealIngredientUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealIngredientCreateManyMealInputEnvelope
    set?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    disconnect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    delete?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    update?: MealIngredientUpdateWithWhereUniqueWithoutMealInput | MealIngredientUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealIngredientUpdateManyWithWhereWithoutMealInput | MealIngredientUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
  }

  export type MealIngredientCreateNestedManyWithoutIngredientInput = {
    create?: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput> | MealIngredientCreateWithoutIngredientInput[] | MealIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutIngredientInput | MealIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: MealIngredientCreateManyIngredientInputEnvelope
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
  }

  export type MealIngredientUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput> | MealIngredientCreateWithoutIngredientInput[] | MealIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutIngredientInput | MealIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: MealIngredientCreateManyIngredientInputEnvelope
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MealIngredientUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput> | MealIngredientCreateWithoutIngredientInput[] | MealIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutIngredientInput | MealIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: MealIngredientUpsertWithWhereUniqueWithoutIngredientInput | MealIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: MealIngredientCreateManyIngredientInputEnvelope
    set?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    disconnect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    delete?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    update?: MealIngredientUpdateWithWhereUniqueWithoutIngredientInput | MealIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: MealIngredientUpdateManyWithWhereWithoutIngredientInput | MealIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
  }

  export type MealIngredientUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput> | MealIngredientCreateWithoutIngredientInput[] | MealIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutIngredientInput | MealIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: MealIngredientUpsertWithWhereUniqueWithoutIngredientInput | MealIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: MealIngredientCreateManyIngredientInputEnvelope
    set?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    disconnect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    delete?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    update?: MealIngredientUpdateWithWhereUniqueWithoutIngredientInput | MealIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: MealIngredientUpdateManyWithWhereWithoutIngredientInput | MealIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
  }

  export type MealCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: MealCreateOrConnectWithoutIngredientsInput
    connect?: MealWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutMealIngredientsInput = {
    create?: XOR<IngredientCreateWithoutMealIngredientsInput, IngredientUncheckedCreateWithoutMealIngredientsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutMealIngredientsInput
    connect?: IngredientWhereUniqueInput
  }

  export type MealUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: MealCreateOrConnectWithoutIngredientsInput
    upsert?: MealUpsertWithoutIngredientsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutIngredientsInput, MealUpdateWithoutIngredientsInput>, MealUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput = {
    create?: XOR<IngredientCreateWithoutMealIngredientsInput, IngredientUncheckedCreateWithoutMealIngredientsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutMealIngredientsInput
    upsert?: IngredientUpsertWithoutMealIngredientsInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutMealIngredientsInput, IngredientUpdateWithoutMealIngredientsInput>, IngredientUncheckedUpdateWithoutMealIngredientsInput>
  }

  export type MealPlanCreateNestedOneWithoutGroceryItemsInput = {
    create?: XOR<MealPlanCreateWithoutGroceryItemsInput, MealPlanUncheckedCreateWithoutGroceryItemsInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutGroceryItemsInput
    connect?: MealPlanWhereUniqueInput
  }

  export type MealPlanUpdateOneRequiredWithoutGroceryItemsNestedInput = {
    create?: XOR<MealPlanCreateWithoutGroceryItemsInput, MealPlanUncheckedCreateWithoutGroceryItemsInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutGroceryItemsInput
    upsert?: MealPlanUpsertWithoutGroceryItemsInput
    connect?: MealPlanWhereUniqueInput
    update?: XOR<XOR<MealPlanUpdateToOneWithWhereWithoutGroceryItemsInput, MealPlanUpdateWithoutGroceryItemsInput>, MealPlanUncheckedUpdateWithoutGroceryItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserFormCreateWithoutUserInput = {
    id?: string
    currentWeight: number
    targetWeight: number
    height: number
    activityFrequency: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFormUncheckedCreateWithoutUserInput = {
    id?: string
    currentWeight: number
    targetWeight: number
    height: number
    activityFrequency: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFormCreateOrConnectWithoutUserInput = {
    where: UserFormWhereUniqueInput
    create: XOR<UserFormCreateWithoutUserInput, UserFormUncheckedCreateWithoutUserInput>
  }

  export type UserAllergyCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    allergy: AllergyCreateNestedOneWithoutUserAllergiesInput
  }

  export type UserAllergyUncheckedCreateWithoutUserInput = {
    id?: string
    allergyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAllergyCreateOrConnectWithoutUserInput = {
    where: UserAllergyWhereUniqueInput
    create: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput>
  }

  export type UserAllergyCreateManyUserInputEnvelope = {
    data: UserAllergyCreateManyUserInput | UserAllergyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MealPlanCreateWithoutUserInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutMealPlanInput
    groceryItems?: GroceryItemCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanUncheckedCreateWithoutUserInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutMealPlanInput
    groceryItems?: GroceryItemUncheckedCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanCreateOrConnectWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput>
  }

  export type MealPlanCreateManyUserInputEnvelope = {
    data: MealPlanCreateManyUserInput | MealPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFormUpsertWithoutUserInput = {
    update: XOR<UserFormUpdateWithoutUserInput, UserFormUncheckedUpdateWithoutUserInput>
    create: XOR<UserFormCreateWithoutUserInput, UserFormUncheckedCreateWithoutUserInput>
    where?: UserFormWhereInput
  }

  export type UserFormUpdateToOneWithWhereWithoutUserInput = {
    where?: UserFormWhereInput
    data: XOR<UserFormUpdateWithoutUserInput, UserFormUncheckedUpdateWithoutUserInput>
  }

  export type UserFormUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    activityFrequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFormUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    activityFrequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAllergyWhereUniqueInput
    update: XOR<UserAllergyUpdateWithoutUserInput, UserAllergyUncheckedUpdateWithoutUserInput>
    create: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput>
  }

  export type UserAllergyUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAllergyWhereUniqueInput
    data: XOR<UserAllergyUpdateWithoutUserInput, UserAllergyUncheckedUpdateWithoutUserInput>
  }

  export type UserAllergyUpdateManyWithWhereWithoutUserInput = {
    where: UserAllergyScalarWhereInput
    data: XOR<UserAllergyUpdateManyMutationInput, UserAllergyUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAllergyScalarWhereInput = {
    AND?: UserAllergyScalarWhereInput | UserAllergyScalarWhereInput[]
    OR?: UserAllergyScalarWhereInput[]
    NOT?: UserAllergyScalarWhereInput | UserAllergyScalarWhereInput[]
    id?: StringFilter<"UserAllergy"> | string
    userId?: StringFilter<"UserAllergy"> | string
    allergyId?: StringFilter<"UserAllergy"> | string
    createdAt?: DateTimeFilter<"UserAllergy"> | Date | string
    updatedAt?: DateTimeFilter<"UserAllergy"> | Date | string
  }

  export type MealPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    update: XOR<MealPlanUpdateWithoutUserInput, MealPlanUncheckedUpdateWithoutUserInput>
    create: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput>
  }

  export type MealPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    data: XOR<MealPlanUpdateWithoutUserInput, MealPlanUncheckedUpdateWithoutUserInput>
  }

  export type MealPlanUpdateManyWithWhereWithoutUserInput = {
    where: MealPlanScalarWhereInput
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type MealPlanScalarWhereInput = {
    AND?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
    OR?: MealPlanScalarWhereInput[]
    NOT?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
    id?: StringFilter<"MealPlan"> | string
    userId?: StringFilter<"MealPlan"> | string
    isActive?: BoolFilter<"MealPlan"> | boolean
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
  }

  export type UserCreateWithoutUserFormInput = {
    id?: string
    name: string
    age?: number | null
    gender?: string | null
    clerkUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userAllergies?: UserAllergyCreateNestedManyWithoutUserInput
    mealPlans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserFormInput = {
    id?: string
    name: string
    age?: number | null
    gender?: string | null
    clerkUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userAllergies?: UserAllergyUncheckedCreateNestedManyWithoutUserInput
    mealPlans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserFormInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserFormInput, UserUncheckedCreateWithoutUserFormInput>
  }

  export type UserUpsertWithoutUserFormInput = {
    update: XOR<UserUpdateWithoutUserFormInput, UserUncheckedUpdateWithoutUserFormInput>
    create: XOR<UserCreateWithoutUserFormInput, UserUncheckedCreateWithoutUserFormInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserFormInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserFormInput, UserUncheckedUpdateWithoutUserFormInput>
  }

  export type UserUpdateWithoutUserFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    clerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAllergies?: UserAllergyUpdateManyWithoutUserNestedInput
    mealPlans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    clerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAllergies?: UserAllergyUncheckedUpdateManyWithoutUserNestedInput
    mealPlans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserAllergyCreateWithoutAllergyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserAllergiesInput
  }

  export type UserAllergyUncheckedCreateWithoutAllergyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAllergyCreateOrConnectWithoutAllergyInput = {
    where: UserAllergyWhereUniqueInput
    create: XOR<UserAllergyCreateWithoutAllergyInput, UserAllergyUncheckedCreateWithoutAllergyInput>
  }

  export type UserAllergyCreateManyAllergyInputEnvelope = {
    data: UserAllergyCreateManyAllergyInput | UserAllergyCreateManyAllergyInput[]
    skipDuplicates?: boolean
  }

  export type UserAllergyUpsertWithWhereUniqueWithoutAllergyInput = {
    where: UserAllergyWhereUniqueInput
    update: XOR<UserAllergyUpdateWithoutAllergyInput, UserAllergyUncheckedUpdateWithoutAllergyInput>
    create: XOR<UserAllergyCreateWithoutAllergyInput, UserAllergyUncheckedCreateWithoutAllergyInput>
  }

  export type UserAllergyUpdateWithWhereUniqueWithoutAllergyInput = {
    where: UserAllergyWhereUniqueInput
    data: XOR<UserAllergyUpdateWithoutAllergyInput, UserAllergyUncheckedUpdateWithoutAllergyInput>
  }

  export type UserAllergyUpdateManyWithWhereWithoutAllergyInput = {
    where: UserAllergyScalarWhereInput
    data: XOR<UserAllergyUpdateManyMutationInput, UserAllergyUncheckedUpdateManyWithoutAllergyInput>
  }

  export type UserCreateWithoutUserAllergiesInput = {
    id?: string
    name: string
    age?: number | null
    gender?: string | null
    clerkUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userForm?: UserFormCreateNestedOneWithoutUserInput
    mealPlans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAllergiesInput = {
    id?: string
    name: string
    age?: number | null
    gender?: string | null
    clerkUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userForm?: UserFormUncheckedCreateNestedOneWithoutUserInput
    mealPlans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAllergiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAllergiesInput, UserUncheckedCreateWithoutUserAllergiesInput>
  }

  export type AllergyCreateWithoutUserAllergiesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AllergyUncheckedCreateWithoutUserAllergiesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AllergyCreateOrConnectWithoutUserAllergiesInput = {
    where: AllergyWhereUniqueInput
    create: XOR<AllergyCreateWithoutUserAllergiesInput, AllergyUncheckedCreateWithoutUserAllergiesInput>
  }

  export type UserUpsertWithoutUserAllergiesInput = {
    update: XOR<UserUpdateWithoutUserAllergiesInput, UserUncheckedUpdateWithoutUserAllergiesInput>
    create: XOR<UserCreateWithoutUserAllergiesInput, UserUncheckedCreateWithoutUserAllergiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAllergiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAllergiesInput, UserUncheckedUpdateWithoutUserAllergiesInput>
  }

  export type UserUpdateWithoutUserAllergiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    clerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userForm?: UserFormUpdateOneWithoutUserNestedInput
    mealPlans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAllergiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    clerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userForm?: UserFormUncheckedUpdateOneWithoutUserNestedInput
    mealPlans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AllergyUpsertWithoutUserAllergiesInput = {
    update: XOR<AllergyUpdateWithoutUserAllergiesInput, AllergyUncheckedUpdateWithoutUserAllergiesInput>
    create: XOR<AllergyCreateWithoutUserAllergiesInput, AllergyUncheckedCreateWithoutUserAllergiesInput>
    where?: AllergyWhereInput
  }

  export type AllergyUpdateToOneWithWhereWithoutUserAllergiesInput = {
    where?: AllergyWhereInput
    data: XOR<AllergyUpdateWithoutUserAllergiesInput, AllergyUncheckedUpdateWithoutUserAllergiesInput>
  }

  export type AllergyUpdateWithoutUserAllergiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllergyUncheckedUpdateWithoutUserAllergiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMealPlansInput = {
    id?: string
    name: string
    age?: number | null
    gender?: string | null
    clerkUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userForm?: UserFormCreateNestedOneWithoutUserInput
    userAllergies?: UserAllergyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMealPlansInput = {
    id?: string
    name: string
    age?: number | null
    gender?: string | null
    clerkUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userForm?: UserFormUncheckedCreateNestedOneWithoutUserInput
    userAllergies?: UserAllergyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMealPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMealPlansInput, UserUncheckedCreateWithoutMealPlansInput>
  }

  export type MealCreateWithoutMealPlanInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: MealIngredientCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutMealPlanInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: MealIngredientUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutMealPlanInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutMealPlanInput, MealUncheckedCreateWithoutMealPlanInput>
  }

  export type MealCreateManyMealPlanInputEnvelope = {
    data: MealCreateManyMealPlanInput | MealCreateManyMealPlanInput[]
    skipDuplicates?: boolean
  }

  export type GroceryItemCreateWithoutMealPlanInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroceryItemUncheckedCreateWithoutMealPlanInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroceryItemCreateOrConnectWithoutMealPlanInput = {
    where: GroceryItemWhereUniqueInput
    create: XOR<GroceryItemCreateWithoutMealPlanInput, GroceryItemUncheckedCreateWithoutMealPlanInput>
  }

  export type GroceryItemCreateManyMealPlanInputEnvelope = {
    data: GroceryItemCreateManyMealPlanInput | GroceryItemCreateManyMealPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMealPlansInput = {
    update: XOR<UserUpdateWithoutMealPlansInput, UserUncheckedUpdateWithoutMealPlansInput>
    create: XOR<UserCreateWithoutMealPlansInput, UserUncheckedCreateWithoutMealPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMealPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMealPlansInput, UserUncheckedUpdateWithoutMealPlansInput>
  }

  export type UserUpdateWithoutMealPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    clerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userForm?: UserFormUpdateOneWithoutUserNestedInput
    userAllergies?: UserAllergyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMealPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    clerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userForm?: UserFormUncheckedUpdateOneWithoutUserNestedInput
    userAllergies?: UserAllergyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealUpsertWithWhereUniqueWithoutMealPlanInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutMealPlanInput, MealUncheckedUpdateWithoutMealPlanInput>
    create: XOR<MealCreateWithoutMealPlanInput, MealUncheckedCreateWithoutMealPlanInput>
  }

  export type MealUpdateWithWhereUniqueWithoutMealPlanInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutMealPlanInput, MealUncheckedUpdateWithoutMealPlanInput>
  }

  export type MealUpdateManyWithWhereWithoutMealPlanInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutMealPlanInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    mealPlanId?: StringFilter<"Meal"> | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    updatedAt?: DateTimeFilter<"Meal"> | Date | string
  }

  export type GroceryItemUpsertWithWhereUniqueWithoutMealPlanInput = {
    where: GroceryItemWhereUniqueInput
    update: XOR<GroceryItemUpdateWithoutMealPlanInput, GroceryItemUncheckedUpdateWithoutMealPlanInput>
    create: XOR<GroceryItemCreateWithoutMealPlanInput, GroceryItemUncheckedCreateWithoutMealPlanInput>
  }

  export type GroceryItemUpdateWithWhereUniqueWithoutMealPlanInput = {
    where: GroceryItemWhereUniqueInput
    data: XOR<GroceryItemUpdateWithoutMealPlanInput, GroceryItemUncheckedUpdateWithoutMealPlanInput>
  }

  export type GroceryItemUpdateManyWithWhereWithoutMealPlanInput = {
    where: GroceryItemScalarWhereInput
    data: XOR<GroceryItemUpdateManyMutationInput, GroceryItemUncheckedUpdateManyWithoutMealPlanInput>
  }

  export type GroceryItemScalarWhereInput = {
    AND?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[]
    OR?: GroceryItemScalarWhereInput[]
    NOT?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[]
    id?: StringFilter<"GroceryItem"> | string
    name?: StringFilter<"GroceryItem"> | string
    quantity?: FloatFilter<"GroceryItem"> | number
    unit?: StringFilter<"GroceryItem"> | string
    mealId?: StringFilter<"GroceryItem"> | string
    createdAt?: DateTimeFilter<"GroceryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GroceryItem"> | Date | string
  }

  export type MealPlanCreateWithoutMealsInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMealPlansInput
    groceryItems?: GroceryItemCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanUncheckedCreateWithoutMealsInput = {
    id?: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    groceryItems?: GroceryItemUncheckedCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanCreateOrConnectWithoutMealsInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutMealsInput, MealPlanUncheckedCreateWithoutMealsInput>
  }

  export type MealIngredientCreateWithoutMealInput = {
    id?: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput
  }

  export type MealIngredientUncheckedCreateWithoutMealInput = {
    id?: string
    ingredientId: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealIngredientCreateOrConnectWithoutMealInput = {
    where: MealIngredientWhereUniqueInput
    create: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput>
  }

  export type MealIngredientCreateManyMealInputEnvelope = {
    data: MealIngredientCreateManyMealInput | MealIngredientCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type MealPlanUpsertWithoutMealsInput = {
    update: XOR<MealPlanUpdateWithoutMealsInput, MealPlanUncheckedUpdateWithoutMealsInput>
    create: XOR<MealPlanCreateWithoutMealsInput, MealPlanUncheckedCreateWithoutMealsInput>
    where?: MealPlanWhereInput
  }

  export type MealPlanUpdateToOneWithWhereWithoutMealsInput = {
    where?: MealPlanWhereInput
    data: XOR<MealPlanUpdateWithoutMealsInput, MealPlanUncheckedUpdateWithoutMealsInput>
  }

  export type MealPlanUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealPlansNestedInput
    groceryItems?: GroceryItemUpdateManyWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groceryItems?: GroceryItemUncheckedUpdateManyWithoutMealPlanNestedInput
  }

  export type MealIngredientUpsertWithWhereUniqueWithoutMealInput = {
    where: MealIngredientWhereUniqueInput
    update: XOR<MealIngredientUpdateWithoutMealInput, MealIngredientUncheckedUpdateWithoutMealInput>
    create: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput>
  }

  export type MealIngredientUpdateWithWhereUniqueWithoutMealInput = {
    where: MealIngredientWhereUniqueInput
    data: XOR<MealIngredientUpdateWithoutMealInput, MealIngredientUncheckedUpdateWithoutMealInput>
  }

  export type MealIngredientUpdateManyWithWhereWithoutMealInput = {
    where: MealIngredientScalarWhereInput
    data: XOR<MealIngredientUpdateManyMutationInput, MealIngredientUncheckedUpdateManyWithoutMealInput>
  }

  export type MealIngredientScalarWhereInput = {
    AND?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
    OR?: MealIngredientScalarWhereInput[]
    NOT?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
    id?: StringFilter<"MealIngredient"> | string
    mealId?: StringFilter<"MealIngredient"> | string
    ingredientId?: StringFilter<"MealIngredient"> | string
    quantity?: FloatFilter<"MealIngredient"> | number
    unit?: StringFilter<"MealIngredient"> | string
    createdAt?: DateTimeFilter<"MealIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"MealIngredient"> | Date | string
  }

  export type MealIngredientCreateWithoutIngredientInput = {
    id?: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meal: MealCreateNestedOneWithoutIngredientsInput
  }

  export type MealIngredientUncheckedCreateWithoutIngredientInput = {
    id?: string
    mealId: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealIngredientCreateOrConnectWithoutIngredientInput = {
    where: MealIngredientWhereUniqueInput
    create: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type MealIngredientCreateManyIngredientInputEnvelope = {
    data: MealIngredientCreateManyIngredientInput | MealIngredientCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type MealIngredientUpsertWithWhereUniqueWithoutIngredientInput = {
    where: MealIngredientWhereUniqueInput
    update: XOR<MealIngredientUpdateWithoutIngredientInput, MealIngredientUncheckedUpdateWithoutIngredientInput>
    create: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type MealIngredientUpdateWithWhereUniqueWithoutIngredientInput = {
    where: MealIngredientWhereUniqueInput
    data: XOR<MealIngredientUpdateWithoutIngredientInput, MealIngredientUncheckedUpdateWithoutIngredientInput>
  }

  export type MealIngredientUpdateManyWithWhereWithoutIngredientInput = {
    where: MealIngredientScalarWhereInput
    data: XOR<MealIngredientUpdateManyMutationInput, MealIngredientUncheckedUpdateManyWithoutIngredientInput>
  }

  export type MealCreateWithoutIngredientsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mealPlan: MealPlanCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutIngredientsInput = {
    id?: string
    name: string
    mealPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealCreateOrConnectWithoutIngredientsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientCreateWithoutMealIngredientsInput = {
    id?: string
    name: string
    caloriesPer100?: number | null
    proteinPer100?: number | null
    fatPer100?: number | null
    carbPer100?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredientUncheckedCreateWithoutMealIngredientsInput = {
    id?: string
    name: string
    caloriesPer100?: number | null
    proteinPer100?: number | null
    fatPer100?: number | null
    carbPer100?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredientCreateOrConnectWithoutMealIngredientsInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutMealIngredientsInput, IngredientUncheckedCreateWithoutMealIngredientsInput>
  }

  export type MealUpsertWithoutIngredientsInput = {
    update: XOR<MealUpdateWithoutIngredientsInput, MealUncheckedUpdateWithoutIngredientsInput>
    create: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutIngredientsInput, MealUncheckedUpdateWithoutIngredientsInput>
  }

  export type MealUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealPlan?: MealPlanUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mealPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUpsertWithoutMealIngredientsInput = {
    update: XOR<IngredientUpdateWithoutMealIngredientsInput, IngredientUncheckedUpdateWithoutMealIngredientsInput>
    create: XOR<IngredientCreateWithoutMealIngredientsInput, IngredientUncheckedCreateWithoutMealIngredientsInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutMealIngredientsInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutMealIngredientsInput, IngredientUncheckedUpdateWithoutMealIngredientsInput>
  }

  export type IngredientUpdateWithoutMealIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    caloriesPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    fatPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    carbPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateWithoutMealIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    caloriesPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    fatPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    carbPer100?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealPlanCreateWithoutGroceryItemsInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMealPlansInput
    meals?: MealCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanUncheckedCreateWithoutGroceryItemsInput = {
    id?: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanCreateOrConnectWithoutGroceryItemsInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutGroceryItemsInput, MealPlanUncheckedCreateWithoutGroceryItemsInput>
  }

  export type MealPlanUpsertWithoutGroceryItemsInput = {
    update: XOR<MealPlanUpdateWithoutGroceryItemsInput, MealPlanUncheckedUpdateWithoutGroceryItemsInput>
    create: XOR<MealPlanCreateWithoutGroceryItemsInput, MealPlanUncheckedCreateWithoutGroceryItemsInput>
    where?: MealPlanWhereInput
  }

  export type MealPlanUpdateToOneWithWhereWithoutGroceryItemsInput = {
    where?: MealPlanWhereInput
    data: XOR<MealPlanUpdateWithoutGroceryItemsInput, MealPlanUncheckedUpdateWithoutGroceryItemsInput>
  }

  export type MealPlanUpdateWithoutGroceryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealPlansNestedInput
    meals?: MealUpdateManyWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateWithoutGroceryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutMealPlanNestedInput
  }

  export type UserAllergyCreateManyUserInput = {
    id?: string
    allergyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealPlanCreateManyUserInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAllergyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allergy?: AllergyUpdateOneRequiredWithoutUserAllergiesNestedInput
  }

  export type UserAllergyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allergyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allergyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutMealPlanNestedInput
    groceryItems?: GroceryItemUpdateManyWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutMealPlanNestedInput
    groceryItems?: GroceryItemUncheckedUpdateManyWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyCreateManyAllergyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAllergyUpdateWithoutAllergyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserAllergiesNestedInput
  }

  export type UserAllergyUncheckedUpdateWithoutAllergyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyUncheckedUpdateManyWithoutAllergyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateManyMealPlanInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroceryItemCreateManyMealPlanInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: MealIngredientUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: MealIngredientUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateManyWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroceryItemUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroceryItemUncheckedUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroceryItemUncheckedUpdateManyWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealIngredientCreateManyMealInput = {
    id?: string
    ingredientId: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealIngredientUpdateWithoutMealInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredient?: IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput
  }

  export type MealIngredientUncheckedUpdateWithoutMealInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealIngredientUncheckedUpdateManyWithoutMealInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealIngredientCreateManyIngredientInput = {
    id?: string
    mealId: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealIngredientUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type MealIngredientUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealIngredientUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
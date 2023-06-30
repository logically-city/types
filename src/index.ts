/**
 * 推断 Promise 返回类型
 */
export type PromiseType<T extends Promise<any>> = T extends Promise<infer R> ? R : any;

/**
 * 类型可能为同步或异步返回
 */
export type PromiseOr<T> = T | Promise<T>;

/**
 * 函数获取内部枚举
 */
export type FuncMap<TM, M> = (map: TM) => M;

/**
 * 函数获取内部枚举或直接给枚举
 */
export type FuncMapOrMap<TM, M> = FuncMap<TM, M> | M;

/**
 * 指定属性可选
 */
export type PartialPick<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * 除指定属性可选
 */
export type PartialOmit<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;

/**
 * 指定属性必选
 */
export type RequiredPick<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * 除指定属性必选
 */
export type RequiredOmit<T, K extends keyof T> = Pick<T, K> & Required<Omit<T, K>>;

/**
 * 挑选符合模板字符串的 K
 * @example PickTemplateString<keyof typeof fs, `${any}Sync`>
 */
export type PickTemplateString<K extends string, TS extends string> = K extends TS ? K : never;

/**
 * 函数返回值加上 Promise
 */
export type FuncReturnWithPromise<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => Promise<ReturnType<T>>;

/**
 * 挑选 K 给函数返回值加上 Promise
 */
export type PickFuncReturnWithPromise<T, K extends keyof T> = {
  [P in K]: FuncReturnWithPromise<Extract<T[P], (...args: any[]) => any>>;
};

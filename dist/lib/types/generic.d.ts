export type Asserted<T> = Exclude<T, null | undefined>;
export type CastArray<T> = T extends any[] ? T : T[];
export type FlattenDeep<T> = T extends any[] ? FlattenDeep<T[number]> : T;
export type Index = keyof any;
export type PlainObject<T = any> = Record<string, T>;

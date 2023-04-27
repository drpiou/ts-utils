export type CastArray<T> = T extends any[] ? T : T[];

export type Constructor<T = any> = new (...args: any[]) => T;

export type FlattenDeep<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends unknown[]
    ? FlattenDeep<[...First, ...FlattenDeep<Rest>]>
    : [First, ...FlattenDeep<Rest>]
  : [];

export type PartialDeep<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<PartialDeep<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<PartialDeep<U>>
    : PartialDeep<T[P]>;
};

export type ReadonlyDeep<T> = {
  readonly [P in keyof T]: T[P] extends Array<infer U>
    ? Array<ReadonlyDeep<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<ReadonlyDeep<U>>
    : ReadonlyDeep<T[P]>;
};

export type RecordDeep<K extends keyof any, T> = {
  [P in K]: RecordDeep<K, T> | T;
};

export type Index = string | number | symbol;

export type NonNullableField<T extends object> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type Primitive = string | number | boolean | undefined | null;

export type ValueOf<T> = T extends any[] ? T[number] : T[keyof T];

export type Without<T extends keyof any> = {
  [P in T]?: never;
};

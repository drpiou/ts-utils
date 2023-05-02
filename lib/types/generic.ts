export type Asserted<T> = Exclude<T, null | undefined>;

export type CastArray<T> = T extends any[] ? T : T[];

// TODO:
//  replace with utility-types/Class
// export type Constructor<T = any>;

export type FlattenDeep<T> = T extends any[] ? FlattenDeep<T[number]> : T;

// TODO:
//  replace with utility-types/DeepPartial
// export type PartialDeep<T>;

// TODO:
//  replace with utility-types/DeepReadonly
// export type ReadonlyDeep<T>;

export type Index = keyof any;

export type PlainObject = Record<string, any>;

// TODO:
//  replace with utility-types/DeepRequired
// export type NonNullableField<T>;

// TODO:
//  replace with utility-types/DeepPartial
// export type PartialRecord<K extends Index, T>;

// TODO:
//  replace with utility-types/Primitive
// export type Primitive;

// TODO:
//  replace with utility-types/ValuesType
// export type ValueOf<T>;

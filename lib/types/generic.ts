export type CastArray<T> = T extends any[] ? T : T[];

// TODO:
//  replace with utility-types/Class
// export type Constructor<T = any> = new (...args: any[]) => T;

export type FlattenDeep<T> = T extends any[] ? FlattenDeep<T[number]> : T;

// TODO:
//  replace with utility-types/DeepPartial
// export type PartialDeep<T> = {
//   [P in keyof T]?: T[P] extends Array<infer U>
//     ? Array<PartialDeep<U>>
//     : T[P] extends ReadonlyArray<infer U>
//     ? ReadonlyArray<PartialDeep<U>>
//     : PartialDeep<T[P]>;
// };

// TODO:
//  replace with utility-types/DeepReadonly
// export type ReadonlyDeep<T> = {
//   readonly [P in keyof T]: T[P] extends Array<infer U>
//     ? Array<ReadonlyDeep<U>>
//     : T[P] extends ReadonlyArray<infer U>
//     ? ReadonlyArray<ReadonlyDeep<U>>
//     : ReadonlyDeep<T[P]>;
// };

export type Index = keyof any;

// TODO:
//  replace with utility-types/DeepRequired
// export type NonNullableField<T> = {
//   [P in keyof T]-?: NonNullable<T[P]>;
// };

// TODO:
//  replace with utility-types/DeepPartial
// export type PartialRecord<K extends Index, T> = {
//   [P in K]?: T;
// };

// TODO:
//  replace with utility-types/Primitive
// export type Primitive = string | number | boolean | undefined | null;

// TODO:
//  replace with utility-types/ValuesType
// export type ValueOf<T> = T extends any[] ? T[number] : T[keyof T];

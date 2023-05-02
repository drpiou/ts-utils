import { PlainObject } from './generic';
type PathRecursive<T, Key extends keyof T> = Key extends string ? Key | (T[Key] extends PlainObject ? `${Key}.${PathRecursive<T[Key], keyof T[Key]>}` : never) : never;
type PathFiniteRecursive<T, Key extends keyof T> = Key extends string ? never | (T[Key] extends PlainObject ? `${Key}.${PathFiniteRecursive<T[Key], keyof T[Key]>}` : Key) : never;
export type Path<T> = PathRecursive<T, keyof T>;
export type PathFinite<T> = PathFiniteRecursive<T, keyof T>;
export type PathValue<T, P extends string> = P extends `${infer Key}.${infer Rest}` ? Key extends keyof T ? Rest extends Path<T[Key]> ? PathValue<T[Key], Rest> : never : never : P extends keyof T ? T[P] : never;
export {};

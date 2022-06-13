export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

export type DeepRecord<K extends keyof any, T> = {
  [P in K]: DeepRecord<K, T> | T;
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

/**
 *  @see https://www.typescriptlang.org/play?ts=4.1.0-pr-40336-88&ssl=25&ssc=1&pln=26&pc=1#code/FAFwngDgpgBACgQxACwJIFsIBsA8AVAGhgGkowYoAPEKAOwBMBnGAazIHsAzGPAPhgC8wGCTIVqdJjEYgATgEtaAc2EwA-DwDapMAF1xNBswBKUAMbtZ9HDIXKiCWmF6qRGgD4wABgBIA3joAvgB0-ogoGNj42mS6RACilGZYAK70UDhsYFxaOnGsHNyOYJq6vPwAZNJyikqBXq4iMJ6+AWQh-onJaRlZOXgxekR9RU6lldV2dQ1NMABcMLRQAG5QsqoLS6uyANzAoJCw4WiYWABM+PwC8EgnUYQF2dx8zY-9ewfQNyiXgt9351+VEMUlstVeIx46n+kUBLwWkLwH3AX2OADUEKkMg84AZJMxjpcrqpccD8d5-IpOGtRGAOn4qTTTDJ6qoNDo8UY3s9GhpmSBOVJCQM8i5Zm5-hisdE8kR+WLxZsVmtGkrtht4ILmIjeVo4LpVYtlbt9ulkghZLBOClaGYQPJ2LQYEooCB8ERSRIucLygAKdgAIwAVgsHhBbgs4ABKSO3KUpbEe3gfCy0GQwQNB8wC65+VSceSyGQAOQQ6CgCwARAAReRQJTsSsEVRYBAlssVmCVgASCAAXk3VAgXQsAMwABmbIggsnYWbtjAWmkafkWHarpgQLHkICbMFTNQDKRAlkXMAAbAAOGCBKdNVe0dddgDCjpkSCge4PCiPJ6LCwARjOG87wNQIYDbfc3xAD4XRAf1g2zIhKxnOds0YYJKyjHYgA
 */

type PathImpl<T, Key extends keyof T> = Key extends string
  ? T[Key] extends Record<string, any>
    ?
        | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}`
        | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
    : never
  : never;

type PathImpl2<T> = PathImpl<T, keyof T> | keyof T;

export type Path<T> = PathImpl2<T> extends string | keyof T ? PathImpl2<T> : keyof T;

export type PathValue<T, P extends Path<T>> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never;

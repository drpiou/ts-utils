/**
 *  @see https://www.typescriptlang.org/play?ts=4.1.0-pr-40336-88&ssl=25&ssc=1&pln=26&pc=1#code/FAFwngDgpgBACgQxACwJIFsIBsA8AVAGhgGkowYoAPEKAOwBMBnGAazIHsAzGPAPhgC8wGCTIVqdJjEYgATgEtaAc2EwA-DwDapMAF1xNBswBKUAMbtZ9HDIXKiCWmF6qRGgD4wABgBIA3joAvgB0-ogoGNj42mS6RACilGZYAK70UDhsYFxaOnGsHNyOYJq6vPwAZNJyikqBXq4iMJ6+AWQh-onJaRlZOXgxekR9RU6lldV2dQ1NMABcMLRQAG5QsqoLS6uyANzAoJCw4WiYWABM+PwC8EgnUYQF2dx8zY-9ewfQNyiXgt9351+VEMUlstVeIx46n+kUBLwWkLwH3AX2OADUEKkMg84AZJMxjpcrqpccD8d5-IpOGtRGAOn4qTTTDJ6qoNDo8UY3s9GhpmSBOVJCQM8i5Zm5-hisdE8kR+WLxZsVmtGkrtht4ILmIjeVo4LpVYtlbt9ulkghZLBOClaGYQPJ2LQYEooCB8ERSRIucLygAKdgAIwAVgsHhBbgs4ABKSO3KUpbEe3gfCy0GQwQNB8wC65+VSceSyGQAOQQ6CgCwARAAReRQJTsSsEVRYBAlssVmCVgASCAAXk3VAgXQsAMwABmbIggsnYWbtjAWmkafkWHarpgQLHkICbMFTNQDKRAlkXMAAbAAOGCBKdNVe0dddgDCjpkSCge4PCiPJ6LCwARjOG87wNQIYDbfc3xAD4XRAf1g2zIhKxnOds0YYJKyjHYgA
 */

type PathRecursive<T, Key extends keyof T> = Key extends string
  ? Key | (T[Key] extends Record<string, any> ? `${Key}.${PathRecursive<T[Key], keyof T[Key]>}` : never)
  : never;

type PathFiniteRecursive<T, Key extends keyof T> = Key extends string
  ? never | (T[Key] extends Record<string, any> ? `${Key}.${PathFiniteRecursive<T[Key], keyof T[Key]>}` : Key)
  : never;

export type Path<T> = PathRecursive<T, keyof T>;

export type PathFinite<T> = PathFiniteRecursive<T, keyof T>;

export type PathValue<T, P extends string> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never;

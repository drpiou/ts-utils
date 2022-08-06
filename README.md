# `@drpiou/ts-utils`

![Licence](https://img.shields.io/github/license/drpiou/ts-utils)
![Package.json version](https://img.shields.io/github/package-json/v/drpiou/ts-utils)
![Jest tests](https://img.shields.io/badge/passed%20test-75-green)
![Jest tests](https://img.shields.io/badge/stage-experimental-important)

The `@drpiou/ts-utils` package provides some JavaScript utilities.

> - written in TypeScript.

<!--ts-->

- [Installation](#installation)
- [Documentation](#documentation)
  - [Utils](#utils)
    - [append](#append)
    - [chunk](#chunk)
    - [chunkWhile](#chunkwhile)
    - [clone](#clone)
    - [collect](#collect)
    - [concatUniq](#concatuniq)
    - [contains](#contains)
    - [debug](#debug)
    - [entries](#entries)
    - [every](#every)
    - [filter](#filter)
    - [first](#first)
    - [flatten](#flatten)
    - [invert](#invert)
    - [join](#join)
    - [joinBy](#joinby)
    - [keyBy](#keyby)
    - [keys](#keys)
    - [last](#last)
    - [log](#log)
    - [logError](#logerror)
    - [logInfo](#loginfo)
    - [logWarn](#logwarn)
    - [max](#max)
    - [min](#min)
    - [order](#order)
    - [orderBy](#orderby)
    - [pad](#pad)
    - [partition](#partition)
    - [paths](#paths)
    - [prepend](#prepend)
    - [pushUniq](#pushuniq)
    - [random](#random)
    - [sleep](#sleep)
    - [sort](#sort)
    - [sortBy](#sortby)
    - [sum](#sum)
    - [take](#take)
    - [uniq](#uniq)
    - [uniqBy](#uniqby)
    - [usleep](#usleep)
    - [withoutProperties](#withoutproperties)
  - [Types](#types)

<!--te-->

## Installation

```shell
yarn add @drpiou/ts-utils
```

## Documentation

### Utils

#### `append`

Add the given items to the end of the source array.

```typescript
import { append } from '@drpiou/ts-utils';

const result = append(['a', 'b', 1], 'a', 'z', 2);

// => ['a', 'b', 1, 'a', 'z', 2]
```

#### `chunk`

Break the source array into smaller arrays of a given size.

```typescript
import { chunk } from '@drpiou/ts-utils';

const result = chunk(['a', 'b', 1], 2);

// => [['a', 'b'], [1]]
```

#### `chunkWhile`

Break the source array into smaller arrays.

```typescript
import { chunkWhile } from '@drpiou/ts-utils';

const result = chunkWhile(['a', 'b', 1], (item, index, chunk) => chunk.indexOf(item) > -1);

// => [['a', 'b'], ['a', 1]]
```

#### `clone`

Clone the source array.

```typescript
import { clone } from '@drpiou/ts-utils';

const result = clone(['a', 'b', 1]);

// => ['a', 'b', 1]
```

#### `collect`

Create a new collection instance.

> Collection provides a wrapper for working with arrays of data.

```typescript
import { collect } from '@drpiou/ts-utils';

const result = collect(['a', 'b', 1]);

// => result.all()
// => result.allDeep()
// => result.append(...)
// => result.at(...)
// => result.chunk(...)
// => result.chunkWhile(...)
// => result.clone(...)
// => result.concat(...)
// => result.concatUniq(...)
// => result.contains(...)
// => result.count()
// => result.each(...)
// => result.entries()
// => result.every(...)
// => result.filter(...)
// => result.first(...)
// => result.flatten(...)
// => result.invert()
// => result.join(...)
// => result.joinBy(...)
// => result.keyBy(...)
// => result.keys()
// => result.last(...)
// => result.log()
// => result.map(...)
// => result.max(...)
// => result.min(...)
// => result.order(...)
// => result.orderBy(...)
// => result.pad(...)
// => result.partition(...)
// => result.pop()
// => result.prepend(...)
// => result.push(...)
// => result.pushUniq(...)
// => result.random(...)
// => result.reduce(...)
// => result.reverse()
// => result.shift()
// => result.shuffle()
// => result.slice(...)
// => result.sort(...)
// => result.sortBy(...)
// => result.splice(...)
// => result.sum(...)
// => result.take(...)
// => result.transform(...)
// => result.unshift(...)
// => result.uniq(...)
// => result.uniqBy(...)
```

#### `concatUniq`

Add the given items to the end of the source array.

```typescript
import { concatUniq } from '@drpiou/ts-utils';

const result = concatUniq(['a', 'b', 1], ['a', 'z'], [2]);

// => ['a', 'b', 1, 'z', 2]
```

#### `contains`

Return whether the given item exists in the source array.

```typescript
import { contains } from '@drpiou/ts-utils';

const result = contains(['a', 'b', 1], (value) => value === 'b');

// => true
```

#### `debug`

Debug provides a wrapper around log utilities.

```typescript
import { Debug } from '@drpiou/ts-utils';

const debug = new Debug({
  active: __DEV__,
});

// => debug.setActive(...)
// => debug.setTransform(...)
// => debug.log(...)
// => debug.info(...)
// => debug.warn(...)
// => debug.error(...)
```

#### `entries`

Return items number-indexed property [index, value] pairs of the source array.

```typescript
import { entries } from '@drpiou/ts-utils';

const result = entries(['a', 'b', 1]);

// => [[0, 'a'], [1, 'b'], [2, 1]]
```

#### `every`

Verify that all items pass a given truth test in the source array.

```typescript
import { every } from '@drpiou/ts-utils';

const result = every(['a', 'b', 1], (value) => typeof value === 'string');

// => false
```

#### `filter`

Filter the items that pass a given truth test in the source array.

```typescript
import { filter } from '@drpiou/ts-utils';

const result = filter(['a', 'b', 1, null], (value) => typeof value !== 'number');

// => ['a', 'b', null]
```

#### `first`

Return the first item that passes a given truth test in the source array.

```typescript
import { first } from '@drpiou/ts-utils';

const result = first(['a', 'b', 1]);

// => 'a'
```

#### `flatten`

Flatten the source array.

```typescript
import { flatten } from '@drpiou/ts-utils';

const result = flatten(['a', 'b', [1], [['c', 2]]]);

// => ['a', 'b', 1, ['c', 2]]
```

#### `invert`

Invert the order of the items in the source array.

```typescript
import { invert } from '@drpiou/ts-utils';

const result = invert(['a', 'b', 1]);

// => [1, 'b', 'a']
```

#### `join`

Join items in a source array.

```typescript
import { join } from '@drpiou/ts-utils';

const result = join(['a', 'b', 1], '-');

// => 'a-b-1'
```

#### `joinBy`

Join key-paired items in a source array.

```typescript
import { joinBy } from '@drpiou/ts-utils';

const result = joinBy([{ a: 'a' }, { a: 'b' }, { a: 1 }], '-');

// => 'a-b-1'
```

#### `keyBy`

Return the key-paired items of the source array.

```typescript
import { keyBy } from '@drpiou/ts-utils';

const result = keyBy([{ a: 'a' }, { a: 'b' }, { a: 1 }], 'a');

// => { a: { a: 'a' }, b: { a: 'b' }, 1: { a: 1 } }
```

#### `keys`

Return the indexes of the source array.

```typescript
import { keys } from '@drpiou/ts-utils';

const result = keys(['a', 'b', 1]);

// => [0, 1, 2]
```

#### `last`

Return the last item that passes a given truth test in the source array.

```typescript
import { last } from '@drpiou/ts-utils';

const result = last(['a', 'b', 1]);

// => 1
```

#### `log`

Log in the console the params.

```typescript
import { log } from '@drpiou/ts-utils';

log('message', ['a', 'b', 1]);
```

#### `logError`

Log error in the console the params.

```typescript
import { logError } from '@drpiou/ts-utils';

logError('message', ['a', 'b', 1]);
```

#### `logInfo`

Log info in the console the params.

```typescript
import { logInfo } from '@drpiou/ts-utils';

logInfo('message', ['a', 'b', 1]);
```

#### `logWarn`

Log warn in the console the params.

```typescript
import { logWarn } from '@drpiou/ts-utils';

logWarn('message', ['a', 'b', 1]);
```

#### `max`

Return the maximum value of the items in the source array.

```typescript
import { max } from '@drpiou/ts-utils';

const result = max(['a', 'b', 1, 2]);

// => 2
```

#### `min`

Return the minimum value of the items in the source array.

```typescript
import { min } from '@drpiou/ts-utils';

const result = min(['a', 'b', 1, 2]);

// => 1
```

#### `order`

Order items in the source array.

```typescript
import { order } from '@drpiou/ts-utils';

const result = order(['b', 1, 'a', 3, 2]);

// => [1, 2, 3, 'a', 'b']
```

#### `orderBy`

Order key-paired items in the source array.

```typescript
import { orderBy } from '@drpiou/ts-utils';

const result = orderBy([{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }]);

// => [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]
```

#### `pad`

Fill the given value until the source array reaches the specified size.

```typescript
import { pad } from '@drpiou/ts-utils';

const result = pad(['a', 'b', 1], 6, 0);

// => ['a', 'b', 1, 0, 0, 0]
```

#### `partition`

Separate items that pass a given truth test in the source array.

```typescript
import { partition } from '@drpiou/ts-utils';

const result = partition(['a', 'b', 1], (value) => value === 'b');

// => [['b'], ['a', 1]]
```

#### `paths`

Return all the paths in dot notation of the source object.

```typescript
import { paths } from '@drpiou/ts-utils';

const result = paths({ a: 1, b: { c: 2 } });

// => ['a', 'b', 'b.c']
```

#### `prepend`

Add the given items to the beginning of the source array.

```typescript
import { prepend } from '@drpiou/ts-utils';

const result = prepend(['a', 'b', 1], 'a', 'z', 2);

// => ['a', 'z', 2, 'a', 'b', 1]
```

#### `pushUniq`

Add the given items to the end of the source array.

> This function mutates the source array.

```typescript
import { pushUniq } from '@drpiou/ts-utils';

const result = pushUniq(['a', 'b', 1], 'a', 'z', 2);

// => ['a', 'b', 1, 'z', 2]
```

#### `random`

Return random items from the source array.

```typescript
import { random } from '@drpiou/ts-utils';

const result = random(['a', 'b', 1]);

// => ['a', 1, 'b']
```

#### `sleep`

Await x seconds.

```typescript
import { sleep } from '@drpiou/ts-utils';

await sleep(1);
```

#### `sort`

Sort items in the source array.

> This function mutates the source array.

```typescript
import { sort } from '@drpiou/ts-utils';

const result = sort(['b', 1, 'a', 3, 2]);

// => [1, 2, 3, 'a', 'b']
```

#### `sortBy`

Sort key-paired items in the source array.

> This function mutates the source array.

```typescript
import { sortBy } from '@drpiou/ts-utils';

const result = sortBy([{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }]);

// => [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]
```

#### `sum`

Return the sum of the items in the source array.

```typescript
import { sum } from '@drpiou/ts-utils';

const result = sum(['a', 'b', 1, 2]);

// => 3
```

#### `take`

Return the specified number of items in the source array.

```typescript
import { take } from '@drpiou/ts-utils';

const result = take(['a', 'b', 1]);

// => ['a', 'b']
```

#### `uniq`

Return all the unique items in the source array.

```typescript
import { uniq } from '@drpiou/ts-utils';

const result = uniq(['a', 'b', 'a', 1]);

// => ['a', 'b', 1]
```

#### `uniqBy`

Return all the unique key-paired items in the source array.

```typescript
import { uniqBy } from '@drpiou/ts-utils';

const result = uniqBy([{ a: 'a' }, { a: 'b' }, { a: 'a' }, { a: 1 }]);

// => [{ a: 'a' }, { a: 'b' }, { a: 1 }]
```

#### `usleep`

Await x milliseconds.

```typescript
import { usleep } from '@drpiou/ts-utils';

await usleep(100);
```

#### `withoutProperties`

Removes the keys of the source object.

```typescript
import { withoutProperties } from '@drpiou/ts-utils';

const result = withoutProperties({ a: 1, b: 2 }, ['b']);

// => { a: 1 }
```

### Types

#### `DeepPartial`

```typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
```

#### `DeepReadonly`

```typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
```

#### `DeepRecord`

```typescript
type DeepRecord<K extends keyof any, T> = {
  [P in K]: DeepRecord<K, T> | T;
};
```

#### `Index`

```typescript
type Index = string | number | symbol;
```

#### `NonNullableField`

```typescript
type NonNullableField<T extends object> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};
```

#### `PartialRecord`

```typescript
type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
```

#### `Path`

See [typescriptlang.org](https://www.typescriptlang.org/play?ts=4.1.0-pr-40336-88&ssl=25&ssc=1&pln=26&pc=1#code/FAFwngDgpgBACgQxACwJIFsIBsA8AVAGhgGkowYoAPEKAOwBMBnGAazIHsAzGPAPhgC8wGCTIVqdJjEYgATgEtaAc2EwA-DwDapMAF1xNBswBKUAMbtZ9HDIXKiCWmF6qRGgD4wABgBIA3joAvgB0-ogoGNj42mS6RACilGZYAK70UDhsYFxaOnGsHNyOYJq6vPwAZNJyikqBXq4iMJ6+AWQh-onJaRlZOXgxekR9RU6lldV2dQ1NMABcMLRQAG5QsqoLS6uyANzAoJCw4WiYWABM+PwC8EgnUYQF2dx8zY-9ewfQNyiXgt9351+VEMUlstVeIx46n+kUBLwWkLwH3AX2OADUEKkMg84AZJMxjpcrqpccD8d5-IpOGtRGAOn4qTTTDJ6qoNDo8UY3s9GhpmSBOVJCQM8i5Zm5-hisdE8kR+WLxZsVmtGkrtht4ILmIjeVo4LpVYtlbt9ulkghZLBOClaGYQPJ2LQYEooCB8ERSRIucLygAKdgAIwAVgsHhBbgs4ABKSO3KUpbEe3gfCy0GQwQNB8wC65+VSceSyGQAOQQ6CgCwARAAReRQJTsSsEVRYBAlssVmCVgASCAAXk3VAgXQsAMwABmbIggsnYWbtjAWmkafkWHarpgQLHkICbMFTNQDKRAlkXMAAbAAOGCBKdNVe0dddgDCjpkSCge4PCiPJ6LCwARjOG87wNQIYDbfc3xAD4XRAf1g2zIhKxnOds0YYJKyjHYgA).

#### `PathValue`

See [typescriptlang.org](https://www.typescriptlang.org/play?ts=4.1.0-pr-40336-88&ssl=25&ssc=1&pln=26&pc=1#code/FAFwngDgpgBACgQxACwJIFsIBsA8AVAGhgGkowYoAPEKAOwBMBnGAazIHsAzGPAPhgC8wGCTIVqdJjEYgATgEtaAc2EwA-DwDapMAF1xNBswBKUAMbtZ9HDIXKiCWmF6qRGgD4wABgBIA3joAvgB0-ogoGNj42mS6RACilGZYAK70UDhsYFxaOnGsHNyOYJq6vPwAZNJyikqBXq4iMJ6+AWQh-onJaRlZOXgxekR9RU6lldV2dQ1NMABcMLRQAG5QsqoLS6uyANzAoJCw4WiYWABM+PwC8EgnUYQF2dx8zY-9ewfQNyiXgt9351+VEMUlstVeIx46n+kUBLwWkLwH3AX2OADUEKkMg84AZJMxjpcrqpccD8d5-IpOGtRGAOn4qTTTDJ6qoNDo8UY3s9GhpmSBOVJCQM8i5Zm5-hisdE8kR+WLxZsVmtGkrtht4ILmIjeVo4LpVYtlbt9ulkghZLBOClaGYQPJ2LQYEooCB8ERSRIucLygAKdgAIwAVgsHhBbgs4ABKSO3KUpbEe3gfCy0GQwQNB8wC65+VSceSyGQAOQQ6CgCwARAAReRQJTsSsEVRYBAlssVmCVgASCAAXk3VAgXQsAMwABmbIggsnYWbtjAWmkafkWHarpgQLHkICbMFTNQDKRAlkXMAAbAAOGCBKdNVe0dddgDCjpkSCge4PCiPJ6LCwARjOG87wNQIYDbfc3xAD4XRAf1g2zIhKxnOds0YYJKyjHYgA).

#### `Primitive`

```typescript
type Primitive = string | number | boolean | undefined | null;
```

#### `ValueOf`

```typescript
type ValueOf<T> = T extends any[] ? T[number] : T[keyof T];
```

#### `Without`

```typescript
type Without<T extends string> = {
  [P in T]?: never;
};
```

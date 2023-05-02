# `@drpiou/ts-utils`

![Licence](https://img.shields.io/github/license/drpiou/ts-utils)
![Package.json version](https://img.shields.io/github/package-json/v/drpiou/ts-utils)
![Stage](https://img.shields.io/badge/stage-experimental-important)

The `@drpiou/ts-utils` package provides some JavaScript utilities.

> - written in TypeScript.

<!--ts-->

- [Installation](#installation)
- [Documentation](#documentation)
  - [Utils](#utils)
    - [append](#append)
    - [appendUniq](#appendUniq)
    - [applyMixins](#applyMixins)
    - [assert](#assert)
    - [assertArray](#assertArray)
    - [assertArrayFilled](#assertArrayFilled)
    - [assertBoolean](#assertBoolean)
    - [assertBooleanLike](#assertBooleanLike)
    - [assertBooleanNumber](#assertBooleanNumber)
    - [assertBooleanString](#assertBooleanString)
    - [asserts](#asserts)
    - [assertDatable](#assertDatable)
    - [assertDate](#assertDate)
    - [assertDateString](#assertDateString)
    - [assertDateValid](#assertDateValid)
    - [assertEmail](#assertEmail)
    - [assertFunction](#assertFunction)
    - [assertIPv4](#assertIPv4)
    - [assertIPv6](#assertIPv6)
    - [assertNumber](#assertNumber)
    - [assertNumberValid](#assertNumberValid)
    - [assertPhone](#assertPhone)
    - [assertPlainObject](#assertPlainObject)
    - [assertString](#assertString)
    - [assertStringFilled](#assertStringFilled)
    - [assertUrl](#assertUrl)
    - [assertUUID](#assertUUID)
    - [asserted](#asserted)
    - [chunk](#chunk)
    - [chunkWhile](#chunkWhile)
    - [clone](#clone)
    - [concatUniq](#concatUniq)
    - [contains](#contains)
    - [debug](#debug)
    - [entries](#entries)
    - [every](#every)
    - [filter](#filter)
    - [filterNull](#filterNull)
    - [filterNullish](#filterNullish)
    - [filterUndefined](#filterUndefined)
    - [first](#first)
    - [flatten](#flatten)
    - [invert](#invert)
    - [is](#is)
    - [isArray](#isArray)
    - [isArrayFilled](#isArrayFilled)
    - [isAsserted](#isAsserted)
    - [isBoolean](#isBoolean)
    - [isBooleanLike](#isBooleanLike)
    - [isBooleanNumber](#isBooleanNumber)
    - [isBooleanString](#isBooleanString)
    - [isDatable](#isDatable)
    - [isDate](#isDate)
    - [isDateString](#isDateString)
    - [isDateValid](#isDateValid)
    - [isEmail](#isEmail)
    - [isFunction](#isFunction)
    - [isIPv4](#isIPv4)
    - [isIPv6](#isIPv6)
    - [isNumber](#isNumber)
    - [isNumberValid](#isNumberValid)
    - [isPhone](#isPhone)
    - [isPlainObject](#isPlainObject)
    - [isString](#isString)
    - [isStringFilled](#isStringFilled)
    - [isUrl](#isUrl)
    - [isUUID](#isUUID)
    - [join](#join)
    - [joinBy](#joinBy)
    - [keyBy](#keyBy)
    - [keys](#keys)
    - [last](#last)
    - [log](#log)
    - [logError](#logError)
    - [logInfo](#logInfo)
    - [logWarn](#logWarn)
    - [max](#max)
    - [maxBy](#maxBy)
    - [min](#min)
    - [minBy](#minBy)
    - [omit](#omit)
    - [order](#order)
    - [orderBy](#orderBy)
    - [pad](#pad)
    - [partition](#partition)
    - [paths](#paths)
    - [prepend](#prepend)
    - [prependUniq](#prependUniq)
    - [pushUniq](#pushUniq)
    - [random](#random)
    - [sleep](#sleep)
    - [sort](#sort)
    - [sortBy](#sortBy)
    - [sum](#sum)
    - [sumBy](#sumBy)
    - [take](#take)
    - [uniq](#uniq)
    - [uniqBy](#uniqBy)
    - [unshiftUniq](#unshiftUniq)
    - [usleep](#usleep)
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

append(['a', 'b', 1], 'a', 'b', true);
// => ['a', 'b', 1, 'a', 'b', true]
```

#### `appendUniq`

Add the given items to the end of the source array.

```typescript
import { appendUniq } from '@drpiou/ts-utils';

appendUniq(['a', 'b', 1], 'a', 'b', true);
// => ['a', 'b', 1, true]
```

#### `applyMixins`

Apply the given mixins to the base class.

```typescript
import { applyMixins } from '@drpiou/ts-utils';

interface Test extends MixinA, MixinB {}

class Test {
  x() {
    return 'x';
  }
}

class MixinA {
  a() {
    return 'a';
  }
}

class MixinB {
  b() {
    return 'b';
  }
}

applyMixins(Test, [MixinA, MixinB]);

const test = new Test();

test.a();
// => "a"

test.b();
// => "b"

test.x();
// => "x"
```

#### `assert`

Assert provides a wrapper around assertXxx utilities.

```typescript
import { assert } from '@drpiou/ts-utils';

assert.array(value);
// => same as assertArray(value)

assert.arrayFilled(value);
// => same as assertArrayFilled(value)

assert.boolean(value);
// => same as assertBoolean(value)

assert.booleanLike(value);
// => same as assertBooleanLike(value)

assert.booleanNumber(value);
// => same as assertBooleanNumber(value)

assert.booleanString(value);
// => same as assertBooleanString(value)

assert.condition(value);
// => same as asserts(value)

assert.datable(value);
// => same as assertDatable(value)

assert.date(value);
// => same as assertDate(value)

assert.dateString(value);
// => same as assertDateString(value)

assert.dateValid(value);
// => same as assertDateValid(value)

assert.email(value);
// => same as assertEmail(value)

assert.function(value);
// => same as assertFunction(value)

assert.ipv4(value);
// => same as assertIPv4(value)

assert.ipv6(value);
// => same as assertIPv6(value)

assert.number(value);
// => same as assertNumber(value)

assert.numberValid(value);
// => same as assertNumberValid(value)

assert.phone(value);
// => same as assertPhone(value)

assert.plainObject(value);
// => same as assertPlainObject(value)

assert.string(value);
// => same as assertString(value)

assert.stringFilled(value);
// => same as assertStringFilled(value)

assert.url(value);
// => same as assertUrl(value)

assert.uuid(value);
// => same as assertUUID(value)

assert.value(value);
// => same as asserted(value)
```

#### `assertArray`

Assert the value is an array.

```typescript
import { assertArray } from '@drpiou/ts-utils';

assertArray('');
// => throw TypeError

assertArray([]);
// => throw nothing
```

#### `assertArrayFilled`

Assert the value is an array filled.

```typescript
import { assertArrayFilled } from '@drpiou/ts-utils';

assertArrayFilled('');
// => throw TypeError

assertArrayFilled(['']);
// => throw nothing
```

#### `assertBoolean`

Assert the value is a boolean.

```typescript
import { assertBoolean } from '@drpiou/ts-utils';

assertBoolean('');
// => throw TypeError

assertBoolean(true);
// => throw nothing
```

#### `assertBooleanLike`

Assert the value is a boolean like.

```typescript
import { assertBooleanLike } from '@drpiou/ts-utils';

assertBooleanLike('');
// => throw TypeError

assertBooleanLike('true');
// => throw nothing
```

#### `assertBooleanNumber`

Assert the value is a boolean number.

```typescript
import { assertBooleanNumber } from '@drpiou/ts-utils';

assertBooleanNumber('');
// => throw TypeError

assertBooleanNumber(1);
// => throw nothing
```

#### `assertBooleanString`

Assert the value is a boolean string.

```typescript
import { assertBooleanString } from '@drpiou/ts-utils';

assertBooleanString('');
// => throw TypeError

assertBooleanString('true');
// => throw nothing
```

#### `assertDatable`

Assert the value is datable.

```typescript
import { assertDatable } from '@drpiou/ts-utils';

assertDatable('');
// => throw TypeError

assertDatable('2020-02-22');
// => throw nothing
```

#### `assertDate`

Assert the value is a date.

```typescript
import { assertDate } from '@drpiou/ts-utils';

assertDate('');
// => throw TypeError

assertDate(new Date());
// => throw nothing
```

#### `assertDateString`

Assert the value is date string.

```typescript
import { assertDateString } from '@drpiou/ts-utils';

assertDateString('');
// => throw TypeError

assertDateString('2020-02-22');
// => throw nothing
```

#### `assertDateValid`

Assert the value is a valid date.

```typescript
import { assertDateValid } from '@drpiou/ts-utils';

assertDateValid('');
// => throw TypeError

assertDateValid(new Date('1700-01-01'));
// => throw TypeError

assertDateValid(new Date('2020-02-22'));
// => throw nothing
```

#### `asserted`

Assert the value.

```typescript
import { asserted } from '@drpiou/ts-utils';

asserted('');
// => throw nothing

asserted(null);
// => throw TypeError

asserted(undefined);
// => throw TypeError
```

#### `assertEmail`

Assert the value is an e-mail.

```typescript
import { assertEmail } from '@drpiou/ts-utils';

assertEmail('');
// => throw TypeError

assertEmail('a@a.a');
// => throw nothing
```

#### `assertFunction`

Assert the value is a function.

```typescript
import { assertFunction } from '@drpiou/ts-utils';

assertFunction('');
// => throw TypeError

assertFunction(() => undefined);
// => throw nothing
```

#### `assertIPv4`

Assert the value is an IPv4.

```typescript
import { assertIPv4 } from '@drpiou/ts-utils';

assertIPv4('');
// => throw TypeError

assertIPv4('192.168.0.1');
// => throw nothing
```

#### `assertIPv6`

Assert the value is an IPv6.

```typescript
import { assertIPv6 } from '@drpiou/ts-utils';

assertIPv6('');
// => throw TypeError

assertIPv6('684D:1111:222:3333:4444:5555:6:77');
// => throw nothing
```

#### `assertNumber`

Assert the value is a number.

```typescript
import { assertNumber } from '@drpiou/ts-utils';

assertNumber('');
// => throw TypeError

assertNumber(0);
// => throw nothing

assertNumber(Number('NaN'));
// => throw nothing
```

#### `assertNumberValid`

Assert the value is a valid number.

```typescript
import { assertNumberValid } from '@drpiou/ts-utils';

assertNumberValid('');
// => throw TypeError

assertNumber(0);
// => throw nothing

assertNumber(Number('NaN'));
// => throw TypeError
```

#### `assertPhone`

Assert the value is a phone.

```typescript
import { assertPhone } from '@drpiou/ts-utils';

assertPhone('');
// => throw TypeError

assertPhone('+16152435172');
// => throw nothing

assertPhone('+1 (615) 243-5172');
// => throw nothing
```

#### `assertPlainObject`

Assert the value is a plain object.

```typescript
import { assertPlainObject } from '@drpiou/ts-utils';

assertPlainObject('');
// => throw TypeError

assertPlainObject({});
// => throw nothing
```

#### `asserts`

Asserts the condition.

```typescript
import { asserts } from '@drpiou/ts-utils';

asserts('' === 0);
// => throw TypeError

asserts(typeof '' === 'string');
// => throw nothing
```

#### `assertString`

Assert the value is a string.

```typescript
import { assertString } from '@drpiou/ts-utils';

assertString('');
// => throw nothing
```

#### `assertStringFilled`

Assert the value is a string filled.

```typescript
import { assertStringFilled } from '@drpiou/ts-utils';

assertStringFilled('');
// => throw TypeError

assertStringFilled('a');
// => throw nothing
```

#### `assertUrl`

Assert the value is an url.

```typescript
import { assertUrl } from '@drpiou/ts-utils';

assertUrl('');
// => throw TypeError

assertUrl('https://my.url');
// => throw nothing

assertUrl('http://my.url', 'https');
// => throw TypeError
```

#### `assertUUID`

Assert the value is a UUID.

```typescript
import { assertUUID } from '@drpiou/ts-utils';

assertUUID('');
// => throw TypeError

assertUUID('34d57fc1-2cb2-4da0-a383-00fb304f1506');
// => throw nothing

assertUUID('34d57fc1-2cb2-4da0-a383-00fb304f1506', 1);
// => throw TypeError
```

#### `chunk`

Break the source array into smaller arrays of a given size.

```typescript
import { chunk } from '@drpiou/ts-utils';

chunk(['a', 'b', 1], 2);
// => [['a', 'b'], [1]]
```

#### `chunkWhile`

Break the source array into smaller arrays.

```typescript
import { chunkWhile } from '@drpiou/ts-utils';

chunkWhile(
  ['a', 'b', 'a', 1],
  (item, index, chunk) => chunk.indexOf(item) > -1,
);
// => [['a', 'b'], ['a', 1]]
```

#### `clone`

Clone the source array.

```typescript
import { clone } from '@drpiou/ts-utils';

clone(['a', 'b', 1]);
// => ['a', 'b', 1]
```

#### `concatUniq`

Add the given items to the end of the source array.

```typescript
import { concatUniq } from '@drpiou/ts-utils';

concatUniq(['a', 'b', 1], ['a', 'b', 2]);
// => ['a', 'b', 1, 2]
```

#### `contains`

Return whether the given item exists in the source array.

```typescript
import { contains } from '@drpiou/ts-utils';

contains(['a', 'b', 1], (value) => value === 'b');
// => true
```

#### `debug`

Debug provides a wrapper around log utilities.

```typescript
import { Debug } from '@drpiou/ts-utils';

const debug = new Debug({
  active: __DEV__,
});

debug.setActive(active);
debug.setTransform(transform);

debug.log(...params);
// => same as log(...params)

debug.info(...params);
// => same as logInfo(...params)

debug.warn(...params);
// => same as logWarn(...params)

debug.error(...params);
// => same as logError(...params)
```

#### `entries`

Return items number-indexed property [index, value] pairs of the source array.

```typescript
import { entries } from '@drpiou/ts-utils';

entries(['a', 'b', 1]);
// => [[0, 'a'], [1, 'b'], [2, 1]]
```

#### `every`

Verify that all items pass a given truth test in the source array.

```typescript
import { every } from '@drpiou/ts-utils';

every(['a', 'b', 1], (value) => typeof value === 'string');
// => false
```

#### `filter`

Filter the items that pass a given truth test from the source array.

```typescript
import { filter } from '@drpiou/ts-utils';

filter(['a', 'b', 1, null], (value, index, reject) =>
  typeof value !== 'number' ? value : reject,
);
// => ['a', 'b', null]
```

#### `filterNull`

Filter the items that match "null" from the source array.

```typescript
import { filterNull } from '@drpiou/ts-utils';

filterNull(['a', 'b', 1, null]);
// => ['a', 'b', 1]
```

#### `filterNullish`

Filter the items that match "null" or "undefined" from the source array.

```typescript
import { filterNullish } from '@drpiou/ts-utils';

filterNullish(['a', 'b', 1, null, undefined]);
// => ['a', 'b', 1]
```

#### `filterUndefined`

Filter the items that match "undefined" from the source array.

```typescript
import { filterUndefined } from '@drpiou/ts-utils';

filterUndefined(['a', 'b', 1, undefined]);
// => ['a', 'b', 1]
```

#### `first`

Return the first item that passes a given truth test in the source array.

```typescript
import { first } from '@drpiou/ts-utils';

first(['a', 'b', 1]);
// => 'a'

first(['a', 'b', 1], (item, index, reject) =>
  typeof item === 'number' ? item : reject,
);
// => 1'
```

#### `flatten`

Flatten the source array.

```typescript
import { flatten } from '@drpiou/ts-utils';

flatten(['a', 'b', [1], [['c', 2]]]);
// => ['a', 'b', 1, ['c', 2]]

flatten(['a', 'b', [1], [['c', 2]]], true);
// => ['a', 'b', 1, 'c', 2]
```

#### `invert`

Invert the order of the items in the source array.

```typescript
import { invert } from '@drpiou/ts-utils';

invert(['a', 'b', 1]);
// => [1, 'b', 'a']
```

#### `is`

Is provides a wrapper around isXxx utilities.

```typescript
import { is } from '@drpiou/ts-utils';

is.array(value);
// => same as isArray(value)

is.arrayFilled(value);
// => same as isArrayFilled(value)

is.asserted(value);
// => same as isAsserted(value)

is.boolean(value);
// => same as isBoolean(value)

is.booleanLike(value);
// => same as isBooleanLike(value)

is.booleanNumber(value);
// => same as isBooleanNumber(value)

is.booleanString(value);
// => same as isBooleanString(value)

is.datable(value);
// => same as isDatable(value)

is.date(value);
// => same as isDate(value)

is.dateString(value);
// => same as isDateString(value)

is.dateValid(value);
// => same as isDateValid(value)

is.email(value);
// => same as isEmail(value)

is.function(value);
// => same as isFunction(value)

is.ipv4(value);
// => same as isIPv4(value)

is.ipv6(value);
// => same as isIPv6(value)

is.number(value);
// => same as isNumber(value)

is.numberValid(value);
// => same as isNumberValid(value)

is.phone(value);
// => same as isPhone(value)

is.plainObject(value);
// => same as isPlainObject(value)

is.string(value);
// => same as isString(value)

is.stringFilled(value);
// => same as isStringFilled(value)

is.url(value);
// => same as isUrl(value)

is.uuid(value);
// => same as isUUID(value)
```

#### `isArray`

Check if the value is an array.

```typescript
import { isArray } from '@drpiou/ts-utils';

isArray('');
// => false

isArray([]);
// => true
```

#### `isArrayFilled`

Check if the value is an array filled.

```typescript
import { isArrayFilled } from '@drpiou/ts-utils';

isArrayFilled('');
// => false

isArrayFilled(['']);
// => true
```

#### `isAsserted`

Check if the value is asserted.

```typescript
import { isAsserted } from '@drpiou/ts-utils';

isAsserted('');
// => true

isAsserted(null);
// => false

isAsserted(undefined);
// => false
```

#### `isBoolean`

Check if the value is a boolean.

```typescript
import { isBoolean } from '@drpiou/ts-utils';

isBoolean('');
// => false

isBoolean(true);
// => true
```

#### `isBooleanLike`

Check if the value is boolean like.

```typescript
import { isBooleanLike } from '@drpiou/ts-utils';

isBooleanLike('');
// => false

isBooleanLike('true');
// => true
```

#### `isBooleanNumber`

Check if the value is boolean number.

```typescript
import { isBooleanNumber } from '@drpiou/ts-utils';

isBooleanNumber('');
// => false

isBooleanNumber(1);
// => true
```

#### `isBooleanString`

Check if the value is boolean string.

```typescript
import { isBooleanString } from '@drpiou/ts-utils';

isBooleanString('');
// => false

isBooleanString('true');
// => true
```

#### `isDatable`

Check if the value is datable.

```typescript
import { isDatable } from '@drpiou/ts-utils';

isDatable('');
// => false

isDatable('2020-02-22');
// => true
```

#### `isDate`

Check if the value is a date.

```typescript
import { isDate } from '@drpiou/ts-utils';

isDate('');
// => false

isDate(new Date());
// => true
```

#### `isDateString`

Check if the value is a date string.

```typescript
import { isDateString } from '@drpiou/ts-utils';

isDateString('');
// => false

isDateString('2020-02-22');
// => true
```

#### `isDateValid`

Check if the value is a valid date.

```typescript
import { isDateValid } from '@drpiou/ts-utils';

isDateValid('');
// => false

isDateValid(new Date('1700-01-01'));
// => false

isDateValid(new Date('2020-02-22'));
// => true
```

#### `isEmail`

Check if the value is an e-mail.

```typescript
import { isEmail } from '@drpiou/ts-utils';

isEmail('');
// => false

isEmail('a@a.a');
// => true
```

#### `isFunction`

Check if the value is a function.

```typescript
import { isFunction } from '@drpiou/ts-utils';

isFunction('');
// => false

isFunction(() => undefined);
// => true
```

#### `isIPv4`

Check if the value is IPv4.

```typescript
import { isIPv4 } from '@drpiou/ts-utils';

isIPv4('');
// => false

isIPv4('192.168.0.1');
// => true
```

#### `isIPv6`

Check if the value is IPv6.

```typescript
import { isIPv6 } from '@drpiou/ts-utils';

isIPv6('');
// => false

isIPv6('684D:1111:222:3333:4444:5555:6:77');
// => true
```

#### `isNumber`

Check if the value is a number.

```typescript
import { isNumber } from '@drpiou/ts-utils';

isNumber('');
// => false

isNumber(0);
// => true

isNumber(Number('NaN'));
// => true
```

#### `isNumberValid`

Check if the value is valid number.

```typescript
import { isNumberValid } from '@drpiou/ts-utils';

isNumberValid('');
// => false

isNumber(0);
// => true

isNumber(Number('NaN'));
// => false
```

#### `isPhone`

Check if the value is a phone.

```typescript
import { isPhone } from '@drpiou/ts-utils';

isPhone('');
// => false

isPhone('+16152435172');
// => true

isPhone('+1 (615) 243-5172');
// => true
```

#### `isPlainObject`

Check if the value is a plain object.

```typescript
import { isPlainObject } from '@drpiou/ts-utils';

isPlainObject('');
// => false

isPlainObject({});
// => true
```

#### `isString`

Check if the value is a string.

```typescript
import { isString } from '@drpiou/ts-utils';

isString('');
// => true
```

#### `isStringFilled`

Check if the value is string filled.

```typescript
import { isStringFilled } from '@drpiou/ts-utils';

isStringFilled('');
// => false

isStringFilled('a');
// => true
```

#### `isUrl`

Check if the value is an url.

```typescript
import { isUrl } from '@drpiou/ts-utils';

isUrl('');
// => false

isUrl('https://my.url');
// => true

isUrl('http://my.url', 'https');
// => false
```

#### `isUUID`

Check if the value is a UUID.

```typescript
import { isUUID } from '@drpiou/ts-utils';

isUUID('');
// => false

isUUID('34d57fc1-2cb2-4da0-a383-00fb304f1506');
// => true

isUUID('34d57fc1-2cb2-4da0-a383-00fb304f1506', 1);
// => false
```

#### `join`

Join items in a source array.

```typescript
import { join } from '@drpiou/ts-utils';

join(['a', 'b', 1], '-');
// => 'a-b-1'
```

#### `joinBy`

Join key-paired items in a source array.

```typescript
import { joinBy } from '@drpiou/ts-utils';

joinBy([{ a: 'a' }, { a: 'b' }, { a: 1 }], '-');
// => 'a-b-1'
```

#### `keyBy`

Return the key-paired items of the source array.

```typescript
import { keyBy } from '@drpiou/ts-utils';

keyBy([{ a: 'a' }, { a: 'b' }, { a: 1 }], 'a');
// => { a: { a: 'a' }, b: { a: 'b' }, 1: { a: 1 } }
```

#### `keys`

Return the indexes of the source array.

```typescript
import { keys } from '@drpiou/ts-utils';

keys(['a', 'b', 1]);
// => [0, 1, 2]

keys({ a: 'a', b: 1, c: 0 });
// => ['a', 'b', 'c']
```

#### `last`

Return the last item that passes a given truth test in the source array.

```typescript
import { last } from '@drpiou/ts-utils';

last(['a', 'b', 1]);
// => 1

last(['a', 'b', 1], (item, index, reject) =>
  typeof item === 'string' ? item : reject,
);
// => 'b'
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

max([1, 2]);
// => 2
```

#### `maxBy`

Return the maximum value of the items in the source array.

```typescript
import { maxBy } from '@drpiou/ts-utils';

maxBy([{ a: 1 }, { a: 2 }], 'a');
// => 2
```

#### `min`

Return the minimum value of the items in the source array.

```typescript
import { min } from '@drpiou/ts-utils';

min([1, 2]);
// => 1
```

#### `minBy`

Return the minimum value of the items in the source array.

```typescript
import { minBy } from '@drpiou/ts-utils';

maxBy([{ a: 1 }, { a: 2 }], 'a');
// => 1
```

#### `omit`

Removes the keys of the source object.

```typescript
import { omit } from '@drpiou/ts-utils';

omit({ a: 1, b: 2 }, ['b']);
// => { a: 1 }
```

#### `order`

Order items in the source array.

```typescript
import { order } from '@drpiou/ts-utils';

order(['b', 1, 'a', 3, 2]);
// => [1, 2, 3, 'a', 'b']
```

#### `orderBy`

Order key-paired items in the source array.

```typescript
import { orderBy } from '@drpiou/ts-utils';

orderBy([{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }]);
// => [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]
```

#### `pad`

Fill the given value until the source array reaches the specified size.

```typescript
import { pad } from '@drpiou/ts-utils';

pad(['a', 'b', 1], 6, 0);
// => ['a', 'b', 1, 0, 0, 0]

pad(['a', 'b', 1], -6, 0);
// => [0, 0, 0, 'a', 'b', 1]
```

#### `partition`

Separate items that pass a given truth test in the source array.

```typescript
import { partition } from '@drpiou/ts-utils';

partition(['a', 'b', 1], (value) => typeof value === 'string');
// => [['a', 'b'], [1]]
```

#### `paths`

Return all the paths in dot notation of the source object.

```typescript
import { paths } from '@drpiou/ts-utils';

paths({ a: 1, b: { c: 2 } });
// => ['a', 'b', 'b.c']

paths({ a: 1, b: { c: 2 } }, true);
// => ['a', 'b.c']
```

#### `prepend`

Add the given items to the beginning of the source array.

```typescript
import { prepend } from '@drpiou/ts-utils';

prepend(['a', 'b', 1], 'a', 'b', 2);

// => ['a', 'b', 2, 'a', 'b', 1]
```

#### `prependUniq`

Add the given items to the beginning of the source array.

```typescript
import { prependUniq } from '@drpiou/ts-utils';

prependUniq(['a', 'b', 1], 'a', 'b', 2);

// => [2, 'a', 'b', 1]
```

#### `pushUniq`

Add the given items to the end of the source array.

> This function mutates the source array.

```typescript
import { pushUniq } from '@drpiou/ts-utils';

pushUniq(['a', 'b', 1], 'a', 'b', 2);
// => ['a', 'b', 1, 2]
```

#### `random`

Return random items from the source array.

```typescript
import { random } from '@drpiou/ts-utils';

random(['a', 'b', 1]);
// => ['b']
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

sort(['b', 1, 'a', 3, 2]);
// => [1, 2, 3, 'a', 'b']
```

#### `sortBy`

Sort key-paired items in the source array.

> This function mutates the source array.

```typescript
import { sortBy } from '@drpiou/ts-utils';

sortBy([{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }]);
// => [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]
```

#### `sum`

Return the sum of the items in the source array.

```typescript
import { sum } from '@drpiou/ts-utils';

sum([1, 2]);
// => 3
```

#### `sumBy`

Return the sum of the items in the source array.

```typescript
import { sumBy } from '@drpiou/ts-utils';

sumBy([{ a: 1 }, { a: 2 }], 'a');
// => 3
```

#### `take`

Return the specified number of items in the source array.

```typescript
import { take } from '@drpiou/ts-utils';

take(['a', 'b', 1], 2);
// => ['a', 'b']

take(['a', 'b', 1], -2);
// => ['b', 1]
```

#### `uniq`

Return all the unique items in the source array.

```typescript
import { uniq } from '@drpiou/ts-utils';

uniq(['a', 'b', 'a', 1]);
// => ['a', 'b', 1]
```

#### `uniqBy`

Return all the unique key-paired items in the source array.

```typescript
import { uniqBy } from '@drpiou/ts-utils';

uniqBy([{ a: 'a' }, { a: 'b' }, { a: 'a' }, { a: 1 }]);
// => [{ a: 'a' }, { a: 'b' }, { a: 1 }]
```

#### `unshiftUniq`

Add the given items to the end of the source array.

> This function mutates the source array.

```typescript
import { unshiftUniq } from '@drpiou/ts-utils';

unshiftUniq(['a', 'b', 1], 'a', 'b', 2);
// => [2, 'a', 'b', 1]
```

#### `usleep`

Await x milliseconds.

```typescript
import { usleep } from '@drpiou/ts-utils';

await usleep(100);
```

### Types

#### `Asserted`

```typescript
type Test = string | null | undefined;

type Result = Asserted<Test>;
// => string
```

#### `CastArray`

```typescript
type Test = string | null | undefined;

type Result = CastArray<Test>;
// => [string | null | undefined]
```

#### `FlattenDeep`

```typescript
type Test = (string | (number | boolean[])[])[];

type Result = FlattenDeep<Test>;
// => (string | number | boolean)[]
```

#### `Index`

```typescript
type Result = Index;
// => string | number | symbol
```

#### `Path`

```typescript
type Test = { a: string; b: { c: string; } };

type Result = Path<Test>;
// => 'a' | 'b' | 'b.c'
```

#### `PathFinite`

```typescript
type Test = { a: string; b: { c: string; } };

type Result = PathFinite<Test>;
// => 'a' | 'b.c'
```

#### `PathValue`

```typescript
type Test = { a: string; b: { c: string; } };

type Result = PathValue<Test, 'b.c'>;
// => string
```

#### `PlainObject`

```typescript
type Result = PlainObject;
// => Record<string, any>
```

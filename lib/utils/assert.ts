import { PlainObject } from '../types/generic';
import is from './is';

export function asserts(condition: boolean, message?: string): asserts condition {
  if (!condition) {
    throw new TypeError(message || 'The result of the asserted value is false.');
  }
}

export function asserted(value: unknown, message?: string): asserts value {
  asserts(is.asserted(value), message);
}

export function assertArray<T extends any[]>(value: unknown, message?: string): asserts value is T {
  asserts(is.array(value), message);
}

export function assertArrayFilled<T extends any[]>(value: unknown, message?: string): asserts value is T {
  asserts(is.arrayFilled(value), message);
}

export function assertBoolean<T extends boolean>(value: unknown, message?: string): asserts value is T {
  asserts(is.boolean(value), message);
}

export function assertBooleanLike<T extends boolean | 'true' | 'false' | 0 | 1>(
  value: unknown,
  message?: string,
): asserts value is T {
  asserts(is.booleanLike(value), message);
}

export function assertBooleanString<T extends 'true' | 'false'>(value: unknown, message?: string): asserts value is T {
  asserts(is.booleanString(value), message);
}

export function assertBooleanNumber<T extends 0 | 1>(value: unknown, message?: string): asserts value is T {
  asserts(is.booleanNumber(value), message);
}

export function assertDatable<T extends Date | number | string>(value: unknown, message?: string): asserts value is T {
  asserts(is.datable(value), message);
}

export function assertDate<T extends Date>(value: unknown, message?: string): asserts value is T {
  asserts(is.date(value), message);
}

export function assertDateIso<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(is.dateIso(value), message);
}

export function assertDateValid<T extends Date>(value: unknown, message?: string): asserts value is T {
  asserts(is.dateValid(value), message);
}

export function assertEmail<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(is.email(value), message);
}

export function assertFunction<T extends (...args: any[]) => any>(value: unknown, message?: string): asserts value is T {
  asserts(is.function(value), message);
}

export function assertIPv4<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(is.ipv4(value), message);
}

export function assertIPv6<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(is.ipv6(value), message);
}

export function assertNumber<T extends number>(value: unknown, message?: string): asserts value is T {
  asserts(is.number(value), message);
}

export function assertNumberValid<T extends number>(value: unknown, message?: string): asserts value is T {
  asserts(is.numberValid(value), message);
}

export function assertPhone<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(is.phone(value), message);
}

export function assertPlainObject<T extends PlainObject>(value: unknown, message?: string): asserts value is T {
  asserts(is.plainObject(value), message);
}

export function assertString<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(is.string(value), message);
}

export function assertStringFilled<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(is.stringFilled(value), message);
}

export function assertUrl<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(is.url(value), message);
}

export function assertUUID<T extends string>(
  value: Parameters<typeof is.uuid>[0],
  version?: Parameters<typeof is.uuid>[1],
  message?: string,
): asserts value is T {
  asserts(is.uuid(value, version), message);
}

const assert = {
  array: assertArray,
  arrayFilled: assertArrayFilled,
  boolean: assertBoolean,
  booleanLike: assertBooleanLike,
  booleanNumber: assertBooleanNumber,
  booleanString: assertBooleanString,
  condition: asserts,
  datable: assertDatable,
  date: assertDate,
  dateIso: assertDateIso,
  dateValid: assertDateValid,
  email: assertEmail,
  function: assertFunction,
  ipv4: assertIPv4,
  ipv6: assertIPv6,
  number: assertNumber,
  numberValid: assertNumberValid,
  phone: assertPhone,
  plainObject: assertPlainObject,
  string: assertString,
  stringFilled: assertStringFilled,
  url: assertUrl,
  uuid: assertUUID,
  value: asserted,
};

export default assert;

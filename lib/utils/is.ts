import { isPlainObject as _isPlainObject } from 'lodash';
import { Asserted, PlainObject } from '../types/generic';

export function isAsserted<T>(value: T): value is Asserted<T> {
  return [null, undefined].indexOf(value as never) === -1;
}

export function isArray<T>(value: unknown): value is Asserted<T[]> {
  return isAsserted(value) && Array.isArray(value);
}

export function isArrayFilled<T>(value: unknown): value is Asserted<T[]> {
  return isArray(value) && value.length >= 1;
}

export function isBoolean<T extends boolean>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && (value instanceof Boolean || typeof value === 'boolean');
}

export function isBooleanLike<T extends boolean | 'true' | 'false' | 0 | 1>(value: unknown): value is Asserted<T> {
  return isBoolean(value) || isBooleanString(value) || isBooleanNumber(value);
}

export function isBooleanNumber<T extends 0 | 1>(value: unknown): value is Asserted<T> {
  return isNumber(value) && (value === 1 || value === 0);
}

export function isBooleanString<T extends 'true' | 'false'>(value: unknown): value is Asserted<T> {
  return isString(value) && (value === 'true' || value === 'false');
}

export function isDatable<T extends Date | number | string>(value: unknown): value is Asserted<T> {
  return isDate(value) || isNumberValid(value) || isString(value);
}

export function isDate<T extends Date>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && value instanceof Date;
}

export function isDateIso<T extends string>(value: unknown): value is Asserted<T> {
  const pattern = /^(?:\d{4})-(?:\d{2})-(?:\d{2})T(?:\d{2}):(?:\d{2}):(?:\d{2}(?:\.\d*)?)(?:(?:-(?:\d{2}):(?:\d{2})|Z)?)$/;

  return isString(value) && pattern.test(value);
}

export function isDateValid<T extends Date>(value: unknown): value is Asserted<T> {
  return isDate(value) && value.getTime() > 0;
}

export function isEmail<T extends string>(value: unknown): value is Asserted<T> {
  const pattern =
    // eslint-disable-next-line no-control-regex
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  return isString(value) && pattern.test(value);
}

export function isFunction<T extends (...args: any[]) => any>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && (value instanceof Function || typeof value === 'function');
}

export function isIPv4<T extends string>(value: unknown): value is Asserted<T> {
  const pattern =
    /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  return isString(value) && pattern.test(value);
}

export function isIPv6<T extends string>(value: unknown): value is Asserted<T> {
  const pattern =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;

  return isString(value) && pattern.test(value);
}

export function isNumber<T extends number>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && (value instanceof Number || typeof value === 'number');
}

export function isNumberValid<T extends number>(value: unknown): value is Asserted<T> {
  return isNumber(value) && !isNaN(value);
}

export function isPhone<T extends string>(value: unknown): value is Asserted<T> {
  const pattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  return isString(value) && pattern.test(value);
}

export function isPlainObject<T extends PlainObject>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && _isPlainObject(value);
}

export function isString<T extends string>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && (value instanceof String || typeof value === 'string');
}

export function isStringFilled<T extends string>(value: unknown): value is Asserted<T> {
  return isString(value) && value !== '';
}

export function isUrl<T extends string>(value: unknown): value is Asserted<T> {
  const pattern = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

  return isString(value) && pattern.test(value);
}

const isUUIDPatterns = {
  1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
};

export function isUUID<T extends string>(value: unknown, version?: keyof typeof isUUIDPatterns): value is Asserted<T> {
  return isString(value) && isUUIDPatterns[isString(version) ? version : 'all'].test(value);
}

const is = {
  array: isArray,
  arrayFilled: isArrayFilled,
  asserted: isAsserted,
  boolean: isBoolean,
  booleanLike: isBooleanLike,
  booleanNumber: isBooleanNumber,
  booleanString: isBooleanString,
  datable: isDatable,
  date: isDate,
  dateIso: isDateIso,
  dateValid: isDateValid,
  email: isEmail,
  function: isFunction,
  ipv4: isIPv4,
  ipv6: isIPv6,
  number: isNumber,
  numberValid: isNumberValid,
  phone: isPhone,
  plainObject: isPlainObject,
  string: isString,
  stringFilled: isStringFilled,
  url: isUrl,
  uuid: isUUID,
};

export default is;

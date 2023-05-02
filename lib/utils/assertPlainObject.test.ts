import { describe, expect, test } from 'vitest';
import assertPlainObject from './assertPlainObject';
import { assertsMessage } from './asserts';

describe('assertPlainObject', () => {
  test('string', () => {
    expect(() => assertPlainObject('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertPlainObject(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertPlainObject(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertPlainObject([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertPlainObject(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertPlainObject(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertPlainObject({})).not.toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertPlainObject(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertPlainObject(undefined)).toThrowError(assertsMessage);
  });
});

import { describe, expect, test } from 'vitest';
import assertNumber from './assertNumber';
import { assertsMessage } from './asserts';

describe('assertNumber', () => {
  test('string', () => {
    expect(() => assertNumber('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertNumber(0)).not.toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertNumber(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertNumber([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertNumber(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertNumber(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertNumber({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertNumber(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertNumber(undefined)).toThrowError(assertsMessage);
  });

  test('NaN', () => {
    expect(() => assertNumber(Number('NaN'))).not.toThrowError(assertsMessage);
  });
});

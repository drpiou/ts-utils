import { describe, expect, test } from 'vitest';
import assertIPv6 from './assertIPv6';
import { assertsMessage } from './asserts';

describe('assertIPv6', () => {
  test('string', () => {
    expect(() => assertIPv6('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertIPv6(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertIPv6(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertIPv6([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertIPv6(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertIPv6(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertIPv6({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertIPv6(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertIPv6(undefined)).toThrowError(assertsMessage);
  });

  test('true', () => {
    expect(() => assertIPv6('684D:1111:222:3333:4444:5555:6:77')).not.toThrowError(assertsMessage);
  });

  test('false', () => {
    expect(() => assertIPv6('192.168.0.1')).toThrowError(assertsMessage);
  });
});

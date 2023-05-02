import { describe, expect, test } from 'vitest';
import assertIPv4 from './assertIPv4';
import { assertsMessage } from './asserts';

describe('assertIPv4', () => {
  test('string', () => {
    expect(() => assertIPv4('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertIPv4(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertIPv4(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertIPv4([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertIPv4(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertIPv4(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertIPv4({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertIPv4(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertIPv4(undefined)).toThrowError(assertsMessage);
  });

  test('true', () => {
    expect(() => assertIPv4('192.168.0.1')).not.toThrowError(assertsMessage);
  });

  test('false', () => {
    expect(() => assertIPv4('684D:1111:222:3333:4444:5555:6:77')).toThrowError(assertsMessage);
  });
});

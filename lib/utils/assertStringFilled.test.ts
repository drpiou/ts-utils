import { describe, expect, test } from 'vitest';
import assertStringFilled from './assertStringFilled';
import { assertsMessage } from './asserts';

describe('assertStringFilled', () => {
  test('string', () => {
    expect(() => assertStringFilled('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertStringFilled(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertStringFilled(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertStringFilled([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertStringFilled(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertStringFilled(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertStringFilled({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertStringFilled(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertStringFilled(undefined)).toThrowError(assertsMessage);
  });

  test('filled', () => {
    expect(() => assertStringFilled('filled')).not.toThrowError(assertsMessage);
  });
});

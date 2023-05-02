import { describe, expect, test } from 'vitest';
import assertBooleanNumber from './assertBooleanNumber';
import { assertsMessage } from './asserts';

describe('assertBooleanNumber', () => {
  test('string', () => {
    expect(() => assertBooleanNumber('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertBooleanNumber(0)).not.toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertBooleanNumber(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertBooleanNumber([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertBooleanNumber(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertBooleanNumber(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertBooleanNumber({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertBooleanNumber(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertBooleanNumber(undefined)).toThrowError(assertsMessage);
  });

  test('true', () => {
    expect(() => assertBooleanNumber('true')).toThrowError(assertsMessage);
  });

  test('10', () => {
    expect(() => assertBooleanNumber(10)).toThrowError(assertsMessage);
  });
});

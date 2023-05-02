import { describe, expect, test } from 'vitest';
import assertBooleanLike from './assertBooleanLike';
import { assertsMessage } from './asserts';

describe('assertBooleanLike', () => {
  test('string', () => {
    expect(() => assertBooleanLike('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertBooleanLike(0)).not.toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertBooleanLike(true)).not.toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertBooleanLike([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertBooleanLike(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertBooleanLike(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertBooleanLike({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertBooleanLike(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertBooleanLike(undefined)).toThrowError(assertsMessage);
  });

  test('true', () => {
    expect(() => assertBooleanLike('true')).not.toThrowError(assertsMessage);
  });

  test('10', () => {
    expect(() => assertBooleanLike(10)).toThrowError(assertsMessage);
  });
});

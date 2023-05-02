import { describe, expect, test } from 'vitest';
import assertBooleanString from './assertBooleanString';
import { assertsMessage } from './asserts';

describe('assertBooleanString', () => {
  test('string', () => {
    expect(() => assertBooleanString('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertBooleanString(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertBooleanString(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertBooleanString([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertBooleanString(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertBooleanString(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertBooleanString({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertBooleanString(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertBooleanString(undefined)).toThrowError(assertsMessage);
  });

  test('true', () => {
    expect(() => assertBooleanString('true')).not.toThrowError(assertsMessage);
  });

  test('10', () => {
    expect(() => assertBooleanString(10)).toThrowError(assertsMessage);
  });
});

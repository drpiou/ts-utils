import { describe, expect, test } from 'vitest';
import assertBoolean from './assertBoolean';
import { assertsMessage } from './asserts';

describe('assertBoolean', () => {
  test('string', () => {
    expect(() => assertBoolean('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertBoolean(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertBoolean(true)).not.toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertBoolean([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertBoolean(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertBoolean(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertBoolean({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertBoolean(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertBoolean(undefined)).toThrowError(assertsMessage);
  });
});

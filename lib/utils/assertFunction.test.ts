import { describe, expect, test } from 'vitest';
import assertFunction from './assertFunction';
import { assertsMessage } from './asserts';

describe('assertFunction', () => {
  test('string', () => {
    expect(() => assertFunction('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertFunction(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertFunction(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertFunction([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertFunction(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertFunction(() => undefined)).not.toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertFunction({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertFunction(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertFunction(undefined)).toThrowError(assertsMessage);
  });
});

import { describe, expect, test } from 'vitest';
import assertArrayFilled from './assertArrayFilled';
import { assertsMessage } from './asserts';

describe('assertArrayFilled', () => {
  test('string', () => {
    expect(() => assertArrayFilled('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertArrayFilled(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertArrayFilled(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertArrayFilled([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertArrayFilled(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertArrayFilled(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertArrayFilled({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertArrayFilled(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertArrayFilled(undefined)).toThrowError(assertsMessage);
  });
});

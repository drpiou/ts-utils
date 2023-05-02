import { describe, expect, test } from 'vitest';
import isArrayFilled from './isArrayFilled';

describe('isArrayFilled', () => {
  test('string', () => {
    expect(isArrayFilled('')).toBe(false);
  });

  test('number', () => {
    expect(isArrayFilled(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isArrayFilled(true)).toBe(false);
  });

  test('array', () => {
    expect(isArrayFilled([])).toBe(false);
  });

  test('date', () => {
    expect(isArrayFilled(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isArrayFilled(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isArrayFilled({})).toBe(false);
  });

  test('null', () => {
    expect(isArrayFilled(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isArrayFilled(undefined)).toBe(false);
  });
});

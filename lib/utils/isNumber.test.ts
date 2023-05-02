import { describe, expect, test } from 'vitest';
import isNumber from './isNumber';

describe('isNumber', () => {
  test('string', () => {
    expect(isNumber('')).toBe(false);
  });

  test('number', () => {
    expect(isNumber(0)).toBe(true);
  });

  test('boolean', () => {
    expect(isNumber(true)).toBe(false);
  });

  test('array', () => {
    expect(isNumber([])).toBe(false);
  });

  test('date', () => {
    expect(isNumber(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isNumber(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isNumber({})).toBe(false);
  });

  test('null', () => {
    expect(isNumber(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });

  test('NaN', () => {
    expect(isNumber(Number('NaN'))).toBe(true);
  });
});

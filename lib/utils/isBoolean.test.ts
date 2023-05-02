import { describe, expect, test } from 'vitest';
import isBoolean from './isBoolean';

describe('isBoolean', () => {
  test('string', () => {
    expect(isBoolean('')).toBe(false);
  });

  test('number', () => {
    expect(isBoolean(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isBoolean(true)).toBe(true);
  });

  test('array', () => {
    expect(isBoolean([])).toBe(false);
  });

  test('date', () => {
    expect(isBoolean(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isBoolean(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isBoolean({})).toBe(false);
  });

  test('null', () => {
    expect(isBoolean(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isBoolean(undefined)).toBe(false);
  });
});

import { describe, expect, test } from 'vitest';
import isString from './isString';

describe('isString', () => {
  test('string', () => {
    expect(isString('')).toBe(true);
  });

  test('number', () => {
    expect(isString(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isString(true)).toBe(false);
  });

  test('array', () => {
    expect(isString([])).toBe(false);
  });

  test('date', () => {
    expect(isString(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isString(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isString({})).toBe(false);
  });

  test('null', () => {
    expect(isString(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isString(undefined)).toBe(false);
  });
});

import { describe, expect, test } from 'vitest';
import isFunction from './isFunction';

describe('isFunction', () => {
  test('string', () => {
    expect(isFunction('')).toBe(false);
  });

  test('number', () => {
    expect(isFunction(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isFunction(true)).toBe(false);
  });

  test('array', () => {
    expect(isFunction([])).toBe(false);
  });

  test('date', () => {
    expect(isFunction(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isFunction(() => undefined)).toBe(true);
  });

  test('object', () => {
    expect(isFunction({})).toBe(false);
  });

  test('null', () => {
    expect(isFunction(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isFunction(undefined)).toBe(false);
  });
});

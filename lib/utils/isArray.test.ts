import { describe, expect, test } from 'vitest';
import isArray from './isArray';

describe('isArray', () => {
  test('string', () => {
    expect(isArray('')).toBe(false);
  });

  test('number', () => {
    expect(isArray(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isArray(true)).toBe(false);
  });

  test('array', () => {
    expect(isArray([])).toBe(true);
  });

  test('date', () => {
    expect(isArray(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isArray(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isArray({})).toBe(false);
  });

  test('null', () => {
    expect(isArray(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isArray(undefined)).toBe(false);
  });
});

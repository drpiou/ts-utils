import { describe, expect, test } from 'vitest';
import isBooleanLike from './isBooleanLike';

describe('isBooleanLike', () => {
  test('string', () => {
    expect(isBooleanLike('')).toBe(false);
  });

  test('number', () => {
    expect(isBooleanLike(0)).toBe(true);
  });

  test('boolean', () => {
    expect(isBooleanLike(true)).toBe(true);
  });

  test('array', () => {
    expect(isBooleanLike([])).toBe(false);
  });

  test('date', () => {
    expect(isBooleanLike(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isBooleanLike(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isBooleanLike({})).toBe(false);
  });

  test('null', () => {
    expect(isBooleanLike(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isBooleanLike(undefined)).toBe(false);
  });

  test('true', () => {
    expect(isBooleanLike('true')).toBe(true);
  });

  test('10', () => {
    expect(isBooleanLike(10)).toBe(false);
  });
});

import { describe, expect, test } from 'vitest';
import isBooleanNumber from './isBooleanNumber';

describe('isBooleanNumber', () => {
  test('string', () => {
    expect(isBooleanNumber('')).toBe(false);
  });

  test('number', () => {
    expect(isBooleanNumber(0)).toBe(true);
  });

  test('boolean', () => {
    expect(isBooleanNumber(true)).toBe(false);
  });

  test('array', () => {
    expect(isBooleanNumber([])).toBe(false);
  });

  test('date', () => {
    expect(isBooleanNumber(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isBooleanNumber(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isBooleanNumber({})).toBe(false);
  });

  test('null', () => {
    expect(isBooleanNumber(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isBooleanNumber(undefined)).toBe(false);
  });

  test('true', () => {
    expect(isBooleanNumber('true')).toBe(false);
  });

  test('10', () => {
    expect(isBooleanNumber(10)).toBe(false);
  });
});

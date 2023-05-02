import { describe, expect, test } from 'vitest';
import isBooleanString from './isBooleanString';

describe('isBooleanString', () => {
  test('string', () => {
    expect(isBooleanString('')).toBe(false);
  });

  test('number', () => {
    expect(isBooleanString(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isBooleanString(true)).toBe(false);
  });

  test('array', () => {
    expect(isBooleanString([])).toBe(false);
  });

  test('date', () => {
    expect(isBooleanString(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isBooleanString(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isBooleanString({})).toBe(false);
  });

  test('null', () => {
    expect(isBooleanString(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isBooleanString(undefined)).toBe(false);
  });

  test('true', () => {
    expect(isBooleanString('true')).toBe(true);
  });

  test('10', () => {
    expect(isBooleanString(10)).toBe(false);
  });
});

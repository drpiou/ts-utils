import { describe, expect, test } from 'vitest';
import isStringFilled from './isStringFilled';

describe('isStringFilled', () => {
  test('string', () => {
    expect(isStringFilled('')).toBe(false);
  });

  test('number', () => {
    expect(isStringFilled(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isStringFilled(true)).toBe(false);
  });

  test('array', () => {
    expect(isStringFilled([])).toBe(false);
  });

  test('date', () => {
    expect(isStringFilled(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isStringFilled(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isStringFilled({})).toBe(false);
  });

  test('null', () => {
    expect(isStringFilled(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isStringFilled(undefined)).toBe(false);
  });

  test('filled', () => {
    expect(isStringFilled('filled')).toBe(true);
  });
});

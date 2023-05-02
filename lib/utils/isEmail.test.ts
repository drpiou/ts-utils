import { describe, expect, test } from 'vitest';
import isEmail from './isEmail';

describe('isEmail', () => {
  test('string', () => {
    expect(isEmail('')).toBe(false);
  });

  test('number', () => {
    expect(isEmail(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isEmail(true)).toBe(false);
  });

  test('array', () => {
    expect(isEmail([])).toBe(false);
  });

  test('date', () => {
    expect(isEmail(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isEmail(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isEmail({})).toBe(false);
  });

  test('null', () => {
    expect(isEmail(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isEmail(undefined)).toBe(false);
  });

  test('true', () => {
    expect(isEmail('a@a.a')).toBe(true);
  });

  test('false', () => {
    expect(isEmail('a@a')).toBe(false);
  });
});

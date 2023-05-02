import { describe, expect, test } from 'vitest';
import isPhone from './isPhone';

describe('isPhone', () => {
  test('string', () => {
    expect(isPhone('')).toBe(false);
  });

  test('number', () => {
    expect(isPhone(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isPhone(true)).toBe(false);
  });

  test('array', () => {
    expect(isPhone([])).toBe(false);
  });

  test('date', () => {
    expect(isPhone(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isPhone(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isPhone({})).toBe(false);
  });

  test('null', () => {
    expect(isPhone(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isPhone(undefined)).toBe(false);
  });

  test('0', () => {
    expect(isPhone('0789008070')).toBe(true);
  });

  test('+', () => {
    expect(isPhone('+41789008070')).toBe(true);
  });

  test('format', () => {
    expect(isPhone('+1 (615) 243-5172')).toBe(true);
  });

  test('-', () => {
    expect(isPhone('-41789008070')).toBe(false);
  });

  test('/', () => {
    expect(isPhone('+1 (615) 243/5172')).toBe(false);
  });
});

import { describe, expect, test } from 'vitest';
import isNumberValid from './isNumberValid';

describe('isNumberValid', () => {
  test('string', () => {
    expect(isNumberValid('')).toBe(false);
  });

  test('number', () => {
    expect(isNumberValid(0)).toBe(true);
  });

  test('boolean', () => {
    expect(isNumberValid(true)).toBe(false);
  });

  test('array', () => {
    expect(isNumberValid([])).toBe(false);
  });

  test('date', () => {
    expect(isNumberValid(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isNumberValid(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isNumberValid({})).toBe(false);
  });

  test('null', () => {
    expect(isNumberValid(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isNumberValid(undefined)).toBe(false);
  });

  test('NaN', () => {
    expect(isNumberValid(Number('NaN'))).toBe(false);
  });
});

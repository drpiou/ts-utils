import { describe, expect, test } from 'vitest';
import isDateValid from './isDateValid';

describe('isDateValid', () => {
  test('string', () => {
    expect(isDateValid('')).toBe(false);
  });

  test('number', () => {
    expect(isDateValid(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isDateValid(true)).toBe(false);
  });

  test('array', () => {
    expect(isDateValid([])).toBe(false);
  });

  test('date', () => {
    expect(isDateValid(new Date())).toBe(true);
  });

  test('function', () => {
    expect(isDateValid(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isDateValid({})).toBe(false);
  });

  test('null', () => {
    expect(isDateValid(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isDateValid(undefined)).toBe(false);
  });

  test('true', () => {
    expect(isDateValid(new Date('2020-02-22'))).toBe(true);
  });

  test('false', () => {
    expect(isDateValid(new Date('1700-01-01'))).toBe(false);
  });
});

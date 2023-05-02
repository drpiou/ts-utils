import { describe, expect, test } from 'vitest';
import isDate from './isDate';

describe('isDate', () => {
  test('string', () => {
    expect(isDate('')).toBe(false);
  });

  test('number', () => {
    expect(isDate(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isDate(true)).toBe(false);
  });

  test('array', () => {
    expect(isDate([])).toBe(false);
  });

  test('date', () => {
    expect(isDate(new Date())).toBe(true);
  });

  test('function', () => {
    expect(isDate(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isDate({})).toBe(false);
  });

  test('null', () => {
    expect(isDate(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isDate(undefined)).toBe(false);
  });
});

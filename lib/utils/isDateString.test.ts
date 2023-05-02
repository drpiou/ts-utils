import { describe, expect, test } from 'vitest';
import isDateString from './isDateString';

describe('isDateString', () => {
  test('string', () => {
    expect(isDateString('')).toBe(false);
  });

  test('number', () => {
    expect(isDateString(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isDateString(true)).toBe(false);
  });

  test('array', () => {
    expect(isDateString([])).toBe(false);
  });

  test('date', () => {
    expect(isDateString(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isDateString(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isDateString({})).toBe(false);
  });

  test('null', () => {
    expect(isDateString(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isDateString(undefined)).toBe(false);
  });

  test('string:date', () => {
    expect(isDateString('2020-02-22')).toBe(true);
  });

  test('string:zulu', () => {
    expect(isDateString('2020-02-22T00:00:00Z')).toBe(true);
  });

  test('string:zulu:milliseconds', () => {
    expect(isDateString('2020-02-22T00:00:00.000Z')).toBe(true);
  });

  test('string:zulu:milliseconds:offset-', () => {
    expect(isDateString('2020-02-22T00:00:00.000-01:00')).toBe(true);
  });

  test('string:zulu:milliseconds:offset+', () => {
    expect(isDateString('2020-02-22T00:00:00.000+01:00')).toBe(false);
  });
});

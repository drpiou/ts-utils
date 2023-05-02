import { describe, expect, test } from 'vitest';
import isDatable from './isDatable';

describe('isDatable', () => {
  test('string', () => {
    expect(isDatable('')).toBe(false);
  });

  test('number', () => {
    expect(isDatable(0)).toBe(true);
  });

  test('boolean', () => {
    expect(isDatable(true)).toBe(false);
  });

  test('array', () => {
    expect(isDatable([])).toBe(false);
  });

  test('date', () => {
    expect(isDatable(new Date())).toBe(true);
  });

  test('function', () => {
    expect(isDatable(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isDatable({})).toBe(false);
  });

  test('null', () => {
    expect(isDatable(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isDatable(undefined)).toBe(false);
  });

  test('string:date', () => {
    expect(isDatable('2020-02-22')).toBe(true);
  });
});

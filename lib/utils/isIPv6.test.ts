import { describe, expect, test } from 'vitest';
import isIPv6 from './isIPv6';

describe('isIPv6', () => {
  test('string', () => {
    expect(isIPv6('')).toBe(false);
  });

  test('number', () => {
    expect(isIPv6(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isIPv6(true)).toBe(false);
  });

  test('array', () => {
    expect(isIPv6([])).toBe(false);
  });

  test('date', () => {
    expect(isIPv6(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isIPv6(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isIPv6({})).toBe(false);
  });

  test('null', () => {
    expect(isIPv6(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isIPv6(undefined)).toBe(false);
  });

  test('true', () => {
    expect(isIPv6('684D:1111:222:3333:4444:5555:6:77')).toBe(true);
  });

  test('false', () => {
    expect(isIPv6('192.168.0.1')).toBe(false);
  });
});

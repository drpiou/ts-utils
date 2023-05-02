import { describe, expect, test } from 'vitest';
import isIPv4 from './isIPv4';

describe('isIPv4', () => {
  test('string', () => {
    expect(isIPv4('')).toBe(false);
  });

  test('number', () => {
    expect(isIPv4(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isIPv4(true)).toBe(false);
  });

  test('array', () => {
    expect(isIPv4([])).toBe(false);
  });

  test('date', () => {
    expect(isIPv4(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isIPv4(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isIPv4({})).toBe(false);
  });

  test('null', () => {
    expect(isIPv4(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isIPv4(undefined)).toBe(false);
  });

  test('true', () => {
    expect(isIPv4('192.168.0.1')).toBe(true);
  });

  test('false', () => {
    expect(isIPv4('684D:1111:222:3333:4444:5555:6:77')).toBe(false);
  });
});

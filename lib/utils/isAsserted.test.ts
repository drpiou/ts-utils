import { describe, expect, test } from 'vitest';
import isAsserted from './isAsserted';

describe('isAsserted', () => {
  test('string', () => {
    expect(isAsserted('')).toBe(true);
  });

  test('number', () => {
    expect(isAsserted(0)).toBe(true);
  });

  test('boolean', () => {
    expect(isAsserted(true)).toBe(true);
  });

  test('array', () => {
    expect(isAsserted([])).toBe(true);
  });

  test('date', () => {
    expect(isAsserted(new Date())).toBe(true);
  });

  test('function', () => {
    expect(isAsserted(() => undefined)).toBe(true);
  });

  test('object', () => {
    expect(isAsserted({})).toBe(true);
  });

  test('null', () => {
    expect(isAsserted(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isAsserted(undefined)).toBe(false);
  });
});

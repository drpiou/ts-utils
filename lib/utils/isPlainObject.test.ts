import { describe, expect, test } from 'vitest';
import isPlainObject from './isPlainObject';

describe('isPlainObject', () => {
  test('string', () => {
    expect(isPlainObject('')).toBe(false);
  });

  test('number', () => {
    expect(isPlainObject(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isPlainObject(true)).toBe(false);
  });

  test('array', () => {
    expect(isPlainObject([])).toBe(false);
  });

  test('date', () => {
    expect(isPlainObject(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isPlainObject(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isPlainObject({})).toBe(true);
  });

  test('null', () => {
    expect(isPlainObject(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isPlainObject(undefined)).toBe(false);
  });
});

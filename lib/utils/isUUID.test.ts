import { describe, expect, test } from 'vitest';
import isUUID from './isUUID';

describe('isUUID', () => {
  test('string', () => {
    expect(isUUID('')).toBe(false);
  });

  test('number', () => {
    expect(isUUID(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isUUID(true)).toBe(false);
  });

  test('array', () => {
    expect(isUUID([])).toBe(false);
  });

  test('date', () => {
    expect(isUUID(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isUUID(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isUUID({})).toBe(false);
  });

  test('null', () => {
    expect(isUUID(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isUUID(undefined)).toBe(false);
  });

  test('1', () => {
    expect(isUUID('9fd51a62-e87c-11ed-a05b-0242ac120003')).toBe(true);
    expect(isUUID('9fd51a62-e87c-11ed-a05b-0242ac120003', 1)).toBe(true);
    expect(isUUID('9fd51a62-e87c-11ed-a05b-0242ac120003', 4)).toBe(false);
  });

  test('4', () => {
    expect(isUUID('34d57fc1-2cb2-4da0-a383-00fb304f1506')).toBe(true);
    expect(isUUID('34d57fc1-2cb2-4da0-a383-00fb304f1506', 1)).toBe(false);
    expect(isUUID('34d57fc1-2cb2-4da0-a383-00fb304f1506', 4)).toBe(true);
  });
});

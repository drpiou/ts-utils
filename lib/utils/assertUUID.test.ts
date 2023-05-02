import { describe, expect, test } from 'vitest';
import assertUUID from './assertUUID';
import { assertsMessage } from './asserts';

describe('assertUUID', () => {
  test('string', () => {
    expect(() => assertUUID('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertUUID(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertUUID(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertUUID([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertUUID(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertUUID(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertUUID({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertUUID(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertUUID(undefined)).toThrowError(assertsMessage);
  });

  test('1', () => {
    expect(() => assertUUID('9fd51a62-e87c-11ed-a05b-0242ac120003')).not.toThrowError(assertsMessage);
    expect(() => assertUUID('9fd51a62-e87c-11ed-a05b-0242ac120003', 1)).not.toThrowError(assertsMessage);
    expect(() => assertUUID('9fd51a62-e87c-11ed-a05b-0242ac120003', 4)).toThrowError(assertsMessage);
  });

  test('4', () => {
    expect(() => assertUUID('34d57fc1-2cb2-4da0-a383-00fb304f1506')).not.toThrowError(assertsMessage);
    expect(() => assertUUID('34d57fc1-2cb2-4da0-a383-00fb304f1506', 1)).toThrowError(assertsMessage);
    expect(() => assertUUID('34d57fc1-2cb2-4da0-a383-00fb304f1506', 4)).not.toThrowError(assertsMessage);
  });
});

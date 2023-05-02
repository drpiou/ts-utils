import { describe, expect, test } from 'vitest';
import assertString from './assertString';
import { assertsMessage } from './asserts';

describe('assertString', () => {
  test('string', () => {
    expect(() => assertString('')).not.toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertString(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertString(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertString([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertString(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertString(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertString({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertString(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertString(undefined)).toThrowError(assertsMessage);
  });
});

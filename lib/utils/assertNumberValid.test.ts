import { describe, expect, test } from 'vitest';
import assertNumberValid from './assertNumberValid';
import { assertsMessage } from './asserts';

describe('assertNumberValid', () => {
  test('string', () => {
    expect(() => assertNumberValid('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertNumberValid(0)).not.toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertNumberValid(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertNumberValid([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertNumberValid(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertNumberValid(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertNumberValid({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertNumberValid(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertNumberValid(undefined)).toThrowError(assertsMessage);
  });

  test('NaN', () => {
    expect(() => assertNumberValid(Number('NaN'))).toThrowError(assertsMessage);
  });
});

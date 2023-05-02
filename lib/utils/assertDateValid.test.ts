import { describe, expect, test } from 'vitest';
import assertDateValid from './assertDateValid';
import { assertsMessage } from './asserts';

describe('assertDateValid', () => {
  test('string', () => {
    expect(() => assertDateValid('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertDateValid(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertDateValid(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertDateValid([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertDateValid(new Date())).not.toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertDateValid(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertDateValid({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertDateValid(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertDateValid(undefined)).toThrowError(assertsMessage);
  });

  test('true', () => {
    expect(() => assertDateValid(new Date('2020-02-22'))).not.toThrowError(assertsMessage);
  });

  test('false', () => {
    expect(() => assertDateValid(new Date('1700-01-01'))).toThrowError(assertsMessage);
  });
});

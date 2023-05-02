import { describe, expect, test } from 'vitest';
import assertEmail from './assertEmail';
import { assertsMessage } from './asserts';

describe('assertEmail', () => {
  test('string', () => {
    expect(() => assertEmail('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertEmail(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertEmail(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertEmail([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertEmail(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertEmail(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertEmail({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertEmail(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertEmail(undefined)).toThrowError(assertsMessage);
  });

  test('true', () => {
    expect(() => assertEmail('a@a.a')).not.toThrowError(assertsMessage);
  });

  test('false', () => {
    expect(() => assertEmail('a@a')).toThrowError(assertsMessage);
  });
});

import { describe, expect, test } from 'vitest';
import assertPhone from './assertPhone';
import { assertsMessage } from './asserts';

describe('assertPhone', () => {
  test('string', () => {
    expect(() => assertPhone('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertPhone(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertPhone(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertPhone([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertPhone(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertPhone(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertPhone({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertPhone(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertPhone(undefined)).toThrowError(assertsMessage);
  });

  test('+', () => {
    expect(() => assertPhone('+16152435172')).not.toThrowError(assertsMessage);
  });

  test('format', () => {
    expect(() => assertPhone('+1 (615) 243-5172')).not.toThrowError(assertsMessage);
  });

  test('-', () => {
    expect(() => assertPhone('-16152435172')).toThrowError(assertsMessage);
  });

  test('/', () => {
    expect(() => assertPhone('+1 (615) 243/5172')).toThrowError(assertsMessage);
  });
});

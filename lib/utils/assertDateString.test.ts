import { describe, expect, test } from 'vitest';
import assertDateString from './assertDateString';
import { assertsMessage } from './asserts';

describe('assertDateString', () => {
  test('string', () => {
    expect(() => assertDateString('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertDateString(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertDateString(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertDateString([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertDateString(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertDateString(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertDateString({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertDateString(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertDateString(undefined)).toThrowError(assertsMessage);
  });

  test('string:date', () => {
    expect(() => assertDateString('2020-02-22')).not.toThrowError(assertsMessage);
  });

  test('string:zulu', () => {
    expect(() => assertDateString('2020-02-22T00:00:00Z')).not.toThrowError(assertsMessage);
  });

  test('string:zulu:milliseconds', () => {
    expect(() => assertDateString('2020-02-22T00:00:00.000Z')).not.toThrowError(assertsMessage);
  });

  test('string:zulu:milliseconds:offset-', () => {
    expect(() => assertDateString('2020-02-22T00:00:00.000-01:00')).not.toThrowError(assertsMessage);
  });

  test('string:zulu:milliseconds:offset+', () => {
    expect(() => assertDateString('2020-02-22T00:00:00.000+01:00')).toThrowError(assertsMessage);
  });
});

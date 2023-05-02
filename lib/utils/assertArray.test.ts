import { describe, expect, test } from 'vitest';
import assertArray from './assertArray';
import { assertsMessage } from './asserts';

describe('assertArray', () => {
  test('string', () => {
    expect(() => assertArray('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertArray(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertArray(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertArray([])).not.toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertArray(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertArray(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertArray({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertArray(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertArray(undefined)).toThrowError(assertsMessage);
  });
});

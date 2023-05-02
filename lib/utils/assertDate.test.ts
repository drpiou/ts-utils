import { describe, expect, test } from 'vitest';
import assertDate from './assertDate';
import { assertsMessage } from './asserts';

describe('assertDate', () => {
  test('string', () => {
    expect(() => assertDate('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertDate(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertDate(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertDate([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertDate(new Date())).not.toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertDate(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertDate({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertDate(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertDate(undefined)).toThrowError(assertsMessage);
  });
});

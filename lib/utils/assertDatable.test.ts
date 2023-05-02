import { describe, expect, test } from 'vitest';
import assertDatable from './assertDatable';
import { assertsMessage } from './asserts';

describe('assertDatable', () => {
  test('string', () => {
    expect(() => assertDatable('')).not.toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertDatable(0)).not.toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertDatable(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertDatable([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertDatable(new Date())).not.toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertDatable(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertDatable({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertDatable(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertDatable(undefined)).toThrowError(assertsMessage);
  });
});

import { describe, expect, test } from 'vitest';
import asserted from './asserted';
import { assertsMessage } from './asserts';

describe('asserted', () => {
  test('string', () => {
    expect(() => asserted('')).not.toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => asserted(0)).not.toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => asserted(true)).not.toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => asserted([])).not.toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => asserted(new Date())).not.toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => asserted(() => undefined)).not.toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => asserted({})).not.toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => asserted(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => asserted(undefined)).toThrowError(assertsMessage);
  });
});

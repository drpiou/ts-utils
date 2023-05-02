import { describe, expect, test } from 'vitest';
import assertUrl from './assertUrl';
import { assertsMessage } from './asserts';

describe('assertUrl', () => {
  test('string', () => {
    expect(() => assertUrl('')).toThrowError(assertsMessage);
  });

  test('number', () => {
    expect(() => assertUrl(0)).toThrowError(assertsMessage);
  });

  test('boolean', () => {
    expect(() => assertUrl(true)).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertUrl([])).toThrowError(assertsMessage);
  });

  test('date', () => {
    expect(() => assertUrl(new Date())).toThrowError(assertsMessage);
  });

  test('function', () => {
    expect(() => assertUrl(() => undefined)).toThrowError(assertsMessage);
  });

  test('object', () => {
    expect(() => assertUrl({})).toThrowError(assertsMessage);
  });

  test('null', () => {
    expect(() => assertUrl(null)).toThrowError(assertsMessage);
  });

  test('undefined', () => {
    expect(() => assertUrl(undefined)).toThrowError(assertsMessage);
  });

  test('true', () => {
    expect(() => assertUrl('idk.io')).not.toThrowError(assertsMessage);
    expect(() => assertUrl('https://idk.io')).not.toThrowError(assertsMessage);
    expect(() => assertUrl('view-source://idk.io')).not.toThrowError(assertsMessage);
    expect(() => assertUrl('ut2004://idk.io')).not.toThrowError(assertsMessage);
    expect(() => assertUrl('web+a://idk.io')).not.toThrowError(assertsMessage);
  });

  test('false', () => {
    expect(() => assertUrl('idk')).toThrowError(assertsMessage);
    expect(() => assertUrl('.io')).toThrowError(assertsMessage);
    expect(() => assertUrl('://idk.io')).toThrowError(assertsMessage);
    expect(() => assertUrl('view_source://idk.io')).toThrowError(assertsMessage);
  });

  test('https', () => {
    expect(() => assertUrl('idk.io', 'https')).toThrowError(assertsMessage);
    expect(() => assertUrl('https://idk.io', 'https')).not.toThrowError(assertsMessage);
    expect(() => assertUrl('view-source://idk.io', 'https')).toThrowError(assertsMessage);
    expect(() => assertUrl('ut2004://idk.io', 'https')).toThrowError(assertsMessage);
    expect(() => assertUrl('web+a://idk.io', 'https')).toThrowError(assertsMessage);
  });

  test('array', () => {
    expect(() => assertUrl('idk.io', ['https', 'view-source'])).toThrowError(assertsMessage);
    expect(() => assertUrl('https://idk.io', ['https', 'view-source'])).not.toThrowError(assertsMessage);
    expect(() => assertUrl('view-source://idk.io', ['https', 'view-source'])).not.toThrowError(assertsMessage);
    expect(() => assertUrl('ut2004://idk.io', ['https', 'view-source'])).toThrowError(assertsMessage);
    expect(() => assertUrl('web+a://idk.io', ['https', 'view-source'])).toThrowError(assertsMessage);
  });
});

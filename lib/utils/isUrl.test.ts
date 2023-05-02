import { describe, expect, test } from 'vitest';
import isUrl from './isUrl';

describe('isUrl', () => {
  test('string', () => {
    expect(isUrl('')).toBe(false);
  });

  test('number', () => {
    expect(isUrl(0)).toBe(false);
  });

  test('boolean', () => {
    expect(isUrl(true)).toBe(false);
  });

  test('array', () => {
    expect(isUrl([])).toBe(false);
  });

  test('date', () => {
    expect(isUrl(new Date())).toBe(false);
  });

  test('function', () => {
    expect(isUrl(() => undefined)).toBe(false);
  });

  test('object', () => {
    expect(isUrl({})).toBe(false);
  });

  test('null', () => {
    expect(isUrl(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isUrl(undefined)).toBe(false);
  });

  test('true', () => {
    expect(isUrl('idk.io')).toBe(true);
    expect(isUrl('https://idk.io')).toBe(true);
    expect(isUrl('view-source://idk.io')).toBe(true);
    expect(isUrl('ut2004://idk.io')).toBe(true);
    expect(isUrl('web+a://idk.io')).toBe(true);
  });

  test('false', () => {
    expect(isUrl('idk')).toBe(false);
    expect(isUrl('.io')).toBe(false);
    expect(isUrl('://idk.io')).toBe(false);
    expect(isUrl('view_source://idk.io')).toBe(false);
  });

  test('https', () => {
    expect(isUrl('idk.io', 'https')).toBe(false);
    expect(isUrl('https://idk.io', 'https')).toBe(true);
    expect(isUrl('view-source://idk.io', 'https')).toBe(false);
    expect(isUrl('ut2004://idk.io', 'https')).toBe(false);
    expect(isUrl('web+a://idk.io', 'https')).toBe(false);
  });

  test('array', () => {
    expect(isUrl('idk.io', ['https', 'view-source'])).toBe(false);
    expect(isUrl('https://idk.io', ['https', 'view-source'])).toBe(true);
    expect(isUrl('view-source://idk.io', ['https', 'view-source'])).toBe(true);
    expect(isUrl('ut2004://idk.io', ['https', 'view-source'])).toBe(false);
    expect(isUrl('web+a://idk.io', ['https', 'view-source'])).toBe(false);
  });
});

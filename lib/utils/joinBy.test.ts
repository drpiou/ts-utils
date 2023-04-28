import { describe, expect, test } from 'vitest';
import joinBy from './joinBy';

describe('joinBy', () => {
  const source = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];
  const sourceSmall = [{ a: 'a' }, { a: 'b' }];

  test('empty', () => {
    const result = joinBy(source, 'a');

    expect(result).toBe('ab12');
  });

  test('separator', () => {
    const result = joinBy(source, 'a', '_');

    expect(result).toBe('a_b_1_2');
  });

  test('separator:first', () => {
    const result = joinBy(source, 'a', '_', { first: '-' });

    expect(result).toBe('a-b_1_2');
  });

  test('separator:last', () => {
    const result = joinBy(source, 'a', '_', { last: '.' });

    expect(result).toBe('a_b_1.2');
  });

  test('separator:first:last', () => {
    const result = joinBy(source, 'a', '_', { first: '-', last: '.' });

    expect(result).toBe('a-b_1.2');
  });

  test('undefined:first', () => {
    const result = joinBy(source, 'a', undefined, { first: '-' });

    expect(result).toBe('a-b12');
  });

  test('undefined:last', () => {
    const result = joinBy(source, 'a', undefined, { last: '.' });

    expect(result).toBe('ab1.2');
  });

  test('undefined:first:last', () => {
    const result = joinBy(source, 'a', undefined, { first: '-', last: '.' });

    expect(result).toBe('a-b1.2');
  });

  test('small:empty', () => {
    const result = joinBy(sourceSmall, 'a');

    expect(result).toBe('ab');
  });

  test('small:separator', () => {
    const result = joinBy(sourceSmall, 'a', '_');

    expect(result).toBe('a_b');
  });

  test('small:separator:first', () => {
    const result = joinBy(sourceSmall, 'a', '_', { first: '-' });

    expect(result).toBe('a-b');
  });

  test('small:separator:last', () => {
    const result = joinBy(sourceSmall, 'a', '_', { last: '.' });

    expect(result).toBe('a.b');
  });

  test('small:separator:first:last', () => {
    const result = joinBy(sourceSmall, 'a', '_', { first: '-', last: '.' });

    expect(result).toBe('a-b');
  });

  test('small:undefined:first', () => {
    const result = joinBy(sourceSmall, 'a', undefined, { first: '-' });

    expect(result).toBe('a-b');
  });

  test('small:undefined:last', () => {
    const result = joinBy(sourceSmall, 'a', undefined, { last: '.' });

    expect(result).toBe('a.b');
  });

  test('small:undefined:first:last', () => {
    const result = joinBy(sourceSmall, 'a', undefined, { first: '-', last: '.' });

    expect(result).toBe('a-b');
  });
});

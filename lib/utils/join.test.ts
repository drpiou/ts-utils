import { describe, expect, test } from 'vitest';
import join from './join';

describe('join', () => {
  const source = ['a', 'b', '1', '2'];
  const sourceSmall = ['a', 'b'];

  test('empty', () => {
    const result = join(source);

    expect(result).toBe('ab12');
  });

  test('separator', () => {
    const result = join(source, '_');

    expect(result).toBe('a_b_1_2');
  });

  test('separator:first', () => {
    const result = join(source, '_', { first: '-' });

    expect(result).toBe('a-b_1_2');
  });

  test('separator:last', () => {
    const result = join(source, '_', { last: '.' });

    expect(result).toBe('a_b_1.2');
  });

  test('separator:first:last', () => {
    const result = join(source, '_', { first: '-', last: '.' });

    expect(result).toBe('a-b_1.2');
  });

  test('undefined:first', () => {
    const result = join(source, undefined, { first: '-' });

    expect(result).toBe('a-b12');
  });

  test('undefined:last', () => {
    const result = join(source, undefined, { last: '.' });

    expect(result).toBe('ab1.2');
  });

  test('undefined:first:last', () => {
    const result = join(source, undefined, { first: '-', last: '.' });

    expect(result).toBe('a-b1.2');
  });

  test('small:empty', () => {
    const result = join(sourceSmall);

    expect(result).toBe('ab');
  });

  test('small:separator', () => {
    const result = join(sourceSmall, '_');

    expect(result).toBe('a_b');
  });

  test('small:separator:first', () => {
    const result = join(sourceSmall, '_', { first: '-' });

    expect(result).toBe('a-b');
  });

  test('small:separator:last', () => {
    const result = join(sourceSmall, '_', { last: '.' });

    expect(result).toBe('a.b');
  });

  test('small:separator:first:last', () => {
    const result = join(sourceSmall, '_', { first: '-', last: '.' });

    expect(result).toBe('a-b');
  });

  test('small:undefined:first', () => {
    const result = join(sourceSmall, undefined, { first: '-' });

    expect(result).toBe('a-b');
  });

  test('small:undefined:last', () => {
    const result = join(sourceSmall, undefined, { last: '.' });

    expect(result).toBe('a.b');
  });

  test('small:undefined:first:last', () => {
    const result = join(sourceSmall, undefined, { first: '-', last: '.' });

    expect(result).toBe('a-b');
  });
});

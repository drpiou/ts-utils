import { describe, expect, test } from 'vitest';
import join from './join';

describe('join', () => {
  const source = ['a', 'b', '1', '2'];
  const sourceTwo = ['a', 'b'];
  const sourceOne = ['a'];

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

  test('two:empty', () => {
    const result = join(sourceTwo);

    expect(result).toBe('ab');
  });

  test('two:separator', () => {
    const result = join(sourceTwo, '_');

    expect(result).toBe('a_b');
  });

  test('two:separator:first', () => {
    const result = join(sourceTwo, '_', { first: '-' });

    expect(result).toBe('a-b');
  });

  test('two:separator:last', () => {
    const result = join(sourceTwo, '_', { last: '.' });

    expect(result).toBe('a.b');
  });

  test('two:separator:first:last', () => {
    const result = join(sourceTwo, '_', { first: '-', last: '.' });

    expect(result).toBe('a-b');
  });

  test('two:undefined:first', () => {
    const result = join(sourceTwo, undefined, { first: '-' });

    expect(result).toBe('a-b');
  });

  test('two:undefined:last', () => {
    const result = join(sourceTwo, undefined, { last: '.' });

    expect(result).toBe('a.b');
  });

  test('two:undefined:first:last', () => {
    const result = join(sourceTwo, undefined, { first: '-', last: '.' });

    expect(result).toBe('a-b');
  });

  test('one:empty', () => {
    const result = join(sourceOne);

    expect(result).toBe('a');
  });

  test('one:separator', () => {
    const result = join(sourceOne, '_');

    expect(result).toBe('a');
  });

  test('one:separator:first', () => {
    const result = join(sourceOne, '_', { first: '-' });

    expect(result).toBe('a');
  });

  test('one:separator:last', () => {
    const result = join(sourceOne, '_', { last: '.' });

    expect(result).toBe('a');
  });

  test('one:separator:first:last', () => {
    const result = join(sourceOne, '_', { first: '-', last: '.' });

    expect(result).toBe('a');
  });

  test('one:undefined:first', () => {
    const result = join(sourceOne, undefined, { first: '-' });

    expect(result).toBe('a');
  });

  test('one:undefined:last', () => {
    const result = join(sourceOne, undefined, { last: '.' });

    expect(result).toBe('a');
  });

  test('one:undefined:first:last', () => {
    const result = join(sourceOne, undefined, { first: '-', last: '.' });

    expect(result).toBe('a');
  });

  test('zero:empty', () => {
    const result = join([]);

    expect(result).toBe('');
  });

  test('zero:separator', () => {
    const result = join([], '_');

    expect(result).toBe('');
  });

  test('zero:separator:first', () => {
    const result = join([], '_', { first: '-' });

    expect(result).toBe('');
  });

  test('zero:separator:last', () => {
    const result = join([], '_', { last: '.' });

    expect(result).toBe('');
  });

  test('zero:separator:first:last', () => {
    const result = join([], '_', { first: '-', last: '.' });

    expect(result).toBe('');
  });

  test('zero:undefined:first', () => {
    const result = join([], undefined, { first: '-' });

    expect(result).toBe('');
  });

  test('zero:undefined:last', () => {
    const result = join([], undefined, { last: '.' });

    expect(result).toBe('');
  });

  test('zero:undefined:first:last', () => {
    const result = join([], undefined, { first: '-', last: '.' });

    expect(result).toBe('');
  });
});

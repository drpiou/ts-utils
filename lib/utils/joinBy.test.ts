import { describe, expect, test } from 'vitest';
import joinBy from './joinBy';

describe('joinBy', () => {
  const source = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];
  const sourceTwo = [{ a: 'a' }, { a: 'b' }];
  const sourceOne = [{ a: 'a' }];

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

  test('two:empty', () => {
    const result = joinBy(sourceTwo, 'a');

    expect(result).toBe('ab');
  });

  test('two:separator', () => {
    const result = joinBy(sourceTwo, 'a', '_');

    expect(result).toBe('a_b');
  });

  test('two:separator:first', () => {
    const result = joinBy(sourceTwo, 'a', '_', { first: '-' });

    expect(result).toBe('a-b');
  });

  test('two:separator:last', () => {
    const result = joinBy(sourceTwo, 'a', '_', { last: '.' });

    expect(result).toBe('a.b');
  });

  test('two:separator:first:last', () => {
    const result = joinBy(sourceTwo, 'a', '_', { first: '-', last: '.' });

    expect(result).toBe('a-b');
  });

  test('two:undefined:first', () => {
    const result = joinBy(sourceTwo, 'a', undefined, { first: '-' });

    expect(result).toBe('a-b');
  });

  test('two:undefined:last', () => {
    const result = joinBy(sourceTwo, 'a', undefined, { last: '.' });

    expect(result).toBe('a.b');
  });

  test('two:undefined:first:last', () => {
    const result = joinBy(sourceTwo, 'a', undefined, { first: '-', last: '.' });

    expect(result).toBe('a-b');
  });

  test('one:empty', () => {
    const result = joinBy(sourceOne, 'a');

    expect(result).toBe('a');
  });

  test('one:separator', () => {
    const result = joinBy(sourceOne, 'a', '_');

    expect(result).toBe('a');
  });

  test('one:separator:first', () => {
    const result = joinBy(sourceOne, 'a', '_', { first: '-' });

    expect(result).toBe('a');
  });

  test('one:separator:last', () => {
    const result = joinBy(sourceOne, 'a', '_', { last: '.' });

    expect(result).toBe('a');
  });

  test('one:separator:first:last', () => {
    const result = joinBy(sourceOne, 'a', '_', { first: '-', last: '.' });

    expect(result).toBe('a');
  });

  test('one:undefined:first', () => {
    const result = joinBy(sourceOne, 'a', undefined, { first: '-' });

    expect(result).toBe('a');
  });

  test('one:undefined:last', () => {
    const result = joinBy(sourceOne, 'a', undefined, { last: '.' });

    expect(result).toBe('a');
  });

  test('one:undefined:first:last', () => {
    const result = joinBy(sourceOne, 'a', undefined, { first: '-', last: '.' });

    expect(result).toBe('a');
  });

  test('zero:empty', () => {
    const result = joinBy([], 'a');

    expect(result).toBe('');
  });

  test('zero:separator', () => {
    const result = joinBy([], 'a', '_');

    expect(result).toBe('');
  });

  test('zero:separator:first', () => {
    const result = joinBy([], 'a', '_', { first: '-' });

    expect(result).toBe('');
  });

  test('zero:separator:last', () => {
    const result = joinBy([], 'a', '_', { last: '.' });

    expect(result).toBe('');
  });

  test('zero:separator:first:last', () => {
    const result = joinBy([], 'a', '_', { first: '-', last: '.' });

    expect(result).toBe('');
  });

  test('zero:undefined:first', () => {
    const result = joinBy([], 'a', undefined, { first: '-' });

    expect(result).toBe('');
  });

  test('zero:undefined:last', () => {
    const result = joinBy([], 'a', undefined, { last: '.' });

    expect(result).toBe('');
  });

  test('zero:undefined:first:last', () => {
    const result = joinBy([], 'a', undefined, { first: '-', last: '.' });

    expect(result).toBe('');
  });
});

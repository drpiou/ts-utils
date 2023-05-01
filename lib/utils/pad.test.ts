import { describe, expect, test } from 'vitest';
import pad from './pad';

describe('pad', () => {
  const source = ['a', 'b'];

  test('right', () => {
    const result = pad(source, 6, 0);

    expect(result).toEqual(['a', 'b', 0, 0, 0, 0]);
  });

  test('left', () => {
    const result = pad(source, -6, 0);

    expect(result).toEqual([0, 0, 0, 0, 'a', 'b']);
  });

  test('zero', () => {
    const result = pad(source, 0, 0);

    expect(result).toEqual(['a', 'b']);
  });

  test('less', () => {
    const result = pad(source, 1, 0);

    expect(result).toEqual(['a', 'b']);
  });
});

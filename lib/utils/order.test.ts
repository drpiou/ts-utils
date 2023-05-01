import { describe, expect, test } from 'vitest';
import order from './order';

describe('order', () => {
  const source = ['b', 1, 'a', 3, 2];

  test('default', () => {
    const result = order(source);

    expect(result).toEqual([1, 2, 3, 'a', 'b']);
  });

  test('true', () => {
    const result = order(source, true);

    expect(result).toEqual(['b', 'a', 3, 2, 1]);
  });

  test('false', () => {
    const result = order(source, false);

    expect(result).toEqual([1, 2, 3, 'a', 'b']);
  });
});

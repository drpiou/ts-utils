import { describe, expect, test } from 'vitest';
import orderBy from './orderBy';

describe('orderBy', () => {
  const source = [{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }];

  test('default', () => {
    const result = orderBy(source, 'a');

    expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]);
  });

  test('function', () => {
    const result = orderBy(source, (item) => {
      return String(item.a);
    });

    expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]);
  });

  test('true', () => {
    const result = orderBy(source, 'a', true);

    expect(result).toEqual([{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }]);
  });

  test('false', () => {
    const result = orderBy(source, 'a', false);

    expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]);
  });
});

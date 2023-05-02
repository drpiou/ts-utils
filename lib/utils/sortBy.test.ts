import { describe, expect, test } from 'vitest';
import sortBy from './sortBy';
import clone from './clone';

describe('sortBy', () => {
  const original = [{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }];

  test('default', () => {
    const source = clone(original);
    const result = sortBy(source, 'a');

    expect(source).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]);
    expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]);
  });

  test('function', () => {
    const source = clone(original);
    const result = sortBy(source, (item) => {
      return String(item.a);
    });

    expect(source).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]);
    expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]);
  });

  test('true', () => {
    const source = clone(original);
    const result = sortBy(source, 'a', true);

    expect(source).toEqual([{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }]);
    expect(result).toEqual([{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }]);
  });

  test('false', () => {
    const source = clone(original);
    const result = sortBy(source, 'a', false);

    expect(source).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]);
    expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]);
  });
});

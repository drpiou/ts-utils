import { expect, test } from 'vitest';
import filter from './filter';

test('filter', () => {
  const source = ['a', 'b', 1, null, undefined];

  const resultValue = filter(source, (value, _index, reject) => {
    return typeof value === 'number' ? reject() : value;
  });

  expect(resultValue).toEqual(['a', 'b', null, undefined]);

  const resultIndex = filter(source, (value, index, reject) => {
    return index === 2 ? reject() : value;
  });

  expect(resultIndex).toEqual(['a', 'b', null, undefined]);
});

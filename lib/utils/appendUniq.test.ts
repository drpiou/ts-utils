import { expect, test } from 'vitest';
import appendUniq from './appendUniq';

test('appendUniq', () => {
  const source = ['a', 'b', 1];

  const result = appendUniq(source, ...source, true, [5]);

  expect(result).toEqual(['a', 'b', 1, true, [5]]);
});

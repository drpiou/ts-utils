import { expect, test } from 'vitest';
import unshiftUniq from './unshiftUniq';

test('unshiftUniq', () => {
  const source = ['a', 'b'];

  const result = unshiftUniq(source, ...source, 'z');

  expect(result).toEqual(['z', 'a', 'b']);
});

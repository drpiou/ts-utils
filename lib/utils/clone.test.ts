import { expect, test } from 'vitest';
import clone from './clone';

test('clone', () => {
  const source = ['a', 'b', 1, ['c', 2]];

  const result = clone(source);
  const resultDeep = clone(source, true);

  source.push('source');

  expect(source).toEqual(['a', 'b', 1, ['c', 2], 'source']);

  (source[3] as any[]).push('source');

  expect(source).toEqual(['a', 'b', 1, ['c', 2, 'source'], 'source']);

  result.push('result');

  expect(result).toEqual(['a', 'b', 1, ['c', 2, 'source'], 'result']);

  resultDeep.push('resultDeep');

  expect(resultDeep).toEqual(['a', 'b', 1, ['c', 2], 'resultDeep']);

  (resultDeep[3] as any[]).push('resultDeep');

  expect(resultDeep).toEqual(['a', 'b', 1, ['c', 2, 'resultDeep'], 'resultDeep']);
});

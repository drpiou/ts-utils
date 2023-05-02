import { describe, expect, test } from 'vitest';
import asserts from './asserts';
import { assertsMessage } from './asserts';

describe('asserts', () => {
  test('match', () => {
    expect(() => asserts('' === '')).not.toThrowError(assertsMessage);
  });

  test('throw', () => {
    expect(() => asserts((0 as unknown) === '')).toThrowError(assertsMessage);
  });
});

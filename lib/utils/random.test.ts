import { describe, expect, test } from 'vitest';
import random from './random';

describe('random', () => {
  const source = ['a', 'b', 1];

  test('default', () => {
    const result = random(source);

    expect(result.length).toBe(1);
  });

  test('less', () => {
    const result = random(source, 2);

    expect(result.length).toBe(2);
  });

  test('more', () => {
    const result = random(source, 4);

    expect(result.length).toBe(4);
  });

  test('unique', () => {
    const result = random(source, 4, true);

    expect(result.length).toBe(3);
  });
});

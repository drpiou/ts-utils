/* eslint-disable @typescript-eslint/no-unused-vars */

import { describe, expectTypeOf, test } from 'vitest';
import { ChunkPredicate } from './chunkWhile';

describe('types', () => {
  test('ChunkClosure', () => {
    const match = <T extends ChunkPredicate<any>>(t: T): T => t;

    const resultItem: ChunkPredicate<number> = (_a, _b, _c) => true;
    match(resultItem);

    expectTypeOf(resultItem).parameter(0).toBeNumber();
    expectTypeOf(resultItem).parameter(1).toBeNumber();
    expectTypeOf(resultItem).parameter(2).toBeArray();
    expectTypeOf(resultItem).parameter(2).items.toBeNumber();
    expectTypeOf(resultItem).returns.toBeBoolean();

    // @ts-expect-error is not a string
    expectTypeOf(resultItem).parameter(0).toBeString();
    // @ts-expect-error is not a string
    expectTypeOf(resultItem).parameter(1).toBeString();
    // @ts-expect-error is not a string
    expectTypeOf(resultItem).parameter(2).toBeString();
    // @ts-expect-error is not a string
    expectTypeOf(resultItem).parameter(2).items.toBeString();
    // @ts-expect-error is not a string
    expectTypeOf(resultItem).returns.toBeString();
  });
});

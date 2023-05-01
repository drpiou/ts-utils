/* eslint-disable @typescript-eslint/no-unused-vars */

import { describe, expectTypeOf, test } from 'vitest';
import { ContainsPredicate } from './contains';

describe('types', () => {
  test('ContainsClosure', () => {
    const match = <T extends ContainsPredicate<any>>(t: T): T => t;

    const resultItem: ContainsPredicate<number> = (_a, _b) => true;
    match(resultItem);

    expectTypeOf(resultItem).parameter(0).toBeNumber();
    expectTypeOf(resultItem).parameter(1).toBeNumber();
    expectTypeOf(resultItem).returns.toBeBoolean();

    // @ts-expect-error is not a string
    expectTypeOf(resultItem).parameter(0).toBeString();
    // @ts-expect-error is not a string
    expectTypeOf(resultItem).parameter(1).toBeString();
    // @ts-expect-error is not a string
    expectTypeOf(resultItem).returns.toBeString();
  });
});

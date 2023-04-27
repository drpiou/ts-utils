/* eslint-disable @typescript-eslint/no-unused-vars */

import { describe, expectTypeOf, test } from 'vitest';
import { EveryClosure } from './every';

describe('types', () => {
  test('EveryClosure', () => {
    const match = <T extends EveryClosure<any>>(t: T): T => t;

    const resultItem: EveryClosure<number> = (_a, _b) => true;
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

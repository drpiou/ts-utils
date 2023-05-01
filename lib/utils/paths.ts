import isPlainObject from 'lodash/isPlainObject';
import { Path, PathFinite } from '../types/path';

/**
 * Return all the paths in dot notation of the source object.
 *
 * @param source Source object.
 * @param finite Pick finite path.
 * @param prefix Prefix string.
 * @returns Array
 */
export default function paths<
  Source extends Record<string, any>,
  Finite extends boolean = false,
  Result = Finite extends true ? PathFinite<Source> : Path<Source>,
>(source: Source, finite?: Finite, prefix?: string): (Result | string)[] {
  const result: string[] = [];

  const sourceEntries = Object.entries(source);

  const count = sourceEntries.length;

  let index = 0;

  while (index < count) {
    const key = sourceEntries[index][0];
    const value: unknown = sourceEntries[index][1];
    const valueIsObject = isPlainObject(value);

    const path = prefix ? [prefix, key].join('.') : key;

    if (!valueIsObject || !finite) {
      result.push(path);
    }

    if (valueIsObject) {
      result.push(...paths(value as NonNullable<unknown>, finite, path));
    }

    index++;
  }

  return result as never;
}

const test = { a: 1, b: { c: 1, d: { e: 1 } } };

const test_paths_0 = paths(test);
const test_paths_1 = paths(test, true);
const test_paths_2 = paths(test, false);

if (test_paths_0.includes('')) {
  //
}
if (test_paths_1.includes('')) {
  //
}
if (test_paths_2.includes('')) {
  //
}

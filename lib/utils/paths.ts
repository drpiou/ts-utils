import isPlainObject from 'lodash/isPlainObject';
import { Path } from '../types/generic';

/**
 * Return all the paths in dot notation of the source object.
 *
 * @param source Source object.
 * @param parent Parent key.
 * @returns Array
 */
const paths = <S extends object>(source: S, parent = ''): Path<S>[] => {
  const result: string[] = [];

  const sourceEntries = Object.entries(source);

  const c = sourceEntries.length;

  let i = 0;

  while (i < c) {
    const key = sourceEntries[i][0];
    const value = sourceEntries[i][1];

    const path = parent ? [parent, key].join('.') : key;

    result.push(path);

    if (value && isPlainObject(value)) {
      result.push(...paths(value as unknown as object, path));
    }

    i++;
  }

  return result as never;
};

export default paths;

import { BooleanClosure } from '../types/collection';

/**
 * Verify that all items pass a given truth test in the source array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns boolean
 */
const every = <S>(source: S[], closure: BooleanClosure<S>): boolean => {
  const c = source.length;

  let i = 0;

  while (i < c) {
    if (!closure(source[i], i)) {
      return false;
    }

    i++;
  }

  return true;
};

export default every;

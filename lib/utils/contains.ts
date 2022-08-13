import { BooleanClosure } from '../types/collection';

/**
 * Return whether the given item exists in the source array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns boolean
 */
const contains = <S>(source: S[], closure: BooleanClosure<S>): boolean => {
  const c = source.length;

  let i = 0;

  while (i < c) {
    if (closure(source[i], i)) {
      return true;
    }

    i++;
  }

  return false;
};

export default contains;

import { BooleanClosure } from '../types/collection';

/**
 * Return the last item that passes a given truth test in the source array.
 *
 * This function returns the last item.
 * To mutate the source array, use the "Array.pop" method.
 *
 * For the inverse, see the "first" function.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns any
 */
const last = <S>(source: S[], closure?: BooleanClosure<S>): S | undefined => {
  const c = source.length;
  const ci = c - 1;

  if (!closure) {
    return source[ci];
  }

  let i = 0;

  while (i < c) {
    const item = source[ci - i];

    if (closure(item, i)) {
      return item;
    }

    i++;
  }
};

export default last;

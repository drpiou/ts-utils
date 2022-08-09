import clone from './clone';

/**
 * Add the given items to the beginning of the source array.
 *
 * This function returns a new array.
 * To mutate the source array, use the "Array.unshift" method.
 *
 * For the inverse, see the "append" function.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Array
 */
const prepend = <S>(source: S[], ...items: S[]): S[] => {
  const result = clone(source);

  result.unshift(...items);

  return result;
};

export default prepend;

/**
 * Return the indexes of the source array.
 *
 * @param source Source array.
 * @returns Array
 */
const keys = <S>(source: S[]): number[] => {
  const result = [];

  const c = source.length;

  let i = 0;

  while (i < c) {
    result.push(i);

    i++;
  }

  return result;
};

export default keys;

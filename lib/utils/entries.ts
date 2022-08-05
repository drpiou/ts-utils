/**
 * Return items number-indexed property [index, value] pairs of the source array.
 *
 * @param source Source array.
 * @returns Array
 */
const entries = <S>(source: S[]): [number, S][] => {
  const result: [number, S][] = [];

  const c = source.length;

  let i = 0;

  while (i < c) {
    result.push([i, source[i]]);

    i++;
  }

  return result;
};

export default entries;

/**
 * Flatten the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param deep Flatten recursively.
 * @returns Array
 */
const flatten = <I>(source: any[], deep?: boolean): I[] => {
  const result: I[] = [];

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    result.push(...((Array.isArray(item) ? (deep ? flatten(item) : item) : [item]) as I[]));

    i++;
  }

  return result;
};

export default flatten;

/**
 * Removes the keys of the source object.
 *
 * @param source Source object.
 * @param keys Keys to remove.
 * @returns Object
 */
const withoutProperties = <S extends object, K extends string>(source: S, keys: K[]): Omit<S, K> => {
  const result: Omit<S, K> = {} as never;

  const sourceKeys = Object.keys(source);

  const c = sourceKeys.length;

  let i = 0;

  while (i < c) {
    const index = sourceKeys[i];

    if (keys.indexOf(index as never) > -1 || !Object.prototype.hasOwnProperty.call(source, index)) {
      i++;

      continue;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result[index] = source[index];

    i++;
  }

  return result;
};

export default withoutProperties;

/**
 * Removes the keys of the source object.
 *
 * @param source Source object.
 * @param keys Keys to remove.
 * @returns Object
 */
const withoutProperties = <S extends object, K extends string>(source: S, keys: K[]): Omit<S, K> => {
  const result: Omit<S, K> = {} as never;

  const sourceKeys = Object.keys(source) as (keyof S)[];

  const c = sourceKeys.length;

  let i = 0;

  while (i < c) {
    const index = sourceKeys[i];

    if (keys.indexOf(index as never) >= 0 || !Object.prototype.hasOwnProperty.call(source, index)) {
      i++;

      continue;
    }

    (result as S)[index] = source[index];

    i++;
  }

  return result;
};

export default withoutProperties;

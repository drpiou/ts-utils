import { Index } from '../types/generic';

/**
 * Return the key-paired items of the source array.
 *
 * @param source Source array.
 * @param key Item key.
 * @returns Object
 */
const keyBy = <S extends object, K extends keyof S>(source: S[], key: K): { [key: Index]: S } => {
  const result = {} as { [key in Index]: S };

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    if (item[key] !== undefined) {
      result[item[key] as unknown as Index] = item;
    }

    i++;
  }

  return result;
};

export default keyBy;

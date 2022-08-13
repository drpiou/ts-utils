import isPlainObject from 'lodash/isPlainObject';

/**
 * Return the sum of the items in the source array.
 *
 * @param source Source array.
 * @param key Item key.
 * @returns number
 */
const sum = <S>(source: S[], key?: keyof S): number => {
  let result = 0;

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    const value = Number(key && isPlainObject(item) ? item[key] : item);

    if (!isNaN(value)) {
      result = value + result;
    }

    i++;
  }

  return result;
};

export default sum;

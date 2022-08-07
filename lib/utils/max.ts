import isPlainObject from 'lodash/isPlainObject';

/**
 * Return the maximum value of the items in the source array.
 *
 * @param source Source array.
 * @param key Item key.
 * @returns number
 */
const max = <S>(source: S[], key?: keyof S): number => {
  let result = 0;

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    const value = key && isPlainObject(item) ? item[key] : item;

    if (value !== null && value !== undefined) {
      const number = Number(value);

      if (!isNaN(number)) {
        result = number > result ? number : result;
      }
    }

    i++;
  }

  return result;
};

export default max;

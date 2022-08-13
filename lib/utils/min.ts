import isPlainObject from 'lodash/isPlainObject';

/**
 * Return the minimum value of the items in the source array.
 *
 * @param source Source array.
 * @param key Item key.
 * @returns number
 */
const min = <S>(source: S[], key?: keyof S): number => {
  let result = null;

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    const value = key && isPlainObject(item) ? item[key] : item;

    if (value !== null && value !== undefined) {
      const number = Number(value);

      if (!isNaN(number)) {
        if (result === null) {
          result = number;
        }

        result = number < result ? number : result;
      }
    }

    i++;
  }

  return result || 0;
};

export default min;

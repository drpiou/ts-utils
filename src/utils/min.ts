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

    const value: any = key && isPlainObject(item) ? item[key] : item;

    const isNumber = value === 0 || value > 0 || value < 0;

    if (isNumber) {
      if (result === null) {
        result = value;
      }

      result = value < result ? value : result;
    }

    i++;
  }

  return (result || 0) as number;
};

export default min;

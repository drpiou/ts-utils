import cloneDeep from 'lodash/cloneDeep';

/**
 * Clone the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param deep Clone recursively.
 * @returns Array
 */
const clone = <I>(source: I[], deep?: boolean): I[] => {
  return [...(deep ? cloneDeep(source) : source)];
};

export default clone;

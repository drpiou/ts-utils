import { default as _random } from 'lodash/random';
import keys from './keys';

/**
 * Return random items from the source array.
 *
 * @param source Source array.
 * @param count Count.
 * @param unique Should the items be uniq.
 * @returns Array
 */
const random = <S>(source: S[], count?: number, unique?: boolean): S[] => {
  const result: S[] = [];

  const size = keys(source);

  const c = unique ? Math.min(count || 1, source.length) : count || 1;

  let i = 0;

  while (i < c) {
    const randomIndex = _random(1, size.length) - 1;

    result.push(source[size[randomIndex]]);

    if (unique) {
      size.splice(randomIndex, 1);
    }

    i++;
  }

  return result;
};

export default random;

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
export default function random<Item>(source: Item[], count?: number, unique?: boolean): Item[] {
  const indexes = keys(source);

  count = count === undefined ? 1 : count;
  count = unique ? Math.min(count, source.length) : count;

  const result = [];

  let index = 0;

  while (index < count) {
    const randomIndex = _random(1, indexes.length) - 1;

    result.push(source[indexes[randomIndex]]);

    if (unique) {
      indexes.splice(randomIndex, 1);
    }

    index++;
  }

  return result;
}

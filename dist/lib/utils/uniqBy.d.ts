/**
 * Return all the unique key-paired items in the source array.
 *
 * Also exists for array items, see the "uniq" method.
 *
 * @param source Source array.
 * @param key Item key.
 * @returns Array
 */
export default function uniqBy<Item extends object, Key extends keyof Item>(source: Item[], key: Key | string): Item[];

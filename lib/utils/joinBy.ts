import join, { JoinOptions } from './join';

/**
 * Join key-paired items from a source array.
 *
 * Also exists for items, see the "join" function.
 *
 * @param source Source array.
 * @param key Item key.
 * @param separator Separator.
 * @param options Separator options.
 * @returns string
 */
export default function joinBy<Item extends Record<string, any>>(
  source: Item[],
  key: keyof Item | string,
  separator?: string,
  options?: JoinOptions,
): string {
  return join(
    source.map((item) => String(item[key])),
    separator,
    options,
  );
}

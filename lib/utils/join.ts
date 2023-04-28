import clone from './clone';

export type JoinOptions = {
  first?: string;
  last?: string;
};

/**
 * Join items in a source array.
 *
 * Also exists for key-paired items, see the "joinBy" function.
 *
 * @param source Source array.
 * @param separator Separator.
 * @param options Separator options.
 * @returns string
 */
export default function join(source: string[], separator?: string, options?: JoinOptions): string {
  const count = source.length;

  const middleSeparator = separator ?? '';
  const firstSeparator = options?.first ?? (count <= 2 ? options?.last : undefined) ?? middleSeparator;
  const lastSeparator = count <= 2 ? '' : options?.last ?? middleSeparator;

  const parts = clone(source);

  const firstPart = parts.shift();
  const lastPart = parts.pop();

  return `${firstPart !== undefined ? `${firstPart}${firstSeparator}` : ''}${parts.join(middleSeparator)}${
    lastPart !== undefined ? `${lastSeparator}${lastPart}` : ''
  }`;
}

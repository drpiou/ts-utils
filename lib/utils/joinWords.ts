import clone from './clone';

export type JoinWordsOptions = {
  first?: string;
  last?: string;
};

/**
 * Join items in a source array.
 *
 * @param source Source array.
 * @param separator Separator.
 * @param options Separator options.
 * @returns string
 */
const joinWords = (source: string[], separator?: string, options?: JoinWordsOptions): string => {
  const middleSeparator = separator ?? '';
  const firstSeparator = options?.first ?? middleSeparator;
  const lastSeparator = options?.last ?? middleSeparator;

  if ((!firstSeparator && !lastSeparator) || source.length <= 2) {
    return source.join(middleSeparator);
  }

  const parts = clone(source);

  const firstPart = parts.shift();
  const lastPart = parts.pop();

  return `${firstPart ? `${firstPart}${firstSeparator}` : ''}${parts.join(middleSeparator)}${
    lastPart ? `${lastSeparator}${lastPart}` : ''
  }`;
};

export default joinWords;

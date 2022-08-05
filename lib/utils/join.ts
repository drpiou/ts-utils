import joinWords, { JoinWordsOptions } from './joinWords';

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
const join = <S>(source: S[], separator?: string, options?: JoinWordsOptions): string => {
  return joinWords(
    source.map((item) => String(item)),
    separator,
    options,
  );
};

export default join;

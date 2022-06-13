import { JoinWordsOptions } from './joinWords';
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
declare const join: <S>(source: S[], separator?: string, options?: JoinWordsOptions) => string;
export default join;

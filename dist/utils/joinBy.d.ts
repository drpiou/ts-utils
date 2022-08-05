import { JoinWordsOptions } from './joinWords';
/**
 * Join key-paired items in a source array.
 *
 * Also exists for items, see the "join" function.
 *
 * @param source Source array.
 * @param key Item key.
 * @param separator Separator.
 * @param options Separator options.
 * @returns string
 */
declare const joinBy: <S extends object>(source: S[], key: keyof S, separator?: string | undefined, options?: JoinWordsOptions | undefined) => string;
export default joinBy;

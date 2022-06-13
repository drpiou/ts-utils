export declare type JoinWordsOptions = {
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
declare const joinWords: (source: string[], separator?: string, options?: JoinWordsOptions) => string;
export default joinWords;

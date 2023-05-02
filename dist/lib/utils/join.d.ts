export type JoinOptions = {
    first?: string;
    last?: string;
};
/**
 * Join items from a source array.
 *
 * Also exists for key-paired items, see the "joinBy" function.
 *
 * @param source Source array.
 * @param separator Separator.
 * @param options Separator options.
 * @returns string
 */
export default function join(source: string[], separator?: string, options?: JoinOptions): string;

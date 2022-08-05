import { BooleanClosure } from '../types/collection';
/**
 * Verify that all items pass a given truth test in the source array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns boolean
 */
declare const every: <S>(source: S[], closure: BooleanClosure<S>) => boolean;
export default every;

import { BooleanClosure } from '../types/collection';
/**
 * Separate items that pass a given truth test in the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param closure Callback function. If returns true, item is put on left, otherwise on right.
 * @returns Array
 */
declare const partition: <S>(source: S[], closure: BooleanClosure<S>) => S[][];
export default partition;

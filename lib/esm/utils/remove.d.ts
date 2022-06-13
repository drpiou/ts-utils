import { BooleanClosure } from '../types/collection';
/**
 * Remove the items that pass a given truth test in the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns Array
 */
declare const remove: <I>(source: I[], closure?: BooleanClosure<I> | undefined) => I[];
export default remove;

import { BooleanClosure } from '../types/collection';
/**
 * Filter the items that pass a given truth test in the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns Array
 */
declare const filter: <S>(source: S[], closure?: BooleanClosure<S> | undefined) => S[];
export default filter;

import { BooleanClosure } from '../types/collection';
/**
 * Return the last item that passes a given truth test in the source array.
 *
 * This function returns the last item.
 * To mutate the source array, use the "Array.pop" method.
 *
 * For the inverse, see the "first" function.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns any
 */
declare const last: <S>(source: S[], closure?: BooleanClosure<S> | undefined) => S | undefined;
export default last;

import { BooleanClosure } from '../types/collection';
/**
 * Return whether the given item exists in the source array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns boolean
 */
declare const contains: <S>(source: S[], closure: BooleanClosure<S>) => boolean;
export default contains;

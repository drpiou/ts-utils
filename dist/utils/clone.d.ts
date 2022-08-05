/**
 * Clone the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param deep Clone recursively.
 * @returns Array
 */
declare const clone: <I>(source: I[], deep?: boolean | undefined) => I[];
export default clone;

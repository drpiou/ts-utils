/**
 * Flatten the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param deep Flatten recursively.
 * @returns Array
 */
declare const flatten: <I>(source: unknown[], deep?: boolean | undefined) => I[];
export default flatten;

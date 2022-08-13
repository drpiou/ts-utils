/**
 * Break the source array into smaller arrays of a given size.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param size Chunk size.
 * @returns Array
 */
declare const chunk: <I>(source: I[], size: number) => I[][];
export default chunk;

import { ChunkClosure } from '../types/collection';
/**
 * Break the source array into smaller arrays.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns Array
 */
declare const chunkWhile: <I>(source: I[], closure: ChunkClosure<I, I[]>) => I[][];
export default chunkWhile;

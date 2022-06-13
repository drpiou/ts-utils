import { Path } from '../types/generic';
/**
 * Return all the paths in dot notation of the source object.
 *
 * @param source Source object.
 * @param parent Parent key.
 * @returns Array
 */
declare const paths: <S extends object>(source: S, parent?: string) => Path<S>[];
export default paths;

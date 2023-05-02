import { PlainObject } from '../types/generic';
import { Path, PathFinite } from '../types/path';
/**
 * Return all the paths in dot notation of the source object.
 *
 * @param source Source object.
 * @param finite Pick finite path.
 * @param prefix Prefix string.
 * @returns Array
 */
export default function paths<Source extends PlainObject, Finite extends boolean = false, Result = Finite extends true ? PathFinite<Source> : Path<Source>>(source: Source, finite?: Finite, prefix?: string): (Result | string)[];

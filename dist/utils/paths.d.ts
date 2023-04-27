export declare type PathsOptions = {
    objectParent?: boolean;
    parent?: string;
};
/**
 * Return all the paths in dot notation of the source object.
 *
 * @param source Source object.
 * @param options Options.
 * @returns Array
 */
declare const paths: <S extends object>(source: S, options?: PathsOptions | undefined) => string[];
export default paths;

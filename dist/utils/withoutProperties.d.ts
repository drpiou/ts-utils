/**
 * Removes the keys of the source object.
 *
 * @param source Source object.
 * @param keys Keys to remove.
 * @returns Object
 */
declare const withoutProperties: <S extends object, K extends string>(source: S, keys: K[]) => Omit<S, K>;
export default withoutProperties;

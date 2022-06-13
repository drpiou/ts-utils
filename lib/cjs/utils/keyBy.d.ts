import { Index } from '../types/generic';
/**
 * Return the key-paired items of the source array.
 *
 * @param source Source array.
 * @param key Item key.
 * @returns Object
 */
declare const keyBy: <S extends object, K extends keyof S>(source: S[], key: K) => {
    [key: string]: S;
    [key: number]: S;
    [key: symbol]: S;
};
export default keyBy;

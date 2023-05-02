export type FilterClosure<Item> = (item: Item, index: number, reject: Reject) => Item | Reject;
type Reject = {
    __reject: symbol;
};
/**
 * Filter the items that pass a given truth test from the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param closure Closure.
 * @returns Array
 */
export default function filter<Item, Result extends Extract<ReturnType<Closure>, Item>, Closure extends FilterClosure<Item> = FilterClosure<Item>>(source: Item[], closure: Closure): Result[];
export {};

export type FirstClosure<Item> = (item: Item, index: number, reject: Reject) => Item | Reject;
type Reject = {
    __reject: symbol;
};
/**
 * Return the first item that passes a given truth test in the source array.
 *
 * This function returns the first item.
 * To mutate the source array, use the "Array.shift" method.
 *
 * For the inverse, see the "last" function.
 *
 * @param source Source array.
 * @param closure Closure.
 * @returns any
 */
export default function first<Item, Result extends Extract<ReturnType<Closure>, Item>, Closure extends FirstClosure<Item> = FirstClosure<Item>>(source: Item[], closure?: Closure): Result | undefined;
export {};

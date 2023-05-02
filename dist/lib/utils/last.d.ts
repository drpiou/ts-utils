export type LastClosure<Item> = (item: Item, index: number, reject: Reject) => Item | Reject;
type Reject = {
    __reject: symbol;
};
/**
 * Return the last item that passes a given truth test in the source array.
 *
 * This function returns the last item.
 * To mutate the source array, use the "Array.pop" method.
 *
 * For the inverse, see the "first" function.
 *
 * @param source Source array.
 * @param closure Closure.
 * @returns any
 */
export default function last<Item, Result extends Extract<ReturnType<Closure>, Item>, Closure extends LastClosure<Item> = LastClosure<Item>>(source: Item[], closure?: Closure): Result | undefined;
export {};

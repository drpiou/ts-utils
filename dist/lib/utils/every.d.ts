export type EveryPredicate<Item> = (item: Item, index: number) => boolean;
/**
 * Verify that all items pass a given truth test in the source array.
 *
 * @param source Source array.
 * @param predicate Predicate.
 * @returns boolean
 */
export default function every<Item>(source: Item[], predicate: EveryPredicate<Item>): boolean;

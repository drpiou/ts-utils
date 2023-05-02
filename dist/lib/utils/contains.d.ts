export type ContainsPredicate<Item> = (item: Item, index: number) => boolean;
/**
 * Return whether the given item exists in the source array.
 *
 * @param source Source array.
 * @param predicate Predicate.
 * @returns boolean
 */
export default function contains<Item>(source: Item[], predicate: ContainsPredicate<Item>): boolean;

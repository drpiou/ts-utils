import { BooleanClosure, ChunkClosure, MapClosure, ReduceClosure } from '../types/collection';
import { Index } from '../types/generic';
import { JoinWordsOptions } from './joinWords';
/**
 * Collection provides a wrapper for working with arrays of data.
 *
 * @param items Items of the collection.
 * @returns Collection
 */
export default class Collection<Item = unknown> {
    readonly __CLASSNAME__ = "Collection";
    /**
     * The collection items.
     */
    protected items: Item[];
    /**
     * The collection constructor.
     */
    constructor(items?: Item | Item[] | Collection<Item>, deep?: boolean);
    /**
     * Return the underlying items of the collection.
     *
     * @returns Array
     */
    all(): Item[];
    /**
     * Return the underlying items recursively of all the collections.
     *
     * @todo Implement correct type.
     * @returns Array
     */
    allDeep<I>(): I[];
    /**
     * Add the given items to the end of the collection.
     *
     * This method returns a new collection.
     * To mutate the collection, see the "push" method.
     *
     * For the inverse, see the "prepend" method.
     *
     * @param items Items to add.
     * @returns Collection
     */
    append<I>(...items: I[]): Collection<Item | I>;
    /**
     * Return the item at the index of the collection.
     *
     * @returns any
     */
    at(index: number): Item;
    /**
     * Break the collection into smaller arrays of a given size.
     *
     * This method returns a new collection.
     *
     * @param size Chunk size.
     * @returns Collection
     */
    chunk(size: number): Collection<Collection<Item>>;
    /**
     * Break the collection into smaller arrays.
     *
     * This method returns a new collection.
     *
     * @param closure Callback method.
     * @returns Collection
     */
    chunkWhile(closure: ChunkClosure<Item, Collection<Item>>): Collection<Collection<Item>>;
    /**
     * Clone the collection.
     *
     * This method returns a new collection.
     *
     * @param deep Clone recursively.
     * @returns Collection
     */
    clone(deep?: boolean): Collection<Item>;
    /**
     * Add the given items to the end of the collection.
     *
     * This method returns a new collection.
     *
     * @param items Items to add.
     * @returns Collection
     */
    concat<I>(...items: (I[] | Collection<I>)[]): Collection<Item | I>;
    /**
     * Add the given items to the end of the collection.
     *
     * This method returns a new collection.
     *
     * @param items Items to add.
     * @returns Collection
     */
    concatUniq<I>(...items: (I[] | Collection<I>)[]): Collection<Item | I>;
    /**
     * Return whether the given item exists in the collection.
     *
     * @param closure Callback function.
     * @returns boolean
     */
    contains(closure: BooleanClosure<Item>): boolean;
    /**
     * Return the total number of items in the collection.
     *
     * @returns number
     */
    count(): number;
    /**
     * Iterate over the items in the collection.
     *
     * This method returns itself.
     * To mutate the collection, see the "transform" method.
     *
     * @param closure Callback method.
     * @returns Collection
     */
    each(closure: MapClosure<Item, void>): Collection<Item>;
    /**
     * Return items number-indexed property [index, value] pairs of the collection.
     *
     * @returns Array
     */
    entries(): [number, Item][];
    /**
     * Verify that all items pass a given truth test in the collection.
     *
     * @param closure Callback method.
     * @returns boolean
     */
    every(closure: BooleanClosure<Item>): boolean;
    /**
     * Filter the items that pass a given truth test in the collection.
     *
     * This method returns a new collection.
     * To mutate the collection, see the "remove" method.
     *
     * @param closure Callback method.
     * @returns Collection
     */
    filter(closure?: BooleanClosure<Item>): Collection<Item>;
    /**
     * Return the first item that passes a given truth test in the collection.
     *
     * This method returns the first item.
     * To mutate the collection, see the "shift" method.
     *
     * For the inverse, see the "last" method.
     *
     * @param closure Callback method.
     * @returns any
     */
    first(closure?: BooleanClosure<Item>): Item | undefined;
    /**
     * Flatten the collection.
     *
     * This method returns a new collection.
     *
     * @todo Implement correct type.
     * @param deep Flatten recursively.
     * @returns Collection
     */
    flatten<I>(deep?: boolean): Collection<I>;
    /**
     * Invert the order of the items in the collection.
     *
     * This method returns a new collection.
     * To mutate the collection, see the "reverse" method.
     *
     * @returns Collection
     */
    invert(): Collection<Item>;
    /**
     * Join items in a collection.
     *
     * Also exists for key-paired items, see the "joinBy" method.
     *
     * @param separator Separator.
     * @param options Separator options.
     * @returns string
     */
    join(separator?: string, options?: JoinWordsOptions): string;
    /**
     * Join key-paired items in a collection.
     *
     * Also exists for items, see the "join" method.
     *
     * @param key Item key.
     * @param separator Separator.
     * @param options Separator options.
     * @returns string
     */
    joinBy(key: keyof Item, separator?: string, options?: JoinWordsOptions): string;
    /**
     * Return the key-paired items of the collection.
     *
     * @param key Item key.
     * @returns Object
     */
    keyBy(key: keyof Item): {
        [key in Index]: Item;
    };
    /**
     * Return the indexes of the collection.
     *
     * @returns Array
     */
    keys(): number[];
    /**
     * Return the last item that passes a given truth test in the collection.
     *
     * This method returns the last item.
     * To mutate the collection, see the "pop" method.
     *
     * For the inverse, see the "first" method.
     *
     * @param closure Callback method.
     * @returns any
     */
    last(closure?: BooleanClosure<Item>): Item | undefined;
    /**
     * Log in the console the items in the collection.
     *
     * This method returns itself.
     *
     * @returns Collection
     */
    log(): Collection<Item>;
    /**
     * Transform the items in the collection.
     *
     * This method returns a new collection.
     * To mutate the collection, see the "transform" method.
     *
     * @param closure Callback method.
     * @returns Collection
     */
    map<I>(closure: MapClosure<Item, I>): Collection<I>;
    /**
     * Return the maximum value of the items in the collection.
     *
     * @param key Item key.
     * @returns number
     */
    max(key?: keyof Item): number;
    /**
     * Return the minimum value of the items in the collection.
     *
     * @param key Item key.
     * @returns number
     */
    min(key?: keyof Item): number;
    /**
     * Order items in the collection.
     *
     * This method returns a new collection.
     * To mutate the collection, see the "sort" method.
     *
     * Also exists for key-paired items, see the "orderBy" method.
     *
     * @param reversed Reverse order.
     * @returns Collection
     */
    order(reversed?: boolean): Collection<Item>;
    /**
     * Order key-paired items in the collection.
     *
     * This method returns a new collection.
     * To mutate the collection, see the "sortBy" method.
     *
     * Also exists for items, see the "order" method.
     *
     * @param key Item key.
     * @param reversed Reverse order.
     * @returns Collection
     */
    orderBy(key: keyof Item, reversed?: boolean): Collection<Item>;
    /**
     * Fill the given value until the collection reaches the specified size.
     *
     * This method returns a new collection.
     *
     * @param count Array size. If positive, pad to the end, otherwise to the beginning.
     * @param value Item to fill.
     * @returns Collection
     */
    pad(count: number, value: Item): Collection<Item>;
    /**
     * Separate items that pass a given truth test in the collection.
     *
     * This method returns a new collection.
     *
     * @param closure Callback method. If returns true, item is put on left, otherwise on right.
     * @returns Array
     */
    partition(closure: BooleanClosure<Item>): Collection<Item>[];
    /**
     * Remove and return the last item from the collection.
     *
     * This method mutates the collection.
     * To return the last item, see the "last" method.
     *
     * For the inverse, see the "shift" method.
     *
     * @returns any
     */
    pop(): Item | undefined;
    /**
     * Add the given items to the beginning of the collection.
     *
     * This method returns a new collection.
     * To mutate the collection, see the "unshift" method.
     *
     * For the inverse, see the "append" method.
     *
     * @param items Items to add.
     * @returns Collection
     */
    prepend<I>(...items: I[]): Collection<Item | I>;
    /**
     * Add the given items to the end of the collection.
     *
     * This method mutates the collection.
     * To return a new collection, see the "append" method.
     *
     * For the inverse, see the "unshift" method.
     *
     * @param items Items to add.
     * @returns Collection
     */
    push<I>(...items: I[]): Collection<Item | I>;
    /**
     * Add the given items to the end of the collection.
     *
     * This method mutates the collection.
     * To return a new collection, see the "append" method.
     *
     * For the inverse, see the "unshift" method.
     *
     * @param items Items to add.
     * @returns Collection
     */
    pushUniq<I>(...items: I[]): Collection<Item | I>;
    /**
     * Return random items from the collection.
     *
     * This method returns a new collection.
     *
     * @param count Count.
     * @param unique Should the items be uniq.
     * @returns Collection
     */
    random(count?: number, unique?: boolean): Collection<Item>;
    /**
     * Reduce the items in the collection to a single value.
     *
     * @param closure Callback method.
     * @param initialValue Initial Value.
     * @returns any
     */
    reduce<V>(closure: ReduceClosure<Item, V>, initialValue: V): V;
    /**
     * Reverse the order of the items in the collection.
     *
     * This method mutates the collection.
     * To return a new collection, see the "invert" method.
     *
     * @returns Collection
     */
    reverse(): Collection<Item>;
    /**
     * Remove and return the first item from the collection.
     *
     * This method mutates the collection.
     * To return the first item, see the "first" method.
     *
     * For the inverse, see the "pop" method.
     *
     * @returns any
     */
    shift(): Item | undefined;
    /**
     * Shuffle the items in the collection.
     *
     * This method mutates the collection.
     * To return a new collection, see the "random" method.
     *
     * @returns Collection
     */
    shuffle(): Collection<Item>;
    /**
     * Return a slice of items in the collection.
     *
     * This method returns a new collection.
     * To mutate the collection, see the "splice" method.
     *
     * @param start Start slice position.
     * @param end End slice position.
     * @returns Collection
     */
    slice(start: number, end?: number): Collection<Item>;
    /**
     * Sort items in the collection.
     *
     * This method mutates the collection.
     * To return a new collection, see the "order" method.
     *
     * Also exists for key-paired items, see the "sortBy" method.
     *
     * @param reversed Reverse order.
     * @returns Collection
     */
    sort(reversed?: boolean): Collection<Item>;
    /**
     * Sort key-paired items in the collection.
     *
     * This method mutates the collection.
     * To return a new collection, see the "orderBy" method.
     *
     * Also exists for items, see the "sort" method.
     *
     * @param key Item key.
     * @param reversed Reverse order.
     * @returns Collection
     */
    sortBy(key: keyof Item, reversed?: boolean): Collection<Item>;
    /**
     * Remove and return a slice of items and add some items in the collection.
     *
     * This method mutates the collection.
     * To return a new collection, see the "slice" method.
     *
     * @param start Start remove position.
     * @param deleteCount Remove count.
     * @param items Items to add.
     * @returns Collection
     */
    splice<I>(start: number, deleteCount?: number, items?: I | I[] | Collection<I>): Collection<Item | I>;
    /**
     * Return the sum of the items in the collection.
     *
     * @param key Item key.
     * @returns number
     */
    sum(key?: keyof Item): number;
    /**
     * Return the specified number of items in the collection.
     *
     * For the inverse, use the "slice" method.
     *
     * @param count Count.
     * @returns Collection
     */
    take(count: number): Collection<Item>;
    /**
     * Transform the items in the collection.
     *
     * This method mutates the collection.
     * To return a new collection, see the "map" method.
     *
     * @param closure Callback method.
     * @returns Collection
     */
    transform<I>(closure: MapClosure<Item, I>): Collection<I>;
    /**
     * Add the given items to the beginning of the collection.
     *
     * This method mutates the collection.
     * To mutate the collection, see the "prepend" method.
     *
     * For the inverse, see the "push" method.
     *
     * @param items Items to add.
     * @returns Collection
     */
    unshift<I>(...items: I[]): Collection<Item | I>;
    /**
     * Return all the unique items in the collection.
     *
     * This method returns a new collection.
     *
     * Also exists for key-paired items, see the "uniqueBy" method.
     *
     * @returns Collection
     */
    uniq(): Collection<Item>;
    /**
     * Return all the unique key-paired items in the collection.
     *
     * This method returns a new collection.
     *
     * Also exists for array items, see the "unique" method.
     *
     * @param key Item key.
     * @returns Collection
     */
    uniqBy(key: keyof Item): Collection<Item>;
}
/**
 * Create a new collection instance.
 *
 * @param items Items of the collection.
 * @param deep Clone deep.
 * @returns Collection
 */
export declare const collect: <Item>(items?: Item | Collection<Item> | Item[] | undefined, deep?: boolean | undefined) => Collection<Item>;
/**
 * Casts value as array of items if it’s not.
 *
 * @param items Items or collection.
 * @returns Array
 */
export declare const castItems: <Item>(items: Item | Collection<Item> | Item[]) => Item[];
/**
 * Casts value as collection if it’s not.
 *
 * @param items Items or collection.
 * @returns Collection
 */
export declare const castCollection: <Item>(items: Item | Collection<Item> | Item[]) => Collection<Item>;
/**
 * Check if items is a collection.
 *
 * @param value Value to test.
 * @returns boolean
 */
export declare const isCollection: (value: unknown) => boolean;

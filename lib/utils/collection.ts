import castArray from 'lodash/castArray';
import { BooleanClosure, ChunkClosure, MapClosure, ReduceClosure } from '../types/collection';
import { Index } from '../types/generic';
import clone from './clone';
import contains from './contains';
import entries from './entries';
import every from './every';
import filter from './filter';
import first from './first';
import flatten from './flatten';
import join from './join';
import joinBy from './joinBy';
import { JoinWordsOptions } from './joinWords';
import keyBy from './keyBy';
import keys from './keys';
import last from './last';
import log from './log';
import max from './max';
import min from './min';
import pad from './pad';
import partition from './partition';
import pushUniq from './pushUniq';
import random from './random';
import sort from './sort';
import sortBy from './sortBy';
import sum from './sum';
import take from './take';
import uniq from './uniq';
import uniqBy from './uniqBy';

/**
 * Collection provides a wrapper for working with arrays of data.
 *
 * @param items Items of the collection.
 * @returns Collection
 */
export default class Collection<Item = unknown> {
  readonly __CLASSNAME__ = 'Collection';

  /**
   * The collection items.
   */
  protected items: Item[];

  /**
   * The collection constructor.
   */
  constructor(items?: Item | Item[] | Collection<Item>, deep?: boolean) {
    this.items = clone(castItems(items || []), deep);
  }

  /**
   * Return the underlying items of the collection.
   *
   * @returns Array
   */
  all(): Item[] {
    return this.items;
  }

  /**
   * Return the underlying items recursively of all the collections.
   *
   * @todo Implement correct type.
   * @returns Array
   */
  allDeep<I>(): I[] {
    return this.items.map((item) => {
      return (isCollection(item) ? (item as unknown as Collection).allDeep() : item) as never;
    });
  }

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
  append<I>(...items: I[]): Collection<Item | I> {
    return collect<Item | I>(this.items).push(...items);
  }

  /**
   * Return the item at the index of the collection.
   *
   * @returns any
   */
  at(index: number): Item {
    return this.items[index];
  }

  /**
   * Break the collection into smaller arrays of a given size.
   *
   * This method returns a new collection.
   *
   * @param size Chunk size.
   * @returns Collection
   */
  chunk(size: number): Collection<Collection<Item>> {
    return this.chunkWhile((_item, _index, _chunk) => _chunk.count() === size);
  }

  /**
   * Break the collection into smaller arrays.
   *
   * This method returns a new collection.
   *
   * @param closure Callback method.
   * @returns Collection
   */
  chunkWhile(closure: ChunkClosure<Item, Collection<Item>>): Collection<Collection<Item>> {
    const _result: Collection<Collection<Item>> = collect();

    let _chunk: Collection<Item> = collect();

    const c = this.items.length;

    let i = 0;

    while (i < c) {
      const _item = this.items[i];

      if (closure(_item, i, _chunk)) {
        _result.push(_chunk);

        _chunk = collect();
      }

      _chunk.push(_item);

      i++;
    }

    _result.push(_chunk);

    return _result;
  }

  /**
   * Clone the collection.
   *
   * This method returns a new collection.
   *
   * @param deep Clone recursively.
   * @returns Collection
   */
  clone(deep?: boolean): Collection<Item> {
    return collect(this.items, deep);
  }

  /**
   * Add the given items to the end of the collection.
   *
   * This method returns a new collection.
   *
   * @param items Items to add.
   * @returns Collection
   */
  concat<I>(...items: (I[] | Collection<I>)[]): Collection<Item | I> {
    const _result: (Item | I)[] = clone(this.items);

    const c = items.length;

    let i = 0;

    while (i < c) {
      _result.push(...castItems(items[i]));

      i++;
    }

    return collect(_result);
  }

  /**
   * Add the given items to the end of the collection.
   *
   * This method returns a new collection.
   *
   * @param items Items to add.
   * @returns Collection
   */
  concatUniq<I>(...items: (I[] | Collection<I>)[]): Collection<Item | I> {
    const _result: (Item | I)[] = clone(this.items);

    const c = items.length;

    let i = 0;

    while (i < c) {
      pushUniq(_result, ...castItems(items[i]));

      i++;
    }

    return collect(_result);
  }

  /**
   * Return whether the given item exists in the collection.
   *
   * @param closure Callback function.
   * @returns boolean
   */
  contains(closure: BooleanClosure<Item>): boolean {
    return contains(this.items, closure);
  }

  /**
   * Return the total number of items in the collection.
   *
   * @returns number
   */
  count(): number {
    return this.items.length;
  }

  /**
   * Iterate over the items in the collection.
   *
   * This method returns itself.
   * To mutate the collection, see the "transform" method.
   *
   * @param closure Callback method.
   * @returns Collection
   */
  each(closure: MapClosure<Item, void>): Collection<Item> {
    this.items.map(closure);

    return this;
  }

  /**
   * Return items number-indexed property [index, value] pairs of the collection.
   *
   * @returns Array
   */
  entries(): [number, Item][] {
    return entries(this.items);
  }

  /**
   * Verify that all items pass a given truth test in the collection.
   *
   * @param closure Callback method.
   * @returns boolean
   */
  every(closure: BooleanClosure<Item>): boolean {
    return every(this.items, closure);
  }

  /**
   * Filter the items that pass a given truth test in the collection.
   *
   * This method returns a new collection.
   * To mutate the collection, see the "remove" method.
   *
   * @param closure Callback method.
   * @returns Collection
   */
  filter(closure?: BooleanClosure<Item>): Collection<Item> {
    return collect(filter(this.items, closure));
  }

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
  first(closure?: BooleanClosure<Item>): Item | undefined {
    return first(this.items, closure);
  }

  /**
   * Flatten the collection.
   *
   * This method returns a new collection.
   *
   * @todo Implement correct type.
   * @param deep Flatten recursively.
   * @returns Collection
   */
  flatten<I>(deep?: boolean): Collection<I> {
    return collect(flatten(this.items, deep));
  }

  /**
   * Invert the order of the items in the collection.
   *
   * This method returns a new collection.
   * To mutate the collection, see the "reverse" method.
   *
   * @returns Collection
   */
  invert(): Collection<Item> {
    return collect(this.items).reverse();
  }

  /**
   * Join items in a collection.
   *
   * Also exists for key-paired items, see the "joinBy" method.
   *
   * @param separator Separator.
   * @param options Separator options.
   * @returns string
   */
  join(separator?: string, options?: JoinWordsOptions): string {
    return join(this.items, separator, options);
  }

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
  joinBy(key: keyof Item, separator?: string, options?: JoinWordsOptions): string {
    return joinBy(this.items as never, key as never, separator, options);
  }

  /**
   * Return the key-paired items of the collection.
   *
   * @param key Item key.
   * @returns Object
   */
  keyBy(key: keyof Item): { [key in Index]: Item } {
    return keyBy(this.items as never, key as never) as never;
  }

  /**
   * Return the indexes of the collection.
   *
   * @returns Array
   */
  keys(): number[] {
    return keys(this.items);
  }

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
  last(closure?: BooleanClosure<Item>): Item | undefined {
    return last(this.items, closure);
  }

  /**
   * Log in the console the items in the collection.
   *
   * This method returns itself.
   *
   * @returns Collection
   */
  log(): Collection<Item> {
    log(this.items);

    return this;
  }

  /**
   * Transform the items in the collection.
   *
   * This method returns a new collection.
   * To mutate the collection, see the "transform" method.
   *
   * @param closure Callback method.
   * @returns Collection
   */
  map<I>(closure: MapClosure<Item, I>): Collection<I> {
    return collect(this.items.map(closure));
  }

  /**
   * Return the maximum value of the items in the collection.
   *
   * @param key Item key.
   * @returns number
   */
  max(key?: keyof Item): number {
    return max(this.items, key);
  }

  /**
   * Return the minimum value of the items in the collection.
   *
   * @param key Item key.
   * @returns number
   */
  min(key?: keyof Item): number {
    return min(this.items, key);
  }

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
  order(reversed?: boolean): Collection<Item> {
    return collect(this.items).sort(reversed);
  }

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
  orderBy(key: keyof Item, reversed?: boolean): Collection<Item> {
    return collect(this.items).sortBy(key, reversed);
  }

  /**
   * Fill the given value until the collection reaches the specified size.
   *
   * This method returns a new collection.
   *
   * @param count Array size. If positive, pad to the end, otherwise to the beginning.
   * @param value Item to fill.
   * @returns Collection
   */
  pad(count: number, value: Item): Collection<Item> {
    return collect(pad(this.items, count, value));
  }

  /**
   * Separate items that pass a given truth test in the collection.
   *
   * This method returns a new collection.
   *
   * @param closure Callback method. If returns true, item is put on left, otherwise on right.
   * @returns Array
   */
  partition(closure: BooleanClosure<Item>): Collection<Item>[] {
    const parts = partition(this.items, closure);

    return [collect(parts[0]), collect(parts[1])];
  }

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
  pop(): Item | undefined {
    return this.items.pop();
  }

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
  prepend<I>(...items: I[]): Collection<Item | I> {
    return collect<Item | I>(this.items).unshift(...items);
  }

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
  push<I>(...items: I[]): Collection<Item | I> {
    (this.items as (Item | I)[]).push(...items);

    return this;
  }

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
  pushUniq<I>(...items: I[]): Collection<Item | I> {
    pushUniq(this.items, ...items);

    return this;
  }

  /**
   * Return random items from the collection.
   *
   * This method returns a new collection.
   *
   * @param count Count.
   * @param unique Should the items be uniq.
   * @returns Collection
   */
  random(count?: number, unique?: boolean): Collection<Item> {
    return collect(random(this.items, count, unique));
  }

  /**
   * Reduce the items in the collection to a single value.
   *
   * @param closure Callback method.
   * @param initialValue Initial Value.
   * @returns any
   */
  reduce<V>(closure: ReduceClosure<Item, V>, initialValue: V): V {
    return this.items.reduce(closure, initialValue);
  }

  /**
   * Reverse the order of the items in the collection.
   *
   * This method mutates the collection.
   * To return a new collection, see the "invert" method.
   *
   * @returns Collection
   */
  reverse(): Collection<Item> {
    this.items.reverse();

    return this;
  }

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
  shift(): Item | undefined {
    return this.items.shift();
  }

  /**
   * Shuffle the items in the collection.
   *
   * This method mutates the collection.
   * To return a new collection, see the "random" method.
   *
   * @returns Collection
   */
  shuffle(): Collection<Item> {
    this.items = random(this.items, this.items.length);

    return this;
  }

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
  slice(start: number, end?: number): Collection<Item> {
    return collect(this.items.slice(start, end));
  }

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
  sort(reversed?: boolean): Collection<Item> {
    sort(this.items, reversed);

    return this;
  }

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
  sortBy(key: keyof Item, reversed?: boolean): Collection<Item> {
    sortBy(this.items as never, key as never, reversed);

    return this;
  }

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
  splice<I>(start: number, deleteCount?: number, items?: I | I[] | Collection<I>): Collection<Item | I> {
    (this.items as (Item | I)[]).splice(start, deleteCount || 0, ...castItems(items || []));

    return this;
  }

  /**
   * Return the sum of the items in the collection.
   *
   * @param key Item key.
   * @returns number
   */
  sum(key?: keyof Item): number {
    return sum(this.items, key);
  }

  /**
   * Return the specified number of items in the collection.
   *
   * For the inverse, use the "slice" method.
   *
   * @param count Count.
   * @returns Collection
   */
  take(count: number): Collection<Item> {
    return collect(take(this.items, count));
  }

  /**
   * Transform the items in the collection.
   *
   * This method mutates the collection.
   * To return a new collection, see the "map" method.
   *
   * @param closure Callback method.
   * @returns Collection
   */
  transform<I>(closure: MapClosure<Item, I>): Collection<I> {
    (this.items as unknown as I[]) = this.items.map(closure);

    return this as unknown as Collection<I>;
  }

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
  unshift<I>(...items: I[]): Collection<Item | I> {
    (this.items as (Item | I)[]).unshift(...items);

    return this;
  }

  /**
   * Return all the unique items in the collection.
   *
   * This method returns a new collection.
   *
   * Also exists for key-paired items, see the "uniqueBy" method.
   *
   * @returns Collection
   */
  uniq(): Collection<Item> {
    return collect(uniq(this.items));
  }

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
  uniqBy(key: keyof Item): Collection<Item> {
    return collect(uniqBy(this.items as never, key as never) as never);
  }
}

/**
 * Create a new collection instance.
 *
 * @param items Items of the collection.
 * @param deep Clone deep.
 * @returns Collection
 */
export const collect = <Item>(items?: Item | Item[] | Collection<Item>, deep?: boolean): Collection<Item> => {
  return new Collection<Item>(items, deep);
};

/**
 * Casts value as array of items if it’s not.
 *
 * @param items Items or collection.
 * @returns Array
 */
export const castItems = <Item>(items: Item | Item[] | Collection<Item>): Item[] => {
  return isCollection(items) ? (items as Collection<Item>).all() : castArray(items as Item | Item[]);
};

/**
 * Casts value as collection if it’s not.
 *
 * @param items Items or collection.
 * @returns Collection
 */
export const castCollection = <Item>(items: Item | Item[] | Collection<Item>): Collection<Item> => {
  return isCollection(items) ? (items as Collection<Item>) : collect(items as Item | Item[]);
};

/**
 * Check if items is a collection.
 *
 * @param value Value to test.
 * @returns boolean
 */
export const isCollection = (value: unknown): boolean => {
  return typeof value === 'object' && (value as Collection)?.__CLASSNAME__ === 'Collection';
};

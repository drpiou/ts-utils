export type FilterClosure<Item> = (item: Item, index: number, empty: () => Reject) => Item | Reject;

type Reject = typeof rejectSymbol;

const rejectSymbol = Object.freeze({
  __reject: Symbol('reject'),
});

const reject = () => {
  return rejectSymbol;
};

/**
 * Filter the items that pass a given truth test from the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns Array
 */
export default function filter<Item, Closure extends FilterClosure<Item>, Return = Extract<ReturnType<Closure>, Item>>(
  source: Item[],
  closure: Closure,
): Return[] {
  const result = [];

  const count = source.length;

  let index = 0;

  while (index < count) {
    const item = source[index];

    if (closure(item, index, reject) === item) {
      result.push(item as unknown as Return);
    }

    index++;
  }

  return result;
}

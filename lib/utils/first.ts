export type FirstClosure<Item> = (item: Item, index: number, reject: Reject) => Item | Reject;

type Reject = { __reject: symbol };

const reject: Reject = Object.freeze({ __reject: Symbol('reject') });

/**
 * Return the first item that passes a given truth test in the source array.
 *
 * This function returns the first item.
 * To mutate the source array, use the "Array.shift" method.
 *
 * For the inverse, see the "last" function.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns any
 */
export default function first<
  Item,
  Result extends Extract<ReturnType<Closure>, Item>,
  Closure extends FirstClosure<Item> = FirstClosure<Item>,
>(source: Item[], closure?: Closure): Result | undefined {
  if (!closure) {
    return source[0] as Result | undefined;
  }

  const count = source.length;

  let index = 0;

  while (index < count) {
    const item = source[index];

    if (closure(item, index, reject) === item) {
      return item as Result | undefined;
    }

    index++;
  }

  return;
}

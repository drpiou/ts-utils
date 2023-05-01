export type LastClosure<Item> = (item: Item, index: number, reject: () => Reject) => Item | Reject;

type Reject = typeof rejectSymbol;

const rejectSymbol = Object.freeze({
  __reject: Symbol('reject'),
});

const reject = (): Reject => {
  return rejectSymbol;
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
 * @param closure Callback function.
 * @returns any
 */
export default function last<Item, Closure extends LastClosure<Item>, Result = Extract<ReturnType<Closure>, Item>>(
  source: Item[],
  closure?: Closure,
): Result | undefined {
  const count = source.length;

  if (!closure) {
    return source[count - 1] as Result | undefined;
  }

  let index = 0;

  while (index < count) {
    const itemIndex = count - 1 - index;
    const item = source[itemIndex];

    if (closure(item, itemIndex, reject) === item) {
      return item as Result | undefined;
    }

    index++;
  }

  return;
}

export type FirstClosure<Item> = (item: Item, index: number, reject: () => Reject) => Item | Reject;

type Reject = typeof rejectSymbol;

const rejectSymbol = Object.freeze({
  __reject: Symbol('reject'),
});

const reject = (): Reject => {
  return rejectSymbol;
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
 * @param closure Callback function.
 * @returns any
 */
export default function first<Item, Closure extends FirstClosure<Item>, Return = Extract<ReturnType<Closure>, Item>>(
  source: Item[],
  closure?: Closure,
): Return | undefined {
  if (!closure) {
    return source[0] as unknown as Return;
  }

  const count = source.length;

  let index = 0;
  let result;

  while (index < count) {
    const item = source[index];

    if (closure(item, index, reject) === item) {
      result = item as unknown as Return;

      break;
    }

    index++;
  }

  return result;
}

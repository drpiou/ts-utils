export type PartitionClosure<Item> = (item: Item, index: number, reject: Reject) => Item | Reject;

type Reject = { __reject: symbol };

const reject: Reject = Object.freeze({ __reject: Symbol('reject') });

/**
 * Separate items that pass a given truth test in the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param closure Closure. If returns reject, item is put on right, otherwise on left.
 * @returns Array
 */
export default function partition<
  Item,
  Result extends [Left[], Right[]],
  Closure extends PartitionClosure<Item> = PartitionClosure<Item>,
  Left = Extract<ReturnType<Closure>, Item>,
  Right = [Exclude<Item, Left>] extends [never] ? Item : Exclude<Item, Left>,
>(source: Item[], closure: Closure): Result {
  const itemsLeft: Left[] = [];
  const itemsRight: Right[] = [];

  const count = source.length;

  let index = 0;

  while (index < count) {
    const item = source[index];

    if (closure(item, index, reject) === item) {
      itemsLeft.push(item as undefined as Left);
    } else {
      itemsRight.push(item as undefined as Right);
    }

    index++;
  }

  return [itemsLeft, itemsRight] as Result;
}

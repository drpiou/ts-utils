/**
 * Removes the keys of the source object.
 *
 * @param source Source object.
 * @param keys Keys to remove.
 * @returns Object
 */
export default function omit<Item extends Record<string, any>, Keys extends keyof Item, Key extends Keys | string>(
  source: Item,
  keys: Key[],
): Omit<Item, Key> {
  const result = {} as Omit<Item, Key>;

  const sourceKeys = Object.keys(source);

  const count = sourceKeys.length;

  let index = 0;

  while (index < count) {
    const keyIndex = sourceKeys[index];

    if (keys.indexOf(keyIndex as Key) >= 0 || !Object.prototype.hasOwnProperty.call(source, keyIndex)) {
      index++;

      continue;
    }

    result[keyIndex as Exclude<Keys, Key>] = source[keyIndex] as Item[Exclude<Keys, Key>];

    index++;
  }

  return result;
}

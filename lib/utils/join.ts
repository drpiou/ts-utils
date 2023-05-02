import clone from './clone';

export type JoinOptions = {
  first?: string;
  last?: string;
};

/**
 * Join items from a source array.
 *
 * Also exists for key-paired items, see the "joinBy" function.
 *
 * @param source Source array.
 * @param separator Separator.
 * @param options Separator options.
 * @returns string
 */
export default function join(source: string[], separator?: string, options?: JoinOptions): string {
  const count = source.length;

  if (count < 2) {
    return source.join('');
  }

  const parts = clone(source);

  separator = separator ?? '';

  const last = options?.last ?? separator;

  const firstPart = parts.shift() as string;
  const lastPart = parts.pop() as string;

  return `${firstPart}${options?.first ?? (count === 2 ? last : separator)}${parts.join(separator)}${
    count === 2 ? '' : last
  }${lastPart}`;
}

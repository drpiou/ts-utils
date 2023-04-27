import { Constructor } from '../types/generic';

/**
 * Apply the given mixins to the base class.
 *
 * @param base Source class.
 * @param mixins Mixins
 */
export default function applyMixins(base: Constructor, mixins: Constructor[]): void {
  mixins.forEach((mixin) => {
    Object.getOwnPropertyNames(mixin.prototype).forEach((name) => {
      Object.defineProperty(
        base.prototype,
        name,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        Object.getOwnPropertyDescriptor(mixin.prototype, name) || Object.create(null),
      );
    });
  });
}

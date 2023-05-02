import castArray from 'lodash/castArray';
import { Asserted } from '../types/generic';
import isString from './isString';

/**
 * ...
 *
 * @param value Value.
 * @param starts Value.
 */
export default function isUrl<T extends string>(value: unknown, starts?: string | string[]): value is Asserted<T> {
  const pattern = /^([a-z0-9-+.]+:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

  return isString(value) && pattern.test(value) && (!starts || castArray(starts).includes(value.split('://')[0]));
}

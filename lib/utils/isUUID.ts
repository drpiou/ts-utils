import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';
import isString from './isString';

export type isUUIDVersion = keyof typeof isUUIDPatterns;

const isUUIDPatterns = {
  1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
};

/**
 * Check if the value is a UUID.
 *
 * @param value Value.
 * @param version Value.
 * @returns boolean
 */
export default function isUUID<T extends string>(value: unknown, version?: isUUIDVersion): value is Asserted<T> {
  return isString(value) && isUUIDPatterns[isAsserted(version) ? version : 'all'].test(value);
}

import { Asserted } from '../types/generic';
export type isUUIDVersion = keyof typeof isUUIDPatterns;
declare const isUUIDPatterns: {
    1: RegExp;
    2: RegExp;
    3: RegExp;
    4: RegExp;
    5: RegExp;
    all: RegExp;
};
/**
 * Check if the value is a UUID.
 *
 * @param value Value.
 * @param version Value.
 * @returns boolean
 */
export default function isUUID<T extends string>(value: unknown, version?: isUUIDVersion): value is Asserted<T>;
export {};

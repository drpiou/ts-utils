import { isPlainObject } from 'lodash';
import { log } from '../../lib';
import { expect } from './expect';

export const testThis = (testValue: unknown, expectedValue: unknown): void => {
  log(testValue, expectedValue);
  test(testValue, expectedValue);
};

const test = (testValue: unknown, expectedValue: unknown): void => {
  expect(typeof testValue, typeof expectedValue);

  if (Array.isArray(expectedValue)) {
    expect(testValue.length, expectedValue.length);

    expectedValue.map((expectedValueAtIndex, index) => {
      test(testValue[index], expectedValueAtIndex);
    });
  } else if (isPlainObject(expectedValue)) {
    Object.keys(expectedValue).map((expectedValueKeysAtIndex) => {
      test(testValue[expectedValueKeysAtIndex], expectedValue[expectedValueKeysAtIndex]);
    });
  } else {
    expect(testValue, expectedValue);
  }
};

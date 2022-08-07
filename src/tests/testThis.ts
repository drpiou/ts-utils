import { isPlainObject } from 'lodash';
import { expect } from './expect';

export const testThis = (testValue: unknown, expectedValue: unknown): void => {
  expect(typeof testValue, typeof expectedValue);

  if (Array.isArray(expectedValue)) {
    expect(testValue.length, expectedValue.length);

    expectedValue.map((expectedValueAtIndex, index) => {
      testThis(testValue[index], expectedValueAtIndex);
    });
  } else if (isPlainObject(expectedValue)) {
    Object.keys(expectedValue).map((expectedValueKeysAtIndex) => {
      testThis(testValue[expectedValueKeysAtIndex], expectedValue[expectedValueKeysAtIndex]);
    });
  } else {
    expect(testValue, expectedValue);
  }
};

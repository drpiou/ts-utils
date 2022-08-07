import { logError } from '../../lib';

export const expect = (testValue: unknown, expectedValue: unknown): void => {
  if (testValue !== expectedValue) {
    logError(testValue, expectedValue);

    throw new Error('ERROR');
  }
};

import { head, isPlainObject, omit, values } from 'lodash';
import { log, logError, logInfo } from '../../lib';

export const test = async (app: HTMLDivElement, title: string, callback: () => void | Promise<void>): Promise<void> => {
  const card = document.createElement('div');

  // Create card
  card.className = 'card';

  app.appendChild(card);

  // Create card result
  const result = document.createElement('p');

  result.className = 'result';
  result.innerHTML = `${title}<br>in test`;

  card.appendChild(result);

  try {
    logInfo(`testing: ${title}`);

    // Run test
    await callback();

    result.classList.add('success');
    result.innerHTML = `${title}<br>success`;
  } catch (e) {
    result.classList.add('error');
    result.innerHTML = `${title}<br>error: ${e instanceof Error ? e.message : 'unknown'}`;
  }
};

export const expect = (that: { [key: string]: unknown; expect: unknown }): void => {
  const value = head(values(omit(that, ['expect'])));

  log(that);

  testValue(value, that.expect);
};

const testValue = (value: unknown, expectedValue: unknown): void => {
  testThrow(typeof value, typeof expectedValue);

  if (Array.isArray(value) && Array.isArray(expectedValue)) {
    testThrow(value.length, expectedValue.length);

    expectedValue.map((expectedValueAtIndex, index) => {
      testValue(value[index], expectedValueAtIndex);
    });
  } else if (isPlainObject(value) && isPlainObject(expectedValue)) {
    Object.keys(expectedValue as object).map((expectedValueKeysAtIndex) => {
      testValue((value as never)[expectedValueKeysAtIndex], (expectedValue as never)[expectedValueKeysAtIndex]);
    });
  } else {
    testThrow(value, expectedValue);
  }
};

const testThrow = (value: unknown, expectedValue: unknown): void => {
  if (value !== expectedValue) {
    const message = `expect: ${String(expectedValue)}; got: ${String(value)}`;

    logError(message);

    throw new Error(message);
  }
};

const isPlainObject = require('lodash/isPlainObject');

const testThis = (testValue, expectedValue) => {
  expect(typeof testValue).toBe(typeof expectedValue);

  if (Array.isArray(expectedValue)) {
    expect(testValue.length).toBe(expectedValue.length);

    expectedValue.map((expectedValueAtIndex, index) => {
      testThis(testValue[index], expectedValueAtIndex);
    });
  } else if (isPlainObject(expectedValue)) {
    Object.keys(expectedValue).map((expectedValueKeysAtIndex) => {
      testThis(testValue[expectedValueKeysAtIndex], expectedValue[expectedValueKeysAtIndex]);
    });
  } else {
    expect(testValue).toBe(expectedValue);
  }
};

test('testThis', async () => {
  const source = ['a', 'b', 1];

  testThis(source, ['a', 'b', 1]);
});

module.exports = {
  testThis,
};

'use strict';

const { testThis } = require('./testThis');
const { filter } = require('..');

test('@drpiou/ts-utils:filter', async () => {
  const source = ['a', 'b', 1, null];

  const resultA = filter(source);
  const resultB = filter(source, (value) => typeof value !== 'number');

  testThis(source, ['a', 'b', 1, null]);
  testThis(resultA, ['a', 'b', 1]);
  testThis(resultB, ['a', 'b', null]);
});

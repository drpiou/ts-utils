'use strict';

const { testThis } = require('./testThis');
const { sort } = require('..');

test('@drpiou/ts-utils:sort', async () => {
  const source = ['b', 1, 'a', 3, 2];

  const resultA = sort(source);
  const resultB = sort(source, true);

  testThis(source, ['b', 'a', 3, 2, 1]);
  testThis(resultA, ['b', 'a', 3, 2, 1]);
  testThis(resultB, ['b', 'a', 3, 2, 1]);
});

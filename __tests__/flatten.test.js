'use strict';

const { testThis } = require('./testThis');
const { flatten } = require('..');

test('@drpiou/ts-utils:flatten', async () => {
  const source = ['a', 'b', [1], [['c', 2]]];

  const resultA = flatten(source);
  const resultB = flatten(source, true);

  testThis(source, ['a', 'b', [1], [['c', 2]]]);
  testThis(resultA, ['a', 'b', 1, ['c', 2]]);
  testThis(resultB, ['a', 'b', 1, 'c', 2]);
});

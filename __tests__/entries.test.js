'use strict';

const { testThis } = require('./testThis');
const { entries } = require('..');

test('@drpiou/ts-utils:entries', async () => {
  const source = ['a', 'b', 1];

  const result = entries(source);

  testThis(source, ['a', 'b', 1]);
  testThis(result, [
    [0, 'a'],
    [1, 'b'],
    [2, 1],
  ]);
});

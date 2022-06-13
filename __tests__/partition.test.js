'use strict';

const { testThis } = require('./testThis');
const { partition } = require('..');

test('@drpiou/ts-utils:partition', async () => {
  const source = ['a', 'b', 1];

  const result = partition(source, (value) => value === 'b');

  testThis(source, ['a', 'b', 1]);
  testThis(result, [['b'], ['a', 1]]);
});

'use strict';

const { testThis } = require('./testThis');
const { chunk } = require('..');

test('@drpiou/ts-utils:chunk', async () => {
  const source = ['a', 'b', 1];

  const result = chunk(source, 2);

  testThis(source, ['a', 'b', 1]);
  testThis(result, [['a', 'b'], [1]]);
});

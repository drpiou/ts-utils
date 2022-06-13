'use strict';

const { testThis } = require('./testThis');
const { keys } = require('..');

test('@drpiou/ts-utils:keys', async () => {
  const source = ['a', 'b', 1];

  const result = keys(source);

  testThis(source, ['a', 'b', 1]);
  testThis(result, [0, 1, 2]);
});

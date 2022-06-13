'use strict';

const { testThis } = require('./testThis');
const { every } = require('..');

test('@drpiou/ts-utils:every', async () => {
  const source = ['a', 'b', 1];

  const result = every(source, (value) => typeof value === 'string');

  testThis(source, ['a', 'b', 1]);
  testThis(result, false);
});

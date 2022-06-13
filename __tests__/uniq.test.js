'use strict';

const { testThis } = require('./testThis');
const { uniq } = require('..');

test('@drpiou/ts-utils:uniq', async () => {
  const source = ['a', 'b', 'a', 1];

  const result = uniq(source);

  testThis(source, ['a', 'b', 'a', 1]);
  testThis(result, ['a', 'b', 1]);
});

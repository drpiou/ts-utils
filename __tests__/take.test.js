'use strict';

const { testThis } = require('./testThis');
const { take } = require('..');

test('@drpiou/ts-utils:take', async () => {
  const source = ['a', 'b', 1];

  const result = take(source, 2);

  testThis(source, ['a', 'b', 1]);
  testThis(result, ['a', 'b']);
});

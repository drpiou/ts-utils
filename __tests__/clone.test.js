'use strict';

const { testThis } = require('./testThis');
const { clone } = require('..');

test('@drpiou/ts-utils:clone', async () => {
  const source = ['a', 'b', 1];

  const result = clone(source);

  source.push(2);
  result.push(3);

  testThis(source, ['a', 'b', 1, 2]);
  testThis(result, ['a', 'b', 1, 3]);
});

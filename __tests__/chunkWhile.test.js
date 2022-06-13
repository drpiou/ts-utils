'use strict';

const { testThis } = require('./testThis');
const { chunkWhile } = require('..');

test('@drpiou/ts-utils:chunkWhile', async () => {
  const source = ['a', 'b', 'a', 1];

  const result = chunkWhile(source, (item, index, chunk) => chunk.indexOf(item) > -1);

  testThis(source, ['a', 'b', 'a', 1]);
  testThis(result, [
    ['a', 'b'],
    ['a', 1],
  ]);
});

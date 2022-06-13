'use strict';

const { testThis } = require('./testThis');
const { last } = require('..');

test('@drpiou/ts-utils:last', async () => {
  const source = ['a', 'b', 1];

  const resultA = last(source);
  const resultB = last(source, (value) => typeof value === 'string');

  testThis(source, ['a', 'b', 1]);
  testThis(resultA, 1);
  testThis(resultB, 'b');
});

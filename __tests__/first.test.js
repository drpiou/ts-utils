'use strict';

const { testThis } = require('./testThis');
const { first } = require('..');

test('@drpiou/ts-utils:first', async () => {
  const source = ['a', 'b', 1];

  const resultA = first(source);
  const resultB = first(source, (value) => typeof value === 'number');

  testThis(source, ['a', 'b', 1]);
  testThis(resultA, 'a');
  testThis(resultB, 1);
});

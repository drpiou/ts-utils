'use strict';

const { testThis } = require('./testThis');
const { random } = require('..');

test('@drpiou/ts-utils:random', async () => {
  const source = ['a', 'b', 1];

  const resultA = random(source);
  const resultB = random(source, 2);

  testThis(source, ['a', 'b', 1]);
  testThis(resultA.length, 1);
  testThis(resultB.length, 2);
});

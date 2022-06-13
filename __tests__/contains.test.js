'use strict';

const { testThis } = require('./testThis');
const { contains } = require('..');

test('@drpiou/ts-utils:contains', async () => {
  const source = ['a', 'b', 1];

  const resultTrue = contains(source, (value) => value === 'b');
  const resultFalse = contains(source, (value) => value === 5);

  testThis(source, ['a', 'b', 1]);
  testThis(resultTrue, true);
  testThis(resultFalse, false);
});

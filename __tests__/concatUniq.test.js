'use strict';

const { testThis } = require('./testThis');
const { concatUniq } = require('..');

test('@drpiou/ts-utils:concatUniq', async () => {
  const source = ['a', 'b', 1];

  const result = concatUniq(source, ['a', 'z'], [2]);

  testThis(source, ['a', 'b', 1]);
  testThis(result, ['a', 'b', 1, 'z', 2]);
});

'use strict';

const { testThis } = require('./testThis');
const { invert } = require('..');

test('@drpiou/ts-utils:invert', async () => {
  const source = ['a', 'b', 1];

  const result = invert(source);

  testThis(source, ['a', 'b', 1]);
  testThis(result, [1, 'b', 'a']);
});

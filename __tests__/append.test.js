'use strict';

const { testThis } = require('./testThis');
const { append } = require('..');

test('@drpiou/ts-utils:append', async () => {
  const source = ['a', 'b', 1];

  const result = append(source, 'a', 'z', 2);

  testThis(source, ['a', 'b', 1]);
  testThis(result, ['a', 'b', 1, 'a', 'z', 2]);
});

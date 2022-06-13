'use strict';

const { testThis } = require('./testThis');
const { prepend } = require('..');

test('@drpiou/ts-utils:prepend', async () => {
  const source = ['a', 'b', 1];

  const result = prepend(source, 'a', 'z', 2);

  testThis(source, ['a', 'b', 1]);
  testThis(result, ['a', 'z', 2, 'a', 'b', 1]);
});

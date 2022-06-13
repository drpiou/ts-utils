'use strict';

const { testThis } = require('./testThis');
const { pushUniq } = require('..');

test('@drpiou/ts-utils:pushUniq', async () => {
  const source = ['a', 'b', 1];

  const result = pushUniq(source, 'a', 'z', 2);

  testThis(source, ['a', 'b', 1, 'z', 2]);
  testThis(result, ['a', 'b', 1, 'z', 2]);
});

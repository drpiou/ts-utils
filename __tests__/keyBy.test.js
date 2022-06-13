'use strict';

const { testThis } = require('./testThis');
const { keyBy } = require('..');

test('@drpiou/ts-utils:keyBy', async () => {
  const source = [{ a: 'a' }, { a: 'b' }, { a: 1 }];

  const result = keyBy(source, 'a');

  testThis(source, [{ a: 'a' }, { a: 'b' }, { a: 1 }]);
  testThis(result, { a: { a: 'a' }, b: { a: 'b' }, 1: { a: 1 } });
});

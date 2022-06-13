'use strict';

const { testThis } = require('./testThis');
const { uniqBy } = require('..');

test('@drpiou/ts-utils:uniqBy', async () => {
  const source = [{ a: 'a' }, { a: 'b' }, { a: 'a' }, { a: 1 }];

  const result = uniqBy(source, 'a');

  testThis(source, [{ a: 'a' }, { a: 'b' }, { a: 'a' }, { a: 1 }]);
  testThis(result, [{ a: 'a' }, { a: 'b' }, { a: 1 }]);
});

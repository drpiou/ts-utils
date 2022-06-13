'use strict';

const { testThis } = require('./testThis');
const { orderBy } = require('..');

test('@drpiou/ts-utils:orderBy', async () => {
  const source = [{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }];

  const resultA = orderBy(source, 'a');
  const resultB = orderBy(source, 'a', true);

  testThis(source, [{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }]);
  testThis(resultA, [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }]);
  testThis(resultB, [{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }]);
});

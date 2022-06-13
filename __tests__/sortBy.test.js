'use strict';

const { testThis } = require('./testThis');
const { sortBy } = require('..');

test('@drpiou/ts-utils:sortBy', async () => {
  const source = [{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }];

  const resultA = sortBy(source, 'a');
  const resultB = sortBy(source, 'a', true);

  testThis(source, [{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }]);
  testThis(resultA, [{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }]);
  testThis(resultB, [{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }]);
});

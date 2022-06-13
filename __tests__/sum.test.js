'use strict';

const { testThis } = require('./testThis');
const { sum } = require('..');

test('@drpiou/ts-utils:sum', async () => {
  const sourceA = ['a', 'b', 1, 2];
  const sourceB = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];

  const resultA = sum(sourceA);
  const resultB = sum(sourceB, 'a');

  testThis(sourceA, ['a', 'b', 1, 2]);
  testThis(sourceB, [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }]);
  testThis(resultA, 3);
  testThis(resultB, 3);
});

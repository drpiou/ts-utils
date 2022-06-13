'use strict';

const { testThis } = require('./testThis');
const { max } = require('..');

test('@drpiou/ts-utils:max', async () => {
  const sourceA = ['a', 'b', 1, 2];
  const sourceB = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];

  const resultA = max(sourceA);
  const resultB = max(sourceB, 'a');

  testThis(sourceA, ['a', 'b', 1, 2]);
  testThis(sourceB, [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }]);
  testThis(resultA, 2);
  testThis(resultB, 2);
});

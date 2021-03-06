'use strict';

const { testThis } = require('./testThis');
const { min } = require('..');

test('@drpiou/ts-utils:min', async () => {
  const sourceA = ['a', 'b', 1, 2];
  const sourceB = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];

  const resultA = min(sourceA);
  const resultB = min(sourceB, 'a');

  testThis(sourceA, ['a', 'b', 1, 2]);
  testThis(sourceB, [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }]);
  testThis(resultA, 1);
  testThis(resultB, 1);
});

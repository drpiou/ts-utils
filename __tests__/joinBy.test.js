'use strict';

const { testThis } = require('./testThis');
const { joinBy } = require('..');

test('@drpiou/ts-utils:joinBy', async () => {
  const source = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];

  const resultA = joinBy(source, 'a');
  const resultB = joinBy(source, 'a', '$');
  const resultC = joinBy(source, 'a', '_', { first: '-' });
  const resultD = joinBy(source, 'a', '!', { last: '?' });
  const resultE = joinBy(source, 'a', '.', { first: ':', last: ';' });

  testThis(source, [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }]);
  testThis(resultA, 'ab12');
  testThis(resultB, 'a$b$1$2');
  testThis(resultC, 'a-b_1_2');
  testThis(resultD, 'a!b!1?2');
  testThis(resultE, 'a:b.1;2');
});

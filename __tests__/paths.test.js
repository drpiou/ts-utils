'use strict';

const { testThis } = require('./testThis');
const { paths } = require('..');

test('@drpiou/ts-utils:paths', () => {
  const source = { a: 1, b: { c: 2 } };

  const result = paths(source);

  testThis(source, { a: 1, b: { c: 2 } });
  testThis(result, ['a', 'b', 'b.c']);
});

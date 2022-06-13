'use strict';

const { testThis } = require('./testThis');
const { withoutProperties } = require('..');

test('@drpiou/ts-utils:usleep', () => {
  const source = { a: 1, b: 2 };

  const result = withoutProperties(source, ['b']);

  testThis(source, { a: 1, b: 2 });
  testThis(result, { a: 1 });
});

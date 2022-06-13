'use strict';

const { testThis } = require('./testThis');
const { usleep } = require('..');

test('@drpiou/ts-utils:usleep', async () => {
  const from = Date.now();

  await usleep(100);

  const time = Date.now() - from;

  const result = time >= 99;

  testThis(result, true);
});

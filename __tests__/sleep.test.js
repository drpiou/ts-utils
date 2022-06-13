'use strict';

const { testThis } = require('./testThis');
const { sleep } = require('..');

test('@drpiou/ts-utils:sleep', async () => {
  const from = Date.now();

  await sleep(0.1);

  const time = Date.now() - from;

  const result = time >= 99;

  testThis(result, true);
});

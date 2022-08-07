'use strict';

import { join } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'join', () => {
    const source = ['a', 'b', 1, 2];

    const resultA = join(source);
    const resultB = join(source, '$');
    const resultC = join(source, '_', { first: '-' });
    const resultD = join(source, '!', { last: '?' });
    const resultE = join(source, '.', { first: ':', last: ';' });

    testThis(source, ['a', 'b', 1, 2]);
    testThis(resultA, 'ab12');
    testThis(resultB, 'a$b$1$2');
    testThis(resultC, 'a-b_1_2');
    testThis(resultD, 'a!b!1?2');
    testThis(resultE, 'a:b.1;2');
  });
};

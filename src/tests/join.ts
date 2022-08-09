'use strict';

import { join } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'join', () => {
    const source = ['a', 'b', 1, 2];

    const resultA = join(source);
    const resultB = join(source, '$');
    const resultC = join(source, '_', { first: '-' });
    const resultD = join(source, '!', { last: '?' });
    const resultE = join(source, '.', { first: ':', last: ';' });

    testThis({ source, expect: ['a', 'b', 1, 2] });
    testThis({ resultA, expect: 'ab12' });
    testThis({ resultB, expect: 'a$b$1$2' });
    testThis({ resultC, expect: 'a-b_1_2' });
    testThis({ resultD, expect: 'a!b!1?2' });
    testThis({ resultE, expect: 'a:b.1;2' });
  });
};

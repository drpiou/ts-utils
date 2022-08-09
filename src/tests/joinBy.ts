'use strict';

import { joinBy } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'joinBy', () => {
    const source = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];

    const resultA = joinBy(source, 'a');
    const resultB = joinBy(source, 'a', '$');
    const resultC = joinBy(source, 'a', '_', { first: '-' });
    const resultD = joinBy(source, 'a', '!', { last: '?' });
    const resultE = joinBy(source, 'a', '.', { first: ':', last: ';' });

    testThis({ source, expect: [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }] });
    testThis({ resultA, expect: 'ab12' });
    testThis({ resultB, expect: 'a$b$1$2' });
    testThis({ resultC, expect: 'a-b_1_2' });
    testThis({ resultD, expect: 'a!b!1?2' });
    testThis({ resultE, expect: 'a:b.1;2' });
  });
};

'use strict';

import { joinBy } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'joinBy', () => {
    const source = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];

    const resultA = joinBy(source, 'a');
    const resultB = joinBy(source, 'a', '$');
    const resultC = joinBy(source, 'a', '_', { first: '-' });
    const resultD = joinBy(source, 'a', '!', { last: '?' });
    const resultE = joinBy(source, 'a', '.', { first: ':', last: ';' });

    expect({ source, expect: [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }] });
    expect({ resultA, expect: 'ab12' });
    expect({ resultB, expect: 'a$b$1$2' });
    expect({ resultC, expect: 'a-b_1_2' });
    expect({ resultD, expect: 'a!b!1?2' });
    expect({ resultE, expect: 'a:b.1;2' });
  });
};

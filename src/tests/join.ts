'use strict';

import { join } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'join', () => {
    const source = ['a', 'b', 1, 2];

    const resultA = join(source);
    const resultB = join(source, '$');
    const resultC = join(source, '_', { first: '-' });
    const resultD = join(source, '!', { last: '?' });
    const resultE = join(source, '.', { first: ':', last: ';' });

    expect({ source, expect: ['a', 'b', 1, 2] });
    expect({ resultA, expect: 'ab12' });
    expect({ resultB, expect: 'a$b$1$2' });
    expect({ resultC, expect: 'a-b_1_2' });
    expect({ resultD, expect: 'a!b!1?2' });
    expect({ resultE, expect: 'a:b.1;2' });
  });
};

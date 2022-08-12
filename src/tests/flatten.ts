'use strict';

import { flatten } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'flatten', () => {
    const source = ['a', 'b', [1], [['c', 2]]];

    const resultA = flatten(source);
    const resultB = flatten(source, true);

    expect({ source, expect: ['a', 'b', [1], [['c', 2]]] });
    expect({ resultA, expect: ['a', 'b', 1, ['c', 2]] });
    expect({ resultB, expect: ['a', 'b', 1, 'c', 2] });
  });
};

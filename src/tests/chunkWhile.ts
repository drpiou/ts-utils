'use strict';

import { chunkWhile } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'chunkWhile', () => {
    const source = ['a', 'b', 'a', 1];

    const result = chunkWhile(source, (item, _index, chunk) => chunk.indexOf(item) > -1);

    expect({ source, expect: ['a', 'b', 'a', 1] });
    expect({
      result,
      expect: [
        ['a', 'b'],
        ['a', 1],
      ],
    });
  });
};

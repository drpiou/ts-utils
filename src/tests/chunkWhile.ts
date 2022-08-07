'use strict';

import { chunkWhile } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'chunkWhile', () => {
    const source = ['a', 'b', 'a', 1];

    const result = chunkWhile(source, (item, _index, chunk) => chunk.indexOf(item) > -1);

    testThis(source, ['a', 'b', 'a', 1]);
    testThis(result, [
      ['a', 'b'],
      ['a', 1],
    ]);
  });
};

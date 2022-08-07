'use strict';

import { Collection, isCollection } from '../../lib';
import { expect } from './expect';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'collect', () => {
    const source = ['a', 'b', 1];
    const sourceObject = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];

    let result = new Collection(source);
    let resultObject = new Collection(sourceObject);

    expect(typeof result, 'object');
    expect(result instanceof Collection, true);
    expect(isCollection(result), true);

    const allA = result.all();

    testThis(result.all(), ['a', 'b', 1]);
    testThis(allA, ['a', 'b', 1]);

    const appendA = result.append(2).all();

    testThis(result.all(), ['a', 'b', 1]);
    testThis(appendA, ['a', 'b', 1, 2]);

    const atA = result.at(0);

    testThis(result.all(), ['a', 'b', 1]);
    testThis(atA, 'a');

    const chunkA = result.chunk(2).allDeep();

    testThis(result.all(), ['a', 'b', 1]);
    testThis(chunkA, [['a', 'b'], [1]]);

    const sliceA = result.splice(2, 0, 'a').all();

    testThis(result.all(), ['a', 'b', 'a', 1]);
    testThis(sliceA, ['a', 'b', 'a', 1]);

    const containsA = result.contains((value) => value === 'b');

    testThis(result.all(), ['a', 'b', 'a', 1]);
    testThis(containsA, true);

    const chunkWhileA = result.chunkWhile((item, _index, chunk) => chunk.contains((value) => value === item)).allDeep();

    testThis(result.all(), ['a', 'b', 'a', 1]);
    testThis(chunkWhileA, [
      ['a', 'b'],
      ['a', 1],
    ]);

    const cloneA = result.clone().all();

    result.push(2);
    cloneA.push(3);

    testThis(result.all(), ['a', 'b', 'a', 1, 2]);
    testThis(cloneA, ['a', 'b', 'a', 1, 3]);

    const concatA = result.concat(['z', 3], [4]).all();

    testThis(result.all(), ['a', 'b', 'a', 1, 2]);
    testThis(concatA, ['a', 'b', 'a', 1, 2, 'z', 3, 4]);

    const concatUniqA = result.concatUniq(['a', 'z', 3], [4]).all();

    testThis(result.all(), ['a', 'b', 'a', 1, 2]);
    testThis(concatUniqA, ['a', 'b', 'a', 1, 2, 'z', 3, 4]);

    const countA = result.count();

    testThis(result.all(), ['a', 'b', 'a', 1, 2]);
    testThis(countA, 5);

    const eachA = result.each(() => 3).all();

    testThis(result.all(), ['a', 'b', 'a', 1, 2]);
    testThis(eachA, ['a', 'b', 'a', 1, 2]);

    const entriesA = result.entries();

    testThis(result.all(), ['a', 'b', 'a', 1, 2]);
    testThis(entriesA, [
      [0, 'a'],
      [1, 'b'],
      [2, 'a'],
      [3, 1],
      [4, 2],
    ]);

    const everyA = result.every((value) => typeof value === 'string');

    testThis(result.all(), ['a', 'b', 'a', 1, 2]);
    testThis(everyA, false);

    const pushA = result.push(null).all();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(pushA, ['a', 'b', 'a', 1, 2, null]);

    const pushUniqA = result.pushUniq(null).all();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(pushUniqA, ['a', 'b', 'a', 1, 2, null]);

    const filterA = result.filter().all();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(filterA, ['a', 'b', 'a', 1, 2]);

    const filterB = result.filter((value) => typeof value !== 'number').all();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(filterB, ['a', 'b', 'a', null]);

    const firstA = result.first();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(firstA, 'a');

    const firstB = result.first((value) => typeof value === 'number');

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(firstB, 1);

    const flattenA = result
      .append([3, 4], [['c', 5], 6])
      .flatten()
      .all();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(flattenA, ['a', 'b', 'a', 1, 2, null, 3, 4, ['c', 5], 6]);

    const flattenB = result
      .append([3, 4], [['c', 5], 6])
      .flatten(true)
      .all();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(flattenB, ['a', 'b', 'a', 1, 2, null, 3, 4, 'c', 5, 6]);

    const invertA = result.invert().all();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(invertA, [null, 2, 1, 'a', 'b', 'a']);

    const joinA = result.join();
    const joinB = result.join('$');
    const joinC = result.join('_', { first: '-' });
    const joinD = result.join('!', { last: '?' });
    const joinE = result.join('.', { first: ':', last: ';' });

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(joinA, 'aba12null');
    testThis(joinB, 'a$b$a$1$2$null');
    testThis(joinC, 'a-b_a_1_2_null');
    testThis(joinD, 'a!b!a!1!2?null');
    testThis(joinE, 'a:b.a.1.2;null');

    const joinF = resultObject.joinBy('a');
    const joinG = resultObject.joinBy('a', '$');
    const joinH = resultObject.joinBy('a', '_', { first: '-' });
    const joinI = resultObject.joinBy('a', '!', { last: '?' });
    const joinJ = resultObject.joinBy('a', '.', { first: ':', last: ';' });

    testThis(resultObject.all(), [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }]);
    testThis(joinF, 'ab12');
    testThis(joinG, 'a$b$1$2');
    testThis(joinH, 'a-b_1_2');
    testThis(joinI, 'a!b!1?2');
    testThis(joinJ, 'a:b.1;2');

    const keyByA = resultObject.keyBy('a');

    testThis(resultObject.all(), [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }]);
    testThis(keyByA, { a: { a: 'a' }, b: { a: 'b' }, 1: { a: 1 }, 2: { a: 2 } });

    const keysA = result.keys();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(keysA, [0, 1, 2, 3, 4, 5]);

    const lastA = result.last();
    const lastB = result.last((value) => typeof value === 'number');

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(lastA, null);
    testThis(lastB, 2);

    const mapA = result.map(() => 3).all();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(mapA, [3, 3, 3, 3, 3, 3]);

    const maxA = result.max();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(maxA, 2);

    const maxB = resultObject.max('a');

    testThis(resultObject.all(), [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }]);
    testThis(maxB, 2);

    const minA = result.min();

    testThis(result.all(), ['a', 'b', 'a', 1, 2, null]);
    testThis(minA, 1);

    const minB = resultObject.min('a');

    testThis(resultObject.all(), [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }]);
    testThis(minB, 1);

    result = new Collection(['a', 'b', 'a', 2]);

    const unshiftA = result.unshift('z', 3).all();

    testThis(result.all(), ['z', 3, 'a', 'b', 'a', 2]);
    testThis(unshiftA, ['z', 3, 'a', 'b', 'a', 2]);

    const orderA = result.order().all();

    testThis(result.all(), ['z', 3, 'a', 'b', 'a', 2]);
    testThis(orderA, [2, 3, 'a', 'a', 'b', 'z']);

    const orderB = result.order(true).all();

    testThis(result.all(), ['z', 3, 'a', 'b', 'a', 2]);
    testThis(orderB, ['z', 'b', 'a', 'a', 3, 2]);

    resultObject = new Collection([{ a: 2 }, { a: 'b' }, { a: 'a' }, { a: 1 }]);

    const orderC = resultObject.orderBy('a').all();

    testThis(resultObject.all(), [{ a: 2 }, { a: 'b' }, { a: 'a' }, { a: 1 }]);
    testThis(orderC, [{ a: 1 }, { a: 2 }, { a: 'a' }, { a: 'b' }]);

    const orderD = resultObject.orderBy('a', true).all();

    testThis(resultObject.all(), [{ a: 2 }, { a: 'b' }, { a: 'a' }, { a: 1 }]);
    testThis(orderD, [{ a: 'b' }, { a: 'a' }, { a: 2 }, { a: 1 }]);

    const spliceA = result.splice(0, 2).all();
    const spliceB = result.splice(2, 1).all();
    const spliceC = result.splice(2, 0, 1).all();

    testThis(result.all(), ['a', 'b', 1, 2]);
    testThis(spliceA, ['a', 'b', 1, 2]);
    testThis(spliceB, ['a', 'b', 1, 2]);
    testThis(spliceC, ['a', 'b', 1, 2]);

    const padA = result.pad(6, 0).all();
    const padB = result.pad(-6, 0).all();

    testThis(result.all(), ['a', 'b', 1, 2]);
    testThis(padA, ['a', 'b', 1, 2, 0, 0]);
    testThis(padB, [0, 0, 'a', 'b', 1, 2]);

    const [partitionA, partitionB] = result.partition((value) => value === 'b');

    testThis(result.all(), ['a', 'b', 1, 2]);
    testThis(partitionA.all(), ['b']);
    testThis(partitionB.all(), ['a', 1, 2]);

    const popA = result.pop();

    testThis(result.all(), ['a', 'b', 1]);
    testThis(popA, 2);

    const prependA = result.prepend('z').all();

    testThis(result.all(), ['a', 'b', 1]);
    testThis(prependA, ['z', 'a', 'b', 1]);

    const randomA = result.random().all();
    const randomB = result.random(2).all();
    const randomC = result.random(5).all();
    const randomD = result.random(5, true).all();

    testThis(result.all(), ['a', 'b', 1]);
    expect(typeof randomA, 'object');
    expect(randomA.length, 1);
    expect(typeof randomB, 'object');
    expect(randomB.length, 2);
    expect(typeof randomC, 'object');
    expect(randomC.length, 5);
    expect(typeof randomD, 'object');
    expect(randomD.length, 3);

    const reduceA = result.reduce((acc, value) => typeof value === 'number' && value + acc, 0);

    testThis(result.all(), ['a', 'b', 1]);
    testThis(reduceA, 1);

    const reverseA = result.reverse().all();

    testThis(result.all(), [1, 'b', 'a']);
    testThis(reverseA, [1, 'b', 'a']);

    const shiftA = result.shift();

    testThis(result.all(), ['b', 'a']);
    testThis(shiftA, 1);

    const shuffleA = result.shuffle().all();

    expect(typeof result.all(), 'object');
    expect(result.all().length, 2);
    expect(typeof shuffleA, 'object');
    expect(shuffleA.length, 2);

    result = new Collection(['z', 'b', 'a', 2, 1]);

    const sortA = result.sort().all();

    testThis(result.all(), [1, 2, 'a', 'b', 'z']);
    testThis(sortA, [1, 2, 'a', 'b', 'z']);

    const sortB = result.sort(true).all();

    testThis(result.all(), ['z', 'b', 'a', 2, 1]);
    testThis(sortB, ['z', 'b', 'a', 2, 1]);

    resultObject = new Collection([{ a: 2 }, { a: 'b' }, { a: 'a' }, { a: 1 }]);

    const sortC = resultObject.sortBy('a').all();

    testThis(resultObject.all(), [{ a: 1 }, { a: 2 }, { a: 'a' }, { a: 'b' }]);
    testThis(sortC, [{ a: 1 }, { a: 2 }, { a: 'a' }, { a: 'b' }]);

    const sortD = resultObject.sortBy('a', true).all();

    testThis(resultObject.all(), [{ a: 'b' }, { a: 'a' }, { a: 2 }, { a: 1 }]);
    testThis(sortD, [{ a: 'b' }, { a: 'a' }, { a: 2 }, { a: 1 }]);

    const sumA = result.sum();

    testThis(result.all(), ['z', 'b', 'a', 2, 1]);
    testThis(sumA, 3);

    const sumB = resultObject.sum('a');

    testThis(resultObject.all(), [{ a: 'b' }, { a: 'a' }, { a: 2 }, { a: 1 }]);
    testThis(sumB, 3);

    const takeA = result.take(2).all();

    testThis(result.all(), ['z', 'b', 'a', 2, 1]);
    testThis(takeA, ['z', 'b']);

    const transformA = result.transform(() => 3).all();

    testThis(result.all(), [3, 3, 3, 3, 3]);
    testThis(transformA, [3, 3, 3, 3, 3]);

    const transformB = resultObject.transform(() => ({ a: 3 })).all();

    testThis(resultObject.all(), [{ a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }]);
    testThis(transformB, [{ a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }]);

    const uniqA = result.uniq().all();

    testThis(result.all(), [3, 3, 3, 3, 3]);
    testThis(uniqA, [3]);

    const uniqB = resultObject.uniqBy('a').all();

    testThis(resultObject.all(), [{ a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }]);
    testThis(uniqB, [{ a: 3 }]);
  });
};

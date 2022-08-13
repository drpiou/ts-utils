'use strict';

import { collect, isCollection } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'collect', () => {
    const sourceString = ['a', 'b'];
    const sourceNumber = [1, 2];
    const sourceObjectString = [{ a: 'a' }, { a: 'b' }];
    const sourceObjectNumber = [{ a: 1 }, { a: 2 }];

    const collectionString = collect(sourceString);
    const collectionNumber = collect(sourceNumber);
    const collectionObjectString = collect(sourceObjectString);
    const collectionObjectNumber = collect(sourceObjectNumber);

    expect({ collect: typeof collectionString, expect: 'object' });
    expect({ isCollection: isCollection(collectionString), expect: true });

    void test(app, 'collect:all', () => {
      const collectionTest = collectionString.clone();
      const allA = collectionTest.all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ allA, expect: ['a', 'b'] });
    });

    void test(app, 'collect:allDeep', () => {
      const collectionTest = collect().append(collectionString.clone());
      const allA = collectionTest.allDeep();

      expect({ allA, expect: [['a', 'b']] });
    });

    void test(app, 'collect:append', () => {
      const collectionTest = collectionString.clone();
      const appendA = collectionTest.append<string | number>('c', 1).all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ appendA, expect: ['a', 'b', 'c', 1] });
    });

    void test(app, 'collect:at', () => {
      const collectionTest = collectionString.clone();
      const atA = collectionTest.at(0);

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ atA, expect: 'a' });
    });

    void test(app, 'collect:chunk', () => {
      const collectionTest = collectionString.clone();
      const chunkA = collectionTest.chunk(1).allDeep();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ chunkA, expect: [['a'], ['b']] });
    });

    void test(app, 'collect:chunkWhile', () => {
      const collectionTest = collectionString.clone();
      const chunkWhileA = collectionTest.chunkWhile((item) => item === 'b').allDeep();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ chunkWhileA, expect: [['a'], ['b']] });
    });

    void test(app, 'collect:clone', () => {
      const collectionTest = collectionString.clone();
      const cloneA = collectionTest.clone();

      collectionTest.push('d');
      cloneA.push('e');

      expect({ collection: collectionTest.all(), expect: ['a', 'b', 'd'] });
      expect({ cloneA: cloneA.all(), expect: ['a', 'b', 'e'] });
    });

    void test(app, 'collect:concat', () => {
      const collectionTest = collectionString.clone();
      const concatA = collectionTest.concat<string | number>(['a', 'z'], [1]).all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ concatA, expect: ['a', 'b', 'a', 'z', 1] });
    });

    void test(app, 'collect:concatUniq', () => {
      const collectionTest = collectionString.clone();
      const concatUniqA = collectionTest.concatUniq<string | number>(['a', 'z'], [1]).all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ concatUniqA, expect: ['a', 'b', 'z', 1] });
    });

    void test(app, 'collect:contains', () => {
      const collectionTest = collectionString.clone();
      const containsA = collectionTest.contains((value) => value === 'b');

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ containsA, expect: true });
    });

    void test(app, 'collect:count', () => {
      const collectionTest = collectionString.clone();
      const countA = collectionTest.count();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ countA, expect: 2 });
    });

    void test(app, 'collect:each', () => {
      const collectionTest = collectionString.clone();
      const eachA = collectionTest.each(() => 3).all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ eachA, expect: ['a', 'b'] });
    });

    void test(app, 'collect:entries', () => {
      const collectionTest = collectionString.clone();
      const entriesA = collectionTest.entries();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({
        entriesA,
        expect: [
          [0, 'a'],
          [1, 'b'],
        ],
      });
    });

    void test(app, 'collect:every', () => {
      const collectionTest = collectionString.clone();
      const everyA = collectionTest.every((value) => value === 'a');

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ everyA, expect: false });
    });

    void test(app, 'collect:filter', () => {
      const collectionTest = collectionString.clone().append('');
      const filterA = collectionTest.filter().all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b', ''] });
      expect({ filterA, expect: ['a', 'b'] });
    });

    void test(app, 'collect:filter:callback', () => {
      const collectionTest = collectionString.clone().append('');
      const filterA = collectionTest.filter((value) => value !== 'a').all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b', ''] });
      expect({ filterA, expect: ['b', ''] });
    });

    void test(app, 'collect:first', () => {
      const collectionTest = collectionString.clone();
      const firstA = collectionTest.first();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ firstA, expect: 'a' });
    });

    void test(app, 'collect:first:callback', () => {
      const collectionTest = collectionString.clone().append('');
      const firstB = collectionTest.first((value) => !value);

      expect({ collection: collectionTest.all(), expect: ['a', 'b', ''] });
      expect({ firstB, expect: '' });
    });

    void test(app, 'collect:flatten', () => {
      const collectionTest = collectionString.clone();
      const flattenA = collectionTest
        .append([3, 4], [['c', 5], 6])
        .flatten()
        .all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ flattenA, expect: ['a', 'b', 3, 4, ['c', 5], 6] });
    });

    void test(app, 'collect:flatten:deep', () => {
      const collectionTest = collectionString.clone();
      const flattenA = collectionTest
        .append([3, 4], [['c', 5], 6])
        .flatten(true)
        .all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ flattenA, expect: ['a', 'b', 3, 4, 'c', 5, 6] });
    });

    void test(app, 'collect:invert', () => {
      const collectionTest = collectionString.clone();
      const invertA = collectionTest.invert().all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ invertA, expect: ['b', 'a'] });
    });

    void test(app, 'collect:join', () => {
      const collectionTest = collectionString.clone().append('c', 'd', '', 'z');
      const joinA = collectionTest.join();
      const joinB = collectionTest.join('$');
      const joinC = collectionTest.join('_', { first: '-' });
      const joinD = collectionTest.join('!', { last: '?' });
      const joinE = collectionTest.join('.', { first: ':', last: ';' });

      expect({ collection: collectionTest.all(), expect: ['a', 'b', 'c', 'd', '', 'z'] });
      expect({ joinA, expect: 'abcdz' });
      expect({ joinB, expect: 'a$b$c$d$$z' });
      expect({ joinC, expect: 'a-b_c_d__z' });
      expect({ joinD, expect: 'a!b!c!d!?z' });
      expect({ joinE, expect: 'a:b.c.d.;z' });
    });

    void test(app, 'collect:joinBy', () => {
      const collectionTest = collectionObjectString.clone().append({ a: 'c' }, { a: 'd' }, { a: '' }, { a: 'z' });
      const joinA = collectionTest.joinBy('a');
      const joinB = collectionTest.joinBy('a', '$');
      const joinC = collectionTest.joinBy('a', '_', { first: '-' });
      const joinD = collectionTest.joinBy('a', '!', { last: '?' });
      const joinE = collectionTest.joinBy('a', '.', { first: ':', last: ';' });

      expect({
        collection: collectionTest.all(),
        expect: [{ a: 'a' }, { a: 'b' }, { a: 'c' }, { a: 'd' }, { a: '' }, { a: 'z' }],
      });
      expect({ joinA, expect: 'abcdz' });
      expect({ joinB, expect: 'a$b$c$d$$z' });
      expect({ joinC, expect: 'a-b_c_d__z' });
      expect({ joinD, expect: 'a!b!c!d!?z' });
      expect({ joinE, expect: 'a:b.c.d.;z' });
    });

    void test(app, 'collect:keyBy', () => {
      const collectionTest = collectionObjectString.clone();
      const keyByA = collectionTest.keyBy('a');

      expect({ collection: collectionTest.all(), expect: [{ a: 'a' }, { a: 'b' }] });
      expect({ keyByA, expect: { a: { a: 'a' }, b: { a: 'b' } } });
    });

    void test(app, 'collect:keys', () => {
      const collectionTest = collectionString.clone();
      const keysA = collectionTest.keys();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ keysA, expect: [0, 1] });
    });

    void test(app, 'collect:last', () => {
      const collectionTest = collectionString.clone().append('');
      const lastA = collectionTest.last();
      const lastB = collectionTest.last((value) => !!value);

      expect({ collection: collectionTest.all(), expect: ['a', 'b', ''] });
      expect({ lastA, expect: '' });
      expect({ lastB, expect: 'b' });
    });

    void test(app, 'collect:map', () => {
      const collectionTest = collectionString.clone();
      const mapA = collectionTest.map(() => 3).all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ mapA, expect: [3, 3] });
    });

    void test(app, 'collect:max', () => {
      const collectionTest = collectionNumber.clone();
      const maxA = collectionTest.max();

      expect({ collection: collectionTest.all(), expect: [1, 2] });
      expect({ maxA, expect: 2 });
    });

    void test(app, 'collect:max:key', () => {
      const collectionTest = collectionObjectNumber.clone();
      const maxB = collectionTest.max('a');

      expect({ collection: collectionTest.all(), expect: [{ a: 1 }, { a: 2 }] });
      expect({ maxB, expect: 2 });
    });

    void test(app, 'collect:min', () => {
      const collectionTest = collectionNumber.clone();
      const minA = collectionTest.min();

      expect({ collection: collectionTest.all(), expect: [1, 2] });
      expect({ minA, expect: 1 });
    });

    void test(app, 'collect:min:key', () => {
      const collectionTest = collectionObjectNumber.clone();
      const minB = collectionTest.min('a');

      expect({ collection: collectionTest.all(), expect: [{ a: 1 }, { a: 2 }] });
      expect({ minB, expect: 1 });
    });

    void test(app, 'collect:order', () => {
      const collectionTest = collectionString.clone().prepend('z');
      const orderA = collectionTest.order().all();

      expect({ collection: collectionTest.all(), expect: ['z', 'a', 'b'] });
      expect({ orderA, expect: ['a', 'b', 'z'] });
    });

    void test(app, 'collect:order:revers', () => {
      const collectionTest = collectionString.clone().prepend('z');
      const orderB = collectionTest.order(true).all();

      expect({ collection: collectionTest.all(), expect: ['z', 'a', 'b'] });
      expect({ orderB, expect: ['z', 'b', 'a'] });
    });

    void test(app, 'collect:orderBy', () => {
      const collectionTest = collectionObjectString.clone().prepend({ a: 'z' });
      const orderC = collectionTest.orderBy('a').all();

      expect({ collection: collectionTest.all(), expect: [{ a: 'z' }, { a: 'a' }, { a: 'b' }] });
      expect({ orderC, expect: [{ a: 'a' }, { a: 'b' }, { a: 'z' }] });
    });

    void test(app, 'collect:orderBy:reverse', () => {
      const collectionTest = collectionObjectString.clone().prepend({ a: 'z' });
      const orderD = collectionTest.orderBy('a', true).all();

      expect({ collection: collectionTest.all(), expect: [{ a: 'z' }, { a: 'a' }, { a: 'b' }] });
      expect({ orderD, expect: [{ a: 'z' }, { a: 'b' }, { a: 'a' }] });
    });

    void test(app, 'collect:pad', () => {
      const collectionTest = collectionString.clone();
      const padA = collectionTest.pad(collectionTest.count() + 2, 0).all();
      const padB = collectionTest.pad(0 - (collectionTest.count() + 2), 0).all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ padA, expect: ['a', 'b', 0, 0] });
      expect({ padB, expect: [0, 0, 'a', 'b'] });
    });

    void test(app, 'collect:partition', () => {
      const collectionTest = collectionString.clone();
      const [partitionA, partitionB] = collectionTest.partition((value) => value === 'b');

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ partitionA: partitionA.all(), expect: ['b'] });
      expect({ partitionB: partitionB.all(), expect: ['a'] });
    });

    void test(app, 'collect:pop', () => {
      const collectionTest = collectionString.clone();
      const popA = collectionTest.pop();

      expect({ collection: collectionTest.all(), expect: ['a'] });
      expect({ popA, expect: 'b' });
    });

    void test(app, 'collect:prepend', () => {
      const collectionTest = collectionString.clone();
      const prependA = collectionTest.prepend('z').all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ prependA, expect: ['z', 'a', 'b'] });
    });

    void test(app, 'collect:push', () => {
      const collectionTest = collectionString.clone();
      const pushA = collectionTest.push('a', 'z').all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b', 'a', 'z'] });
      expect({ pushA, expect: ['a', 'b', 'a', 'z'] });
    });

    void test(app, 'collect:pushUniq', () => {
      const collectionTest = collectionString.clone();
      const pushUniqA = collectionTest.pushUniq('a', 'z').all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b', 'z'] });
      expect({ pushUniqA, expect: ['a', 'b', 'z'] });
    });

    void test(app, 'collect:random', () => {
      const collectionTest = collectionString.clone();
      const randomA = collectionTest.random().all();
      const randomB = collectionTest.random(5).all();
      const randomC = collectionTest.random(5, true).all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ randomA: typeof randomA, expect: 'object' });
      expect({ randomALength: randomA.length, expect: 1 });
      expect({ randomB: typeof randomB, expect: 'object' });
      expect({ randomBLength: randomB.length, expect: 5 });
      expect({ randomC: typeof randomC, expect: 'object' });
      expect({ randomCLength: randomC.length, expect: 2 });
    });

    void test(app, 'collect:reduce', () => {
      const collectionTest = collectionString.clone().append('');
      const reduceA = collectionTest.reduce((acc, value) => acc + (value ? 1 : 0), 0);

      expect({ collection: collectionTest.all(), expect: ['a', 'b', ''] });
      expect({ reduceA, expect: 2 });
    });

    void test(app, 'collect:reverse', () => {
      const collectionTest = collectionString.clone();
      const reverseA = collectionTest.reverse().all();

      expect({ collection: collectionTest.all(), expect: ['b', 'a'] });
      expect({ reverseA, expect: ['b', 'a'] });
    });

    void test(app, 'collect:shift', () => {
      const collectionTest = collectionString.clone();
      const shiftA = collectionTest.shift();

      expect({ collection: collectionTest.all(), expect: ['b'] });
      expect({ shiftA, expect: 'a' });
    });

    void test(app, 'collect:shuffle', () => {
      const collectionTest = collectionString.clone();
      const shuffleA = collectionTest.shuffle().all();

      expect({ shuffleA: typeof shuffleA, expect: 'object' });
      expect({ shuffleALength: shuffleA.length, expect: 2 });
      expect({ shuffleAA: shuffleA.indexOf('a') >= 0, expect: true });
      expect({ shuffleAB: shuffleA.indexOf('b') >= 0, expect: true });
    });

    void test(app, 'collect:slice', () => {
      const collectionTest = collectionString.clone();
      const sliceA = collectionTest.slice(1).all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ sliceA, expect: ['b'] });
    });

    void test(app, 'collect:sort', () => {
      const collectionTest = collectionString.clone();
      const sortA = collectionTest.sort().all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ sortA, expect: ['a', 'b'] });
    });

    void test(app, 'collect:sort:reverse', () => {
      const collectionTest = collectionString.clone();
      const sortB = collectionTest.sort(true).all();

      expect({ collection: collectionTest.all(), expect: ['b', 'a'] });
      expect({ sortB, expect: ['b', 'a'] });
    });

    void test(app, 'collect:sortBy', () => {
      const collectionTest = collectionObjectString.clone();
      const sortC = collectionTest.sortBy('a').all();

      expect({ collection: collectionTest.all(), expect: [{ a: 'a' }, { a: 'b' }] });
      expect({ sortC, expect: [{ a: 'a' }, { a: 'b' }] });
    });

    void test(app, 'collect:sortBy:reverse', () => {
      const collectionTest = collectionObjectString.clone();
      const sortD = collectionTest.sortBy('a', true).all();

      expect({ collection: collectionTest.all(), expect: [{ a: 'b' }, { a: 'a' }] });
      expect({ sortD, expect: [{ a: 'b' }, { a: 'a' }] });
    });

    void test(app, 'collect:splice', () => {
      const collectionTest = collectionString.clone();
      const spliceA = collectionTest.splice(1, 0, ['x', 'z']).all();

      expect({ spliceA, expect: ['a', 'x', 'z', 'b'] });

      const spliceB = collectionTest.splice(1, 1).all();

      expect({ spliceB, expect: ['a', 'z', 'b'] });

      const spliceC = collectionTest.splice(1, 1, ['']).all();

      expect({ collection: collectionTest.all(), expect: ['a', '', 'b'] });
      expect({ spliceC, expect: ['a', '', 'b'] });
    });

    void test(app, 'collect:sum', () => {
      const collectionTest = collectionNumber.clone();
      const sumA = collectionTest.sum();

      expect({ collection: collectionTest.all(), expect: [1, 2] });
      expect({ sumA, expect: 3 });
    });

    void test(app, 'collect:sum:key', () => {
      const collectionTest = collectionObjectNumber.clone();
      const sumB = collectionTest.sum('a');

      expect({ collection: collectionTest.all(), expect: [{ a: 1 }, { a: 2 }] });
      expect({ sumB, expect: 3 });
    });

    void test(app, 'collect:take', () => {
      const collectionTest = collectionString.clone();
      const takeA = collectionTest.take(1).all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b'] });
      expect({ takeA, expect: ['a'] });
    });

    void test(app, 'collect:transform', () => {
      const collectionTest = collectionString.clone();
      const transformA = collectionTest.transform(() => 3).all();

      expect({ collection: collectionTest.all(), expect: [3, 3] });
      expect({ transformA, expect: [3, 3] });
    });

    void test(app, 'collect:unshift', () => {
      const collectionTest = collectionString.clone();
      const unshiftA = collectionTest.unshift('').all();

      expect({ collection: collectionTest.all(), expect: ['', 'a', 'b'] });
      expect({ unshiftA, expect: ['', 'a', 'b'] });
    });

    void test(app, 'collect:uniq', () => {
      const collectionTest = collectionString.clone().append('a');
      const uniqA = collectionTest.uniq().all();

      expect({ collection: collectionTest.all(), expect: ['a', 'b', 'a'] });
      expect({ uniqA, expect: ['a', 'b'] });
    });

    void test(app, 'collect:uniqBy', () => {
      const collectionTest = collectionObjectString.clone().append({ a: 'a' });
      const uniqB = collectionTest.uniqBy('a').all();

      expect({ collection: collectionTest.all(), expect: [{ a: 'a' }, { a: 'b' }, { a: 'a' }] });
      expect({ uniqB, expect: [{ a: 'a' }, { a: 'b' }] });
    });
  });
};

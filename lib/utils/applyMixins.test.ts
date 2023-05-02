import { expect, test } from 'vitest';
import applyMixins from './applyMixins';

test('applyMixins', () => {
  interface Test1 extends MixinA, MixinB {}

  class Test2 {
    y() {
      return 'y';
    }
  }

  class Test1 extends Test2 {
    x() {
      return 'x';
    }
  }

  class MixinA {
    a() {
      return 'a';
    }
  }

  class MixinB {
    b() {
      return 'b';
    }
  }

  applyMixins(Test1, [MixinA, MixinB]);

  const result = new Test1();

  expect(result.x()).toBe('x');
  expect(result.y()).toBe('y');
  expect(result.a()).toBe('a');
  expect(result.b()).toBe('b');
});

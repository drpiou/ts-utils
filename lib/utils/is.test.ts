import { describe, expect, test } from 'vitest';
import is from './is';

describe('is', () => {
  test('asserted', () => {
    expect(is.asserted('')).toBe(true);
    expect(is.asserted(0)).toBe(true);
    expect(is.asserted(true)).toBe(true);
    expect(is.asserted([])).toBe(true);
    expect(is.asserted(new Date())).toBe(true);
    expect(is.asserted(() => undefined)).toBe(true);
    expect(is.asserted({})).toBe(true);
    expect(is.asserted(null)).toBe(false);
    expect(is.asserted(undefined)).toBe(false);
  });

  test('array', () => {
    expect(is.array('')).toBe(false);
    expect(is.array(0)).toBe(false);
    expect(is.array(true)).toBe(false);
    expect(is.array([])).toBe(true);
    expect(is.array(new Date())).toBe(false);
    expect(is.array(() => undefined)).toBe(false);
    expect(is.array({})).toBe(false);
    expect(is.array(null)).toBe(false);
    expect(is.array(undefined)).toBe(false);
  });

  test('arrayFilled', () => {
    expect(is.arrayFilled('')).toBe(false);
    expect(is.arrayFilled(0)).toBe(false);
    expect(is.arrayFilled(true)).toBe(false);
    expect(is.arrayFilled([])).toBe(false);
    expect(is.arrayFilled(new Date())).toBe(false);
    expect(is.arrayFilled(() => undefined)).toBe(false);
    expect(is.arrayFilled({})).toBe(false);
    expect(is.arrayFilled(null)).toBe(false);
    expect(is.arrayFilled(undefined)).toBe(false);
  });

  test('boolean', () => {
    expect(is.boolean('')).toBe(false);
    expect(is.boolean(0)).toBe(false);
    expect(is.boolean(true)).toBe(true);
    expect(is.boolean([])).toBe(false);
    expect(is.boolean(new Date())).toBe(false);
    expect(is.boolean(() => undefined)).toBe(false);
    expect(is.boolean({})).toBe(false);
    expect(is.boolean(null)).toBe(false);
    expect(is.boolean(undefined)).toBe(false);
  });

  test('booleanLike', () => {
    expect(is.booleanLike('')).toBe(false);
    expect(is.booleanLike(0)).toBe(true);
    expect(is.booleanLike(true)).toBe(true);
    expect(is.booleanLike([])).toBe(false);
    expect(is.booleanLike(new Date())).toBe(false);
    expect(is.booleanLike(() => undefined)).toBe(false);
    expect(is.booleanLike({})).toBe(false);
    expect(is.booleanLike(null)).toBe(false);
    expect(is.booleanLike(undefined)).toBe(false);

    expect(is.booleanLike('true')).toBe(true);
    expect(is.booleanLike(10)).toBe(false);
  });

  test('booleanNumber', () => {
    expect(is.booleanNumber('')).toBe(false);
    expect(is.booleanNumber(0)).toBe(true);
    expect(is.booleanNumber(true)).toBe(false);
    expect(is.booleanNumber([])).toBe(false);
    expect(is.booleanNumber(new Date())).toBe(false);
    expect(is.booleanNumber(() => undefined)).toBe(false);
    expect(is.booleanNumber({})).toBe(false);
    expect(is.booleanNumber(null)).toBe(false);
    expect(is.booleanNumber(undefined)).toBe(false);

    expect(is.booleanNumber('true')).toBe(false);
    expect(is.booleanNumber(10)).toBe(false);
  });

  test('booleanString', () => {
    expect(is.booleanString('')).toBe(false);
    expect(is.booleanString(0)).toBe(false);
    expect(is.booleanString(true)).toBe(false);
    expect(is.booleanString([])).toBe(false);
    expect(is.booleanString(new Date())).toBe(false);
    expect(is.booleanString(() => undefined)).toBe(false);
    expect(is.booleanString({})).toBe(false);
    expect(is.booleanString(null)).toBe(false);
    expect(is.booleanString(undefined)).toBe(false);

    expect(is.booleanString('true')).toBe(true);
    expect(is.booleanString(10)).toBe(false);
  });

  test('datable', () => {
    expect(is.datable('')).toBe(true);
    expect(is.datable(0)).toBe(true);
    expect(is.datable(true)).toBe(false);
    expect(is.datable([])).toBe(false);
    expect(is.datable(new Date())).toBe(true);
    expect(is.datable(() => undefined)).toBe(false);
    expect(is.datable({})).toBe(false);
    expect(is.datable(null)).toBe(false);
    expect(is.datable(undefined)).toBe(false);
  });

  test('date', () => {
    expect(is.date('')).toBe(false);
    expect(is.date(0)).toBe(false);
    expect(is.date(true)).toBe(false);
    expect(is.date([])).toBe(false);
    expect(is.date(new Date())).toBe(true);
    expect(is.date(() => undefined)).toBe(false);
    expect(is.date({})).toBe(false);
    expect(is.date(null)).toBe(false);
    expect(is.date(undefined)).toBe(false);
  });

  test('dateIso', () => {
    expect(is.dateIso('')).toBe(false);
    expect(is.dateIso(0)).toBe(false);
    expect(is.dateIso(true)).toBe(false);
    expect(is.dateIso([])).toBe(false);
    expect(is.dateIso(new Date())).toBe(false);
    expect(is.dateIso(() => undefined)).toBe(false);
    expect(is.dateIso({})).toBe(false);
    expect(is.dateIso(null)).toBe(false);
    expect(is.dateIso(undefined)).toBe(false);

    expect(is.dateIso('2020-02-22')).toBe(true);
    expect(is.dateIso('2020-02-22T00:00:00Z')).toBe(true);
    expect(is.dateIso('2020-02-22T00:00:00.000Z')).toBe(true);
    expect(is.dateIso('2020-02-22T00:00:00.000+01:00')).toBe(true);
  });

  test('dateValid', () => {
    expect(is.dateValid('')).toBe(false);
    expect(is.dateValid(0)).toBe(false);
    expect(is.dateValid(true)).toBe(false);
    expect(is.dateValid([])).toBe(false);
    expect(is.dateValid(new Date())).toBe(true);
    expect(is.dateValid(() => undefined)).toBe(false);
    expect(is.dateValid({})).toBe(false);
    expect(is.dateValid(null)).toBe(false);
    expect(is.dateValid(undefined)).toBe(false);

    expect(is.dateValid(new Date('2020-02-22'))).toBe(true);
    expect(is.dateValid(new Date('1700-01-01'))).toBe(false);
  });

  test('email', () => {
    expect(is.email('')).toBe(false);
    expect(is.email(0)).toBe(false);
    expect(is.email(true)).toBe(false);
    expect(is.email([])).toBe(false);
    expect(is.email(new Date())).toBe(false);
    expect(is.email(() => undefined)).toBe(false);
    expect(is.email({})).toBe(false);
    expect(is.email(null)).toBe(false);
    expect(is.email(undefined)).toBe(false);

    expect(is.email('a@a.a')).toBe(true);
  });

  test('function', () => {
    expect(is.function('')).toBe(false);
    expect(is.function(0)).toBe(false);
    expect(is.function(true)).toBe(false);
    expect(is.function([])).toBe(false);
    expect(is.function(new Date())).toBe(false);
    expect(is.function(() => undefined)).toBe(true);
    expect(is.function({})).toBe(false);
    expect(is.function(null)).toBe(false);
    expect(is.function(undefined)).toBe(false);
  });

  test('ipv4', () => {
    expect(is.ipv4('')).toBe(false);
    expect(is.ipv4(0)).toBe(false);
    expect(is.ipv4(true)).toBe(false);
    expect(is.ipv4([])).toBe(false);
    expect(is.ipv4(new Date())).toBe(false);
    expect(is.ipv4(() => undefined)).toBe(false);
    expect(is.ipv4({})).toBe(false);
    expect(is.ipv4(null)).toBe(false);
    expect(is.ipv4(undefined)).toBe(false);

    expect(is.ipv4('192.168.0.1')).toBe(true);
  });

  test('ipv6', () => {
    expect(is.ipv6('')).toBe(false);
    expect(is.ipv6(0)).toBe(false);
    expect(is.ipv6(true)).toBe(false);
    expect(is.ipv6([])).toBe(false);
    expect(is.ipv6(new Date())).toBe(false);
    expect(is.ipv6(() => undefined)).toBe(false);
    expect(is.ipv6({})).toBe(false);
    expect(is.ipv6(null)).toBe(false);
    expect(is.ipv6(undefined)).toBe(false);

    expect(is.ipv6('684D:1111:222:3333:4444:5555:6:77')).toBe(true);
  });

  test('number', () => {
    expect(is.number('')).toBe(false);
    expect(is.number(0)).toBe(true);
    expect(is.number(true)).toBe(false);
    expect(is.number([])).toBe(false);
    expect(is.number(new Date())).toBe(false);
    expect(is.number(() => undefined)).toBe(false);
    expect(is.number({})).toBe(false);
    expect(is.number(null)).toBe(false);
    expect(is.number(undefined)).toBe(false);

    expect(is.number(Number('NaN'))).toBe(true);
  });

  test('numberValid', () => {
    expect(is.numberValid('')).toBe(false);
    expect(is.numberValid(0)).toBe(true);
    expect(is.numberValid(true)).toBe(false);
    expect(is.numberValid([])).toBe(false);
    expect(is.numberValid(new Date())).toBe(false);
    expect(is.numberValid(() => undefined)).toBe(false);
    expect(is.numberValid({})).toBe(false);
    expect(is.numberValid(null)).toBe(false);
    expect(is.numberValid(undefined)).toBe(false);

    expect(is.numberValid(Number('NaN'))).toBe(false);
  });

  test('phone', () => {
    expect(is.phone('')).toBe(false);
    expect(is.phone(0)).toBe(false);
    expect(is.phone(true)).toBe(false);
    expect(is.phone([])).toBe(false);
    expect(is.phone(new Date())).toBe(false);
    expect(is.phone(() => undefined)).toBe(false);
    expect(is.phone({})).toBe(false);
    expect(is.phone(null)).toBe(false);
    expect(is.phone(undefined)).toBe(false);

    expect(is.phone('0789008070')).toBe(true);
    expect(is.phone('+41789008070')).toBe(true);
  });

  test('plainObject', () => {
    expect(is.plainObject('')).toBe(false);
    expect(is.plainObject(0)).toBe(false);
    expect(is.plainObject(true)).toBe(false);
    expect(is.plainObject([])).toBe(false);
    expect(is.plainObject(new Date())).toBe(false);
    expect(is.plainObject(() => undefined)).toBe(false);
    expect(is.plainObject({})).toBe(true);
    expect(is.plainObject(null)).toBe(false);
    expect(is.plainObject(undefined)).toBe(false);
  });

  test('string', () => {
    expect(is.string('')).toBe(true);
    expect(is.string(0)).toBe(false);
    expect(is.string(true)).toBe(false);
    expect(is.string([])).toBe(false);
    expect(is.string(new Date())).toBe(false);
    expect(is.string(() => undefined)).toBe(false);
    expect(is.string({})).toBe(false);
    expect(is.string(null)).toBe(false);
    expect(is.string(undefined)).toBe(false);
  });

  test('stringFilled', () => {
    expect(is.stringFilled('')).toBe(false);
    expect(is.stringFilled(0)).toBe(false);
    expect(is.stringFilled(true)).toBe(false);
    expect(is.stringFilled([])).toBe(false);
    expect(is.stringFilled(new Date())).toBe(false);
    expect(is.stringFilled(() => undefined)).toBe(false);
    expect(is.stringFilled({})).toBe(false);
    expect(is.stringFilled(null)).toBe(false);
    expect(is.stringFilled(undefined)).toBe(false);

    expect(is.stringFilled('filled')).toBe(true);
  });

  test('url', () => {
    expect(is.url('')).toBe(false);
    expect(is.url(0)).toBe(false);
    expect(is.url(true)).toBe(false);
    expect(is.url([])).toBe(false);
    expect(is.url(new Date())).toBe(false);
    expect(is.url(() => undefined)).toBe(false);
    expect(is.url({})).toBe(false);
    expect(is.url(null)).toBe(false);
    expect(is.url(undefined)).toBe(false);

    expect(is.url('https://idk.io')).toBe(true);
    expect(is.url('idk.io')).toBe(true);
  });

  test('uuid', () => {
    expect(is.uuid('')).toBe(false);
    expect(is.uuid(0)).toBe(false);
    expect(is.uuid(true)).toBe(false);
    expect(is.uuid([])).toBe(false);
    expect(is.uuid(new Date())).toBe(false);
    expect(is.uuid(() => undefined)).toBe(false);
    expect(is.uuid({})).toBe(false);
    expect(is.uuid(null)).toBe(false);
    expect(is.uuid(undefined)).toBe(false);

    expect(is.uuid('9fd51a62-e87c-11ed-a05b-0242ac120003')).toBe(true);
    expect(is.uuid('9fd51a62-e87c-11ed-a05b-0242ac120003', 1)).toBe(true);
    expect(is.uuid('9fd51a62-e87c-11ed-a05b-0242ac120003', 4)).toBe(false);

    expect(is.uuid('34d57fc1-2cb2-4da0-a383-00fb304f1506')).toBe(true);
    expect(is.uuid('34d57fc1-2cb2-4da0-a383-00fb304f1506', 1)).toBe(false);
    expect(is.uuid('34d57fc1-2cb2-4da0-a383-00fb304f1506', 4)).toBe(true);
  });
});

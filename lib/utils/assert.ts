import assertArray from './assertArray';
import assertArrayFilled from './assertArrayFilled';
import assertBoolean from './assertBoolean';
import assertBooleanLike from './assertBooleanLike';
import assertBooleanNumber from './assertBooleanNumber';
import assertBooleanString from './assertBooleanString';
import assertDatable from './assertDatable';
import assertDate from './assertDate';
import assertDateString from './assertDateString';
import assertDateValid from './assertDateValid';
import asserted from './asserted';
import assertEmail from './assertEmail';
import assertFunction from './assertFunction';
import assertIPv4 from './assertIPv4';
import assertIPv6 from './assertIPv6';
import assertNumber from './assertNumber';
import assertNumberValid from './assertNumberValid';
import assertPhone from './assertPhone';
import assertPlainObject from './assertPlainObject';
import asserts from './asserts';
import assertString from './assertString';
import assertStringFilled from './assertStringFilled';
import assertUrl from './assertUrl';
import assertUUID from './assertUUID';

const assert = {
  array: assertArray,
  arrayFilled: assertArrayFilled,
  boolean: assertBoolean,
  booleanLike: assertBooleanLike,
  booleanNumber: assertBooleanNumber,
  booleanString: assertBooleanString,
  condition: asserts,
  datable: assertDatable,
  date: assertDate,
  dateString: assertDateString,
  dateValid: assertDateValid,
  email: assertEmail,
  function: assertFunction,
  ipv4: assertIPv4,
  ipv6: assertIPv6,
  number: assertNumber,
  numberValid: assertNumberValid,
  phone: assertPhone,
  plainObject: assertPlainObject,
  string: assertString,
  stringFilled: assertStringFilled,
  url: assertUrl,
  uuid: assertUUID,
  value: asserted,
};

export default assert;

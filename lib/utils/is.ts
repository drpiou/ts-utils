import isArray from './isArray';
import isArrayFilled from './isArrayFilled';
import isAsserted from './isAsserted';
import isBoolean from './isBoolean';
import isBooleanLike from './isBooleanLike';
import isBooleanNumber from './isBooleanNumber';
import isBooleanString from './isBooleanString';
import isDatable from './isDatable';
import isDate from './isDate';
import isDateString from './isDateString';
import isDateValid from './isDateValid';
import isEmail from './isEmail';
import isFunction from './isFunction';
import isIPv4 from './isIPv4';
import isIPv6 from './isIPv6';
import isNumber from './isNumber';
import isNumberValid from './isNumberValid';
import isPhone from './isPhone';
import isPlainObject from './isPlainObject';
import isString from './isString';
import isStringFilled from './isStringFilled';
import isUrl from './isUrl';
import isUUID from './isUUID';

const is = {
  array: isArray,
  arrayFilled: isArrayFilled,
  asserted: isAsserted,
  boolean: isBoolean,
  booleanLike: isBooleanLike,
  booleanNumber: isBooleanNumber,
  booleanString: isBooleanString,
  datable: isDatable,
  date: isDate,
  dateString: isDateString,
  dateValid: isDateValid,
  email: isEmail,
  function: isFunction,
  ipv4: isIPv4,
  ipv6: isIPv6,
  number: isNumber,
  numberValid: isNumberValid,
  phone: isPhone,
  plainObject: isPlainObject,
  string: isString,
  stringFilled: isStringFilled,
  url: isUrl,
  uuid: isUUID,
};

export default is;

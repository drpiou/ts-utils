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
declare const assert: {
    array: typeof assertArray;
    arrayFilled: typeof assertArrayFilled;
    boolean: typeof assertBoolean;
    booleanLike: typeof assertBooleanLike;
    booleanNumber: typeof assertBooleanNumber;
    booleanString: typeof assertBooleanString;
    condition: typeof asserts;
    datable: typeof assertDatable;
    date: typeof assertDate;
    dateString: typeof assertDateString;
    dateValid: typeof assertDateValid;
    email: typeof assertEmail;
    function: typeof assertFunction;
    ipv4: typeof assertIPv4;
    ipv6: typeof assertIPv6;
    number: typeof assertNumber;
    numberValid: typeof assertNumberValid;
    phone: typeof assertPhone;
    plainObject: typeof assertPlainObject;
    string: typeof assertString;
    stringFilled: typeof assertStringFilled;
    url: typeof assertUrl;
    uuid: typeof assertUUID;
    value: typeof asserted;
};
export default assert;
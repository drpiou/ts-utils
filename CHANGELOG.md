# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.5] - 2023-04-26

### Added

- `appendUniq` utility function
- `applyMixins` utility function
- `assert` utility function
- `assertArray` utility function
- `assertArrayFilled` utility function
- `assertBoolean` utility function
- `assertBooleanLike` utility function
- `assertBooleanNumber` utility function
- `assertBooleanString` utility function
- `assertDatable` utility function
- `assertDate` utility function
- `assertDateString` utility function
- `assertDateValid` utility function
- `asserted` utility function
- `assertEmail` utility function
- `assertFunction` utility function
- `assertIPv4` utility function
- `assertIPv6` utility function
- `assertNumber` utility function
- `assertNumberValid` utility function
- `assertPhone` utility function
- `assertPlainObject` utility function
- `asserts` utility function
- `assertString` utility function
- `assertStringFilled` utility function
- `assertUrl` utility function
- `assertUUID` utility function
- `filterNull` utility function
- `filterNullish` utility function
- `filterUndefined` utility function
- `is` utility function
- `isArray` utility function
- `isArrayFilled` utility function
- `isAsserted` utility function
- `isBoolean` utility function
- `isBooleanLike` utility function
- `isBooleanNumber` utility function
- `isBooleanString` utility function
- `isDatable` utility function
- `isDate` utility function
- `isDateString` utility function
- `isDateValid` utility function
- `isEmail` utility function
- `isFunction` utility function
- `isIPv4` utility function
- `isIPv6` utility function
- `isNumber` utility function
- `isNumberValid` utility function
- `isPhone` utility function
- `isPlainObject` utility function
- `isString` utility function
- `isStringFilled` utility function
- `isUrl` utility function
- `isUUID` utility function
- `maxBy` utility function
- `minBy` utility function
- `prependUniq` utility function
- `sumBy` utility function
- `unshift` utility function
- `unshiftUniq` utility function
- `validator` utility function
- `Asserted` utility type
- `CastArray` utility type
- `FlattenDeep` utility type
- `PlainObject` utility type
- testing using vitest

### Changed

- `append` accepts any type of new items
- `filter` callback must return value or rejection
- `first` callback must return value or rejection
- `max` only accepts array of numbers
- `min` only accepts array of numbers
- `partition` callback must return value or rejection
- `prepend` accepts any type of new items
- `sum` only accepts array of numbers
- `withoutProperties` is renamed to `omit`

### Removed

- `collection` utility function
- `Constructor` utility type
- `PartialDeep` utility type
- `ReadonlyDeep` utility type
- `NonNullableField` utility type
- `PartialRecord` utility type
- `Primitive` utility type
- `ValueOf` utility type

## [0.0.4] - 2022-09-25

### Changed

- `DeepPartial`
- `DeepReadonly`

## [0.0.3] - 2022-08-14

### Added

- examples

### Changed

- rewritten using vite

### Fixed

- import package in project
- some typings

## [0.0.2] - 2022-07-11

### Added

- CHANGELOG.md

## [0.0.1] - 2022-06-19

### Added

- first commit

[Unreleased]: https://github.com/drpiou/ts-utils/compare/v0.0.4...HEAD
[0.0.4]: https://github.com/drpiou/ts-utils/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/drpiou/ts-utils/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/drpiou/ts-utils/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/drpiou/ts-utils/releases/tag/v0.0.1

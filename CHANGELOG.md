# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.5] - 2023-04-26

### Added

- `appendUniq` utility function
- `applyMixins` utility function
- `assert...` utility function
- `filterNull` utility function
- `filterNullish` utility function
- `filterUndefined` utility function
- `is...` utility function
- `maxBy` utility function
- `minBy` utility function
- `prependUniq` utility function
- `sumBy` utility function
- `validator` utility function
- `CastArray` utility type
- `FlattenDeep` utility type
- test using vitest

### Changed

- `append` accepts any type of new items
- `filter` callback must return value or rejection
- `first` callback must return value or rejection
- `max` only accepts array of numbers
- `min` only accepts array of numbers
- `path` second parameters is an options literal object
- `prepend` accepts any type of new items
- `sum` only accepts array of numbers

### Removed

- `collection`

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

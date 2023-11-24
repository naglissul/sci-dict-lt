# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## Added

- Volumes (to persist db data)
- If not deployed, pdf version.

## Fixed

- .env.template not all vars

## Changed

## Removed

## [1.1.0] - 2023-10-27

## Added

- 10th, 11th grade new words
- Add "I was here" counter to the same project
- Add some syntax corrections
- Database and backend

## Fixed

- bash script for running docker-compose

## Changed

- bash script to be able to rollback to old version in case of error >> Implement Docker layer caching (not remove, but rebuild image)

## Removed

- dict.json data file. Changed with relational database

## [1.0.2] - 2023-08-30

## Added

- More references
- Add more words (from npw.lt physics)
- Add nice drawing to dark-light mode

## Changed

- The bash script file. Might work now...

## [1.0.1] - 2023-08-29

## Added

- More words

## Fixed

- Some styling
- More instructions for GitHub PR

## Changed

- Less useless descriptions

## [1.0.0] - 2023-08-25

## Added

- Initial working deployed version

[unreleased]: https://github.com/naglissul/sci-dict-lt/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/naglissul/sci-dict-lt/compare/v1.0.2...v1.1.0
[1.0.1]: https://github.com/naglissul/sci-dict-lt/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/naglissul/sci-dict-lt/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/naglissul/sci-dict-lt/releases/tag/v1.0.0

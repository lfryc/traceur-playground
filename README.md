# Traceur Playground [![Build Status](https://travis-ci.org/lfryc/traceur-playground.png?branch=master)](https://travis-ci.org/lfryc/traceur-playground) [![Dependency Status](https://david-dm.org/lfryc/traceur-playground.png)](https://david-dm.org/lfryc/traceur-playground) [![devDependency Status](https://david-dm.org/lfryc/traceur-playground/dev-status.png)](https://david-dm.org/lfryc/traceur-playground#info=devDependencies) #

> A playground for testing [EcmaScript 6](http://kangax.github.io/compat-table/es6/) and [Traceur experimental features](https://github.com/google/traceur-compiler/wiki/LanguageFeatures).

## Technologies

* [Traceur](https://github.com/google/traceur-compiler) - ES6 compiler
* Gulp - build tool
* Karma - test runner
* Jasmine - test framework


## Prerequisities

* Node.js 0.10.x
* `npm install -g gulp karma`

## Building

    gulp


## Testing

For continuous testing, just run:

    karma start

## How to Play?

1. Define module in `src/` folder.
2. Define test in `test/` folder.

For inspiration, go to those folders and look into existing sources.

During a play, let's start Karma so that your code is immediatelly unit-tested.


## License ##

[Apache License Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html).

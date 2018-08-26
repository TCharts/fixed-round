# fixed-round

> Math.round with fixed, formats a number using fixed-point notation and returns a number.

[![Build Status](https://travis-ci.org/TCharts/fixed-round.svg?branch=master)](https://travis-ci.org/TCharts/fixed-round) [![Coverage Status](https://coveralls.io/repos/github/TCharts/fixed-round/badge.svg)](https://coveralls.io/github/TCharts/fixed-round) [![npm](https://img.shields.io/npm/v/fixed-round.svg)](https://www.npmjs.com/package/fixed-round) [![npm download](https://img.shields.io/npm/dm/fixed-round.svg)](https://www.npmjs.com/package/fixed-round)


## Usage

> **npm i --save fixed-round**


```js
var round = require('fixed-round');
// round(number, toFixed);

round(125.34567, 2); // 125.35
round(125.34567); // 125
round(125.34567, -1); // 130
```


## License

ISC@[hustcc](https://github.com/hustcc).


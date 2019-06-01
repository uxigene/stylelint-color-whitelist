# stylelint-color-whitelist
[![Build Status](https://travis-ci.org/MarinescuEvghenii/stylelint-color-whitelist.svg?branch=master)](https://travis-ci.org/MarinescuEvghenii/stylelint-color-whitelist) [![GitHub license](https://img.shields.io/github/license/MarinescuEvghenii/stylelint-color-whitelist.svg?color=blue)](https://github.com/MarinescuEvghenii/stylelint-color-whitelist/blob/master/licence.md) [![npm version](https://img.shields.io/npm/v/stylelint-color-whitelist.svg?color=blue)](https://www.npmjs.com/package/stylelint-color-whitelist) [![GitHub version](https://img.shields.io/github/package-json/v/MarinescuEvghenii/stylelint-color-whitelist.svg?color=blue)](https://github.com/MarinescuEvghenii/stylelint-color-whitelist) [![GitHub release](https://img.shields.io/github/release/MarinescuEvghenii/stylelint-color-whitelist.svg?color=blue)](https://github.com/MarinescuEvghenii/stylelint-color-whitelist/releases)

Plugin for [stylelint](http://stylelint.io/) to validate color usage defined in whitelist. Plugin transforms all colors to HEX format. So, for declared ```#fff``` color, the ```rgb(255, 255, 255)``` is also valid. Please note that it ignores the opacity, for example: ```rgba(255, 255, 255, 0.5)```, ```#ffffff80```, ```hsla(0, 0%, 100%, 0.5)``` are also a valid colors.

## Installation
Via NPM:
```
npm i stylelint-color-whitelist
```
or Yarn:
```
yarn add stylelint-color-whitelist
```

## Usage
Add ```stylelint-color-whitelist``` to the plugins array.
Add ```color/whitelist``` rule config to the rules section.
Note: Configuration array can recive only hex values.
```
{
  "plugins": ["stylelint-color-whitelist"],

  "rules": {
    "color/whitelist": {
      "color": ["#fff"] // Only hex values
    }
  }
}
```
Refer to [stylelint docs](https://stylelint.io/user-guide/) for the detailed info.

## Supported formats
|Format | Example                                              | Support |
|-------|------------------------------------------------------|---------|
| HEX   | ```#fff``` ```#ffffff``` ```#FFF``` ```#ffffff88```  | YES     |
| RGB   | ```rgb(255, 255, 255)```                             | YES     |
| RGBA  | ```rgba(255, 255, 255, 0.5)```                       | YES     |
| HSL   | ```hsl(0, 0%, 100%)```                               | YES     |
| HSLA  | ```hsl(0, 0%, 100%, 1)```                            | YES     |
| Named | ```red``` ```green``` ```blue```                     | NO      |

## License
stylelint-color-whitelist is [MIT licensed](https://github.com/MarinescuEvghenii/stylelint-color-whitelist/blob/master/licence.md).

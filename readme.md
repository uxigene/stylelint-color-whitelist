# stylelint-colors-whitelist
[![Build Status](https://travis-ci.org/MarinescuEvghenii/stylelint-colors-whitelist.svg?branch=master)](https://travis-ci.org/MarinescuEvghenii/stylelint-colors-whitelist) [![GitHub license](https://img.shields.io/github/license/MarinescuEvghenii/stylelint-colors-whitelist.svg?color=blue)](https://github.com/MarinescuEvghenii/stylelint-colors-whitelist/blob/master/licence.md) [![npm version](https://img.shields.io/npm/v/stylelint-color-whitelist.svg?color=blue)](https://www.npmjs.com/package/stylelint-color-whitelist) [![GitHub version](https://img.shields.io/github/package-json/v/MarinescuEvghenii/stylelint-colors-whitelist.svg?color=blue)](https://github.com/MarinescuEvghenii/stylelint-colors-whitelist)


Plugin for [stylelint](http://stylelint.io/) to validate color usage defined in whitelist. Plugin transforms all colors to HEX format. So, for declared ```#fff``` color, the ```rgb(255, 255, 255)``` is also valid. Please note that it ignores the opacity, for example: ```rgba(255, 255, 255, 0.5)```, ```#ffffff80```, ```hsla(0, 0%, 100%, 0.5)``` are also a valid colors.

## Installation
Via NPM:
```
npm i stylelint-colors-whitelist
```
or Yarn:
```
yarn add stylelint-colors-whitelist
```

## Usage
Add ```stylelint-color-whitelist``` to the plugins array.
Add ```colors/whitelist``` rule config to the rules section.
Note: Configuration array can recive only hex values.
```
{
  "plugins": ["stylelint-color-whitelist"],

  "rules": {
    "colors/whitelist": {
      "colors": ["#fff"] // Only hex values
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
stylelint-colors-whitelist is [MIT licensed](https://github.com/MarinescuEvghenii/stylelint-colors-whitelist/blob/master/licence.md).

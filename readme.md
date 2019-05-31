# stylelint-colors-whitelist
Plugin for [stylelint](http://stylelint.io/) to validate color usage defined in whitelist.
Plugin transforms all colors to HEX format. So, for declared ```#fff``` color, the ```rgb(255, 255, 255)``` is also valid.
Please note that it ignores the opacity for rgba, ```rgba(255, 255, 255, 0.5)``` is also a valid color.

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
- Create the .stylelintrc file (or open the existing one), add ```stylelint-color-whitelist``` to the plugins array.
- Add ```colors/whitelist``` rule to rules section.

```
{
  "plugins": ["stylelint-color-whitelist"],

  "rules": {
    "colors/whitelist": {
      "colors": ["#fff"]
    }
  }
}
```

## Supported format
|Format | Example                                           | Support | Comments               |
|-------|---------------------------------------------------|---------|------------------------|
| HEX   | ```#fff``` ```#FFF``` ```#ffffff``` ```#FFFFFF``` | YES     |                        |
| RGB   | ```rgb(255, 255, 255)```                          | YES     |                        |
| RGBA  | ```rgba(255, 255, 255, 0.5)```                    | YES     | Ignores opacity        |
| HSL   | ```hsl(0, 0%, 100%)```                            | NO      | Will be added          |
| HSLA  | ```hsl(0, 0%, 100%, 1)```                         | NO      | Will be added          |
| Named | ```red``` ```green```                             | NO      | Won't be added         |

## License
stylelint-colors-whitelist is [MIT licensed](https://github.com/MarinescuEvghenii/stylelint-colors-whitelist/blob/master/licence.md).






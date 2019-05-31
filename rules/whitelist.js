const stylelint = require('stylelint');
const convert   = require('color');
const parseHex  = require('../utils/parseHex');
const parseRgb  = require('../utils/parseRgb');
const parseHsl  = require('../utils/parseHsl');

module.exports = ruleName => options => (root, result) => {
    if (!options || !options.colors) {
        return;
    }

    const whitelist = options.colors.reduce((result, color) => {
        result[convert(color).hex().toLowerCase()] = color;
        return result;
    }, {});

    root.walkDecls(node => {
        const str = node.toString();

        let colors = [];
        colors = colors.concat(parseHex(str), parseRgb(str), parseHsl(str));

        if(colors.length > 0) {
            colors.forEach(color => {
                let hex = '';

                switch (color.type) {
                    case 'hex':
                        hex = convert(color.value.slice(0,7)).hex().toLowerCase();
                        break;

                    case 'rgba':
                        hex = convert(`rgb(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b})`).hex().toLowerCase();
                        break;

                    case 'hsla':
                        hex = convert(`hsl(${color.hsla.h}, ${color.hsla.s}, ${color.hsla.l})`).hex().toLowerCase();
                        break;
                }

                hex = hex.toLowerCase();

                if(!whitelist.hasOwnProperty(hex)) {
                    stylelint.utils.report({
                        node,
                        result,
                        ruleName,
                        message: `Unexpected color value: "${color.value}"`
                    });
                }
            });
        }
    });
};
const stylelint = require('stylelint');
const convert   = require('color');
const parseHex  = require('../utils/parseHex');
const parseRgb  = require('../utils/parseRgb');

module.exports = ruleName => options => (root, result) => {
    if (!options || !options.colors) {
        return;
    }

    options.colors = options.colors.map(color => color.toLowerCase());

    root.walkDecls(node => {
        const str = node.toString();

        let colors = [];
        colors = colors.concat(parseHex(str), parseRgb(str));

        if(colors.length > 0) {
            colors.forEach(color => {
                let hex = '';

                switch (color.type) {
                    case 'hex':
                        hex = convert(color.value).hex().toLowerCase();
                        break;

                    case 'rgba':
                        hex = convert(`rgb(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b})`).hex().toLowerCase();
                        break;
                }

                hex = hex.toLowerCase();

                if(options.colors.indexOf(hex) === -1) {
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
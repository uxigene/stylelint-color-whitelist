const stylelint = require('stylelint');
const rules = require('./rules');

module.exports = Object.keys(rules).map(ruleName => {
    return stylelint.createPlugin(ruleName, rules[ruleName]);
});
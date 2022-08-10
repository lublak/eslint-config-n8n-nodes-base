const prettier = require("prettier");
const fs = require('fs');
const { getConfig } = require("./helper");
const prettierrc = require('./.prettierrc.js');
prettierrc.parser = 'babel';
fs.writeFileSync('index.js', prettier.format(`module.exports = ${JSON.stringify(getConfig(), null, 2)};`, prettierrc));
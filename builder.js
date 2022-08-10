const prettier = require('prettier');
const fs = require('fs');
const { getStringConfig } = require('./helper');
const prettierrc = require('./.prettierrc.js');
prettierrc.parser = 'babel';
fs.writeFileSync('index.js', prettier.format(`module.exports = ${getStringConfig()};`, prettierrc));
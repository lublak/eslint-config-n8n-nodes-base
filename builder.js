const fs = require('fs');
const { getConfig } = require("./helper");

fs.writeFileSync('index.js', `module.exports = ${JSON.stringify(getConfig(), null, 2)};`);
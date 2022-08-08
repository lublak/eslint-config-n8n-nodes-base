const pack = require('./package.json');
const path = require('path');
const deepmerge = require('deepmerge')
const stringify = require('fast-json-stable-stringify');
const fs = require('fs');

const baseFiles = ['./credentials/**/*.ts', './nodes/**/*.ts'];


const peerDependencies = Object.keys(pack.peerDependencies).sort((a, b) => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
});
var index = peerDependencies.indexOf('eslint');
if (index !== -1) {
  peerDependencies.splice(index, 1);
}
peerDependencies.unshift('eslint');
const baseConfigRules = {};
const basePlugins = [];
const config = {
  overrides: [
    {
      files: baseFiles,
			plugins: basePlugins,
			rules: baseConfigRules
    }
  ]
};
for(let pd of peerDependencies) {
  console.log(pd);
  
  if(pd === 'eslint') {
    const eslintPath = path.dirname(require.resolve('eslint/package.json'));
    const all = require(eslintPath + '/conf/eslint-all.js');
    const pdrrules = Object.keys(all.rules).sort();
    for(let r of pdrrules) {
      baseConfigRules[r] = 'off';
    }
  } else if(pd == 'eslint-plugin-n8n-nodes-base') {
    const jsonRules = {};
    const otherRules = {};
    basePlugins.push('eslint-plugin-n8n-nodes-base');
    const pdr = require('eslint-plugin-n8n-nodes-base');
    const pdrrules = Object.keys(pdr.rules).sort();
    for(let r of pdrrules) {
      if(r.startsWith('community-package-json-')) {
        jsonRules[`n8n-nodes-base/${r}`] = 'off';
      } else{
        otherRules[`n8n-nodes-base/${r}`] = 'off';
      }
    }
    config.overrides.push({
			files: ['package.json'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: jsonRules,
		});
    config.overrides.push({
			files: ['./credentials/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: otherRules,
		});
    config.overrides.push({
			files: ['./nodes/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: otherRules,
		});
  } else if(pd == '@typescript-eslint/eslint-plugin') {
    basePlugins.push('@typescript-eslint');
    const pdr = require('@typescript-eslint/eslint-plugin');
    const pdrrules = Object.keys(pdr.rules).sort();
    for(let r of pdrrules) {
      baseConfigRules[`@typescript-eslint/${r}`] = 'off';
    }
  } else if(pd.startsWith('eslint-plugin-')) {
    basePlugins.push(pd);
    const pdr = require(pd);
    const name = pd.substring('eslint-plugin-'.length);
    const pdrrules = Object.keys(pdr.rules).sort();
    for(let r of pdrrules) {
      baseConfigRules[`${name}/${r}`] = 'off';
    }
  }
  
  //console.log(pdr);
}

const current = require('./index.js');
fs.writeFileSync('index.js', `module.exports = ${JSON.stringify(deepmerge(current, config), null, 2)};`);
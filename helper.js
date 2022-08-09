const path = require('path');

const pack = require('./package.json');
const ix = require('./index.js');

function getAllRules() {
  var allRules = {};
  for(let pd in pack.peerDependencies) {
    if(pd === 'eslint') {
      allRules['eslint'] = {};
      const eslintPath = path.dirname(require.resolve('eslint/package.json'));
      const eslint_rules = require(eslintPath + '/lib/rules');
      for (const [ruleId, rule] of eslint_rules) {
        if (!rule.meta || !rule.meta.deprecated) {
            allRules[pd][ruleId] = rule;
        }
      }
    } else if(pd == '@typescript-eslint/eslint-plugin') {
      pd = '@typescript-eslint';
      allRules['@typescript-eslint'] = {};
      const typescript_eslint_rules = require('@typescript-eslint/eslint-plugin').rules;
      for(const ruleId in typescript_eslint_rules) {
        if (!typescript_eslint_rules[ruleId].meta || !typescript_eslint_rules[ruleId].meta.deprecated) {
          allRules[pd][`@typescript-eslint/${ruleId}`] = typescript_eslint_rules[ruleId];
        }
      }
    } else if(pd.startsWith('eslint-plugin-')) {
      allRules[pd] = {};
      const plugin_eslint_rules = require(pd).rules;
      const name = pd.substring('eslint-plugin-'.length);
      for(const ruleId in plugin_eslint_rules) {
        if (!plugin_eslint_rules[ruleId].meta || !plugin_eslint_rules[ruleId].meta.deprecated) {
          allRules[pd][`${name}/${ruleId}`] = plugin_eslint_rules[ruleId];
        }
      }
    }
  }
  return allRules;
}

function arrayEqual(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (var i = 0, l=arr1.length; i < l; i++) {
    if (arr1[i] != arr2[i]) { 
      return false;   
    }          
  }
  return true;
}

function getConfig() {
  const jsonRules = {};
  const credentialsRules = {};
  const nodesRules = {};
  const baseRules = {};
  const basePlugins = [];
  const overrides = [
    {
      files: ['package.json'],
      plugins: ['eslint-plugin-n8n-nodes-base'],
      rules: jsonRules,
    },
    {
      files: ['./credentials/**/*.ts'],
      plugins: ['eslint-plugin-n8n-nodes-base'],
      rules: credentialsRules
    },
    {
      files: ['./nodes/**/*.ts'],
      plugins: ['eslint-plugin-n8n-nodes-base'],
      rules: nodesRules
    },
    {
      files: ['./credentials/**/*.ts', './nodes/**/*.ts'],
      plugins: basePlugins,
      rules: baseRules
    }
  ];
  const currentRules = ix.overrides

  const baseRulesCurrentValues = currentRules.find((value) => arrayEqual(value.files, ['./credentials/**/*.ts', './nodes/**/*.ts']));
  const nodesRulesCurrentValues = currentRules.find((value) => arrayEqual(value.files, ['./nodes/**/*.ts']));
  const credentialsRulesCurrentValues = currentRules.find((value) => arrayEqual(value.files, ['./credentials/**/*.ts']));
  const jsonRulesCurrentValues = currentRules.find((value) => arrayEqual(value.files, ['package.json']));

  const rules = getAllRules();

  function getCurrentValue(currentValues, rule) {
    return currentValues && currentValues.rules && currentValues.rules[rule] ? currentValues.rules[rule] : 'off';
  }

  for(const plugin in rules) {
    if(plugin == 'eslint-plugin-n8n-nodes-base') {
      for(const rule in rules[plugin]) {
        if(rule.startsWith('n8n-nodes-base/community-package-json-')) {
          jsonRules[rule] = getCurrentValue(jsonRulesCurrentValues, rule);
        } else if(rule.startsWith('n8n-nodes-base/cred-')) {
          credentialsRules[rule] = getCurrentValue(credentialsRulesCurrentValues, rule);
        } else if(rule.startsWith('n8n-nodes-base/node-')) {
          nodesRules[rule] = getCurrentValue(nodesRulesCurrentValues, rule);
        }
      }
    } else if(Object.keys(rules[plugin]).length > 0) {
      basePlugins.push(plugin);
      for(const rule in rules[plugin]) {
        baseRules[rule] = getCurrentValue(baseRulesCurrentValues, rule);
      }
    }
  }

  return {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: ['./tsconfig.json'],
      sourceType: 'module',
      extraFileExtensions: ['.json'],
    },
    ignorePatterns: ['.eslintrc.js', '**/*.js', '**/node_modules/**', '**/dist/**'],
    settings: {
      jsdoc: {
        mode: 'typescript',
        structuredTags: {
          type: {
            type: true,
            required: ['type'],
          },
        },
        ignoreInternal: true,
      },
    },
    overrides: overrides
  };
}

module.exports = {
  getAllRules: getAllRules,
  getConfig: getConfig
};
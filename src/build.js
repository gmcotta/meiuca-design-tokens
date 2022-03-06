const StyleDictionaryPackage = require('style-dictionary');

const { registerConfig } = require('./config.js');

async function buildTokens({ current, buildPath }) {
  const styleDictionary = StyleDictionaryPackage.extend(registerConfig({ current, buildPath }));
  styleDictionary.buildAllPlatforms()
}

module.exports = {
  buildTokens
}
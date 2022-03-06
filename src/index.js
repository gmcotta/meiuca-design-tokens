const path = require('path');

const { getBrands } = require('./brand.js');
const { buildTokens } = require('./build.js');
const { registerFilter, registerFormat } = require('./config.js');

registerFilter();
registerFormat();

getBrands().map(async (current) => {
  const buildPath = {
    css: path.join('dist', 'css', current.dest, path.sep),
    scss: path.join('dist', 'scss', current.dest, path.sep)
  };
  await buildTokens({ current, buildPath });
})
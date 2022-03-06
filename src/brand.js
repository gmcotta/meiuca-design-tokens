const path = require('path');
const fs = require('fs');

function getDirectories(dirPath) {
  return fs.readdirSync(path.resolve(__dirname, dirPath)).map(folder => {
    return folder;
  });
}

function getBrands() {
  const BRANDS = [
    {
      source: path.resolve('tokens', 'global', '**', '*.json'),
      dest: '',
      filename: 'global',
      brand: '',
      theme: '',
      mode: ''
    }
  ];
  getDirectories(path.resolve('tokens', 'brands')).map(brand => {
    getDirectories(path.resolve('tokens', 'brands', brand)).map(theme => {
      getDirectories(path.resolve('tokens', 'brands', brand, theme)).map(mode => {
        BRANDS.push({
          source: path.resolve('tokens', 'brands', brand, theme, mode, '**', '*.json'),
          dest: path.join(brand, theme),
          filename: mode,
          brand,
          theme,
          mode
        });
      });
    });
  });
  return BRANDS;
}

module.exports = {
  getBrands
}
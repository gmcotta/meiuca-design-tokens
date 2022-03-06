const StyleDictionaryPackage = require("style-dictionary");

function registerConfig({ current, buildPath }) {
  return {
    source: [current.source],
    platforms: {
      'web/css': {
        transformGroup: 'css',
        buildPath: buildPath.css,
        files: [
          {
            destination: `${current.filename}.css`,
            format: 'css/variables',
            filter: "isNotObject"
          }
        ]
      },
      'web/scss': {
        transformGroup: 'scss',
        buildPath: buildPath.scss,
        files: [
          {
            destination: `${current.filename}.scss`,
            format: 'scss/variables',
            filter: "isNotObject"
          },
          {
            destination: 'mixins.scss',
            format: 'scss/mixins',
            filter: "isObject"
          }
        ]
      }
    }
  };
}

function registerFilter() {
  StyleDictionaryPackage.registerFilter({
    name: "isNotObject",
    matcher: (token) => typeof token.value !== 'object'
  });
  StyleDictionaryPackage.registerFilter({
    name: "isObject",
    matcher: (token) => typeof token.value === 'object'
  });
}

const switchCategoryOutput = (prop) => `
  @if $type == switch-${prop.attributes.type} {
    transition-duration: ${prop.value.velocity};
    transition-timing-function: ${prop.value.vibe};
  }`;

const spinCategoryOutput = (prop) => `
  @if $type == spin-${prop.attributes.type} {
    transition-duration: ${prop.value.velocity};
    transition-timing-function: ${prop.value.vibe};
    #{$trigger} {
      transform: rotate(${prop.value.rotation});
    }
  }`;

const expandCategoryOutput = (prop) => `
  @if $type == expand-${prop.attributes.type} {
    transition-duration: ${prop.value.velocity};
    transition-timing-function: ${prop.value.vibe};
    #{$trigger} {
      transform: scale(${prop.value.scake});
    }
  }`;

const finalOutput = (output) => `
// Do not edit directly
// Generated on ${new Date().toUTCString()}

@mixin motion-token($type, $trigger) {
  ${output}
}`;

function registerFormat() {
  StyleDictionaryPackage.registerFormat({
    name: 'scss/mixins',
    formatter: ({ dictionary }) => {
      let output = '';

      dictionary.allProperties.map(prop => {
        if (prop.attributes.category === 'switch') {
          output += switchCategoryOutput(prop);
        }
        if (prop.attributes.category === 'spin') {
          output += spinCategoryOutput(prop);
        }
        if (prop.attributes.category === 'expand') {
          output += expandCategoryOutput(prop);
        }
      });
      return finalOutput(output);
    }
  });
}

module.exports = {
  registerConfig,
  registerFilter,
  registerFormat
}
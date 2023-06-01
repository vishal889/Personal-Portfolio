// prettier.config.js
module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './tailwind.config.js',
    singleQuote: true,
    jsxSingleQuote: true,
    jsxBracketSameLine: false,
    semi: false,
    trailingComma: 'all',
    arrowParens: 'avoid',
  };
  
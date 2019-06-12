module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue
    // https://github.com/standard/eslint-config-standard
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'object-property-newline': 'off',
    'no-new': 'off',
    'no-return-await': 'off',
    'camelcase': 'off',
    'indent': ['error', 2],
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'vue/name-property-casing': 'off',
    'vue/html-self-closing': ['error', {
      'html': { 'normal': 'never' }
    }],
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'vue/require-default-prop': 'off'
  }
}

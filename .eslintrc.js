module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],

  parser: 'babel-eslint',
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off'
  }
}

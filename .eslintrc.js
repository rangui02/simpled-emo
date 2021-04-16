module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    // 强制使用单引号
    quotes: ['error', 'single'],
    // 强制不使用分号结尾
    semi: ['error', 'never'],
    'no-console': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

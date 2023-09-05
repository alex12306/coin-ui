module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    //禁止使用 var 关键字声明变量
    'no-var': 'error',
    // 无视组件大写名规则
    'vue/multi-word-component-names': 'off',
    // 禁止出现多行空白行
    'no-multiple-empty-lines': 'error',
    // 禁止行末出现空格
    'no-trailing-spaces': 'error',
    // 不要分号结尾
    semi: ['error', 'never'],
    // 单引号
    quotes: ['error', 'single'],
    // 不要对象的尾随逗号
    'comma-dangle': ['error', 'never']
  }
}

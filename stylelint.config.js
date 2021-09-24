/*
 * @Description:
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-16 16:08:50
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-16 16:09:54
 */
module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'selector-pseudo-class-no-unknown': true, // 禁止使用未知的伪类选择器
    'selector-pseudo-element-no-unknown': true, // 禁止使用未知的伪元素
    'at-rule-name-space-after': 'always', // 要求在 at 规则之后有一个空格
    'block-no-empty': true, // 禁止出现空块
    // 禁止使用未知的 at 规则
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['screen', 'function', 'if', 'each', 'include', 'mixin'],
      },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}

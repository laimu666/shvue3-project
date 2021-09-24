/*
 * @Description:
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-15 09:46:33
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-16 18:01:16
 */
module.exports = {
  // 指定环境，一个环境定义了一组预定义的全局变量
  env: {
    browser: true, // 浏览器环境中的全局变量
    es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
    node: true, // Node.js 全局变量和 Node.js 作用域
  },
  parser: 'vue-eslint-parser',
  // 配置扩展
  extends: [
    'plugin:vue/vue3-recommended', // 用于 Vue 3.x校验
    'plugin:@typescript-eslint/recommended',
    'prettier', // // 放最后解决与eslint的冲突
    'plugin:prettier/recommended', // 如果同时使用了 eslint-plugin-prettier 和 eslint-config-prettier 可以这么配置
    // 'airbnb-base' // 启用airbnb代码风格
  ],
  // 解析器参数
  parserOptions: {
    ecmaVersion: 6, // 使用的 ECMAScript 版本
    parser: '@typescript-eslint/parser', // 指定解析器
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // 启用JSX
    },
  },
  // // 使用插件
  // plugins: [
  //   'vue', // 拓展使用vue校验规则
  //   '@typescript-eslint', // 拓展使用typescript-eslint校验规则
  //   'prettier'
  // ],
  // 自定义配置规则可以覆盖extends里面的规则
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // 优先使用 interface 而不是 type
    '@typescript-eslint/no-explicit-any': 'off', // 不允许使用any类型
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 需要导出函数和类的公共类方法上的显式返回和参数类型
    'vue/no-multiple-template-root': 'off', // 不允许向模板添加多个根节点
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容前后需要换行符
    'vue/max-attributes-per-line': 'off', // 强制每行的最大属性数
    'vue/attribute-hyphenation': 'off', // 在模板中的自定义组件上强制使用属性命名样式
    'no-duplicate-imports': 'off', // 禁止重复模块导入
    'no-plusplus': 'off', // 禁止使用一元操作符 ++ 和 --
    'no-unused-vars': 'off', // 禁止出现未使用过的变量
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'], // 当空格用于对齐时，允许混合制表符和空格
    'new-cap': { capIsNew: false }, // 允许调用首字母大写的函数时没有 new 操作符
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }], // 不允许多个空行
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-shadow': 'error', // 禁止变量声明覆盖外层作用域的变量
    'no-alert': 'error', // 禁用 alert、confirm 和 prompt
    'default-case': 'error', // 要求 switch 语句中有 default 分支
    'spaced-comment': ['error', 'always'], // 强制在注释中 // 或 /* 使用一致的空格
    'arrow-spacing': 'error', // 要求箭头函数的箭头之前或之后有空格
    // 'indent': ['error', 2], // 2 个空格缩进
    // 'quotes': ['error', 'single'], // 要求尽可能地使用单引号
    // 'comma-dangle': ['error', 'never'], // 强制在对象和数组字面量中使用一致的拖尾逗号
    // 'semi': ['error', 'never'] // 要求行末或禁止使用分号
  },
  // 配置全局变量
  globals: {
    Nullable: true,
  },
  // 为特定类型的文件指定处理器，例如，下面对 *.md 文件使用处理器 a-plugin/markdown
  // overrides: [
  //   {
  //     'files': ['*.md'],
  //     'processor': 'a-plugin/markdown'
  //   }
  // ]
}

/*
 * @Description:
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-15 15:35:47
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-16 18:03:01
 */
module.exports = {
  printWidth: 100, // 单行代码超出 100 个字符自动换行
  tabWidth: 2, // 一个 tab 键缩进相当于 2 个空格
  useTabs: false, // 行缩进使用 tab 键代替空格
  semi: false, // 语句的末尾加上分号
  vueIndentScriptAndStyle: true, // 对于 .vue 文件，缩进 <script> 和 <style> 里的内容
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象的 key仅仅当必须的时候才会加上双引号
  bracketSpacing: true, // 在括号和对象的文字之间加上一个空格
  trailingComma: 'none', // 不用在多行的逗号分隔的句法结构的最后一行的末尾加上逗号
  jsxSingleQuote: true, // 在 JSX 中使用单引号
  arrowParens: 'avoid', // 当箭头函数中只有一个参数的时候可以忽略括弧
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  requirePragma: false, // 不需要写文件开头的 @prettier
  proseWrap: 'preserve', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'strict', // 所有标记周围的空白（或缺少空白）被认为是重要的
  endOfLine: 'lf', // 换行符使用 lf
}

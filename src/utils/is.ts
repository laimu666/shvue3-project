/*
 * @Description: 判断数据类型的工具类
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-13 14:46:05
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-13 15:21:29
 */

export default class Is {
  private toString = Object.prototype.toString

  static is(val: unknown, type: string) {
    return this.toString.call(val) === `[object ${type}]`
  }

  static isString(val: unknown): val is string {
    return Is.is(val, 'string')
  }

  static isFunction(val: unknown): val is Function {
    return typeof val === 'function'
  }
}

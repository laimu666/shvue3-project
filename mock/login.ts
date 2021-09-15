/*
 * @Description:
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-14 15:32:18
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-15 14:14:08
 */
import Mock from 'mockjs'
import { RequestOpt } from './_type'

let data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }]
})

export default [
  {
    url: '/test/user',
    type: 'post',
    response: (config) => {
      console.log(config)
      return {
        code: 20000,
        result: data,
        message: 'ok',
        type: 'success'
      }
    }
  }
] as RequestOpt[]

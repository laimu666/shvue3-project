/*
 * @Description:
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-14 13:52:59
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-15 14:14:47
 */
import Mock from 'mockjs'
import { XMLHttpRequest, ResFunc } from './_type'

const modules = import.meta.globEager('./**/*.ts')
const mockModules: any[] = []
Object.keys(modules).map(key => {
  if (key.includes('/_')) {
    return
  }
  mockModules.push(...modules[key].default)
  console.log(...modules[key].default)
})

function mockXHR() {
  function xhr2ExpressReqWrap(response: ResFunc) {
    return function (options: XMLHttpRequest) {
      let result = null
      if (response instanceof Function) {
        const { body, type, url } = options
        result = response({
          type: type,
          body: JSON.parse(body),
          url: url,
        })
      } else {
        result = response
      }
      return Mock.mock(result)
    }
  }

  for (const i of mockModules) {
    Mock.mock(new RegExp(i.url), i.type || 'get', xhr2ExpressReqWrap(i.response))
  }
}

export default function initMock() {
  mockXHR()
}

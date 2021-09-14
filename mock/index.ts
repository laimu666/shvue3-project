/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-14 13:52:59
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-14 14:47:38
 */
import Mock from 'mockjs'

interface XMLHttpRequest {
  url: string,
  type: string,
  body: any
}

interface ResFunc {
  (config: XMLHttpRequest): {
    code: number,
    result: any,
    message: string,
    type: string,
  }
} 

var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
  }]
})

const API = [
  {
    url: '/test/user',
    type: 'post',
    response: (config: XMLHttpRequest) => {
      return {
        code: 20000,
        data
      }
    }
  },
  {
    url: '',
    type: '',
    response: data
  },
  {
    url: '',
    type: '',
    response: data
  }
]

function mockXHR() {
  function XHR2ExpressReqWrap(response: ResFunc) {
    return function(options: XMLHttpRequest) {
      let result = null
      if (response instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = response({
          type: type,
          body: JSON.parse(body),
          url: url
        })
      } else {
        result = response
      }
      return Mock.mock(result)
    }
  }

  for (const i of API) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

export default function initMock() {
  mockXHR()
}



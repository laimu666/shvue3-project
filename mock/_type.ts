/*
 * @Description:
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-14 15:30:17
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-16 18:01:38
 */
export interface XMLHttpRequest {
  url: string
  type: string
  body: any
}

export interface ResFunc {
  (config: XMLHttpRequest): {
    code: number
    result: any
    message: string
    type: string
  }
}

export interface RequestOpt {
  url: string
  type: string
  response: (config: XMLHttpRequest) => {
    code: number
    result: any
    message: string
    type: string
  }
}

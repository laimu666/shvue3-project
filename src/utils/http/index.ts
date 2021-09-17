/*
 * @Description:
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-07 16:36:56
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-16 17:18:58
 */
import Vaxios from './axios'
import { VaxiosOptions } from './type'

const options: VaxiosOptions = {
  instanceOptions: {
    baseURL: '/test',
    method: 'POST',
    timeout: 10 * 1000,
  },
  transfrom: null,
  requestOptions: null,
}
const Http = new Vaxios(options)
export default Http

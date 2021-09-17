/*
 * @Description:
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-13 13:38:12
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-16 18:01:54
 */
import axios from 'axios'
import { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import { VaxiosOptions, Transfrom, RequestOptions } from './type'
import Is from 'utils/is'

export default class Vaxios {
  private transfrom: Nullable<Transfrom>
  private axiosInstance: AxiosInstance
  private requestOptions: Nullable<RequestOptions>
  constructor(options: VaxiosOptions) {
    const { instanceOptions, transfrom, requestOptions } = options
    this.transfrom = transfrom
    this.requestOptions = requestOptions
    this.axiosInstance = axios.create(instanceOptions)
    this.setupInterceptors()
  }

  /**
   * 设置请求拦截和错误捕获
   *
   * @private
   * @memberof Vaxios
   */
  private setupInterceptors() {
    if (!this.transfrom) {
      return
    }
    const { requestInterceptors, responseInterceptors } = this.transfrom
    // 添加请求拦截器
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      if (requestInterceptors && Is.isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.requestOptions)
      }
      return config
    }, undefined)

    // 添加响应拦截器
    this.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      if (responseInterceptors && Is.isFunction(responseInterceptors)) {
        response = responseInterceptors(response, this.requestOptions)
      }
      return response
    }, undefined)
  }

  request(config: AxiosRequestConfig, requestOptions: RequestOptions) {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request(config)
        .then(res => {
          resolve(res)
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}

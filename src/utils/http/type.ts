/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-13 16:26:55
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-13 16:53:54
 */
import { AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * 创建Vaxios实例的传参
 *
 * @interface VaxiosOptions
 */
export interface VaxiosOptions {
  instanceOptions: AxiosRequestConfig
  transfrom: Nullable<Transfrom>
  requestOptions: Nullable<RequestOptions>
}

/**
 * axios实例的hooks定义
 *
 * @interface Transfrom
 */
export interface Transfrom {
  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (config: AxiosRequestConfig, requestOptions: Nullable<RequestOptions>) => AxiosRequestConfig
  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors?: (response: AxiosResponse, requestOptions: Nullable<RequestOptions>) => AxiosResponse
}

/**
 * 配置项，里面的选项都可以在独立的接口请求中覆盖
 *
 * @interface RequestOptions
 */
export interface RequestOptions {

}

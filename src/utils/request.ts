/*
 * @Author: hypocrisy
 * @Date: 2024-05-05 16:37:43
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-05-05 17:50:52
 * @FilePath: \summon-war-cms-fe\src\utils\request.ts
 */

import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { notification } from 'antd'
//封装一个通用的ts版本的axios请求 包括请求拦截器和响应拦截器
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  timeout: 12000
})
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    //添加X-CAPTCHA-TICKET
    config.headers['X-CAPTCHA-TICKET'] = ''
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
//响应拦截器
instance.interceptors.response.use(
  (res) => {
    //对错误码进行处理
    return res
  },
  (err) => {
    // console.log(err)
    const code = err.response?.data?.code
    interface ErrParams {
      status: number
      code: number
      text: string
      needVertify: boolean
    }
    const errParams: ErrParams = {
      status: err.response?.status,
      code,
      text: err.response?.data?.text,
      needVertify: false
    }
    notification.error({
      message: '错误信息',
      description: err.response ? err.response.data.text : err.message,
      duration: 2
    })
    return Promise.reject(errParams)
  }
)
export interface ResponseData<T> {
  status: number
  data: T
}
const request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const { data } = await instance.request<ResponseData<T>>(config)
    // 如果接口是返回文件，则没有code
    return data?.status ? data.data : (data as any)
  } catch (err) {
    return Promise.reject(err)
  }
}
export default request

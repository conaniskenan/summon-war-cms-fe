
/** Tip: 需要手动引入 request 函数 */
import request from '@/utils/request'


  /**
   ** 接口名称: 获取种族列表
   ** 请求方式: get
   ** 接口地址: /warehouse/race/list
   ** 接口描述: 获取种族列表
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: none
   ** 请求参数:
      ** version_id: number 版本id
      
   ** 响应字段:
       ** list 种族列表

          ** id: number 种族id

          ** name: string 种族名称

          ** version_id: number 创建的版本id

          ** last_version_id: number 被修改的版本id

          ** release: number 0未发布，1为已发布，2为隐藏

          ** default: number 1为正常，2为隐藏

          ** version_name: string 创建时的版本名字

          ** last_version_name: string 被修改时的版本名称

   
  
   */
export const getRaceList = (params: Api.Paths.GetRaceList.Request,config={}) => {
  return request<Api.Paths.GetRaceList.Response>({
    url: `/warehouse/race/list`,
    method: "GET",
    params,
    ...config
  });
}
        
  /**
   ** 接口名称: 添加种族
   ** 请求方式: post
   ** 接口地址: /warehouse/race/insert
   ** 接口描述: 添加种族
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** name: string 种族名称
      ** default: number 1为正常，2为隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postRaceInsert = (params: Api.Paths.PostRaceInsert.Request,config={}) => {
  return request<Api.Paths.PostRaceInsert.Response>({
    url: `/warehouse/race/insert`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改种族
   ** 请求方式: post
   ** 接口地址: /warehouse/race/modify
   ** 接口描述: 修改种族名称
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 种族id
      ** name: string 种族名称
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postRaceModify = (params: Api.Paths.PostRaceModify.Request,config={}) => {
  return request<Api.Paths.PostRaceModify.Response>({
    url: `/warehouse/race/modify`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 删除种族
   ** 请求方式: post
   ** 接口地址: /warehouse/race/delete
   ** 接口描述: 删除种族
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 种族id
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postRaceDelete = (params: Api.Paths.PostRaceDelete.Request,config={}) => {
  return request<Api.Paths.PostRaceDelete.Response>({
    url: `/warehouse/race/delete`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改默认状态
   ** 请求方式: post
   ** 接口地址: /warehouse/race/modify/default
   ** 接口描述: 修改默认状态
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 种族id
      ** default: number 1为正常，2 为隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postRaceDefault = (params: Api.Paths.PostRaceDefault.Request,config={}) => {
  return request<Api.Paths.PostRaceDefault.Response>({
    url: `/warehouse/race/modify/default`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改发布状态
   ** 请求方式: post
   ** 接口地址: /warehouse/race/modify/release
   ** 接口描述: 
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 种族id
      ** release: number 0为未发布，1为已发布，2为隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postRaceRelease = (params: Api.Paths.PostRaceRelease.Request,config={}) => {
  return request<Api.Paths.PostRaceRelease.Response>({
    url: `/warehouse/race/modify/release`,
    method: "POST",
    data: params,
    ...config
  });
}
        

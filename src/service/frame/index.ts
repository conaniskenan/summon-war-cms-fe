
/** Tip: 需要手动引入 request 函数 */
import request from '@/utils/request'


  /**
   ** 接口名称: 添加头像框
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar_frame/insert
   ** 接口描述: 添加头像框
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** name: string 头像框名称
      ** default: number 1为正常，2为隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postFrameInsert = (params: Api.Paths.PostFrameInsert.Request,config={}) => {
  return request<Api.Paths.PostFrameInsert.Response>({
    url: `/warehouse/avatar_frame/insert`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改头像框
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar_frame/modify
   ** 接口描述: 修改头像名称
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 头像框id
      ** name: string 头像框名称
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postFrameModify = (params: Api.Paths.PostFrameModify.Request,config={}) => {
  return request<Api.Paths.PostFrameModify.Response>({
    url: `/warehouse/avatar_frame/modify`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 删除头像框
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar_frame/delete
   ** 接口描述: 删除头像
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 头像框id
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postFrameDelete = (params: Api.Paths.PostFrameDelete.Request,config={}) => {
  return request<Api.Paths.PostFrameDelete.Response>({
    url: `/warehouse/avatar_frame/delete`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改默认状态
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar_frame/modify/default
   ** 接口描述: 修改默认状态
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 头像框id
      ** default: number 1为正常，2 为隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postFrameDefault = (params: Api.Paths.PostFrameDefault.Request,config={}) => {
  return request<Api.Paths.PostFrameDefault.Response>({
    url: `/warehouse/avatar_frame/modify/default`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改发布状态
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar_frame/modify/release
   ** 接口描述: 
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 头像框id
      ** release: number 0为未发布，1为已发布，2为隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postFrameRelease = (params: Api.Paths.PostFrameRelease.Request,config={}) => {
  return request<Api.Paths.PostFrameRelease.Response>({
    url: `/warehouse/avatar_frame/modify/release`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 获取头像框列表 
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar_frame/list
   ** 接口描述: 获取头像框列表
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** searchRequest: {[key: string]: object} 
   
   ** 响应字段:
       ** list 头像框列表

          ** id: number 头像id

          ** name: string 头像名称

          ** version_id: number 创建的版本id

          ** last_version_id: number 被修改的版本id

          ** release: number 0未发布，1为已发布，2为隐藏

          ** default: number 0未发布，1为已发布，2为隐藏

          ** version_name: string 创建时的版本名字

          ** last_version_name: string 被修改时的版本名称

   
      ** searchResponse: {[key: string]: object} undefined

   
   */
export const postFrameList = (params: Api.Paths.PostFrameList.Request,config={}) => {
  return request<Api.Paths.PostFrameList.Response>({
    url: `/warehouse/avatar_frame/list`,
    method: "POST",
    data: params,
    ...config
  });
}
        

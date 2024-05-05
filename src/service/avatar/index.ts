
/** Tip: 需要手动引入 request 函数 */
import request from '@/utils/request'


  /**
   ** 接口名称: 获取头像列表 
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar/list
   ** 接口描述: 获取头像列表
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** searchRequest: {[key: string]: object} 
   
   ** 响应字段:
       ** list 头像列表

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
export const postAvatarList = (params: Api.Paths.PostAvatarList.Request,config={}) => {
  return request<Api.Paths.PostAvatarList.Response>({
    url: `/warehouse/avatar/list`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 添加头像
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar/insert
   ** 接口描述: 添加头像
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** name: string 头像名称
      ** default: number 1为正常，2为隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postAvatarInsert = (params: Api.Paths.PostAvatarInsert.Request,config={}) => {
  return request<Api.Paths.PostAvatarInsert.Response>({
    url: `/warehouse/avatar/insert`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改头像
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar/modify
   ** 接口描述: 修改头像名称
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 头像id
      ** name: string 头像名称
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postAvatarModify = (params: Api.Paths.PostAvatarModify.Request,config={}) => {
  return request<Api.Paths.PostAvatarModify.Response>({
    url: `/warehouse/avatar/modify`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 删除头像
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar/delete
   ** 接口描述: 删除头像
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 头像id
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postAvatarDelete = (params: Api.Paths.PostAvatarDelete.Request,config={}) => {
  return request<Api.Paths.PostAvatarDelete.Response>({
    url: `/warehouse/avatar/delete`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改默认状态
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar/modify/default
   ** 接口描述: 修改默认状态
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 头像id
      ** default: number 1为正常，2 为隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postAvatarDefault = (params: Api.Paths.PostAvatarDefault.Request,config={}) => {
  return request<Api.Paths.PostAvatarDefault.Response>({
    url: `/warehouse/avatar/modify/default`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改发布状态
   ** 请求方式: post
   ** 接口地址: /warehouse/avatar/modify/release
   ** 接口描述: 
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 头像id
      ** release: number 0为未发布，1为已发布，2为隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postAvatarRelease = (params: Api.Paths.PostAvatarRelease.Request,config={}) => {
  return request<Api.Paths.PostAvatarRelease.Response>({
    url: `/warehouse/avatar/modify/release`,
    method: "POST",
    data: params,
    ...config
  });
}
        

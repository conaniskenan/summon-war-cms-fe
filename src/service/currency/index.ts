
/** Tip: 需要手动引入 request 函数 */
import request from '@/utils/request'


  /**
   ** 接口名称: 修改货币
   ** 请求方式: post
   ** 接口地址: /warehouse/currency/modify
   ** 接口描述: 只能修改对应id的货币的名字，无需传入版本号，版本号会自动获取到最后一个版本号
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 货币id
      ** name: string 货币新的名字
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postCurrencyModify = (params: Api.Paths.PostCurrencyModify.Request,config={}) => {
  return request<Api.Paths.PostCurrencyModify.Response>({
    url: `/warehouse/currency/modify`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 添加货币
   ** 请求方式: post
   ** 接口地址: /warehouse/currency/insert
   ** 接口描述: 添加货币之后，状态默认为unreleased未发布
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** name: string 货币名字
      ** default: number 1为正常，2为隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postCurrencyInsert = (params: Api.Paths.PostCurrencyInsert.Request,config={}) => {
  return request<Api.Paths.PostCurrencyInsert.Response>({
    url: `/warehouse/currency/insert`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 删除货币
   ** 请求方式: post
   ** 接口地址: /warehouse/currency/delete
   ** 接口描述: 删除货币的时候，只能删除未发布的货币，也就是release为0的
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 货币id
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postCurrencyDelete = (params: Api.Paths.PostCurrencyDelete.Request,config={}) => {
  return request<Api.Paths.PostCurrencyDelete.Response>({
    url: `/warehouse/currency/delete`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改发布状态
   ** 请求方式: post
   ** 接口地址: /warehouse/currency/modify/release
   ** 接口描述: 只能将已经发布的修改为隐藏的，或者将隐藏的修改为已发布
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 货币id
      ** release: number 0 未发布，1已发布，2隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postCurrencyRelease = (params: Api.Paths.PostCurrencyRelease.Request,config={}) => {
  return request<Api.Paths.PostCurrencyRelease.Response>({
    url: `/warehouse/currency/modify/release`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改默认状态
   ** 请求方式: post
   ** 接口地址: /warehouse/currency/modify/default
   ** 接口描述: default需要和release进行配合，如果发布的时候，default为1，则release会修改为1已发布状态，若default为2，则点击发布的时候relase会修改为2隐藏，default的修改时机必须在发布之前，如果release不等于0了，那么default不能被修改
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 货币的id
      ** default: number 1为正常，2为隐藏
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postCurrencyDefault = (params: Api.Paths.PostCurrencyDefault.Request,config={}) => {
  return request<Api.Paths.PostCurrencyDefault.Response>({
    url: `/warehouse/currency/modify/default`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 获取货币列表
   ** 请求方式: post
   ** 接口地址: /warehouse/currency/list
   ** 接口描述: 获取货币列表
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** searchRequest: {[key: string]: object} 
   
   ** 响应字段:
       ** list 货币列表

          ** id: number 货币id

          ** name: string 货币名称

          ** version_id: number 创建的版本id

          ** last_version_id: number 被修改的版本id

          ** release: number 0未发布，1为已发布，2为隐藏

          ** default: number 0未发布，1为已发布，2为隐藏

          ** version_name: string 创建时的版本名字

          ** last_version_name: string 被修改时的版本名称

   
      ** searchResponse: {[key: string]: object} undefined

   
   */
export const postCurrencyList = (params: Api.Paths.PostCurrencyList.Request,config={}) => {
  return request<Api.Paths.PostCurrencyList.Response>({
    url: `/warehouse/currency/list`,
    method: "POST",
    data: params,
    ...config
  });
}
        

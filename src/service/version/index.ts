
/** Tip: 需要手动引入 request 函数 */
import request from '@/utils/request'


  /**
   ** 接口名称: 获取所有版本信息
   ** 请求方式: get
   ** 接口地址: /warehouse/version/list
   ** 接口描述: 获取版本列表
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: none
   ** 请求参数:
   
   ** 响应字段:
       ** list 版本信息列表

          ** id: number 版本id

          ** number: string 版本号

          ** name: string 版本名字

          ** create_time: number 创建时间，秒级的时间戳

   
  
   */
export const getVersionList = (params: Api.Paths.GetVersionList.Request,config={}) => {
  return request<Api.Paths.GetVersionList.Response>({
    url: `/warehouse/version/list`,
    method: "GET",
    params,
    ...config
  });
}
        
  /**
   ** 接口名称: 修改版本
   ** 请求方式: post
   ** 接口地址: /warehouse/version/modify
   ** 接口描述: 修改版本的信息，仅限于修改名字
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 版本id
      ** name: string 版本名字
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postVersionModify = (params: Api.Paths.PostVersionModify.Request,config={}) => {
  return request<Api.Paths.PostVersionModify.Response>({
    url: `/warehouse/version/modify`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 删除版本
   ** 请求方式: post
   ** 接口地址: /warehouse/version/delete
   ** 接口描述: 假如存在版本1.xxx，版本2.xxx，那么无法删除版本1，只能对最新的版本进行删除，若最新版本有新内容的添加，也无法进行删除，例如最新版本为2.01，在这个版本中上架了新的卡牌，则无法删除此版本
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** id: number 需要删除的版本id
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postVersionDelete = (params: Api.Paths.PostVersionDelete.Request,config={}) => {
  return request<Api.Paths.PostVersionDelete.Response>({
    url: `/warehouse/version/delete`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 添加版本
   ** 请求方式: post
   ** 接口地址: /warehouse/version/insert
   ** 接口描述: 若当前版本为0.2.1，当添加的新版本的信息中，大版本为true，小版本为false，则会自动迭代一个大的版本，新版本则为1.0.0，若大版本为false，小版本为true，则为0.3.1，若大版本小版本都为false，则为0.2.2，若是添加版本时，上一个版本有内容没有发布，则无法添加成功
   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
   ** 请求参数:
      ** name: string 版本名字
      ** largeVersion: boolean 大版本
      ** smallVersion: boolean 小版本
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postVersionInsert = (params: Api.Paths.PostVersionInsert.Request,config={}) => {
  return request<Api.Paths.PostVersionInsert.Response>({
    url: `/warehouse/version/insert`,
    method: "POST",
    data: params,
    ...config
  });
}
        
  /**
   ** 接口名称: 上架
   ** 请求方式: post
   ** 接口地址: /warehouse/version/shelve
   ** 接口描述: 上架最后一个版本所有未发布的数据，包括但不限于货币、卡牌、主城等等

   ** 请求头:
      ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: none
   ** 请求参数:
   
   ** 响应字段:
       ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
   */
export const postVersionShelve = (params: Api.Paths.PostVersionShelve.Request,config={}) => {
  return request<Api.Paths.PostVersionShelve.Response>({
    url: `/warehouse/version/shelve`,
    method: "POST",
    data: params,
    ...config
  });
}
        

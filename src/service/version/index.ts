/** Tip: 需要手动引入 request 函数 */
import request from '@/utils/request'

/**
   ** 接口名称: 获取所有版本信息
   ** 请求方式: get
   ** 接口地址: /backstage/version/list
   ** 接口描述: 获取版本列表
   ** 请求头:
   ** X-USER-AUTH: string
    ** X-CAPTCHA-TICKET: string
    ** Content-Type: none
   ** 请求参数:
   
   ** 响应字段:
   ** list: Array<object> 版本信息列表
    
   */
export const AGetList = (params: Api.Paths.AGetList.Request, config = {}) => {
  return request<Api.Paths.AGetList.Response>({
    url: `/backstage/version/list`,
    method: 'GET',
    params,
    ...config
  })
}

/**
   ** 接口名称: 修改版本
   ** 请求方式: post
   ** 接口地址: /backstage/version/modify
   ** 接口描述: 修改版本的信息，仅限于修改名字
   ** 请求头:
   ** X-USER-AUTH: string
    ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
   ** 请求参数:
   ** id: number 版本id
    ** name: string 版本名字
    
   ** 响应字段:
   ** code: number 状态码
    ** message: string 响应信息
    ** trace_id: string 追踪id
    ** text: string 用户展示文本
    
   */
export const APostModify = (
  params: Api.Paths.APostModify.Request,
  config = {}
) => {
  return request<Api.Paths.APostModify.Response>({
    url: `/backstage/version/modify`,
    method: 'POST',
    data: params,
    ...config
  })
}

/**
   ** 接口名称: 删除版本
   ** 请求方式: post
   ** 接口地址: /backstage/version/delete
   ** 接口描述: 假如存在版本1.xxx，版本2.xxx，那么无法删除版本1，只能对最新的版本进行删除，若最新版本有新内容的添加，也无法进行删除，例如最新版本为2.01，在这个版本中上架了新的卡牌，则无法删除此版本
   ** 请求头:
   ** X-USER-AUTH: string
    ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
   ** 请求参数:
   ** id: number 需要删除的版本id
    
   ** 响应字段:
   ** code: number 状态码
    ** message: string 响应信息
    ** trace_id: string 追踪id
    ** text: string 用户展示文本
    
   */
export const APostDelete = (
  params: Api.Paths.APostDelete.Request,
  config = {}
) => {
  return request<Api.Paths.APostDelete.Response>({
    url: `/backstage/version/delete`,
    method: 'POST',
    data: params,
    ...config
  })
}

/**
   ** 接口名称: 添加版本
   ** 请求方式: post
   ** 接口地址: /backstage/version/insert
   ** 接口描述: 若当前版本为0.2.1，当添加的新版本的信息中，大版本为true，小版本为false，则会自动迭代一个大的版本，新版本则为1.0.0，若大版本为false，小版本为true，则为0.3.1，若大版本小版本都为false，则为0.2.2，若是添加版本时，上一个版本没有发布，则无法添加成功
   ** 请求头:
   ** X-USER-AUTH: string
    ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
   ** 请求参数:
   ** name: string 版本名字
    ** largeVersion: boolean 大版本
    ** smallVersion: boolean 小版本
    
   ** 响应字段:
   ** code: number 状态码
    ** message: string 响应信息
    ** trace_id: string 追踪id
    ** text: string 用户展示文本
    
   */
export const APostInsert = (
  params: Api.Paths.APostInsert.Request,
  config = {}
) => {
  return request<Api.Paths.APostInsert.Response>({
    url: `/backstage/version/insert`,
    method: 'POST',
    data: params,
    ...config
  })
}

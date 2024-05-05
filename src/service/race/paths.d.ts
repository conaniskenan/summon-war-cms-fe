
declare namespace Api {
  namespace Paths {
    
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
    
    ** 响应字段:
        ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
    */
    namespace PostRaceInsert {
      /** 请求头 */
      interface Headers {
        "X-USER-AUTH": string
        "X-CAPTCHA-TICKET": string
        [key: string]: string
    
      }
      /** 请求 */
      interface Request {
        /** 种族名称 */
        name: string
        /** 1为正常，2为隐藏 */
        default: number
        
      }
      /** 响应 */
      interface Response  {
        /** code */

      code: number
      /** 说明 */

      message: string
      /** 追踪id */

      trace_id: string
      /** 用户展示文本 */

      text: string
      
      }

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
    
    ** 响应字段:
        ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
    */
    namespace PostRaceModify {
      /** 请求头 */
      interface Headers {
        "X-USER-AUTH": string
        "X-CAPTCHA-TICKET": string
        [key: string]: string
    
      }
      /** 请求 */
      interface Request {
        /** 种族id */
        id: number
        /** 种族名称 */
        name: string
        
      }
      /** 响应 */
      interface Response  {
        /** code */

      code: number
      /** 说明 */

      message: string
      /** 追踪id */

      trace_id: string
      /** 用户展示文本 */

      text: string
      
      }

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
    
    ** 响应字段:
        ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
    */
    namespace PostRaceDelete {
      /** 请求头 */
      interface Headers {
        "X-USER-AUTH": string
        "X-CAPTCHA-TICKET": string
        [key: string]: string
    
      }
      /** 请求 */
      interface Request {
        /** 种族id */
        id: number
        
      }
      /** 响应 */
      interface Response  {
        /** code */

      code: number
      /** 说明 */

      message: string
      /** 追踪id */

      trace_id: string
      /** 用户展示文本 */

      text: string
      
      }

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
    
    ** 响应字段:
        ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
    */
    namespace PostRaceDefault {
      /** 请求头 */
      interface Headers {
        "X-USER-AUTH": string
        "X-CAPTCHA-TICKET": string
        [key: string]: string
    
      }
      /** 请求 */
      interface Request {
        /** 种族id */
        id: number
        /** 1为正常，2 为隐藏 */
        default: number
        
      }
      /** 响应 */
      interface Response  {
        /** code */

      code: number
      /** 说明 */

      message: string
      /** 追踪id */

      trace_id: string
      /** 用户展示文本 */

      text: string
      
      }

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
    
    ** 响应字段:
        ** code: number code

       ** message: string 说明

       ** trace_id: string 追踪id

       ** text: string 用户展示文本

   
    */
    namespace PostRaceRelease {
      /** 请求头 */
      interface Headers {
        "X-USER-AUTH": string
        "X-CAPTCHA-TICKET": string
        [key: string]: string
    
      }
      /** 请求 */
      interface Request {
        /** 种族id */
        id: number
        /** 0为未发布，1为已发布，2为隐藏 */
        release: number
        
      }
      /** 响应 */
      interface Response  {
        /** code */

      code: number
      /** 说明 */

      message: string
      /** 追踪id */

      trace_id: string
      /** 用户展示文本 */

      text: string
      
      }

    }
    
    /**
    ** 接口名称: 获取种族列表
    ** 请求方式: post
    ** 接口地址: /warehouse/race/list
    ** 接口描述: 获取种族列表
    ** 请求头:
       ** X-USER-AUTH: string
      ** X-CAPTCHA-TICKET: string
      ** Content-Type: application/json
    ** 请求参数:
    
    ** 响应字段:
        ** list 种族列表

          ** id: number 种族id

          ** name: string 种族名称

          ** version_id: number 创建的版本id

          ** last_version_id: number 被修改的版本id

          ** release: number 0未发布，1为已发布，2为隐藏

          ** default: number 0未发布，1为已发布，2为隐藏

          ** version_name: string 创建时的版本名字

          ** last_version_name: string 被修改时的版本名称

   
      ** searchResponse: {[key: string]: object} undefined

   
    */
    namespace PostRaceList {
      /** 请求头 */
      interface Headers {
        "X-USER-AUTH": string
        "X-CAPTCHA-TICKET": string
        [key: string]: string
    
      }
      /** 请求 */
      interface Request {
        /**  */
        searchRequest: {[key: string]: object}
        
      }
      /** 响应 */
      interface Response  {
        /** 种族列表 */
      list: {/** 种族id */

      id: number
      /** 种族名称 */

      name: string
      /** 创建的版本id */

      version_id: number
      /** 被修改的版本id */

      last_version_id: number
      /** 0未发布，1为已发布，2为隐藏 */

      release: number
      /** 0未发布，1为已发布，2为隐藏 */

      default: number
      /** 创建时的版本名字 */

      version_name: string
      /** 被修改时的版本名称 */

      last_version_name: string
      }[]
      /** undefined */

      searchResponse: {[key: string]: object}
      
      }

    }
    
  }
}
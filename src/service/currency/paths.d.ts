declare namespace Api {
  namespace Paths {
    /**
    ** 接口名称: 获取货币列表
    ** 请求方式: get
    ** 接口地址: /backstage/currency/list
    ** 接口描述: 获取货币列表
    ** 请求头:
    ** X-USER-AUTH: string
    ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
    ** 请求参数:
    ** version_id: number 版本id，如果传入的id是0的话，会返回所有版本下的所有货币
    
    ** 响应字段:
    ** 当前版本下的货币列表
    list
        {
          ** id: number 货币id
      ** name: string 货币名字
      ** version_id: number 这个货币被创建的版本id
      ** last_version_id: number 这个货币被修改的版本id
      ** release: number 0 未发布，1已发布，2隐藏
      ** default: number 1为正常，2为隐藏
      ** version_name: string 货币被创建时版本的名字
      ** last_version_name: string 货币被修改时版本的名字
      
        }
      
    */
    namespace AGetList {
      /** 请求头 */
      interface Headers {
        'X-USER-AUTH': string
        'X-CAPTCHA-TICKET': string
        [key: string]: string
      }
      /** 请求 */
      interface Request {
        /** 版本id，如果传入的id是0的话，会返回所有版本下的所有货币 */
        version_id: number
      }
      /** 响应 */
      interface Response {
        /** 当前版本下的货币列表 */
        list: {
          /** 货币id */ id: number
          /** 货币名字 */
          name: string
          /** 这个货币被创建的版本id */
          version_id: number
          /** 这个货币被修改的版本id */
          last_version_id: number
          /** 0 未发布，1已发布，2隐藏 */
          release: number
          /** 1为正常，2为隐藏 */
          default: number
          /** 货币被创建时版本的名字 */
          version_name: string
          /** 货币被修改时版本的名字 */
          last_version_name: string
        }
      }
    }

    /**
    ** 接口名称: 修改货币
    ** 请求方式: post
    ** 接口地址: /backstage/currency/modify
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
    namespace APostModify {
      /** 请求头 */
      interface Headers {
        'X-USER-AUTH': string
        'X-CAPTCHA-TICKET': string
        [key: string]: string
      }
      /** 请求 */
      interface Request {
        /** 货币id */
        id: number
        /** 货币新的名字 */
        name: string
      }
      /** 响应 */
      interface Response {
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
    ** 接口名称: 添加货币
    ** 请求方式: post
    ** 接口地址: /backstage/currency/insert
    ** 接口描述: 添加货币之后，状态默认为unreleased未发布
    ** 请求头:
    ** X-USER-AUTH: string
    ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
    ** 请求参数:
    ** id: number 货币id
    ** name: string 货币名字
    
    ** 响应字段:
    ** code: number code
      ** message: string 说明
      ** trace_id: string 追踪id
      ** text: string 用户展示文本
      
    */
    namespace APostInsert {
      /** 请求头 */
      interface Headers {
        'X-USER-AUTH': string
        'X-CAPTCHA-TICKET': string
        [key: string]: string
      }
      /** 请求 */
      interface Request {
        /** 货币id */
        id: number
        /** 货币名字 */
        name: string
      }
      /** 响应 */
      interface Response {
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
    ** 接口名称: 删除货币
    ** 请求方式: post
    ** 接口地址: /backstage/currency/delete
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
    namespace APostDelete {
      /** 请求头 */
      interface Headers {
        'X-USER-AUTH': string
        'X-CAPTCHA-TICKET': string
        [key: string]: string
      }
      /** 请求 */
      interface Request {
        /** 货币id */
        id: number
      }
      /** 响应 */
      interface Response {
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
    ** 接口地址: /backstage/currency/modify/release
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
    namespace APostRelease {
      /** 请求头 */
      interface Headers {
        'X-USER-AUTH': string
        'X-CAPTCHA-TICKET': string
        [key: string]: string
      }
      /** 请求 */
      interface Request {
        /** 货币id */
        id: number
        /** 0 未发布，1已发布，2隐藏 */
        release: number
      }
      /** 响应 */
      interface Response {
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
  }
}

/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class Service {
    /**
     * 发送短信验证码
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postSystemPhoneSend(
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 手机号
             */
            phone: string;
            /**
             * 手机号前缀
             */
            phone_prefix: string;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/system/phone/send',
            headers: {
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加分组
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postFriendGroupAdd(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            name: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/friend/group/add',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除分组
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postFriendGroupDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            group_id: Array<number>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/friend/group/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取分组列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static getFriendGroupList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: any,
    ): CancelablePromise<{
        friend_group: Array<{
            group_id: number;
            name: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/friend/group/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改分组名称
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postFriendGroupModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            group_id: number;
            name: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/friend/group/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加分组成员
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postFriendGroupMemberAdd(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            group_id: number;
            friend_id: Array<number>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/friend/group/member/add',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除分组成员
     * 这里留下，等和曦曦哥还有前端开个会再谈，需要前端给我传groupId的默认把分组成员放到默认分组，还是我网关直接设置不需要前端传
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postFriendGroupMemberDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            group_id: number;
            friend_id: Array<number>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/friend/group/member/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取分组成员列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static getFriendGroupMemberList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            group_id: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/friend/group/member/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加黑名单成员
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postFriendBlacklistAdd(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            target_user_id: Array<number>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/friend/blacklist/add',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除黑名单成员
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postFriendBlacklistDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            target_user_id: Array<number>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/friend/blacklist/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取黑名单成员列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static getFriendBlacklistList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: any,
    ): CancelablePromise<{
        target_user_id: Array<number>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/friend/blacklist/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取所有版本信息
     * 获取版本列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @returns any 成功
     * @throws ApiError
     */
    public static getWarehouseVersionList(
        xUserAuth: string,
        xCaptchaTicket: string,
    ): CancelablePromise<{
        /**
         * 版本信息列表
         */
        list: Array<{
            /**
             * 版本id
             */
            id?: number;
            /**
             * 版本号
             */
            number?: string;
            /**
             * 版本名字
             */
            name?: string;
            /**
             * 创建时间，秒级的时间戳
             */
            create_time?: number;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/warehouse/version/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改版本
     * 修改版本的信息，仅限于修改名字
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseVersionModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 版本id
             */
            id: number;
            /**
             * 版本名字
             */
            name: string;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/version/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除版本
     * 假如存在版本1.xxx，版本2.xxx，那么无法删除版本1，只能对最新的版本进行删除，若最新版本有新内容的添加，也无法进行删除，例如最新版本为2.01，在这个版本中上架了新的卡牌，则无法删除此版本
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseVersionDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 需要删除的版本id
             */
            id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/version/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加版本
     * 若当前版本为0.2.1，当添加的新版本的信息中，大版本为true，小版本为false，则会自动迭代一个大的版本，新版本则为1.0.0，若大版本为false，小版本为true，则为0.3.1，若大版本小版本都为false，则为0.2.2，若是添加版本时，上一个版本有内容没有发布，则无法添加成功
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseVersionInsert(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 版本名字
             */
            name: string;
            /**
             * 大版本
             */
            largeVersion: boolean;
            /**
             * 小版本
             */
            smallVersion: boolean;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/version/insert',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改货币
     * 只能修改对应id的货币的名字，无需传入版本号，版本号会自动获取到最后一个版本号
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCurrencyModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 货币id
             */
            id: number;
            /**
             * 货币新的名字
             */
            name: string;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/currency/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加货币
     * 添加货币之后，状态默认为unreleased未发布
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCurrencyInsert(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 货币名字
             */
            name: string;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/currency/insert',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除货币
     * 删除货币的时候，只能删除未发布的货币，也就是release为0的
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCurrencyDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 货币id
             */
            id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/currency/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改发布状态
     * 只能将已经发布的修改为隐藏的，或者将隐藏的修改为已发布
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCurrencyModifyRelease(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 货币id
             */
            id: number;
            /**
             * 0 未发布，1已发布，2隐藏
             */
            release: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/currency/modify/release',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改默认状态
     * default需要和release进行配合，如果发布的时候，default为1，则release会修改为1已发布状态，若default为2，则点击发布的时候relase会修改为2隐藏，default的修改时机必须在发布之前，如果release不等于0了，那么default不能被修改
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCurrencyModifyDefault(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 货币的id
             */
            id: number;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/currency/modify/default',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 上架
     * 上架最后一个版本所有未发布的数据，包括但不限于货币、卡牌、主城等等
     *
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseVersionShelve(
        xUserAuth: string,
        xCaptchaTicket: string,
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/version/shelve',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加种族
     * 添加种族
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseRaceInsert(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 种族名称
             */
            name: string;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/race/insert',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改种族
     * 修改种族名称
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseRaceModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 种族id
             */
            id: number;
            /**
             * 种族名称
             */
            name: string;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/race/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除种族
     * 删除种族
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseRaceDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 种族id
             */
            id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/race/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改默认状态
     * 修改默认状态
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseRaceModifyDefault(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 种族id
             */
            id: number;
            /**
             * 1为正常，2 为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/race/modify/default',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改发布状态
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseRaceModifyRelease(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 种族id
             */
            id: number;
            /**
             * 0为未发布，1为已发布，2为隐藏
             */
            release: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/race/modify/release',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加头像
     * 添加头像
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarInsert(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 头像名称
             */
            name: string;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar/insert',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改头像
     * 修改头像名称
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 头像id
             */
            id: number;
            /**
             * 头像名称
             */
            name: string;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除头像
     * 删除头像
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 头像id
             */
            id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改默认状态
     * 修改默认状态
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarModifyDefault(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 头像id
             */
            id: number;
            /**
             * 1为正常，2 为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar/modify/default',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改发布状态
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarModifyRelease(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 头像id
             */
            id: number;
            /**
             * 0为未发布，1为已发布，2为隐藏
             */
            release: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar/modify/release',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加头像框
     * 添加头像框
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarFrameInsert(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 头像框名称
             */
            name: string;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar_frame/insert',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改头像框
     * 修改头像名称
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarFrameModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 头像框id
             */
            id: number;
            /**
             * 头像框名称
             */
            name: string;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar_frame/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除头像框
     * 删除头像
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarFrameDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 头像框id
             */
            id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar_frame/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改默认状态
     * 修改默认状态
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarFrameModifyDefault(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 头像框id
             */
            id: number;
            /**
             * 1为正常，2 为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar_frame/modify/default',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改发布状态
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarFrameModifyRelease(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 头像框id
             */
            id: number;
            /**
             * 0为未发布，1为已发布，2为隐藏
             */
            release: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar_frame/modify/release',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加充值档位
     * 这个接口是来添加充值的档位，例如648为一个档位，这个档位的名字例如叫做豪华礼包，按照unit给单位，人民币就是cny,美元就算usd，日元为jpy，套餐里面有购买的货币以及赠品货币
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postTardingLevelsAdd(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 充值档位价格
             */
            price: number;
            /**
             * 充值档位的单位，0为CNY，1为USD，2为JPY
             */
            unit: number;
            /**
             * 充值获得的货币id
             */
            currency_id: number;
            /**
             * 充值获得的货币数量
             */
            currency_num: number;
            /**
             * 赠品货币的id
             */
            gift_id: number;
            /**
             * 赠品货币的数量
             */
            gift_num: number;
            /**
             * 充值档位的名字
             */
            name: string;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tarding/levels/add',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取充值档位
     * 请求的两个参数是可选项，可以填写也可以不填写，如果填写会根据填写的内容筛选出需要的充值档位
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param unit 充值档位的单位，0为CNY，1为USD，2为JPY
     * @param status 默认的状态，0为未发布，1为发布
     * @returns any 成功
     * @throws ApiError
     */
    public static getTardingLevelsList(
        xUserAuth: string,
        xCaptchaTicket: string,
        unit?: number,
        status?: number,
    ): CancelablePromise<{
        /**
         * 档位列表
         */
        tradings: Array<{
            /**
             * 充值档位id
             */
            id?: number;
            /**
             * 充值档位价格
             */
            price?: number;
            /**
             * 充值档位的单位，0为CNY，1为USD，2为JPY
             */
            unit?: number;
            /**
             * 货币id
             */
            currency_id?: number;
            /**
             * 货币数量
             */
            currency_num?: number;
            /**
             * 赠品id
             */
            gift_id?: number;
            /**
             * 赠品数量
             */
            gift_num?: number;
            /**
             * 默认的状态，0为未发布，1为发布
             */
            status?: number;
            /**
             * 套餐名称
             */
            name?: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tarding/levels/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            query: {
                'unit': unit,
                'status': status,
            },
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除充值档位
     * 删除档位
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postTardingLevelsDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 需要删除的档位id
             */
            id: Array<number>;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tarding/levels/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 发布充值档位
     * 这个发布是充值这边自己的，不需要用到版本管理的上架
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postTardingLevelsRelease(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 需要发布充值档位的id
             */
            id: Array<number>;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tarding/levels/release',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改充值档位
     * 修改充值档位
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postTardingLevelsModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 充值档位的id
             */
            id: number;
            /**
             * 充值档位价格
             */
            price: number;
            /**
             * 充值档位的单位，0为CNY，1为USD，2为JPY
             */
            unit: number;
            /**
             * 充值获得的货币id
             */
            currency_id: number;
            /**
             * 充值获得的货币数量
             */
            currency_num: number;
            /**
             * 赠品货币的id
             */
            gift_id: number;
            /**
             * 赠品货币的数量
             */
            gift_num: number;
            /**
             * 充值档位的名字
             */
            name: string;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tarding/levels/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加平台
     * 添加新的平台，为平台设置能充值的档位
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postTradingPlatformAdd(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 充值平台，例如pc,switch,手机
             */
            platform: string;
            /**
             * 充值档位的id,也就是哪些充值档位支持当前的平台
             */
            trading_id: Array<number>;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/trading/platform/add',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取平台信息
     * 获取平台信息
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @returns any 成功
     * @throws ApiError
     */
    public static getTradingPlatformList(
        xUserAuth: string,
        xCaptchaTicket: string,
    ): CancelablePromise<{
        /**
         * 平台信息
         */
        info: Array<{
            /**
             * 平台id
             */
            platform_id?: number;
            /**
             * 平台名字
             */
            platform?: string;
            /**
             * 可支持的充值档位id
             */
            trading_id?: Array<number>;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/trading/platform/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除平台
     * 删除平台
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postTradingPlatformDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 平台id
             */
            platform_id: Array<number>;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/trading/platform/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改平台
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postTradingPlatformModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 信息
             */
            info: {
                /**
                 * 平台id
                 */
                platform_id: number;
                /**
                 * 平台名称
                 */
                platform: string;
                /**
                 * 可支持的充值档位id
                 */
                trading_id: Array<number>;
            };
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/trading/platform/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加地区
     * 添加新的地区，为地区设置能充值的档位
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postTradingAreaAdd(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 充值地区，例如 中国，韩国
             */
            area: string;
            /**
             * 充值档位的id,也就是哪些充值档位支持当前的地区
             */
            trading_id: Array<number>;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/trading/area/add',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取地区信息
     * 获取地区信息
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @returns any 成功
     * @throws ApiError
     */
    public static getTradingAreaList(
        xUserAuth: string,
        xCaptchaTicket: string,
    ): CancelablePromise<{
        /**
         * 地区信息
         */
        info: Array<{
            /**
             * 地区d
             */
            area_id?: number;
            /**
             * 地区名字
             */
            area?: string;
            /**
             * 可支持的充值档位id
             */
            trading_id?: Array<number>;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/trading/area/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除地区
     * 删除地区
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postTradingAreaDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 地区id
             */
            area_id: Array<number>;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/trading/area/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改地区
     * 修改地区信息
     *
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postTradingAreaModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 信息
             */
            info: {
                /**
                 * 地区id
                 */
                area_id: number;
                /**
                 * 地区名称
                 */
                area: string;
                /**
                 * 可支持的充值档位id
                 */
                trading_id: Array<number>;
            };
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/trading/area/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加订单
     * 添加订单
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postOrderAdd(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 充值档位id
             */
            trading_id: number;
            /**
             * 支付方式，0为alipay扫码支付，1为alipay的app支付，2为微信扫码支付，3为微信app支付，4为paypal支付
             */
            pay_way: number;
        },
    ): CancelablePromise<{
        /**
         * 二维码
         */
        code_url?: string;
        /**
         * app支付id
         */
        prepay_id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/order/add',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取订单信息
     * @param orderId 订单id
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @returns any 成功
     * @throws ApiError
     */
    public static getOrderAdd(
        orderId: string,
        xUserAuth: string,
        xCaptchaTicket: string,
    ): CancelablePromise<{
        /**
         * 0为没支付，1为支付成功，2为支付失败
         */
        status: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/order/add',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            query: {
                'order_id': orderId,
            },
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取可用充值档位信息
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postOrderUserfulList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 地区
             */
            area: string;
            /**
             * 平台
             */
            platform: string;
        },
    ): CancelablePromise<{
        /**
         * 充值档位
         */
        tradings: Array<{
            /**
             * 档位id
             */
            id?: number;
            /**
             * 价格
             */
            price?: number;
            /**
             * 充值档位的单位，0为CNY，1为USD，2为JPY
             */
            unit?: number;
            /**
             * 货币id
             */
            currency_id?: number;
            /**
             * 货币数量
             */
            currency_num?: number;
            /**
             * 赠品id
             */
            gift_id?: number;
            /**
             * 赠品数量
             */
            gift_num?: number;
            /**
             * 默认的状态，0为未发布，1为发布
             */
            status?: number;
            /**
             * 名称
             */
            name?: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/order/userful/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取头像框列表
     * 获取头像框列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarFrameList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 偏移量
             */
            limit: number;
            /**
             * 每页数量
             */
            offset: number;
            filter: {
                /**
                 * 名称，""为不通过该字段搜索
                 */
                name: string;
                /**
                 * 版本id
                 */
                version_id: number;
                /**
                 * 默认发布状态，-1为不通过该字段搜索
                 */
                default: number;
                /**
                 * 发布状态，-1为不通过该字段搜索
                 */
                release: number;
            };
        },
    ): CancelablePromise<{
        /**
         * 头像框列表
         */
        list: Array<{
            /**
             * 头像框id
             */
            id?: number;
            /**
             * 头像框名称
             */
            name?: string;
            /**
             * 创建的版本id
             */
            version_id?: number;
            /**
             * 被修改的版本id
             */
            last_version_id?: number;
            /**
             * 0未发布，1为已发布，2为隐藏
             */
            release?: number;
            /**
             * 0未发布，1为已发布，2为隐藏
             */
            default?: number;
            /**
             * 创建时的版本名字
             */
            version_name?: string;
            /**
             * 被修改时的版本名称
             */
            last_version_name?: string;
        }>;
        /**
         * 总数
         */
        total: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar_frame/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加技能
     * 在加入技能的时候，operator字段需要使用lua脚本编辑器，响应里的三个字段是lua脚本里有临时脚本需要复制的时候
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseSkillInsert(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 技能名
             */
            name: string;
            /**
             * 0 为其他类型，1为生灵，2为主城，3为生灵+主城
             */
            type: number;
            /**
             * lua脚本
             */
            operator: string;
            /**
             * 技能说明
             */
            explain: string;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * 需要的ActIn数量
         */
        need_act_in: number;
        /**
         * 需要的number数量
         */
        need_number: number;
        /**
         * 是否需要复制，当且仅当存有全局变量时才需要复制
         */
        need_copy: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/skill/insert',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取技能列表
     * 获取技能列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseSkillList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            limit: number;
            offset: number;
            filter: {
                /**
                 * “”为不通过这个字段搜素
                 */
                name: string;
                version_id: number;
                /**
                 * -1为不通过这个字段搜素
                 */
                default: number;
                /**
                 * -1为不通过这个字段搜索
                 */
                release: number;
            };
        },
    ): CancelablePromise<{
        /**
         * 货币列表
         */
        list: Array<{
            /**
             * 技能id
             */
            id?: number;
            /**
             * 技能名称
             */
            name?: string;
            /**
             * lua脚本
             */
            operator?: string;
            /**
             * 0 为其他类型，1为生灵，2为主城，3为生灵+主城
             */
            type?: number;
            /**
             * 技能说明
             */
            explain?: string;
            /**
             * 创建的版本id
             */
            version_id?: number;
            /**
             * 被修改的版本id
             */
            last_version_id?: number;
            /**
             * 0未发布，1为已发布，2为隐藏
             */
            release?: number;
            /**
             * 0未发布，1为已发布，2为隐藏
             */
            default?: number;
            /**
             * 创建时的版本名字
             */
            version_name?: string;
            /**
             * 被修改时的版本名称
             */
            last_version_name?: string;
        }>;
        /**
         * 总数
         */
        total: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/skill/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改技能
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseSkillModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 技能id
             */
            id: number;
            /**
             * 技能名字
             */
            name: string;
            /**
             * 0 为其他类型，1为生灵，2为主城，3为生灵+主城
             */
            type: number;
            /**
             * lua脚本
             */
            operator: string;
            /**
             * 技能说明
             */
            explain: string;
        },
    ): CancelablePromise<{
        /**
         * 需要的ActIn数量
         */
        need_act_in?: number;
        /**
         * 需要的number数量
         */
        need_number?: number;
        /**
         * 是否需要复制，当且仅当存有全局变量时才需要复制
         */
        need_copy?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/skill/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改发布状态
     * 只能将已经发布的修改为隐藏的，或者将隐藏的修改为已发布
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseSkillModifyRelease(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 技能id
             */
            id: number;
            /**
             * 0 未发布，1已发布，2隐藏
             */
            release: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/skill/modify/release',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改默认状态
     * default需要和release进行配合，如果发布的时候，default为1，则release会修改为1已发布状态，若default为2，则点击发布的时候relase会修改为2隐藏，default的修改时机必须在发布之前，如果release不等于0了，那么default不能被修改
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseSkillModifyDefault(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 技能的id
             */
            id: number;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/skill/modify/default',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除技能
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseSkillDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 技能id
             */
            id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/skill/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加生灵技能
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCreatureInsert(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能名
             */
            name: string;
            /**
             * 可以选择多个，使用二进制进行叠加，1为出生时调用，2为回合开始时调用，4为行动前调用，8为攻击前调用，16为攻击后调用，32为被攻击时调用，64为命中时调用，128被命中时调用，256闪避时调用，512被闪避时调用，1024死亡时调用，2048出牌时调用，4096摸牌时调用，8192召唤其他生物时调用
             */
            type: number;
            /**
             * 施法范围
             */
            exec: {
                /**
                 * 0为全图，1以生灵本身坐标发动，2圆环
                 */
                type: number;
                /**
                 * 外圈半径,只有当type为2需要填写，
                 */
                outer_radius?: number;
                /**
                 * 内圈半径,只有当type为2需要填写，如果范围是一个圆形，就不传这个参数
                 */
                inner_radius?: number;
            };
            /**
             * 操作范围
             */
            ranges: Array<{
                /**
                 * 0为矩形，1为圆形，2为全图
                 */
                type: number;
                /**
                 * 长，全图不填，圆形不填
                 */
                length?: number;
                /**
                 * 宽，全图不填，圆形不填
                 */
                width?: number;
                /**
                 * 半径，全图不填，矩形不填
                 */
                radius?: number;
            }>;
            /**
             * 伤害投放地点
             */
            skill_ranges: Array<{
                /**
                 * key是ranges这个数组的下标，举例，如果ranges的第0号元素的伤害投放地点需要设置，那么就把这个key传0，value传具体数据,
                 */
                key: number;
                /**
                 * 技能范围
                 */
                value: {
                    /**
                     * 0为使用怪物的原点，1为随机生成的原点，2为即使用怪的原点，也使用随机生成
                     */
                    type: number;
                    /**
                     * 传入的参数
                     */
                    in: {
                        /**
                         * 0为在y轴左边，1为在y轴右边
                         */
                        'x': number;
                        /**
                         * 0为在x轴上面，1为在x轴下面
                         */
                        'y': number;
                        /**
                         * 矩形长的那条边，0为依附于x轴，1为依附于y轴
                         */
                        axis: number;
                    };
                };
            }>;
            /**
             * 技能数量
             */
            skill_numbers: Array<{
                /**
                 * 是否随机
                 */
                rand: boolean;
                /**
                 * 如果随机需要填写，不随机不填写，0为我方手牌的个数，1为对方手牌的个数
                 */
                origin?: number;
                /**
                 * 数量，随机不填写，不随机填写，
                 */
                number?: number;
            }>;
            /**
             * 技能id
             */
            skill_id: number;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/creature/insert',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取头像列表
     * 获取头像框列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseAvatarList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            limit: number;
            offset: number;
            filter: {
                /**
                 * 名称，""为不通过该字段搜索
                 */
                name: string;
                version_id: number;
                /**
                 * -1为不通过这个字段搜索
                 */
                default: number;
                /**
                 * -1为不通过这个字段搜索
                 */
                release: number;
            };
        },
    ): CancelablePromise<{
        /**
         * 头像列表
         */
        list: Array<{
            /**
             * 头像id
             */
            id?: number;
            /**
             * 头像名称
             */
            name?: string;
            /**
             * 创建的版本id
             */
            version_id?: number;
            /**
             * 被修改的版本id
             */
            last_version_id?: number;
            /**
             * 0未发布，1为已发布，2为隐藏
             */
            release?: number;
            /**
             * 0未发布，1为已发布，2为隐藏
             */
            default?: number;
            /**
             * 创建时的版本名字
             */
            version_name?: string;
            /**
             * 被修改时的版本名称
             */
            last_version_name?: string;
        }>;
        /**
         * 总数
         */
        total: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/avatar/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取种族列表
     * 获取种族列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseRaceList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            limit: number;
            offset: number;
            filter: {
                /**
                 * “”为不通过这个字段搜索
                 */
                name: string;
                version_id: number;
                /**
                 * -1为不通过这个字段搜索
                 */
                default: number;
                /**
                 * -1为不通过这个字段搜索
                 */
                release: number;
            };
        },
    ): CancelablePromise<{
        /**
         * 种族列表
         */
        list: Array<{
            /**
             * 种族id
             */
            id?: number;
            /**
             * 种族名称
             */
            name?: string;
            /**
             * 创建的版本id
             */
            version_id?: number;
            /**
             * 被修改的版本id
             */
            last_version_id?: number;
            /**
             * 0未发布，1为已发布，2为隐藏
             */
            release?: number;
            /**
             * 0未发布，1为已发布，2为隐藏
             */
            default?: number;
            /**
             * 创建时的版本名字
             */
            version_name?: string;
            /**
             * 被修改时的版本名称
             */
            last_version_name?: string;
        }>;
        /**
         * 总数
         */
        total: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/race/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取货币列表
     * 获取货币列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCurrencyList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            limit: number;
            offset: number;
            filter: {
                /**
                 * “”为不同这个字段搜素
                 */
                name: string;
                version_id: number;
                /**
                 * -1为不通过这个字段搜素
                 */
                default: number;
                /**
                 * -1为不通过这个字段搜素
                 */
                release: number;
            };
        },
    ): CancelablePromise<{
        /**
         * 货币列表
         */
        list: Array<{
            /**
             * 货币id
             */
            id?: number;
            /**
             * 货币名称
             */
            name?: string;
            /**
             * 创建的版本id
             */
            version_id?: number;
            /**
             * 被修改的版本id
             */
            last_version_id?: number;
            /**
             * 0未发布，1为已发布，2为隐藏
             */
            release?: number;
            /**
             * 0未发布，1为已发布，2为隐藏
             */
            default?: number;
            /**
             * 创建时的版本名字
             */
            version_name?: string;
            /**
             * 被修改时的版本名称
             */
            last_version_name?: string;
        }>;
        /**
         * 总数
         */
        total: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/currency/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取生灵技能列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCreatureList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            limit: number;
            offset: number;
            filter: {
                /**
                 * “”为不通过这个字段搜索
                 */
                name: string;
                version_id: number;
                /**
                 * -1为不通过这个字段搜索
                 */
                default: number;
                /**
                 * -1为不通过这个字段搜索
                 */
                release: number;
            };
        },
    ): CancelablePromise<{
        total: number;
        list: Array<{
            name?: string;
            type?: number;
            exec?: {
                type: number;
                outer_radius: number;
                inner_radius: number;
            };
            ranges?: Array<{
                type?: number;
                length?: number;
                width?: number;
                radius?: number;
                point?: {
                    'c': number;
                    'y': number;
                };
            }>;
            skill_ranges?: Array<{
                key?: number;
                value?: {
                    type: number;
                    in: {
                        'x': number;
                        'y': number;
                        axis: number;
                        target: {
                            'x': number;
                            'y': number;
                        };
                    };
                };
            }>;
            skill_numbers?: Array<{
                rand?: boolean;
                origin?: number;
                number?: number;
            }>;
            id?: number;
            default?: number;
            release?: number;
            version_id?: number;
            last_version_id?: number;
            version_name?: string;
            last_version_name?: string;
            skill?: {
                id: number;
                name: string;
                operator: string;
                type: number;
                explain: string;
                version_id: number;
                last_version_id: number;
                release: number;
                default: number;
                version_name: string;
                last_version_name: string;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/creature/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除生灵技能
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCreatureDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能id
             */
            id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/creature/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改默认状态
     * default需要和release进行配合，如果发布的时候，default为1，则release会修改为1已发布状态，若default为2，则点击发布的时候relase会修改为2隐藏，default的修改时机必须在发布之前，如果release不等于0了，那么default不能被修改
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCreatureModifyDefault(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能的id
             */
            id: number;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/creature/modify/default',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改发布状态
     * 只能将已经发布的修改为隐藏的，或者将隐藏的修改为已发布
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCreatureModifyRelease(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能id
             */
            id: number;
            /**
             * 0 未发布，1已发布，2隐藏
             */
            release: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/creature/modify/release',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改生灵技能
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCreatureModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            id: number;
            name: string;
            type: number;
            exec: {
                type: number;
                outer_radius: number;
                inner_radius: number;
            };
            ranges: Array<{
                type?: number;
                length?: number;
                width?: number;
                radius?: number;
            }>;
            skill_ranges: Array<{
                key?: number;
                value?: {
                    type: number;
                    in: {
                        'x': number;
                        'y': number;
                        axis: number;
                    };
                };
            }>;
            skill_numbers: Array<{
                rand?: boolean;
                origin?: number;
                number?: number;
            }>;
            skill_id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/creature/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加仙法技能
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseTheurgySkillInsert(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能名
             */
            name: string;
            /**
             * 操作范围
             */
            ranges: Array<{
                /**
                 * 0为矩形，1为圆形，2为全图
                 */
                type: number;
                /**
                 * 长，全图不填，圆形不填
                 */
                length?: number;
                /**
                 * 宽，全图不填，圆形不填
                 */
                width?: number;
                /**
                 * 半径，全图不填，矩形不填
                 */
                radius?: number;
            }>;
            /**
             * ranges的下标
             */
            in: Array<number>;
            /**
             * 技能数量
             */
            skill_numbers: Array<{
                /**
                 * 是否随机
                 */
                rand: boolean;
                /**
                 * 如果随机需要填写，不随机不填写，0为我方手牌的个数，1为对方手牌的个数
                 */
                origin?: number;
                /**
                 * 数量，随机不填写，不随机填写，
                 */
                number?: number;
            }>;
            /**
             * 技能id
             */
            skill_id: number;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/theurgy_skill/insert',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取仙法技能列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseTheurgySkillList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            limit: number;
            offset: number;
            filter: {
                /**
                 * “”为不通过这个字段搜索
                 */
                name: string;
                version_id: number;
                /**
                 * -1为不通过这个字段搜索
                 */
                default: number;
                /**
                 * -1为不通过这个字段搜索
                 */
                release: number;
            };
        },
    ): CancelablePromise<{
        total: number;
        list: Array<{
            name?: string;
            ranges?: Array<{
                type?: number;
                length?: number;
                width?: number;
                radius?: number;
                point?: {
                    'c': number;
                    'y': number;
                };
            }>;
            in: Array<number>;
            skill_numbers?: Array<{
                rand?: boolean;
                origin?: number;
                number?: number;
            }>;
            id?: number;
            default?: number;
            release?: number;
            version_id?: number;
            last_version_id?: number;
            version_name?: string;
            last_version_name?: string;
            skill?: {
                id: number;
                name: string;
                operator: string;
                type: number;
                explain: string;
                version_id: number;
                last_version_id: number;
                release: number;
                default: number;
                version_name: string;
                last_version_name: string;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/theurgy_skill/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除仙法技能
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseTheurgySkillDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能id
             */
            id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/theurgy_skill/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改默认状态
     * default需要和release进行配合，如果发布的时候，default为1，则release会修改为1已发布状态，若default为2，则点击发布的时候relase会修改为2隐藏，default的修改时机必须在发布之前，如果release不等于0了，那么default不能被修改
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseTheurgySkillModifyDefault(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能的id
             */
            id: number;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/theurgy_skill/modify/default',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改发布状态
     * 只能将已经发布的修改为隐藏的，或者将隐藏的修改为已发布
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseTheurgySkillModifyRelease(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能id
             */
            id: number;
            /**
             * 0 未发布，1已发布，2隐藏
             */
            release: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/theurgy_skill/modify/release',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改仙法技能
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseTheurgySkillModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能名
             */
            name: string;
            /**
             * 操作范围
             */
            ranges: Array<{
                /**
                 * 0为矩形，1为圆形，2为全图
                 */
                type: number;
                /**
                 * 长，全图不填，圆形不填
                 */
                length?: number;
                /**
                 * 宽，全图不填，圆形不填
                 */
                width?: number;
                /**
                 * 半径，全图不填，矩形不填
                 */
                radius?: number;
            }>;
            /**
             * ranges的下标
             */
            in: Array<number>;
            /**
             * 技能数量
             */
            skill_numbers: Array<{
                /**
                 * 是否随机
                 */
                rand: boolean;
                /**
                 * 如果随机需要填写，不随机不填写，0为我方手牌的个数，1为对方手牌的个数
                 */
                origin?: number;
                /**
                 * 数量，随机不填写，不随机填写，
                 */
                number?: number;
            }>;
            /**
             * 技能id
             */
            skill_id: number;
            /**
             * ID 编号
             */
            id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/theurgy_skill/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加效果
     * 可选项传空字符串
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseEffectInsert(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 效果名字
             */
            name: string;
            /**
             * 0为buff,1为debuff
             */
            type: number;
            /**
             * 能持续多少个回合
             */
            round: number;
            /**
             * 1作用于我方，2作用于地方，可以叠加，3为两则都可以用
             */
            relation: number;
            /**
             * 1为针对生灵，2为针对主城，3为针对所有
             */
            unit_type: number;
            /**
             * 可选-脚本-每回合生效
             */
            round_every: string;
            /**
             * 可选-脚本-第一回合要运行的脚本
             */
            round_first: string;
            /**
             * 可选-脚本-最后一回合要运行的脚本
             */
            round_last: string;
            /**
             * 可选-脚本-效果结束要运行的脚本
             */
            round_end: string;
            /**
             * 可选-脚本- 叠加时运行，例如身上已经有效果A，那如果又受到效果B，需要执行此脚本
             */
            overlay: string;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/effect/insert',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取效果列表
     * 获取效果列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseEffectList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            limit: number;
            offset: number;
            filter: {
                /**
                 * “”为不同这个字段搜素
                 */
                name: string;
                version_id: number;
                /**
                 * -1为不通过这个字段搜素
                 */
                default: number;
                /**
                 * -1为不通过这个字段搜素
                 */
                release: number;
            };
        },
    ): CancelablePromise<{
        /**
         * 总数
         */
        total: number;
        list: Array<{
            id?: number;
            type?: number;
            name?: string;
            round?: number;
            relation?: number;
            unit_type?: number;
            round_every?: string;
            round_first?: string;
            round_last?: string;
            round_end?: string;
            overlay?: string;
            version_id?: number;
            last_version_id?: number;
            release?: number;
            default?: number;
            version_name?: string;
            last_version_name?: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/effect/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除效果
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseEffectDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能id
             */
            id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/effect/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改发布状态
     * 只能将已经发布的修改为隐藏的，或者将隐藏的修改为已发布
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseEffectModifyRelease(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能id
             */
            id: number;
            /**
             * 0 未发布，1已发布，2隐藏
             */
            release: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/effect/modify/release',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改默认状态
     * default需要和release进行配合，如果发布的时候，default为1，则release会修改为1已发布状态，若default为2，则点击发布的时候relase会修改为2隐藏，default的修改时机必须在发布之前，如果release不等于0了，那么default不能被修改
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseEffectModifyDefault(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能的id
             */
            id: number;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/effect/modify/default',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改效果
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseEffectModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            id: number;
            name: string;
            type: number;
            round: number;
            relation: number;
            unit_type: number;
            round_every: string;
            round_first: string;
            round_last: string;
            round_end: string;
            overlay: string;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/effect/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加主城技能
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCampSkillInsert(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            name: string;
            mp: number;
            exec: {
                type: number;
                outer_radius: number;
                inner_radius: number;
            };
            ranges: Array<{
                type?: number;
                length?: number;
                width?: number;
                radius?: number;
            }>;
            skill_ranges: Array<{
                key?: number;
                value?: {
                    type: number;
                    in: {
                        'x': number;
                        'y': number;
                        axis: number;
                    };
                };
            }>;
            skill_numbers: Array<{
                rand?: boolean;
                origin?: number;
                number?: number;
            }>;
            skill_id: number;
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/camp_skill/insert',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 获取主城列表
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCampSkillList(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            limit: number;
            offset: number;
            filter: {
                /**
                 * “”为不通过这个字段搜索
                 */
                name: string;
                version_id: number;
                /**
                 * -1为不通过这个字段搜索
                 */
                default: number;
                /**
                 * -1为不通过这个字段搜索
                 */
                release: number;
            };
        },
    ): CancelablePromise<{
        list: Array<{
            camp_skill?: {
                name: string;
                type: number;
                exec: {
                    type: number;
                    outer_radius: number;
                    inner_radius: number;
                };
                ranges: Array<{
                    type?: number;
                    length?: number;
                    width?: number;
                    radius?: number;
                }>;
                skill_ranges: Array<{
                    key?: number;
                    value?: {
                        type: number;
                        in: {
                            'x': number;
                            'y': number;
                            axis: number;
                        };
                    };
                }>;
                skill_numbers: Array<{
                    rand?: boolean;
                    origin?: number;
                    number?: number;
                }>;
                skill_id: number;
                default: number;
                release: number;
                version_id: number;
                last_version_id: number;
                version_name: string;
                last_version_name: string;
                skill: {
                    id: number;
                    name: string;
                    operator: string;
                    type: number;
                    explain: string;
                    version_id: number;
                    last_version_id: number;
                    release: number;
                    default: number;
                    version_name: string;
                    last_version_name: string;
                };
            };
            name?: string;
            default?: number;
            release?: number;
            version_id?: number;
            last_version_id?: number;
            version_name?: string;
            last_version_name?: string;
            id: number;
            hp: number;
        }>;
        total: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/camp_skill/list',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改默认状态
     * default需要和release进行配合，如果发布的时候，default为1，则release会修改为1已发布状态，若default为2，则点击发布的时候relase会修改为2隐藏，default的修改时机必须在发布之前，如果release不等于0了，那么default不能被修改
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCampSkillModifyDefault(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能的id
             */
            id: number;
            /**
             * 1为正常，2为隐藏
             */
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/camp_skill/modify/default',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改主城技能
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCampSkillModify(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            id: number;
            name: string;
            mp: number;
            exec: {
                type: number;
                outer_radius: number;
                inner_radius: number;
            };
            ranges: Array<{
                type?: number;
                length?: number;
                width?: number;
                radius?: number;
            }>;
            skill_ranges: Array<{
                key?: number;
                value?: {
                    type: number;
                    in: {
                        'x': number;
                        'y': number;
                        axis: number;
                    };
                };
            }>;
            skill_numbers: Array<{
                rand?: boolean;
                origin?: number;
                number?: number;
            }>;
            skill_id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/camp_skill/modify',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 修改发布状态
     * 只能将已经发布的修改为隐藏的，或者将隐藏的修改为已发布
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCampSkillModifyRelease(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能id
             */
            id: number;
            /**
             * 0 未发布，1已发布，2隐藏
             */
            release: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/camp_skill/modify/release',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 删除主城技能
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCampSkillDelete(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 生灵技能id
             */
            id: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/camp_skill/delete',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
    /**
     * 添加主城
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postWarehouseCampInsert(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            name: string;
            hp: number;
            camp_skill_id: number;
            default: number;
        },
    ): CancelablePromise<{
        /**
         * code
         */
        code: number;
        /**
         * 说明
         */
        message?: string;
        /**
         * 追踪id
         */
        trace_id?: string;
        /**
         * 用户展示文本
         */
        text: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/warehouse/camp/insert',
            headers: {
                'X-USER-AUTH': xUserAuth,
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                422: `422`,
                500: `500`,
            },
        });
    }
}

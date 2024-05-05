/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InfoService {
    /**
     * 用户基础信息
     * 获取用户个人信息
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static getUserInfo(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: any,
    ): CancelablePromise<{
        /**
         * 用户id
         */
        id: number;
        /**
         * 头像
         */
        avatar: number;
        /**
         * 头像框
         */
        avatar_frame: number;
        /**
         * 昵称
         */
        nickname: number;
        /**
         * 账号
         */
        account: string;
        /**
         * 带*的手机号
         */
        phone: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/info',
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
     * 修改用户头像
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postUserInfoUpdateAvatar(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 头像
             */
            avatar: number;
            /**
             * 头像框
             */
            avatar_frame: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/info/update/avatar',
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
     * 修改昵称
     * 修改用户昵称
     * @param xUserAuth session值
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postUserInfoUpdateName(
        xUserAuth: string,
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 昵称
             */
            nickname: string;
        },
    ): CancelablePromise<{
        code: number;
        message: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/info/update/name',
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

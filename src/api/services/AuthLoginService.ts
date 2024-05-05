/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthLoginService {
    /**
     * 普通登录
     * 用户账号密码登录
     *
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postUserAuthLoginNormal(
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 用户账号
             */
            account: number;
            /**
             * 密码
             */
            password: string;
        },
    ): CancelablePromise<{
        /**
         * 密钥串
         */
        session: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/auth/login/normal',
            headers: {
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 手机号登录
     * 用户手机号登录
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postUserAuthLoginPhone(
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 手机前缀
             */
            phone_prefix: string;
            /**
             * 手机号
             */
            phone_number: string;
            /**
             * 验证码
             */
            code: string;
        },
    ): CancelablePromise<{
        /**
         * 密钥串
         */
        session: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/auth/login/phone',
            headers: {
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 【待定】第三方登录/微信/QQ
     * @param xCaptchaTicket captcha ticket
     * @returns any 成功
     * @throws ApiError
     */
    public static post(
        xCaptchaTicket: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/',
            headers: {
                'X-CAPTCHA-TICKET': xCaptchaTicket,
            },
            errors: {
                400: `400`,
                403: `403`,
                500: `500`,
            },
        });
    }
}

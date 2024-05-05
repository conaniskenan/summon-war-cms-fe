/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * 注册
     * 用户注册
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postUserAuthRegister(
        requestBody?: {
            /**
             * 手机号前缀
             */
            phone_prefix: string;
            /**
             * 手机号
             */
            phone_number: string;
            /**
             * 手机验证码
             */
            code: string;
            /**
             * 密码
             */
            password: string;
        },
    ): CancelablePromise<{
        /**
         * 账号
         */
        account: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
                500: `500`,
            },
        });
    }
    /**
     * 重置密码
     * 用户重置密码
     * @param xCaptchaTicket captcha ticket
     * @param requestBody
     * @returns any 成功
     * @throws ApiError
     */
    public static postUserAuthResetPassword(
        xCaptchaTicket: string,
        requestBody?: {
            /**
             * 手机号前缀
             */
            phone_prefix: string;
            /**
             * 手机号
             */
            phone_number: string;
            /**
             * 手机验证码
             */
            code: string;
            /**
             * 新密码
             */
            password: string;
        },
    ): CancelablePromise<{
        code: number;
        message: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/auth/reset/password',
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
}

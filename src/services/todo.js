'use strict';

import service from '../utils/service';
let baseUrl = ""
process.env.NODE_ENV === 'development'? baseUrl = "/api" : baseUrl = ""
/**
 * 获取一个随机值
 * @returns {Promise}
 */
export function getTodo () {
    // const res = await service.post('http://1a4feaf6-7843-4c21-8de3-e236c85f1a5c.mock.pstmn.io'+'/todos/1');
    // return res.data;
    return service({
        url: "http://f9c7997e-ab81-4b94-b829-c04588d8ad7e.mock.pstmn.io/login",
        method: "post",
    })
}

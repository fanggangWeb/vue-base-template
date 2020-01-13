/**
 * example
 * @author ydr.me
 * @create 2019-09-26 19:48:41
 * @update 2019-09-26 19:48:41
 */

'use strict';

import service from '../utils/service';
let baseUrl = ""
process.env.NODE_ENV === 'development'? baseUrl = "/api" : baseUrl = ""
/**
 * 获取一个随机值
 * @returns {Promise}
 */
export async function getTodo () {
    // const res = await service.get('http://jsonplaceholder.typicode.com/todos/1');
    console.log(baseUrl)
    const res = await service.get(`${baseUrl}/todos/1`);
    return res.data;
}

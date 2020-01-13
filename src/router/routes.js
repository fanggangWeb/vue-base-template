/**
 * routers
 * @author ydr.me
 * @create 2019-09-17 17:01:19
 * @update 2019-09-17 17:01:19
 */

'use strict';

export default [
    {
        path: '/login',
        name: 'Home',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    // {
    //     path: '*',
    //     redirect: '/home'
    // }
];

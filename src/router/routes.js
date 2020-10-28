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
    {
        path: '/',
        redirect: '/login'
    }
    // 测试git
];

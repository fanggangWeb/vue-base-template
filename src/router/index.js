/**
 * index
 * @author ydr.me
 * @create 2019-09-17 17:01:41
 * @update 2019-09-17 17:01:41
 */

'use strict';

import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes
});

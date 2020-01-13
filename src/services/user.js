/**
 * user
 * @author ydr.me
 * @create 2019-11-13 11:30:22
 * @update 2019-11-13 11:30:22
 */

'use strict';

import store from '../store';
import { SET_USER_TOKEN } from '../store/types';

export async function signIn() {
    // ...
    const userToken = Math.random() + '';
    localStorage.setItem('userToken', userToken);
    store.commit(SET_USER_TOKEN, userToken);
}

export async function signOut() {
    // ...
    localStorage.removeItem('userToken');
    store.commit(SET_USER_TOKEN, null);
}

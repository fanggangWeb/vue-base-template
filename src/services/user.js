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

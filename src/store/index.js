'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import state from './state';
Vue.use(Vuex);
export default new Vuex.Store({
    mutations,
    state,
    actions: {
        FedLogout ({commit}) {
          commit("settoken","");
          commit("setuserInfo","")
        }
    }
});
// 组装模块并导出 store 的地方
import Vue from 'vue';
import Vuex from 'vuex';

import login from './modules/login';
import editor from './modules/editor';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login,
        editor
    },
    strict: process.env.NODE_ENV !== 'production', // 严格模式
});
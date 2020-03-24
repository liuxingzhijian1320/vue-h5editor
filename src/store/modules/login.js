// 初始状态
const state = {
    loginstatus: false
};

// 读取数据
const getters = {
    loginstatus: state => state.loginstatus,
};

// 数据改变
const mutations = {
    switchLoginStatus(state, payload) {
        state.loginstatus = payload;
    }
};

// 逻辑响应
const actions = {

};

export default {
    state,
    getters,
    actions,
    mutations,
};
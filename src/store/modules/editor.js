// 初始状态
const state = {
    currentPageIndex: 0, // 高亮页面
    activeElementIndex: 0, // 高亮元素
    commonStyleConfig: {
        position: 'absolute',
        width: 375,
        height: 30,
        top: 200,
        left: 0,
        rotate: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        borderWidth: 0,
        borderColor: '',
        borderStyle: 'solid',
        borderRadius: 0,
        boxShadow: '',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#000000',
        backgroundColor: '',
        backgroundImage: '',
        backgroundSize: 'cover',
        opacity: 1,
        zIndex: 1
    },
    projectData: {
        page: [{
            elements: [{
                commonStyle: {},
            }]
        }],
    }
};

// 读取数据
const getters = {
    currentPageIndex: state => state.currentPageIndex,
    activeElementIndex: state => state.activeElementIndex,
};

// 数据改变
const mutations = {
    // switchLoginStatus(state, payload) {
    //     state.loginstatus = payload;
    // }
};

// 逻辑响应
const actions = {

};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
};
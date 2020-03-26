import { commonStyleConfig } from '../config'

// 初始状态
const state = {
    activeTypedId: 1, // 1文字 2图片 3视频 4预览 5保存
    currentPageIndex: 0, // 高亮页面index
    activeElementIndex: 0, // 高亮元素index
    activePage: {}, // 高亮 页面
    // 当前正在编辑的页面uuid
    activePageUUID: 'page-1',
    // 画板中选中的元素uuid
    activeElementUUID: '',

    projectData: {
        pages: [{
            uuid: `page-1`,
            elements: [
                // {
                //     elName: 'div',
                //     value: '10个肉包子'
                //     uuid: 'el-1',
                //     commonStyle: {
                //         ...commonStyleConfig
                //     },
                // },
            ]
        }],
    }
};

// 读取数据
const getters = {
    activeTypedId: state => state.activeTypedId,
    currentPageIndex: state => state.currentPageIndex,
    activeElementIndex: state => state.activeElementIndex,
    activeElementUUID: state => state.activeElementUUID,
    activePage: state => {
        return state.projectData.pages.find(v => { return v.uuid === state.activePageUUID })
    },
    activeElement: state => {
        return state.projectData.pages[state.currentPageIndex].elements[state.activeElementIndex]
    }
};

// 数据改变
const mutations = {
    // 属性类别
    selectActiveTypedId(state, typeId) {
        state.activeTypedId = typeId
        this.commit('editor/createElementbyTypeId', typeId)
    },
    // 创建元素
    createElementbyTypeId(state, typeId) {
        let uuid = `el-${+new Date()}`,
            elName = typeId,
            value = '10个肉包子'
        state.projectData.pages[state.currentPageIndex].elements.push({
            elName,
            uuid,
            value,
            commonStyle: {
                ...commonStyleConfig
            },
        })
    },
    // 更新元素的数据
    updateElementPropsByIpnut(state, payload) {
        let activeEl = state.projectData.pages[state.currentPageIndex].elements[state.activeElementIndex]
            // console.info(11111, payload, activeEl)
        if (activeEl) {
            activeEl.value = payload.props && payload.props.value;
            activeEl.commonStyle = {
                ...activeEl.commonStyle,
                ...payload.styles
            };
            state.projectData.pages[state.currentPageIndex].elements[state.activeElementIndex] = activeEl
                // console.info(333, state, activeEl)
        }

    },
    // 当前高亮的元素
    setActiveUUID(state, ElementUUID) {
        // 元素的uuid
        state.activeElementUUID = ElementUUID;
        // 获取 currentPageIndex activeElementIndex activePageUUID
        state.projectData.pages.forEach((item, index) => {
            item.elements.forEach((code, codeindex) => {
                if (code.uuid === ElementUUID) {
                    state.currentPageIndex = index
                    state.activeElementIndex = codeindex
                    state.activePageUUID = item.uuid
                }
            })
        })
    },

    // 更新当前元素的信息
    updateActiveElementConfig(state, payload) {
        let activeEl = state.projectData.pages[state.currentPageIndex].elements[state.activeElementIndex].commonStyle
        activeEl = {
            ...activeEl,
            ...payload
        }
        state.projectData.pages[state.currentPageIndex].elements[state.activeElementIndex].commonStyle = activeEl
    }
};

// 逻辑响应
const actions = {
    /**
     * 设置当前选中激活元素uuid
     * @param state
     * @param data
     */
    setActiveElementUUID({ commit }, uuid) {
        commit('setActiveElementUUID', uuid);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
};
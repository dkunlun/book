import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as type from './mutation-types'
import * as actions from './action'

Vue.use(Vuex)

const state = {
	searchList: [], //搜索列表
	bookInfo: {}, //小说信息
	sourceList: [], //书源列表
	catalog: [], //章节列表
	content: {
		title: '',
		body: ''
	} //章节内容
}

const getters = {
	searchList: state => state.searchList,
	bookInfo: state => state.bookInfo,
	sourceList: state => state.sourceList,
	catalog: state => state.catalog,
	content: state => state.content
}


export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
})
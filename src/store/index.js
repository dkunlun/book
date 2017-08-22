import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as type from './mutation-types'
import * as actions from './action'
import { getStorage } from '../utils/storage'

Vue.use(Vuex)

const state = {
	searchList: [], //搜索列表
	bookInfo: {}, //小说信息
	sourceList: [], //书源列表
	chapterList: [], //章节列表
	content: {
		title: '',
		body: ''
	}, //章节内容
	history: JSON.parse(getStorage('history')) || [],
	keyword: '',
	currentSource: {}, //当前书源
	currentChapter: {} //当前章节
}

const getters = {
	searchList: state => state.searchList,
	bookInfo: state => state.bookInfo,
	sourceList: state => state.sourceList,
	chapterList: state => state.chapterList,
	content: state => state.content,
	history: state => state.history,
	keyword: state => state.keyword,
	currentSource: state => state.currentSource,
	currentChapter: state => state.currentChapter
}


export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
})
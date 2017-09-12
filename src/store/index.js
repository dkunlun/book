import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as type from './mutation-types'
import * as actions from './action'
import { getStorage } from '../utils/storage'
import creatLocalState from '../plugins/plugin'

Vue.use(Vuex)

const state = {
	bookInfo: {}, //小说信息
	sourceList: [], //书源列表
	chapterList: [], //章节列表
	content: {
		title: '',
		body: ''
	}, //章节内容
	keyword: '',
	currentBook: {},
	currentSource: {}, //当前书源
	currentChapter: {}, //当前章节
	categoryList: {}, //分类列表
	previousPosition: '书架',
	rank: {}
}

const getters = {
	bookInfo: state => state.bookInfo,
	sourceList: state => state.sourceList,
	chapterList: state => state.chapterList,
	content: state => state.content,
	keyword: state => state.keyword,
	currentBook: state => state.currentBook,
	currentSource: state => state.currentSource,
	currentChapter: state => state.currentChapter,
	categoryList: state => state.categoryList,
	previousPosition: state => state.previousPosition,
	rank: state => state.rank
}


export default new Vuex.Store({
	state,
	plugins: [creatLocalState()],
	actions,
	getters,
	mutations
})

import * as type from './mutation-types'
import * as api from '../api/api'

const bookDetail = ({ commit }, id) => {
	return api.bookDetail(id).then(res => {
		commit(type.BOOK_DETAIL, res)
	})
}

const getSource = ({ commit }, id) => {
	return api.getSource(id).then(res => {
		commit(type.GET_SOURCE, res)
	})
}

const getChapterList = ({ commit }, id) => {
	return api.getChapterList(id).then((res) => {
		commit(type.GET_CHAPTER_LIST, res.chapters)
	})
}

const getContent = ({ commit }, id) => {
	return api.getContent(id).then((res) => {
		commit(type.GET_CONTENT, res.chapter)
	})
}

const getCategoryList = ({ commit }) => {
	return api.getContent().then((res) => {
		commit(type.GET_CATEGORY_LIST, res)
	})
}

export {
	bookDetail,
	getSource,
	getChapterList,
	getContent
}

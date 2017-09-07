import * as type from './mutation-types'
import * as api from '../api/api'

const search = ({ commit }, keyword) => {
	return api.search(keyword).then((res) => {
		commit(type.SEARCH, res.books)
	})
}

const bookDetail = ({ commit }, id) => {
	return api.bookDetail(id).then((res) => {
		commit(type.BOOKDETAIL, res)
	})
}

const getSource = ({ commit }, id) => {
	return api.getSource(id).then((res) => {
		commit(type.GETSOURCE, res)
	})
}

const getChapterList = ({ commit }, id) => {
	return api.getChapterList(id).then((res) => {
		commit(type.GETCHAPTERLIST, res.chapters)
	})
}

const getContent = ({ commit }, id) => {
	return api.getContent(id).then((res) => {
		commit(type.GETCONTENT, res.chapter)
	})
}

const getCategoryList = ({ commit }) => {
	return api.getContent().then((res) => {
		commit(type.GETCATEGORYLIST, res)
	})
}

export {
	search,
	bookDetail,
	getSource,
	getChapterList,
	getContent
}

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

const getCatalog = ({ commit }, id) => {
	return api.getCatalog(id).then((res) => {
		commit(type.GETCATALOG, res.chapters)
	})
}

const getContent = ({ commit }, id) => {
	return api.getContent(id).then((res) => {
		commit(type.GETCONTENT, res.chapter)
	})
}

export {
	search,
	bookDetail,
	getSource,
	getCatalog,
	getContent
}
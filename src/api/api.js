import axios from 'axios'

const search = (keyword) => {
	return axios.get('/api/book/fuzzy-search', {
		params: {
			query: keyword,
			start: 0
		}
	})
}

const bookDetail = (id) => {
	return axios.get('/api/book/' + id, {
		
	})
}

const getSource = (id) => {
	return axios.get('/api/toc/', {
		params: {
			view: 'summary',
			book: id
		}
	})
}

const getChapterList = (id) => {
	return axios.get('/api/toc/' + id, {
		params: {
			view: 'chapters'
		}
	})
}
const getContent = (link) => {
	return axios.get('/chapter/' + link, {
		params: {
			k: '2124b73d7e2e1945',
			t: '1468223717'
		}
	})
}

export {
	search,
	bookDetail,
	getSource,
	getChapterList,
	getContent
}
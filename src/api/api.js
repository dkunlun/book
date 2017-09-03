import axios from 'axios'
/**
 * 根据关键字搜索小说
 * @param  {string}
 * @return {promise}
 */
const search = (keyword) => {
	return axios.get('/api/book/fuzzy-search', {
		params: {
			query: keyword,
			start: 0
		}
	})
}
/**
 * 根据小说id获取小说详情
 * @param  {string}
 * @return {promise}
 */
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

const getCategoryList = () => {
	return axios.get('/api/cats/lv2/statistics')
}

const getCategoryDetail = () => {
	return axios.get('/api/cats/lv2')
}

const getNovelListByCat = (gender, type, major, minor = '', start = 0, limit = 20) => {
	return axios.get('/api/book/by-categories', {
		params: {
			gender: gender,
			type: type,
			major: major,
			minor: minor,
			start: start,
			limit: limit
		}
	})
}

/**
 * 获取热词
 */
const getHotWords = () => {
	return axios.get('/api/book/search-hotwords')
}


/**
 * 自动搜索补充
 * @param {String} searchKey 关键字
 * http://api05iye5.zhuishushenqi.com/book/auto-complete?query=%E6%96%97%E7%BD%97
 */
const autoComplete = (searchKey) => {
	return axios.get('/api/book/auto-complete?query=' + searchKey)
}

/**
 * 获取所有排行版类型
 * @return {null} 
 */
const getRankType = () => {
	return axios.get('/api/ranking/gender')
}

/**
 * 根据id获取排行版
 * @param {String} [varname] id为周榜id，月榜id，总榜id
 */
const getRankList = (id) => {
	return axios.get('/api/ranking/' + id)
}

export {
	search,
	bookDetail,
	getSource,
	getChapterList,
	getContent,
	getCategoryList,
	getCategoryDetail,
	getNovelListByCat,
	autoComplete,
	getHotWords,
	getRankType,
	getRankList
}
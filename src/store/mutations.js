import {
	SEARCH,
	BOOKDETAIL,
	GETSOURCE,
	GETCATALOG,
	GETCONTENT,
	SETHISTORY,
	SETKEYWORD
} from './mutation-types'

export default {
	[SEARCH] (state, list) {
		state.searchList = list
	},
	[BOOKDETAIL] (state, bookInfo) {
		state.bookInfo = bookInfo
	},
	[GETSOURCE] (state, list) {
		state.sourceList = list
	},
	[GETCATALOG] (state, list) {
		state.catalog = list
	},
	[GETCONTENT] (state, content) {
		state.content = content
	},
	[SETHISTORY] (state, history) {
		state.history = history
	},
	[SETKEYWORD] (state, keyword) {
		state.keyword = keyword
	}
}
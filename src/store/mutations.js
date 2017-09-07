import {
	SEARCH,
	BOOKDETAIL,
	GETSOURCE,
	GETCHAPTERLIST,
	GETCONTENT,
	SETHISTORY,
	SETKEYWORD,
	SET_CURRENT_BOOK,
	SET_CURRENT_SOURCE,
	SET_CURRENT_CHAPTER,
	GETCATEGORYLIST,
	SET_BACK_POSITION,
	SETRANK
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
	[GETCHAPTERLIST] (state, list) {
		state.chapterList = list
	},
	[GETCONTENT] (state, content) {
		state.content = content
	},
	[SETHISTORY] (state, history) {
		state.history = history
	},
	[SETKEYWORD] (state, keyword) {
		state.keyword = keyword
	},
	[SET_CURRENT_BOOK] (state, book) {
		state.currentBook = book
	},
	[SET_CURRENT_SOURCE] (state, source) {
		state.currentSource = source
	},
	[SET_CURRENT_CHAPTER] (state, chapter) {
		state.currentChapter = chapter
	},
	[GETCATEGORYLIST] (state, list) {
		state.categoryList = list
	},
	[SET_BACK_POSITION] (state, position) {
		state.previousPosition = position
	},
	[SETRANK] (state, rankInfo) {
		state.rank = rankInfo
	}
}

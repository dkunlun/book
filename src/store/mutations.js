import {
	BOOK_DETAIL,
	GET_SOURCE,
	GET_CHAPTER_LIST,
	GET_CONTENT,
	SET_CURRENT_BOOK,
	SET_CURRENT_SOURCE,
	SET_CURRENT_CHAPTER,
	GET_CATEGORY_LIST,
	SET_BACK_POSITION,
	SET_RANK
} from './mutation-types'

export default {
	[BOOK_DETAIL] (state, info) {
		state.bookInfo = info
	},
	[GET_SOURCE] (state, list) {
		state.sourceList = list
	},
	[GET_CHAPTER_LIST] (state, list) {
		state.chapterList = list
	},
	[GET_CONTENT] (state, content) {
		state.content = content
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
	[GET_CATEGORY_LIST] (state, list) {
		state.categoryList = list
	},
	[SET_BACK_POSITION] (state, position) {
		state.previousPosition = position
	},
	[SET_RANK] (state, rankInfo) {
		state.rank = rankInfo
	}
}

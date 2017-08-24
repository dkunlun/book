import {
	SEARCH,
	BOOKDETAIL,
	GETSOURCE,
	GETCHAPTERLIST,
	GETCONTENT,
	SETHISTORY,
	SETKEYWORD,
	SETCURRENTSOURCE,
	SETCURRENTCHAPTER
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
	[SETCURRENTSOURCE] (state, source) {
		state.currentSource = source
	},
	[SETCURRENTCHAPTER] (state, chapter) {
		state.currentChapter = chapter
	}
}
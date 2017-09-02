<template>
	<div>
		<div class="search-head">
			<span class="search-icon">
				<img src="../../assets/images/search.svg">
			</span>
			<input type="text" class="search-input" placeholder="输入书名或者作者名" v-model="searchKey" @input="autoComplete" @keyup.enter="search">
		</div>
		<div class="search-info" v-show="!searchKey">
			<ul class="search-word">
				<v-touch class="search-hot-word" tag="li" v-for="(searchHotWord, index) in searchHotWords" :key="index" @tap="search">
					{{searchHotWord.word}}
				</v-touch>
			</ul>
			<div class="search-history">
				<div class="fun-bar">
					<span>搜索历史</span>
					<v-touch>
						<img src="../../assets/images/trash.svg">
					</v-touch>
				</div>
				<ul class="history-list">
					<v-touch tag="li">
						重生
					</v-touch>
				</ul>
			</div>
		</div>

		<ul class="auto-complete-list" v-if="autoCompleteList.length && searchKey">
			<v-touch tag="li" v-for="(item, index) in autoCompleteList" :key="index" @tap="search">
				{{item}}
			</v-touch>
		</ul>

		<ul class="search-result" v-if="searchResult.length">
			<BookList v-for="book in searchResult" :book="book" :key="book._id"></BookList>
		</ul>
	</div>
</template>

<script>
	import { autoComplete,getHotWords,search } from '../../api/api'
	import BookList from '../book/BookList'
	import { Indicator } from 'mint-ui'

	export default {
		data () {
			return {
				searchKey: '',
				searchHotWords: null,
				autoCompleteList: [],
				searchResult: [],
				searchHistory: []
			}
		},
		components: {
			BookList
		},
		watch: {
			'searchKey': function () {
				if(!this.searchKey) {
					this.autoCompleteList = []
					this.searchResult = []
				}
			}
		},
		methods: {
			autoComplete () {
				autoComplete(this.searchKey).then(res => {
					this.autoCompleteList = res.keywords;
				}).catch(err => {
					console.log(err)
				})
			},
			search (el) {
				this.searchKey = el.target.innerText || this.searchKey
				Indicator.open()
				search(this.searchKey).then(res => {
					this.searchResult = res.books
					this.autoCompleteList = []
					Indicator.close()
				}).catch(err => {
					console.log(err)
				})
			}
		},
		created () {
			getHotWords().then(res => {
				this.searchHotWords = res.searchHotWords
				//只取前15个热词
				this.searchHotWords.length = 15
			}).catch(err => {
				console.log(err)
			})
		}
	}
</script>

<style lang="scss" scoped>
	.search-head {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 3.125rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		padding: 0 1.25rem;
		background: #04b1ff;
	}

	.search-info {
		width: 100vw;
	}

	.search-input {
		width: 100%;
		line-height: 1.75rem;
		padding-left: 2.25rem;
		border-radius: 0.25rem;
		border: none;
	}

	.search-input:focus,
	.cancel:focus {
		outline: none;
	}

	.search-word {
		display: flex;
		margin-top: 3.75rem;
		border-bottom: 1px solid #f2f2f2;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
	}

	.search-hot-word {
		font-size: 0.75rem;
		padding: 0.25rem 0.75rem;
		border: 1px solid #f2f2f2;
		border-radius: 1rem;
		margin-left: 0.625rem;
		margin-bottom: 0.625rem;
		&:active {
			background: #f2f2f2;
		}
	}

	.auto-complete-list {
		display: flex;
		flex-direction: column;
		margin-top: 3.125rem;
		width: 100vw;
		li {
			padding-left: 1.875rem;
			line-height: 2.5rem;
			border-bottom: 1px solid #f2f2f2;
		}
		& li:active {
			background: #f2f2f2;
		}
	}

	.search-result {
		display: flex;
		flex-direction: column;
		margin-top: 3.125rem;
		width: 100vw;
		background: #f2f2f2;
	}

	.search-icon img {
		position: absolute;
		left: 1.75rem;
		line-height: 4.375;
		width: 20px;
		top:0.93rem;
	}

	.search-history {
		padding: 1.25rem;
		.fun-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 0.625rem;
			line-height: 1.25rem;
			font-size: 0.875rem;
			color: #515151;
			img {
				width: 1rem;
				height: 1.25rem;
				vertical-align: middle;
			}
		}
	}
	.history-list li {
		line-height: 1.875rem;
		font-size: 0.875rem;
		border-bottom: 1px solid #f2f2f2;
		color: #a08787;
	}
</style>
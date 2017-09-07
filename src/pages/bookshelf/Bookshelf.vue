<template>
	<div>
		<mt-button type="primary" class="add-book" v-if="!books.length">
			添加小说
		</mt-button>
		<ul class="book-shelf" v-if="books.length">
			<v-touch v-for="(book, index) in books" :key="index" tag="li" class="book-list-wrap" @swipeleft="showDelBookBtn" @swiperight="hideDelBookBtn">
				<v-touch class="book-list" @tap="toReadBook(book)">
					<div class="read-book-history">
						<img :src="book.cover">
						<div class="info">
							<p class="title">{{book.title}}</p>
							<p class="updated">{{book.updated | ago}}: {{book.lastChapter}}</p>
						</div>
					</div>
					<v-touch class="del-book-btn" @tap="delBook($event, index)">
						删除
					</v-touch>
				</v-touch>
			</v-touch>
		</ul>
	</div>
</template>

<script>
	import { getUpdate } from '../../api/api'
	import moment from 'moment'
	import { getStorage,setStorage,staticPath } from '../../utils/storage'
	import { Indicator } from 'mint-ui'

	moment.locale('zh-cn')
	export default {
		naem: 'Bookshelf',
		data () {
			return {
				books: []
			}
		},
		filters: {
			ago (time) {
				return moment(time).fromNow()
			}
		},
		created () {
			this.getBookUpdate()
		},
		methods: {
			getBookList () {
				let localShelf = getStorage('followBookList')
				let ids = []
				for(let bookId in localShelf) {
					ids.push(bookId)
				}
				return ids
			},
			async getBookUpdate () {
				let localShelf,
					that = this,
					res = null
				Indicator.open()
				try {
					res = await getUpdate(this.getBookList())
					localShelf = getStorage('followBookList')
					res.forEach((book) => {
						Object.assign(book, localShelf[book._id])
						book.cover = staticPath + book.cover
						this.books.push(book)
					})
				} catch(err) {
					console.log(err)
				}
				Indicator.close()
			},
			showDelBookBtn (e) {
				let target = e.target.parentElement
				while (!target.classList.contains('book-list')) {
					target = target.parentElement
				}
				target.classList.add('showDelBookBtn')
				target.classList.remove('hideDelBookBtn')
			},
			hideDelBookBtn (e) {
				let target = e.target.parentElement
				while (!target.classList.contains('book-list')) {
					target = target.parentElement
				}
				target.classList.add('hideDelBookBtn')
				target.classList.remove('showDelBookBtn')
			},
			delBook (e, index) {
				let localShelf = getStorage('followBookList') || {}

				delete localShelf[this.books[index]._id]
				this.books.splice(index, 1)

				setStorage('followBookList', localShelf)
			},
			toReadBook (book) {
				this.$router.push({name: 'reader', params: {id: book._id}})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-book {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.book-shelf {
		width: 100vw;
		overflow: hidden;
		box-sizing: border-box;
		padding: 0.625rem 0 0 0.625rem;
	}
	.book-list-wrap {
		position: relative;
		height: 6.25rem;
		margin-bottom: 0.25rem;
	}

	.book-list {
		position: absolute;
		left: 0;
		width: 140vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 0.25rem;
		img {
			height: 6.25rem;
			float: left;
			margin-right: 0.5rem;
		}
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		width: 100%;
		height: 6.25rem;
		margin-left: 0.75rem;
		border-bottom: 1px solid #f2f2f2;
		p {
			margin-top: 0.25rem;
			margin-bottom: 0.25rem;
		}
	}

	.updated {
		color: #6d6666;
		font-size: 1rem;
	}

	.del-book-btn {
		color: #fff;
		background: red;
		width: 40vw;
		line-height: 6.25rem;
		text-align: center;
	}

	.read-book-history {
		display: flex;
		width: 100vw;
	}

	@keyframes slideLeft {
		from {
			left: 0
		}
		to {
			left: -44vw
		}
	}

	@keyframes slideRight {
		from {
			left: -44vw
		}
		to {
			left: 0
		}
	}
	.showDelBookBtn {
		animation: slideLeft 0.5s;
		animation-fill-mode: forwards;
	}

	.hideDelBookBtn {
		animation: slideRight 0.5s;
		animation-fill-mode: forwards;
	}

</style>

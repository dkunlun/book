<template>
	<div class="book-list-wrap">
		<v-touch tag="ul" @swipeleft="swipeleft" @swiperight="swiperight">
			<BookList v-for="book in books" :book="book" :key="book._id"></BookList>
		</v-touch>
	</div>
</template>

<script>
	import BookList from '../book/BookList'
	import { Indicator } from 'mint-ui'
	import { getRankList } from '../../api/api'
	import { mapGetters } from 'vuex'

	export default {
		components: {
			BookList
		},
		data () {
			return {
				rankInfo: {},
				books: [],
				rankType: '',
				rankTypeStack: ['/rankList/weekRank', '/rankList/monthRank', '/rankList/totalRank'],
				currentRank: 0,
				currentLoadPage: 1
			}
		},
		computed: {
			...mapGetters(['rank'])
		},
		methods: {
			getData () {
				Indicator.open()
				switch (this.$route.path) {
					case this.rankTypeStack[0]:
						this.rankType = this.rank._id
						this.currentLoadPage = 0
						break
					case this.rankTypeStack[1]:
						this.rankType = this.rank.monthRank
						this.currentLoadPage = 0
						break
					case this.rankTypeStack[2]:
						this.rankType = this.rank.totalRank
						this.currentLoadPage = 0
						break
				}
				getRankList(this.rankType).then(res => {
					//更新头部标题
					this.$emit('updateTitle', res.ranking.shortTitle)

					this.rankInfo = res.ranking
					//第一次加载20条
					this.books = res.ranking.books.slice(0, 20)
					Indicator.close()
				}).catch(err => {
					Indicator.close()
					console.log(err)
				})
			},
			swipeleft () {
				if(this.currentRank >= 2) {
					return
				}
				this.currentRank++
				this.$router.push(this.rankTypeStack[this.currentRank])
			},
			swiperight () {
				if(this.currentRank <= 0) {
					return
				}
				this.currentRank--
				this.$router.push(this.rankTypeStack[this.currentRank])
			}
		},
		watch: {
			'$route': 'getData'
		},
		created () {
			this.getData();
		}
	}
</script>

<style lang="scss" scoped>
	ul {
		display: flex;
		flex-direction: column;
	}

	.book-list-wrap {
		width: 100vw;
		background: #f2f2f2;
		margin-top: 5.625rem;
	}
</style>

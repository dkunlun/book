<template>
	<div>
		<mt-header fixed :title="major">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="select">
			<ul class="select-bar">
				<v-touch tag="li" v-for="(item, index) in types" :class="{'active': index === majorSelected}" :key="index" @tap="setType(item.type, index)">{{item.name}}</v-touch>
			</ul>
			<ul class="select-bar" v-if="mins">
				<li>全部</li>
				<v-touch tag="li" v-for="(minor, index) in mins" :class="{'active': index === minorSelected}" :key="index" @tap="setMinor(minor, index)">{{minor}}</v-touch>
			</ul>
		</div>
		<mt-loadmore class="loadmore" :top-method="loadTop" :bottom-method="loadBottom" :auto-fill="false" ref="loadmore">
			<ul class="bookList">
				<BookList v-for="book in books" :book="book" :key="book._id"></BookList>
			</ul>
		</mt-loadmore>
	</div>
</template>

<script>
	import { getCategoryDetail,getNovelListByCat } from '../../api/api'
	import BookList from '../book/BookList'
	import { Indicator } from 'mint-ui'
	import { mapMutations } from 'vuex'

	export default {
		data () {
			return {
				major: '',
				gender: '',
				type: 'hot',
				minor: '',
				mins: null,
				majorSelected: 0,
				minorSelected: 0,
				currentPage: 1,
				books: [],
				types: [{
				  type: 'hot',
				  name: '热门'
				}, {
				  type: 'new',
				  name: '新书'
				}, {
				  type: 'reputation',
				  name: '好评'
				}, {
				  type: 'over',
				  name: '完结'
				}, {
				  type: 'monthly',
				  name: '包月'
				}]
			}
		},
		components: {
			BookList
		},
		methods: {
			...mapMutations(['SETBACKPOSITION']),
			getNovelListByCat (gender, type, major, minor) {
				Indicator.open('加载中')
				getNovelListByCat(gender, type, major, minor).then (res => {
					Indicator.close()
					this.books = res.books
				})
			},
			loadTop () {
				this.getNovelListByCat(this.gender, this.type, this.major, this.minor)
				this.$refs.loadmore.onTopLoaded()
			},
			/**
			 * 加载更多
			 */
			loadBottom () {
				let that = this
				Indicator.open('加载中')
				getNovelListByCat(this.gender, this.type, this.major, this.minor, this.currentPage * 20).then(res => {
					that.books = [...that.books, ...res]
					that.currentPage++
					Indicator.close()
				})
				this.$refs.loadmore.onBottomLoaded()
			},
			setType (type, index) {
				this.majorSelected = index
				this.type = type
				getNovelListByCat(this.gender, this.type, this.major, this.minor).then(res => {
					this.books = res.books
				})
			},
			setMinor (minor, index) {
				this.minorSelected = index
				this.minor = minor
				getNovelListByCat(this.gender, this.type, this.major, this.minor).then(res => {
					this.books = res.books
				})
			}
		},
		beforeRouteEnter (to, from, next) {
			next(vm => {
				vm.major = vm.$route.query.major
				vm.gender = vm.$route.query.gender

				getCategoryDetail().then(res => {
					res[vm.$route.query.gender].forEach((type) => {
						if(type.major === vm.$route.query.major) {
							vm.mins = type.mins
						}
					})
				})

				vm.getNovelListByCat(vm.$route.query.gender, vm.type, vm.$route.query.major)
				vm.SETBACKPOSITION('分类')
			})
		}
	}
</script>

<style lang="scss" scoped>
	.select {
		position: fixed;
		top: 2.5rem;
		left: 0;
		background: #fff;
		z-index: 10;
	}
	.select-bar {
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f2f2f2;
		overflow-x: auto;
		overflow-y: hidden;
		width: 100vw;
		height: 2.56rem;
		flex-wrap: nowrap;
		justify-content: flex-start;
		li {
			flex-shrink: 0;
			line-height: 2.56rem;
			padding-left: 0.75rem;
			padding-right: 0.75rem;
			font-size: 0.875rem;
		}
		.active {
			color: #26a2ff;
		}
	}
	.bookList {
		width: 100vw;
		background: #f2f2f2;
	}
	.loadmore {
		margin-top: 7.625rem;
	}
</style>

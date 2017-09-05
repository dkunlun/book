<template>
	<div>
		<mt-tab-container v-model="selected" :swipeable="false">
			<mt-tab-container-item id="书架">
				<mt-header fixed :title="selected"></mt-header>
				<Bookshelf class="tab-container bookshelf">
				</Bookshelf>
			</mt-tab-container-item>
			<mt-tab-container-item id="分类">
				<mt-header fixed :title="selected"></mt-header>
				<keep-alive include="Bookshelf">
					<BookCategory class="tab-container"></BookCategory>
				</keep-alive>
			</mt-tab-container-item>
			<mt-tab-container-item id="排行">
				<mt-header fixed :title="selected"></mt-header>
				<keep-alive include="Rank">
					<Rank class="tab-container"></Rank>
				</keep-alive>
			</mt-tab-container-item>
			<mt-tab-container-item id="搜索">
				<Search></Search>
			</mt-tab-container-item>
		</mt-tab-container>
		<mt-tabbar :fixed="true" v-model="selected">
			<mt-tab-item id="书架">
				<img slot="icon" src="../assets/images/book.svg"> 书架
			</mt-tab-item>
			<mt-tab-item id="分类">
				<img slot="icon" src="../assets/images/category.svg"> 分类
			</mt-tab-item>
			<mt-tab-item id="排行">
				<img slot="icon" src="../assets/images/rank.svg"> 排行
			</mt-tab-item>
			<mt-tab-item id="搜索">
				<img slot="icon" src="../assets/images/search.svg">搜索
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import Bookshelf from '/pages/bookshelf/Bookshelf'
	import BookCategory from '/pages/category/BookCategory'
	import Search from '/pages/search/Search'
	import Rank from '/pages/rankList/Rank'

	export default {
		data () {
			return {
				selected: '书架'
			}
		},
		components: {
			Bookshelf,
			BookCategory,
			Search,
			Rank
		},
		mounted () {
			this.selected = this.$store.state.previousPosition
		}
	}
</script>

<style lang="scss" scoped>
	.tab-container {
		box-sizing: border-box;
		min-height: 100vh;
		padding-top: 40px;
		padding-bottom: 55px;
		width: 100vw;
	}
	.bookshelf {
		// display: flex;
		// align-items: center;
		// justify-content: center;
	}
</style>
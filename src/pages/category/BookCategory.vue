<template>
	<div>
		<section v-for="(item, key, index) in category" :key="index">
			<p class="category-type">{{categoryType[key]}}</p>
			<ul>
				<li v-for="(cat, index) in item" :key="index" @click="toBookCatDetail(key, cat)">
					<p class="category">{{cat.name}}</p>
					<span class="book-count">{{cat.bookCount}}</span>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import { mapActions,mapGetters } from 'vuex'
	import { getCategoryList } from '../../api/api'
	export default {
		data () {
			return {
				category: null,
				categoryType: {
					male: '男生',
					female: '女生',
					press: '出版',
			        picture: '类型'
				}
			}
		},
		methods: {
			getCategoryList () {
				getCategoryList().then(res => {
					this.category = res;
				})
			},
			toBookCatDetail (key, cat) {
				this.$router.push({path: '/bookCat/detail', query: {gender: key,major:cat.name}})
			}
		},
		created () {
			this.getCategoryList()
		}
	}
</script>

<style lang="scss" scoped>
	section {
		font-size: 1.2rem;
	}
	.category-type {
		margin: 0 1rem;
		border-bottom: 1px solid #f3eded;
		font-size: 1.2rem;
		line-height: 2.75rem;
	}
	.book-count {
		color: #959595;
	}
	ul {
		display: flex;
		margin-left: 1rem;
		margin-right: 1rem;
		flex-wrap: wrap;
	}
	li {
		width: 33.33%;
		text-align: center;
	}
	.category {
		font-weight: 700;
		font-size: 1.2rem;
		margin-bottom: .1rem;
		margin-top: .8rem;
		line-height: 1.2rem;
	}
</style>
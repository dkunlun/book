<template>
	<div>
		<header>
			<span class="back" v-if="currentName === 'Search' || currentName === 'BookDetail'">
				<i class="icon icon-left" @click="back"></i>
			</span>
			<span class="search" v-if="currentName === 'Search'">
				<input type="text" class="input" v-model="keyword" placeholder="请输入搜索的书名" @keyup.enter="search(keyword)">
				<span class="input-suffix">
					<i class="icon icon-close-circle"></i>
				</span>
			</span>
			<i class="icon icon-search search-button" @click="search(keyword)" v-if="currentName === 'Search'"></i>
			<template v-if="currentName === 'Main'">
				<span class="name">阅读{{currentName}}</span>
				<img src="../assets/images/menu.png"  class="dropdown">
				<router-link :to="{name: 'Search'}">
					<i class="icon icon-search toSearch"></i>
				</router-link>
			</template>
		</header>
	</div>
</template>

<script>
	import axios from 'axios'
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data () {
			return {
				keyword: ''
			}
		},
		props: {
			currentName: {
				type: String,
				default: 'Main'
			}
		},
		computed: mapGetters([
			'searchList',
			'counter'
		]),
		methods: {
			...mapActions([
				'search',
				'add'
			]),
			back () {
				this.$router.go(-1)
			}
		},
		mounted () {
			console.log(1)
		}
	}
</script>

<style lang="scss">
	header {
		background: #c62f2f;
		padding: 0 20px;
		height: 64px;
		line-height: 64px;
		> .dropdown {
			width: 40px;
			height: 40px;
			float: right;
			margin-top: 12px;
		}
		.name {
			color: #fff;
			font-size: 1.5rem;
		}
		i {
			float: right;
			color: #fff;
			font-size: 1.5rem;
		}
		.back {
			i {
				float: left;
				padding-right: 10px;
				font-size: 1.6rem;
				line-height: 64px;

				border-right: 1px solid #a9a9a9;
			    padding-right: 10px;
			}
		}
		.search {
			width: calc(100% - 3.2rem - 40px);
			position: relative;
			display: inline-block;
			input {
				background: hsla(0,0%,100%,0);
				outline: none;
				border: none;
				color: #fff;
				font-size: 1.2em;
			}
			input::-webkit-input-placeholder{
			    color:inherit;
			    opacity:.54;
			}
			span {
				top: 50%;
			}
			.icon-close-circle {
				font-size: 1.1rem;
				color: #fff;
			}
		}
		.search-button {
			font-size: 1.6rem;
			color: #fff;
			float: right;
			line-height: 64px;
		    border-left: 1px solid #a9a9a9;
		    padding-left: 10px;
		}
		.toSearch {
			margin-top: 20px;
			margin-right: 20px;
		}
	}
</style>
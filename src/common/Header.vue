<template>
	<div>
		<header>
			<span class="back" v-if="['Search', 'BookDetail', 'ChangeSource'].indexOf(currentName) !== -1">
				<i class="icon icon-left" @click="back"></i>
			</span>
			<span class="search" v-if="currentName === 'Search'">
				<input type="text" class="input" v-model="keyword" placeholder="请输入搜索的书名" @keyup.enter="searchBook">
				<span class="input-suffix" v-show="keyword.length !== 0" @click="clear">
					<i class="icon icon-close-circle"></i>
				</span>
			</span>
			<i class="icon icon-search search-button" @click="searchBook" v-if="currentName === 'Search'"></i>
			<span class="name" v-if="['Main', 'BookDetail', 'ChangeSource'].indexOf(currentName) !== -1">{{info}}</span>
			<template v-if="currentName === 'Main'">
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
	import { mapGetters, mapActions, mapMutations } from 'vuex'
	import { setStorage, getStorage } from '../utils/storage'

	export default {
		data () {
			return {
			}
		},
		props: {
			currentName: {
				type: String,
				default: 'Main'
			},
			info: {
				type: String,
				default: '阅读'
			}
		},
		computed: {
			...mapGetters([
				'searchList'
			]),
			keyword: {
				get () {
					return this.$store.state.keyword
				},
				set (value) {
					this.$store.commit('SETKEYWORD', value)
				}
			}
		},
		methods: {
			...mapActions([
				'search',
				'add'
			]),
			...mapMutations(['SEARCH', 'SETHISTORY']),
			back () {
				this.$router.go(-1)
			},
			searchBook () {
				let keyword = this.keyword
				if(!keyword.trim()) {
					alert('不能输入空格哦！')
					return false
				}
				this.search(keyword)

				var history = JSON.parse(getStorage('history')) || []
				if(history.indexOf(keyword) === -1) history.push(keyword)
				setStorage('history', history)
				this.SETHISTORY(history)
			},
			getHistory () {

			},
			clear () {
				this.keyword = '';
				this.SEARCH([]);
			}
		},
		mounted () {
			// console.log(this.$store)
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
			margin-left: 20px;
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
<template>
	<div>
		<mt-header fixed :title="book && book.title">
			<div slot="left" @click="$router.go(backStep)">
				<mt-button icon="back">返回</mt-button>
			</div>
		</mt-header>
		<section v-if="book">
			<div class="book-info">
				<img :src="imgUrl">
				<div class="book-info-detail">
					<p class="book-title">
						{{book.title}}
					</p>
					<p class="book-autor">
						{{book.author}}
					</p>
					<p class="reader-info">
						<span></span>{{book.updated | ago}} | {{wordCount}}万 | {{book.cat}}
					</p>
				</div>
			</div>
			<div class="book-operation">
				<mt-button type="primary" class="btn">
					追更新
				</mt-button>
				<mt-button type="primary" class="btn" @click="toReadBook">
					开始阅读
				</mt-button>
			</div>
			<div class="book-status">
				<div class="list-item">
					<span class="item">追书人气</span>
					<span>312465</span>
				</div>
				<div class="list-item">
					<span class="item">读者留存率</span>
					<span>312465</span>
				</div>
				<div class="list-item">
					<span class="item">日更新字数</span>
					<span>312465</span>
				</div>
			</div>
			<div class="book-tag">
				<span v-for="(tag, index) in book.tags" :key="index" class="tag">
					{{tag}}
				</span>
			</div>
			<p class="book-intro">
				{{book.longIntro}}
			</p>
		</section>
	</div>
</template>

<script>
	import { bookDetail } from '../../api/api'
	import {staticPath} from '../../utils/storage'
	import moment from 'moment'
	import {
	  Indicator
	} from 'mint-ui'

	moment.locale('zh-cn')
	export default {
		data () {
			return {
				book: null
			}
		},
		filters: {
			ago (time) {
				return moment(time).fromNow()
			}
		},
		computed: {
			wordCount () {
				return parseInt(this.book.wordCount / 10000, 10)
			},
			imgUrl () {
				return staticPath + this.book.cover
			}
		},
		methods: {
			toReadBook () {
				this.$router.push({name: 'Reader', params: {id: this.$route.params.bookId}})
			}
		},
		created () {
			Indicator.open()
			bookDetail(this.$route.params.bookId).then(res => {
				this.book = res
				Indicator.close()
			})
		},
		beforeRouteEnter (to, from, next) {
			next(vm => {
				vm.backStep = from.path.indexOf('readbook' !== -1 ? -3 : -1)
			})
		}
	}
</script>

<style lang="scss" scoped>
	section {
		box-sizing: border-box;
		padding: 3.75rem 1.25rem 0.25rem 1.25rem;
		width: 100vw;
		&:first-child {
			margin-bottom: 1.25rem;
		}
	}
	.book-info {
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		width: 100vw;
		height: 6.25rem;
		img {
			width: 5rem;
			height: 6.25rem;
		}
		.book-info-detail {
			display: flex;
			justify-content: center;
			flex-direction: column;
		}
		p {
			margin: 0;
			line-height: 1.875rem;
			margin-left: 0.625rem;
		}
	}
	.book-operation{
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
		.btn {
			width: 10rem;
			background: #03a9f4;
			border: none;
			color: #fff;
			font-size: 1rem;
			text-align: center;
			line-height: 2.75rem;
			border-radius: 0.125rem;
		}
		.btn:focus {
			background: #2196f3;
			outline: none;
		}
	}
	.book-status {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid #f2f2f2;
		.list-item {
			display: flex;
			flex-direction: column;
			width: 33%;
			text-align: center;
		}
		.item {
			font-size: 0.75rem;
			color: #807070;
		}
	}
	.book-tag {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		border-bottom: 1px solid #f2f2f2;
		padding: 0.8rem 0 0;
	}
	.tag {
		padding: 0.25rem 0.875rem;
		color: #fff;
		border-radius: 0.125rem;
		margin-bottom: 0.75rem;
		font-size: 0.75rem;
		margin-left: 0.5rem;
	}

	.tag:nth-child(1n) {
		background: burlywood;
	}

	.tag:nth-child(2n) {
		background: cadetblue;
	}

	.tag:nth-child(3n) {
		background: coral;
	}

	.tag:nth-child(4n) {
		background: cornflowerblue;
	}

	.reader-info,
	.book-author {
		font-size: 0.875rem;
	}

	.book-intro {
		margin-top: 1.25rem;
	}
</style>
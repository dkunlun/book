<template>
	<li @click="toBook()">
		<img :src="imgUrl">
		<div class="book-info">
			<p class="book-title">{{book.title}}</p>
			<p class="book-author">{{book.author}} | {{book.cat}}</p>
			<p class="short-intro">{{book.shortIntro}}</p>
			<p class="reader-info">{{latelyFollower}}万人气 | {{book.retentionRatio}}%读者留存</p>
		</div>
	</li>
</template>

<script>
	import {staticPath} from '../../utils/storage'

	export default {
		props: ['book'],
		data () {
			return {

			}
		},
		computed: {
			latelyFollower () {
				return (this.book.latelyFollower / 10000).toFixed(1)
			},
			imgUrl () {
				return staticPath + this.book.cover
			}
		},
		methods: {
			toBook () {
				this.$router.push('/book/' + this.book._id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	img {
		width: 5rem;
		height: 6.25rem;
		float: left;
		margin-right: 0.5rem;
	}
	li {
		margin-left: 1.25rem;
		margin-right: 1.25rem;
		border-bottom: 1px solid #e6dbdb;
		padding-bottom: 0.25rem;
		padding-top: 0.25rem;
	}
	li:active,
	li:focus {
		background: #f2f2f2;
	}
	.book-info {
		box-sizing: border-box;
		width: 100%;
		height: 6.25rem;
		padding-left: 6.25rem;
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
	}
	.book-title {
		font-weight: bold;
	}
	.short-intro {
		color: #655555;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.book-author {
		color: #655555;
	}
	.book-info p {
		margin-bottom: 0;
		margin-top: 0;
		font-size: 0.875rem;
		line-height: 1.5rem;
	}
</style>
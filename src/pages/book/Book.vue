<template>
	<div>
		<mt-header fixed :title="book && book.title">
			<div slot="left" @click="$router.go(backStep)">
				<mt-button icon="back">返回</mt-button>
			</div>
		</mt-header>
		<section>
			<div class="book-info">
				<img src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1228859%2F_1228859_441552.jpg%2F">
				<div class="book-info-detail">
					<p class="book-title">
						<!-- {{book.title}} -->
						圣墟
					</p>
					<p class="book-autor">
						<!-- {{book.author}} -->
						辰东
					</p>
					<p class="reader-info">
						<!-- <span></span>{{book.updated | ago}} | {{wordCount}}万 | {{book.cat}} -->
						<span></span>
						17 小时前 | 231万 | 东方玄幻
					</p>
				</div>
			</div>
			<div class="book-operation">
				<mt-button type="primary" class="btn">
					追更新
				</mt-button>
				<mt-button type="primary" class="btn">
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
				<span class="tag">
					123
				</span>
			</div>
			<p class="book-intro">
				
			</p>
		</section>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				book: null
			}
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
	}
</style>
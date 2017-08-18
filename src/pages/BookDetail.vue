<template>
	<div class="container">
		<div class="info">
			<img src="../assets/images/error.jpg">
			<p>
				<span class="name">龙王传说</span>
				<br>
				<span class="author">
					<em>唐家三少</em> | 东方玄幻 | 320万字
				</span>
				<span>
					3小时前更新
				</span>
			</p>
		</div>
		<div class="operation">
			<button>
				<i class="icon icon-plus"></i>
				追更新
			</button>
			<button @click="toReader">
				<i class="icon icon-search"></i>
				开始阅读
			</button>
		</div>
		<div class="sInfo">
			<p>
				<span>追书人数</span>
				<br>
				200647
			</p>
			<p>
				<span>读者留存率</span>
				<br>
				67.09%
			</p>
			<p>
				<span>日更新字数</span>
				<br>
				5227
			</p>
		</div>
		<div class="tags">
			<div class="tag" style="background-color: rgb(219, 162, 6);">
				<span class="tag-text">玄幻</span>
			</div>
			<div class="tag" style="background-color: rgb(219, 162, 6);">
				<span class="tag-text">玄幻</span>
			</div>
		</div>
		<div class="description">
			<pre>伴随着魂导科技的进步，斗罗大陆上的人类征服了海洋，又发现了两片大陆。魂兽也随着人类魂师的猎杀无度走向灭亡，沉睡无数年的魂兽之王在星斗大森林最后的净土苏醒，它要带领仅存的族人，向人类复仇！
			唐舞麟立志要成为一名强大的魂师，可当武魂觉醒时，苏醒的，却是……
			旷世之才，龙王之争，我们的龙王传说，将由此开始。</pre>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			toReader () {
				this.$router.push({name: 'Reader'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: #fff;
		height: calc(100vh - 64px);
		overflow-y: scroll;
		.info {
			height: 100px;
			padding: 10px 15px;
			img {
				height: 80px;
				width: 60px;
			}
			p {
				float: right;
				text-align: left;
			    width: calc(100% - 80px);
			    height: 80px;
			    span:first-child {
			    	font-size: 1.1rem;
			    	font-weight: 700;
			    	color: #595959;
		    	    height: 30px;
			    }
			    span:last-child {
			    	color: #b6b6b6;
			    }
			    .author {
			    	font-size: .8rem;
			    	color: #b6b6b6;
			    	em {
			    		color: #ca5e27;
		    		    font-weight: 700;
			    	}
			    }
			    span {
			    	width: 100%;
			    	display: inline-block;
			    	overflow: hidden;
		    	    text-overflow: ellipsis;
		    	    white-space: nowrap;
			    }
			}
		}
		.operation {
			padding: 10px 15px;
			display: flex;
			justify-content: space-between;
			button {
				background: #b4321f;
				color: #fff;
				border: none;
				width: 45%;
				padding: 10px 0;
				border-radius: 4px;
			}
		}
		.sInfo {
			display: flex;
			justify-content: space-between;
			padding: 20px 35px;
			border-top: 1px solid #e1e1e2;
			border-bottom: 1px solid #e1e1e2;
			text-align: center;
			color: #000;
			font-size: 1.1em;
			font-weight: 700;
			p > span {
				color: #7f7f7f;
			}
		}
		.tags {
			padding: 10px 15px;
			display: flex;
			border-bottom: 1px solid #e1e1e2;
			align-items: flex-start;
		    align-content: flex-start;
		    div {
	    	    opacity: .6;
	    	    margin-bottom: 10px;
	    	    font-size: .9rem;
		    }
		}
		.description {
			padding: 20px 35px;
			font-size: .8rem;
		}
	}
</style>
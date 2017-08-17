<template>
	<div class="main">
		<!-- <div class="noData">书架空空的！快去添加点书吧！</div> -->
		<div class="history">
			<h1 style="text-align: left;">最近搜索历史</h1>
			<div class="list">
				<div style="background:rgb(129, 145, 10);" class="tag">
					<span class="ant-tag-text">龙王传说</span>
				</div>
				<div style="background:rgb(129, 145, 10);" class="tag">
					<span class="ant-tag-text">龙王传说</span>
				</div>
			</div>
			<div class="clear">清空搜索历史</div>
		</div>
		<!-- <div class="list">
			<a href="">
				<div class="item">
					<img src="../assets/images/error.jpg">
					<p>
						<span>龙王传说</span>
						<br/>
						<span>201124人在追 | 67.43%读者留存 | 唐家三少著</span>
					</p>
				</div>
			</a>
			<a href="">
				<div class="item">
					<img src="../assets/images/error.jpg">
					<p>
						<span>龙王传说</span>
						<br/>
						<span>201124人在追 | 67.43%读者留存 | 唐家三少著</span>
					</p>
				</div>
			</a>
			<a href="">
				<div class="item">
					<img src="../assets/images/error.jpg">
					<p>
						<span>龙王传说</span>
						<br/>
						<span>201124人在追 | 67.43%读者留存 | 唐家三少著</span>
					</p>
				</div>
			</a>
			<a href="">
				<div class="item">
					<img src="../assets/images/error.jpg">
					<p>
						<span>龙王传说</span>
						<br/>
						<span>201124人在追 | 67.43%读者留存 | 唐家三少著</span>
					</p>
				</div>
			</a>
		</div> -->
	</div>
</template>

<script>
	export default {
		components: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		background: #fff;
		height: calc(100vh - 64px);
		text-align: center;
		overflow: scroll;
		> .noData {
			line-height: calc(100vh - 64px);
			font-size: 1.2rem;
			font-weight: 700;
		}
		.item {
			height: 80px;
			border-bottom: 1px solid #e1e1e2;
			padding: 10px 15px;
			cursor: pointer;
			img {
				height: 60px;
				width: 45px;
			}
			p {
				float: right;
				text-align: left;
				width: calc(100% - 60px);
				height: 80px;
				span {
					&:first-child {
						font-size: 1.1rem;
						font-weight: 700;
						color: #595959;
					}
					&:last-child {
						font-size: .8rem;
						color: #b6b6b6;
					}
					white-space: nowrap;
					width: 100%;
					display: inline-block;
					overflow: hidden;
					height: 30px;
				}
			}
		}
		.history {
			padding: 20px 10px;
		}
		h1 {
			font-size: 1rem;
		}
		.clear {
			text-align: center;
			margin-top: 40px;
			font-size: 1rem;
		}
		.history .list {
			padding: 10px 15px;
			display: flex;
			flex-wrap: wrap;
			align-items: flex-start;
			align-content: flex-start;
			.tag {
				display: inline-block;
				line-height: 20px;
				height: 22px;
				padding: 0 8px;
				border-radius: 4px;
				border: 1px solid #e9e9e9;
				background: #f7f7f7;
				font-size: 12px;
				transition: all .3s cubic-bezier(.78,.14,.15,.86);
				opacity: 1;
				margin-right: 8px;
				cursor: pointer;
				white-space: nowrap;
				border-color: transparent;
				color: #fff;
				opacity: .6;
				margin-bottom: 10px;
				font-size: .9rem;
			}
		}
	}
</style>
<template>
	<div>
		<header>
			<a href="" class="back">
				<i class="icon icon-left"></i>
			</a>
			<span class="search">
				<input type="text" class="input" placeholder="请输入搜索的书名">
				<span class="input-suffix">
					<i class="icon icon-close-circle"></i>
				</span>
			</span>
			<!-- <span class="name">阅读</span> -->
			<!-- <img src="../assets/images/menu.png"  class="dropdown"> -->
			<!-- <a href="/search">
				<i class="icon icon-search"></i>
			</a> -->
		</header>
	</div>
</template>

<script>
	export default {
		
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
			margin-right: 20px;
			margin-top: 20px;
		}
		.back {
			float: left;
			i {
				padding-right: 10px;
				font-size: 1.6rem;
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
				top: 36%;
			}
			.icon-close-circle {
				font-size: 1.1rem;
				color: #fff;
			}
		}
	}
</style>
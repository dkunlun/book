<template>
	<div>
		<header>
			<span class="name">阅读</span>
			<img src="../assets/images/menu.png"  class="dropdown">
			<a href="/search">
				<i>search</i>
			</a>
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
		}
	}
</style>
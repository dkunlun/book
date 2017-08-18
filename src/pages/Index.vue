<template>
	<div class="page">
		<DHeader></DHeader>
		<router-view></router-view>
	</div>
</template>

<script>
	import DHeader from '/common/Header'

	export default {
		components: {
			DHeader
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		display: flex;
		flex-direction: column;
		flex: auto;
		overflow: auto;
		background: #ececec;
	}
</style>
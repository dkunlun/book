<template>
	<div class="page">
		<DHeader></DHeader>
		<DMain></DMain>
	</div>
</template>

<script>
	import DHeader from '/common/Header'
	import DMain from './Main'

	export default {
		components: {
			DHeader,
			DMain
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
<template>
	<div>
		<mt-tab-container v-model="selected" :swipeable="true">
			<mt-tab-container-item id="书架">
				<mt-header fixed :title="selected"></mt-header>
				<Bookshelf class="tab-container">
				</Bookshelf>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	import Bookshelf from '/pages/bookshelf/Bookshelf'

	export default {
		data () {
			return {
				selected: '书架'
			}
		},
		components: {
			Bookshelf
		}
	}
</script>

<style lang="scss" scoped>
	.tab-container {
		box-sizing: border-box;
		min-height: 100vh;
		padding-top: 2rem;
		padding-bottom: 55px;
		width: 100vw;
	}
</style>
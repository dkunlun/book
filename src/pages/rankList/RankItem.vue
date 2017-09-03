<template>
	<v-touch class="rank-item" @tap="showRankList">
		<img :src="imgUrl">
		<span>{{rankInfo.title}}</span>
	</v-touch>
</template>

<script>
	import { staticPath } from '../../utils/storage'
	import { mapMutations } from 'vuex'

	export default {
		props: ['rankInfo'],
		computed: {
			imgUrl () {
				return staticPath + this.rankInfo.cover
			}
		},
		methods: {
			...mapMutations(['SETRANK']),
			showRankList () {
				this.$router.push({ name: 'rankList' })
				this.SETRANK(this.rankInfo)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.rank-type {
		img {
			width: 1.5rem;
			margin-right: 0.625rem;
			vertical-align: middle;
		}
	}
</style>
<template>
	<div>
		<div>
			<h3>男生</h3>
			<ul class="rank-type">
				<li v-for="item in rankList.male" v-if="!item.collapse" :key="item._id">
					<RankItem :rankInfo="item"></RankItem>
				</li>
			</ul>
			<h3>女生</h3>
			<ul class="rank-type">
				<li v-for="item in rankList.female" v-if="!item.collapse" :key="item._id">
					<RankItem :rankInfo="item"></RankItem>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { getRankType } from '../../api/api'
	import RankItem from '/pages/rankList/RankItem'

	export default {
		data () {
			return {
				rankList: {},
				maleOtherRankIsShow: false,
				femaleOtherRankIsShow: false
			}
		},
		components: {
			RankItem
		},
		methods: {
			async init () {
				try {
					let res = await getRankType()
					this.rankList = res
				} catch (err) {
					console.log(err)
				}
			}
		},
		created () {
			this.init()
		}
	}
</script>

<style lang="scss" scoped>
	li {
		border-bottom: 1px solid #f3f3f3;
		margin-left: 1.25rem;
		margin-right: 1.25rem;
		font-size: 1rem;
		line-height: 3rem;
	}

	h3 {
		background-color: #f9f0f0;
		margin: 0;
		padding: 0.625rem 0.625rem 1.25rem;
	}
</style>

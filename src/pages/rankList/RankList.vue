<template>
	<div>
		<mt-header fixed :title="headTitle">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<ul class="rank-tab">
			<router-link tag="li" to="/rankList/weekRank" active-class="active" exact>
				周榜
			</router-link>
			<router-link tag="li" to="/rankList/monthRank" active-class="active" exact>
				月榜
			</router-link>
			<router-link tag="li" to="/rankList/totalRank" active-class="active" exact>
				总榜
			</router-link>
		</ul>
		<router-view v-on:updateTitle="updateTitle"></router-view>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'

	export default {
		data () {
			return {
				headTitle: '最热榜'
			}
		},
		methods: {
			...mapMutations(['SET_BACK_POSITION']),
			updateTitle (title) {
				this.headTitle = title
			}
		},
		beforeRouteLeave (to, from, next) {
			this.SET_BACK_POSITION('排行')
			next()
		}
	}
</script>

<style lang="scss" scoped>
	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100vw;
		background: #fff;
	}

	.rank-tab {
		position: fixed;
		top: 2.5rem;
		left: 0;
		z-index: 10;
		border-bottom: 1px solid #ccc;
	}

	li {
		width: 33.3%;
		text-align: center;
		line-height: 3.125rem;
	}

	.active {
		border-bottom: 2px #04b1ff solid;
	}
</style>

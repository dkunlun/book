<template>
	<div v-show="visible">
		<div class="modal-mask"></div>
		<div class="modal-wrapper" @click="close">
			<div class="dialog-container" :scroll-top.prop="getTop()">
				<div>
					<p v-for="(item, index) in chapterList" :class="{choosed: currentChapter.num == index}" @click="changeChapter(item.link, index)">{{item.title}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions, mapMutations } from 'vuex'
	export default {
		name: 'MDialog',
		data () {
			return {

			}
		},
		computed: {
			...mapGetters(['chapterList', 'currentChapter'])
		},
		props: {
			visible: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			visible (val) {
				this.$emit('update:visible', val)
			}
		},
		methods: {
			...mapActions(['getContent']),
			...mapMutations(['SET_CURRENT_CHAPTER']),
			close () {
				this.$emit('update:visible', false)
			},
			changeChapter (link, index) {
				this.SET_CURRENT_CHAPTER({
					num: index
				})
				this.getContent(link)
			},
			getTop () {
				return this.currentChapter.num * 45
			}
		},
		created () {
		}
	}
</script>

<style lang="scss" scoped>
	.modal-mask {
		position: fixed;
		background-color: rgba(55,55,55,.6);
		height: 100%;
		left: 0;
		bottom: 0;
		right: 0;
		top: 0;
		z-index: 1000;
	}
	.modal-wrapper {
		position: fixed;
		overflow: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1000;
		.dialog-container {
			-webkit-overflow-scrolling: touch;
			position: relative;
			background-color: #fff;
			top: 100px;
			outline: 0;
			padding: 16px;
			font-size: 12px;
			line-height: 1.5;
			height: 60vh;
			overflow: scroll;
			border-radius: 4px;
			margin: 10px;
			width: auto;
			p {
				border-bottom: 1px solid #e1e1e2;
				font-size: 1rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				padding: 10px 0;
				&.choosed {
					color: red;
				}
			}
		}
	}
</style>

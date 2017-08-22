<template>
	<div class="container">
		<ul>
			<li v-for="item in sourceList" @click="changeSource(item)">
				<h1>{{item.name}}
				<div v-if="item._id === currentSource._id" class="tag" style="background-color: rgb(255, 85, 0);float: right;color: #fff;font-size: 12px;">
					<span>当前书源</span>
				</div>
				</h1>
				<p>{{item.updated}}:{{item.lastChapter}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters, mapActions,mapMutations } from 'vuex'
	export default {
		data () {
			return {
				sourceId: this.$route.params.id
			}
		},
		methods: {
			...mapActions(['getChapterList', 'getContent']),
			...mapMutations(['SETCURRENTSOURCE']),
			changeSource (source) {
				this.SETCURRENTSOURCE(source)
				this.getChapterList(source._id).then(() => {
					let link = this.chapterList[this.currentChapter.num].link;
					return this.getContent(link)
				}).then(() => {
					this.$router.go(-1)
				})
			}
		},
		computed: {
			...mapGetters(['sourceList', 'currentSource', 'currentChapter', 'chapterList'])
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: #fff;
		height: calc(100vh - 64px);
		overflow-y: scroll;
		ul {
			list-style: none;
			li {
				padding: 10px 20px;
				h1 {
					font-size: 1.1rem;
					font-weight: 700;
				}
				p {
					color: #b6b6b6;
					font-size: .9rem;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>
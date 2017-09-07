<template>
	<div>
		<mt-header fixed title="换源">
			<div slot="left" @click="$router.go(-1)">
				<mt-button icon="back">返回</mt-button>
			</div>
		</mt-header>
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
			...mapMutations(['SET_CURRENT_SOURCE']),
			async changeSource (source) {
				try {
					await this.getChapterList(source._id)
					let link = this.chapterList[this.currentChapter.num].link;
					await this.getContent(link)
					this.$router.go(-1)
					this.SET_CURRENT_SOURCE(source)
				} catch (err) {
					console.log(err)
				}
			}
		},
		computed: {
			...mapGetters(['sourceList', 'currentSource', 'currentChapter', 'chapterList'])
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		position: absolute;
		background: #fff;
		height: calc(100vh - 40px);
		overflow-y: scroll;
		bottom: 0;
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

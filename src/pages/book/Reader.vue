<template>
	<div>
		<mt-popup
		  v-model="messageVisible">
		  12333
		</mt-popup>
		<div class="header" v-show="showSetting">
			<a href="javascript: void(0);" @click="back">
				<i class="icon icon-left"></i>
			</a>
			<router-link :to="{name: 'changeSource'}">
				<span>换源</span>
			</router-link>
		</div>
		<div class="container"  @click="toggleSetting" :style="settingStyle">
			<h1>{{content.title}}</h1>
			<pre>{{content.cpContent || content.body}}</pre>
			<h1>
				<span @click.stop="prevChapter">上一章</span>
				<span @click.stop="nextChapter">下一章</span>
			</h1>
		</div>
		<div class="footer" v-show="showSetting">
			<div @click="toggleColor">
				<i class="icon icon-setting"></i>
				<br>
				设置
				<div class="color" v-show="showColor" @click.stop="stop">
					<div>
						<span @click="changFontSize('sub')">Aa -</span>
						<span @click="changFontSize('add')">Aa +</span>
					</div>
					<div>
						<i v-for="item in colorList" :style="{background: item}" @click="changColor(item)"></i>
					</div>
				</div>
			</div>
			<div>
				<i class="icon icon-download"></i>
				<br>
				下载
			</div>
			<div @click="showList">
				<i class="icon icon-bars"></i>
				<br>
				目录
			</div>
		</div>
		<MDialog :visible.sync="visible"></MDialog>
	</div>
</template>

<script>
	import { mapGetters, mapActions, mapMutations } from 'vuex'
	import MDialog from '@/components/MDialog'

	export default {
		data () {
			return {
				visible: false,
				showSetting: false,
				showColor: false,
				messageVisible: false,
				colorList: [
					'rgb(196, 196, 196)',
					'rgb(162, 157, 137)',
					'rgb(173, 200, 169)'
				],
				settingStyle: {
					fontSize: '18px',
					backgroundColor: 'rgb(196, 196, 196)'
				}
			}
		},
		computed: {
			...mapGetters(['sourceList', 'chapterList', 'content', 'currentSource', 'currentBook', 'currentChapter'])
		},
		methods: {
			...mapActions(['getSource', 'getChapterList', 'getContent']),
			...mapMutations(['SET_CURRENT_SOURCE', 'SET_CURRENT_CHAPTER', 'SET_CURRENT_BOOK']),
			showList () {
				this.visible = true;
			},
			toggleSetting () {
				this.showSetting = !this.showSetting
			},
			back () {
				this.$router.go(-1)
			},
			toggleColor () {
				this.showColor = !this.showColor
			},
			stop () {

			},
			changColor (color) {
				this.settingStyle.backgroundColor = color;
			},
			changFontSize (type) {
				var number = Number(this.settingStyle.fontSize.substr(0, 2))
				if(type == 'add') {
					this.settingStyle.fontSize = number + 1 + 'px'
				} else {
					this.settingStyle.fontSize = number - 1 + 'px'
				}
			},
			//初始化数据
			async initData () {
				let id = this.$route.params.id
				if(this.currentBook._id !== id) {
					try {
						await this.getSource(id);

						let source = this.sourceList[0]
						this.SET_CURRENT_SOURCE(source)

						await this.getChapterList(source._id)

						let chapter = this.chapterList[0]
						this.SET_CURRENT_CHAPTER({
							num: 0
						})
						this.getContent(chapter.link)
						this.SET_CURRENT_BOOK({
							_id: id
						})
					} catch(err) {
						console.log(err)
					}
				}
			},
			//更换章节
			changeChapter (link, index) {
				this.getContent(this.chapterList[this.currentChapter.num].link)
			},
			//上一章
			prevChapter () {
				if(this.currentChapter.num <= 0) {
					this.messageVisible = true
					return
				}
				this.currentChapter.num--
				this.SET_CURRENT_CHAPTER(this.currentChapter)
				this.changeChapter()
			},
			//下一章
			nextChapter () {
				this.currentChapter.num++
				this.SET_CURRENT_CHAPTER(this.currentChapter)
				this.changeChapter()
			}
		},
		beforeRouteEnter (to, from, next) {
			next(vm => {
				vm.initData()
			})
		},
		components: {
			MDialog
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		background: #191919;
		position: fixed;
		width: 100vw;
		padding: 0 10px;
		top: 0;
		height: 64px;
		line-height: 64px;
		i {
			padding-right: 10px;
			float: left;
			font-size: 1.6rem;
			color: #fff;
			display: inline-block;
			line-height: 64px;
			height: inherit;
		}
		span {
			float: right;
			font-size: .95rem;
			color: #fff;
			margin-right: 20px;
			opacity: .6;
		}
	}
	.container {
		padding: 0 20px;
		padding-bottom: 100px;
		font-size: 1.2rem;
		min-height: 100vh;
		height: 100%;
		overflow-y: scroll;
		h1:last-child {
			font-size: 1rem;
			padding: 0 50px;
			margin-top: 2rem;
			cursor: pointer;
			span:first-child {
				float: left;
			}
			span:last-child {
				float: right;
			}
		}
	}
	.footer {
		width: 100vw;
		display: flex;
		color: #fff;
		text-align: center;
		background: #191919;
		position: fixed;
		bottom: 0;
		justify-content: space-around;
		padding: 10px 20px;
		i {
			color: #fff;
			font-size: 1.2rem;
			margin-left: .19rem;
		}
		div:first-child {
			.color {
				width: 100vw;
				height: 100px;
				background: rgba(25,25,25,.8);
				position: absolute;
				top: -100px;
				left: 0;
				padding: 10px 20px;
				div {
					font-size: 1.2rem;
					text-align: left;
					padding: 5px 0;
					span {
						margin-right: 15px;
					}
					i {
						display: inline-block;
						width: 30px;
						height: 30px;
						border-radius: 100%;
						margin-right: 15px;
						margin-left: 0;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="page">
		<DHeader :currentName="currentName"></DHeader>
		<router-view :currentName="currentName"></router-view>
	</div>
</template>

<script>
	import DHeader from '/common/Header'

	export default {
		data () {
			return {
				currentName: 'Main'
			}
		},
		components: {
			DHeader
		},
		beforeRouteEnter (to, from, next) {
		  next(vm => {
		    // 通过 `vm` 访问组件实例
		    vm.currentName = to.name
		  })
		},
		beforeRouteUpdate (to, from, next) {
			// 在当前路由改变，但是该组件被复用时调用
			// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
			// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
			// 可以访问组件实例 `this`
			this.currentName = to.name
			next(vm => {
			})
		},
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
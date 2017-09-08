<template>
	<div>
		<label>
			<input type="checkbox" v-checkAll="list"/>
			全选
		</label>
		<label v-for="meet in list">
			<input type="checkbox" v-model="meet.checked"/>
			{{meet.name}}
		</label>
	</div>
</template>

<script>
	import checkAll from '../directives/checkAll'

	export default {
		data () {
			return {
				list: [
					{
						name: '鸡肉',
						checked: true
					},
					{
						name: '牛肉',
						checked: true
					},
					{
						name: '羊肉',
						checked: true
					}
				]
			}
		},
		created () {
		}
	}
</script>

<style lang="scss" scoped>

</style>

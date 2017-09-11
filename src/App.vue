<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import 'normalize.css'
export default {
  name: 'app'
}
</script>

<style lang="scss" rel="stylesheet/scss">

	@import "assets/style/index.scss";
	#app {
		font-family: Avenir,Helvetica,Arial,sans-serif;
		display: flex;
		align-items: center;
		font-size: 1rem;
	}
</style>

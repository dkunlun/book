<template>
  <div id="app">
      <transition name="vux-pop-out" appear>
          <router-view></router-view>
      </transition>
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
    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
      will-change: transform;
      transition: all 500ms;
      height: 100%;
      top: 46px;
      position: absolute;
      backface-visibility: hidden;
      perspective: 1000;
    }
    .vux-pop-out-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    .vux-pop-out-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-enter {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-leave-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
</style>

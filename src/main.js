// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'

VueTouch.config.swipe = {
  direction: 'horizontal'
}

Vue.use(VueTouch, {
  name: 'v-touch'
})

Vue.use(MintUI)

axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
	// Do something with response data
	if(response.status === 200) {
		return response.data;
	}
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

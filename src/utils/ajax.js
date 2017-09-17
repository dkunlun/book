import axios from 'axios'
//ajax插件
export default {
	install (Vue, options = {}) {
		const http = axios.create(options)
		Vue.http = http
		Vue.prototype.$http = http
	}
}

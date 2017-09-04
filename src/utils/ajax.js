import axios from 'axios'

export default {
	install (Vue, options = {}) {
		const http = axios.create(options)
		Vue.http = http
		Vue.prototype.$http = http
	}
}
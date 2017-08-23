export default {
	bind: function (el, { value }) {
		let clickOutSide = value
		el.handler = function (e) {
			if(el && !el.contains(e.target)) {
				clickOutSide(e)
			}
		}
		document.addEventListener('click', el.handler, true)
	},
	unbind: function (el) {
		document.removeEventListener('click', el.handler, true)
		el.handler = null
	}
}
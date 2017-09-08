import Vue from 'vue'
export default {
    bind (el, binding, vnode) {
        const handler = (e) => {
            let val = el.checked
            binding.value.forEach((item) => {
                item.checked = val
            })
        }
        el.addEventListener('change', handler)
    },
    unbind (el) {

    },
    install(Vue) {
        Vue.directive('checkAll', {
            bind: this.bind,
            unbind: this.unbind
        })
    }
}

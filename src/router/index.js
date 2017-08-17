import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const Index = resolve => require(['/pages/Index'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})

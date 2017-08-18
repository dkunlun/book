import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const Index = resolve => require(['/pages/Index'], resolve)
const BookDetail = resolve => require(['/pages/BookDetail'], resolve)
const Main = resolve => require(['/pages/Main'], resolve)
const Reader = resolve => require(['/pages/Reader'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/Main',
      component: Index,
      children: [
      	{path: '/BookDetail', component: BookDetail},
      	{path: '/Main', component: Main}
      ]
    },
    {
    	path: '/Reader',
    	name: 'Reader',
    	component: Reader
    }
  ]
})

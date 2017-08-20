import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const Index = resolve => require(['/pages/Index'], resolve)
const BookDetail = resolve => require(['/pages/BookDetail'], resolve)
const Main = resolve => require(['/pages/Main'], resolve)
const Reader = resolve => require(['/pages/Reader'], resolve)
const ChangeSource = resolve => require(['/pages/ChangeSource'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/Main',
      component: Index,
      children: [
      	{path: '/BookDetail/:id', name: 'BookDetail', component: BookDetail},
        {path: '/Main', name:'Main', component: Main},
        {path: '/ChangeSource', name:'ChangeSource', component: ChangeSource},
      	{path: '/Search', name:'Search', component: Main},
      ]
    },
    {
    	path: '/Reader/:id',
    	name: 'Reader',
    	component: Reader
    }
  ]
})

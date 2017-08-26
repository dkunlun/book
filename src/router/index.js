import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const Index = resolve => require(['/pages/Index'], resolve)
const BookDetail = resolve => require(['/pages/BookDetail'], resolve)
const Main = resolve => require(['/pages/Main'], resolve)
const Reader = resolve => require(['/pages/Reader'], resolve)
const ChangeSource = resolve => require(['/pages/ChangeSource'], resolve)
const Category = resolve => require(['/pages/Category'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/Main',
      component: Index,
      children: [
      	{path: '/Main/BookDetail/:id', name: 'BookDetail', component: BookDetail, meta: {name: '书籍详情'}},
        {path: '/Main', name:'Main', component: Main, meta: {name: '阅读'}},
        {path: '/Main/ChangeSource', name:'ChangeSource', component: ChangeSource, meta: {name: '换源'}},
      	{path: '/Main/Search', name:'Search', component: Main},
      ]
    },
    {
    	path: '/Reader/:id',
    	name: 'Reader',
    	component: Reader
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    }
  ]
})

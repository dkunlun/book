import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['/pages/Home'], resolve)
const BookCatDetail = resolve => require(['/pages/category/BookCatDetail'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/bookCat/detail',
      name: 'bookCatDetail',
      component: BookCatDetail
    }
  ]
})

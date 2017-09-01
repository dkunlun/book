import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['/pages/Home'], resolve)
const BookCatDetail = resolve => require(['/pages/category/BookCatDetail'], resolve)
const Book = resolve => require(['/pages/book/Book'], resolve)

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
    },{
      path: '/book/:bookId',
      name: 'book',
      component: Book
    }
  ]
})

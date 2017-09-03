import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['/pages/Home'], resolve)
const BookCatDetail = resolve => require(['/pages/category/BookCatDetail'], resolve)
const Book = resolve => require(['/pages/book/Book'], resolve)
const Reader = resolve => require(['/pages/Reader'], resolve)
const RankList = resolve => require(['/pages/rankList/RankList'], resolve)
const RankListDetail = resolve => require(['/pages/rankList/RankListDetail'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bookCat/detail',
      name: 'bookCatDetail',
      component: BookCatDetail
    },
    {
      path: '/book/:bookId',
      name: 'book',
      component: Book
    },
    {
      path: '/Reader/:id',
      name: 'Reader',
      component: Reader
    },
    {
      path: '/rankList',
      name: 'rankList',
      redirect: '/rankList/weekRank',
      component: RankList,
      children: [{
        path: '/rankList/*',
        name: 'rankListDetail',
        component: RankListDetail
      }]
    }
  ]
})

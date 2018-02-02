import Vue from 'vue'
import Router from 'vue-router'
import Index from '../frame/index'
import Content from '../frame/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/content/:id',
      component: Content
    }
  ]
})

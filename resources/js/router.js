import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../Layout.vue'
import Dashboard from '../pages/Dashboard.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: Dashboard
        }
      ]
    }
  ]
})

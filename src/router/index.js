import Vue from 'vue'
import VueRouter from 'vue-router'
import ListCleaning from '../views/ListCleaning.vue'
import AddNew from '../views/AddNew.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: ListCleaning
  },
  {
    path: '/add',
    name: 'Add',
    component: AddNew,
  }
]

const router = new VueRouter({
  routes
})

export default router

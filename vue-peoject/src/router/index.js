import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/depart',
    name: 'depart',
    component: () => import( '../views/tlias/DepartView.vue')
  },
  {
    path: '/emp',
    name: 'emp',
    component: () => import( '../views/tlias/EmpView.vue')
  },
  {
    path: '/',
    redirect: '/depart'
  }
]
const router = new VueRouter({
  routes
})
export default router

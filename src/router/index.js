import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('view/home/Home.vue')
const News = () => import('view/news/News.vue')
const Feature = () => import('view/feature/Feature.vue')
const About = () => import('view/about/About.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: '/news',
    component: News
  },
  {
    path: "/feature",
    component: Feature
  },
  {
    path: "/about",
    component: About
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router





import { createRouter, createWebHashHistory } from 'vue-router'

const login = () => import('../views/login/index.vue')
const gs = () => import('@views/dispatch/strategyManage/generalStrategy/index.vue')

export const constantRoutes = [
  {
    path: '/login',
    component: login,
    name: 'login',
    desc: '登录'
  },
  {
    path: '/gs',
    component: gs,
    name: 'gs',
    desc: '流程策略'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

// 全局守卫：tabs缓存
router.beforeEach((to, from, next) => {
  // 收集路径缓存
  sessionStorage.setItem('tabsName', to.path)
  next()
})

export { router }

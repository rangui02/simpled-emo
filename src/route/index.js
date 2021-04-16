import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/page/home'),
      redirect: '/home/wallet',
      children: [
        {
          path: '/home/wallet',
          component: () => import('@/view/wallet'),
          meta: {
            title: '系统首页'
          }
        },
        {
          path: '/home/publicity',
          component: () => import('@/view/publicity'),
          meta: {
            title: 'publicity'
          }
        },
        {
          path: '/home/integral',
          component: () => import('@/view/integral'),
          meta: {
            title: 'integral'
          }
        },
        {
          path: '/home/mine',
          component: () => import('@/view/mine'),
          meta: {
            title: 'mine'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/page/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/page/register'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/page/error/403'),
      meta: {
        title: '权限不足'
      }
    },
    {
      path: '/500',
      name: '500',
      component: () => import('@/page/error/500'),
      meta: {
        title: '服务器错误'
      }
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/page/error/404'),
      meta: {
        title: '页面访问错误'
      }
    }
  ]
})

export default router

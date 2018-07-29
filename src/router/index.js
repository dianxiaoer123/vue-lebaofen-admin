/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden:true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [{
      path: 'index',
      component: () => import('@/views/documentation/index'),
      name: 'documentation',
      meta: { title: '消息提醒', icon: 'documentation'}
    }], hidden: true
},
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '财务管理',
      icon: 'lock',
    },
    children: [{
      path: 'page',
      component: () => import('@/views/permission/page'),
      name: 'pagePermission',
      meta: {
        title: '代理佣金管理',
      }
    }, {
      path: 'directive',
      component: () => import('@/views/permission/directive'),
      name: 'directivePermission',
      meta: {
        title: '订单手续费管理'
      }
    }, {
      path: 'cash',
      component: () => import('@/views/permission/cash'),
      name: 'cashPermission',
      meta: {
        title: '佣金提现'
      }
    }]
  },
  {
    path: '/orderManage',
    component: Layout,
    redirect: '/orderManage/index',
    meta: {
      title: '订单管理',
      icon: 'component',
    },
    children: [{
      path: 'page/:name',
      component: () => import('@/views/orderManage/page'),
      name: 'orderList',
      meta: {
        title: '订单列表',
      }
    },
    {
      path: 'dataChart',
      component: () => import('@/views/orderManage/dataChart'),
      name: 'orderchart',
      meta: {
        title: '数据统计',
      }
    }
    ]
  },
  {
    path: '/systemManage',
    component: Layout,
    redirect: '/orderManage/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '系统管理',
      icon: 'component',
    },
    children: [{
      path: 'page',
      component: () => import('@/views/systemManage/page'),
      name:'productManage',
      meta: {
        title: '产品管理',
      }
    },{
      path: 'riskManage',
      component: () => import('@/views/systemManage/riskManage'),
      name:'riskManage',
      meta: {
        title: '风控管理',
      }
    },{
      path: 'wayManage',
      component: () => import('@/views/systemManage/wayManage'),
      name:'wayManage',
      meta: {
        title: '通道管理',
      }
    },{
      path: 'agreeManage',
      component: () => import('@/views/systemManage/agreeManage'),
      name:'agreeManage',
      meta: {
        title: '协议管理',
      }
    },{
      // path: 'agree/:name',
      path: 'agree',
      component: () => import('@/views/systemManage/agreeCreate'),
      name:'agreeCreate',
      meta: {
        title: '协议信息',
      }, hidden: true
    },{
      path: 'businessManage',
      component: () => import('@/views/systemManage/businessManage'),
      name:'businessManage',
      meta: {
        title: '运营管理',
      }
    }
    ]
  },
 

  
  {
    path: '/userManage',
    component: Layout,
    redirect: '/userManage/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '用户管理',
      icon: 'component',
    },
    children: [{
      path: 'page',
      component: () => import('@/views/userManage/page'),
      name: 'user',
      meta: {
        title: '代理人管理',
      }
    },{
      path: 'userpage',
      component: () => import('@/views/userManage/userpage'),
      name: 'userwrap',
      meta: {
        title: '消费者管理'
      }
    },{
      path: 'dataChart/:name',
      component: () => import('@/views/dataChart/dataChart'),
      name: 'dataChart',
      meta: {
        title: '数据统计'
      }, hidden:true 
    }
  
    ]
  },


  { path: '*', redirect: '/404', hidden: true }
]

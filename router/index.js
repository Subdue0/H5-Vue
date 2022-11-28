const routes = [
  {
    path: '/',
    component: httpVueLoader('views/main/index.vue'),
  },
  {
    path: '/login',
    component: httpVueLoader('views/login/index.vue'),
  },
  {
    path: '/icons',
    name: 'icons',
    component: httpVueLoader('views/layout/index.vue'),
    children: [
      {
        path: '1',
        name: '1',
        component: httpVueLoader('views/subviews/icons/1.vue'),
        meta: { title: '我的云仓' }
      },
      {
        path: '2',
        name: '2',
        component: httpVueLoader('views/subviews/icons/2.vue'),
        meta: { title: '订单记录' }
      },
      {
        path: '3',
        name: '3',
        component: httpVueLoader('views/subviews/icons/3.vue'),
        meta: { title: '经销伙伴' }
      },
      {
        path: '4',
        name: '4',
        component: httpVueLoader('views/subviews/icons/4.vue'),
        meta: { title: '收款方式' }
      },
      {
        path: '5',
        name: '5',
        component: httpVueLoader('views/subviews/icons/5.vue'),
        meta: { title: '月度任务' }
      }
    ]
  },
]

const router = new VueRouter({
  // 路由模式：使用hash模式兼容性好，无需配置其他，使用history模式需要配置前端和后端，否则出现页面刷新404问题
  mode: 'hash',
  routes
})

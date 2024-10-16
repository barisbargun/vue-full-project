import { getRouteConfig } from '@/utils/route';

export default [
  {
    ...getRouteConfig('home'),
    alias: 'home',
    component:() => import('@main/home/page.vue')
  },
  {
    path: '/360',
    redirect: "/home"
  },
  {
    path: '/kampanya',
    component: () => import('@main/kampanya/layout.vue'),
    children: [
      { path: '',name: 'campaign', component: () => import('@main/kampanya/page.vue') },
      { path: ':id', name: 'campaign-id', component: () => import('@main/kampanya/[id]/page.vue') },
    ]
  },
]
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'test_table',
      component: () => import('../views/Home/index.vue'),
      children: [
        {
          path: 'test_table',
          name: 'test.table',
          component: () => import('../views/TestTable/index.vue'),
        },
      ],
    },
  ],
})

export default router

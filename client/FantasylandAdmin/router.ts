import VueRouter from 'vue-router';

export default () => new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/App/index.vue'),
      children: [
        {
          name: 'home',
          path: '/',
          component: () => import('./views/Home/index.vue')
        },
        {
          name: 'signin',
          path: 'signin',
          component: () => import('./views/Signin/index.vue')
        },
        {
          name: 'user',
          path: 'user',
          component: () => import('./views/User/index.vue')
        },
        {
          name: 'enemy',
          path: 'enemy',
          component: () => import('./views/EnemyList/index.vue')
        },
        {
          name: 'enemyEdit',
          path: 'enemy/:enemyId',
          component: () => import('./views/EnemyEdit/index.vue')
        },
        {
          path: '*',
          component: () => import('./views/NotFound/index.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  }
});

import VueRouter from 'vue-router';

export default () => new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/game',
      component: () => import('./views/App'),
      children: [
        {
          path: 'startLink',
          component: () => import('./views/GameStartLink')
        },
        {
          path: 'player',
          component: () => import('./views/GamePlayer')
        },
        {
          path: ':playerId',
          component: () => import('./views/GameHome'),
          props: true
        },
        {
          path: ':playerId/resource',
          component: () => import('./views/GameResource'),
          props: true
        },
        {
          path: '*',
          component: () => import('./views/NotFound')
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

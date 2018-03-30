import VueRouter from 'vue-router';

export default () => new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/App'),
      children: [
        {
          name: 'home',
          path: '/',
          component: () => import('./views/Home')
        },
        {
          path: 'entry',
          component: () => import('./views/Entry')
        },
        {
          path: 'game/startLink',
          component: () => import('./views/GameStartLink')
        },
        {
          path: 'game/player',
          component: () => import('./views/GamePlayer')
        },
        {
          path: 'game/:playerId',
          component: () => import('./views/GameHome'),
          props: true
        },
        {
          path: 'game/:playerId/resource',
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

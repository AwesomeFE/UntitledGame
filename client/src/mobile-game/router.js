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
          path: 'player/new',
          component: () => import('./views/GameNewPlayer')
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
          path: ':playerId/dungeon/:dungeonId',
          component: () => import('./views/GameDungeon'),
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

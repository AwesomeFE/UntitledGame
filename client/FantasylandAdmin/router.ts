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
          name: 'enemyList',
          path: 'enemy',
          component: () => import('./views/EnemyList/index.vue')
        },
        {
          name: 'enemyCreate',
          path: 'enemy/create',
          component: () => import('./views/EnemyEdit/index.vue')
        },
        {
          name: 'enemyEdit',
          path: 'enemy/:enemyId',
          component: () => import('./views/EnemyEdit/index.vue')
        },
        {
          name: 'buffList',
          path: 'buff',
          component: () => import('./views/BuffList/index.vue')
        },
        {
          name: 'buffCreate',
          path: 'buff/create',
          component: () => import('./views/BuffEdit/index.vue')
        },
        {
          name: 'buffEdit',
          path: 'buff/:buffId',
          component: () => import('./views/BuffEdit/index.vue')
        },
        {
          name: 'consumableList',
          path: 'consumable',
          component: () => import('./views/ConsumableList/index.vue')
        },
        {
          name: 'consumableCreate',
          path: 'consumable/create',
          component: () => import('./views/ConsumableEdit/index.vue')
        },
        {
          name: 'consumableEdit',
          path: 'consumable/:consumableId',
          component: () => import('./views/ConsumableEdit/index.vue')
        },
        {
          name: 'dungeonList',
          path: 'dungeon',
          component: () => import('./views/DungeonList/index.vue')
        },
        {
          name: 'dungeonCreate',
          path: 'dungeon/create',
          component: () => import('./views/dungeonEdit/index.vue')
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

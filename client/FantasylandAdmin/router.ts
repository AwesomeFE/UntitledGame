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
        // {
        //   path: 'entry',
        //   component: () => import('./views/Entry/index.vue')
        // },
        // {
        //   path: '*',
        //   component: () => import('./views/NotFound/index.vue')
        // }
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

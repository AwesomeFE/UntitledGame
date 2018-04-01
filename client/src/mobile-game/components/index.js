import Vue from 'vue';
import Component from 'vue-class-component';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
]);

const components = {
};

export default () => {
  const componentList = Object.entries(components);

  for(const [name, component] of componentList) {
    Vue.component(name, component);
  }
}
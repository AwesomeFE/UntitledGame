import Vue from 'vue';
import { Component } from 'vue-property-decorator';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
]);

interface Components {
  [key: string]: Vue
}

const components: Components = {
};

export default () => {
  const componentList = Object.keys(components);

  for(const name of componentList) {
    Vue.component(name, components[name]);
  }
}
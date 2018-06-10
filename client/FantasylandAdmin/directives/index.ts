import Vue, { DirectiveFunction } from 'vue';

interface Directives {
  [key: string]: DirectiveFunction
}

const directives: Directives = {
};

export default () => {
  const directiveList = Object.keys(directives);

  for(const name of directiveList) {
    Vue.directive(name, directives[name]);
  }
}
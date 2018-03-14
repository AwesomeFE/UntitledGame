import { Vue } from '../../common';

class BabylonGUI extends Vue {
  watchingProps(watchArray) {
    for(const { name, handler } of watchArray) {
      if(typeof name === 'string') {
        this.$watch(name, handler.bind(this));
      }
    }
  }
}

export default BabylonGUI;
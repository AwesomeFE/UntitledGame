<template>
  <div class="App">
    <router-view v-if="isSystemPerpared"></router-view>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { Vue } from '../../common';
import { Component } from 'vue-property-decorator';

@Component()
class App extends Vue {
  // 系统准备标志位
  isSystemPerpared = false;

  async mounted() {
    await this.$store.dispatch('system/getUser');

    this.isSystemPerpared = true;
  }
}

export default App;
</script>

<style type="text/scss" lang="scss">
@import '../../assets/scss/variable.scss';

.App {
  .PageBody {
    min-height: $page-min-height;
    padding-bottom: $footer-height;
  }
}
</style>

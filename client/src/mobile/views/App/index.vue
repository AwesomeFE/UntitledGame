<template>
  <div class="App">
    <router-view v-if="isSystemPerpared"></router-view>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component()
class App extends Vue {
  // 系统准备标志位
  isSystemPerpared = false;

  async mounted() {
    await this.$store.dispatch('system/getUser');
    this.isSystemPerpared = true;
    this.setBaseFontSize();
  }

  setBaseFontSize() {
    const baseWidth = 667; // 以iphone7为基础宽度

    document.documentElement.style.fontSize = `${document.body.clientWidth / baseWidth * 100}px`;
  }
}

export default App;
</script>

<style type="text/scss" lang="scss">
@import '../../assets/scss/variable.scss';

.App {
  font-size: 0.12rem;
  font-weight: 400;
  .PageBody {
    min-height: $page-min-height;
    padding-bottom: $footer-height;
  }
}
</style>

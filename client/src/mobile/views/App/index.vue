<template>
  <div class="App">
    <router-view></router-view>
  </div>
</template>

<script>
import { Vue } from '../../common';
import { Component } from 'vue-property-decorator';

@Component()
class App extends Vue {
  async mounted() {
    await this.$store.dispatch('preLogin');
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

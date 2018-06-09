<template>
  <div class="App">
    <PageHeader></PageHeader>
    <div class="PageBody">
      <router-view></router-view>
    </div>
    <!-- <PageFooter></PageFooter> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '../../../common/AdminComponents/PageHeader/index.vue';
// import PageFooter from '../../components/PageFooter';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    PageHeader,
    // PageFooter
  }
})
class App extends Vue {
  async mounted() {
    // await this.$store.dispatch('preLogin');
  }
}

export default App;
</script>

<style type="text/scss" lang="scss">
@import '../../assets/scss/variable.scss';

.App {
  height: 100%;
}
</style>

<template>
  <div class="Home">
    <PageHeader></PageHeader>

    <div class="PageBody">
      {{$t('Home.main')}}1
    </div>

    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Vue from 'vue';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    PageHeader,
    PageFooter
  }
})
class Home extends Vue {
  mounted() {
  }
}

export default Home;
</script>

<style type="text/scss" lang="scss">
.Home {
  
}
</style>

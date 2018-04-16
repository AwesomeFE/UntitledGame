<template>
  <div class="NotFound">
    <PageHeader></PageHeader>

    <div class="PageBody">
      NotFound
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
class NotFound extends Vue {

}

export default NotFound;
</script>

<style type="text/scss" lang="scss">
.NotFound {

}
</style>

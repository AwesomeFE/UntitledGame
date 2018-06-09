<template>
  <div class="App">
    <PageHeader>
      <div class="left">
        <MenuItem>首页</MenuItem>
        <MenuItem>控制面板</MenuItem>
      </div>
      <div class="right">
        <MenuItem>账号</MenuItem>
        <MenuItem>设置</MenuItem>
      </div>
    </PageHeader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '../../../common/AdminComponents/PageHeader/index.vue';
import MenuItem from '../../../common/AdminComponents/MenuItem/index.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    PageHeader,
    MenuItem
  }
})
export default class extends Vue {
  async mounted() {
    // await this.$store.dispatch('preLogin');
  }
}
</script>

<style type="text/scss" lang="scss">
@import '../../assets/scss/variable.scss';

.App {
  height: 100%;
}
</style>

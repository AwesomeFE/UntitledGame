<template>
  <div class="Home">
    <PageHeader>
      <div class="left">
        <MenuItem to="/">{{$t('home')}}</MenuItem>
        <MenuItem>按钮1</MenuItem>
        <MenuItem>按钮2</MenuItem>
      </div>
      <div class="right">
        <MenuItem>{{$t('account')}}</MenuItem>
        <MenuItem>{{$t('settings')}}</MenuItem>
        <MenuItem>{{$t('signout')}}</MenuItem>
      </div>
    </PageHeader>

    <div>
      Home
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

import MenuItem from '../../../common/AdminComponents/MenuItem/index.vue';
import PageHeader from '../../../common/AdminComponents/PageHeader/index.vue';

const System = namespace('system');

@Component({
  components: {
    MenuItem,
    PageHeader,
  }
})
export default class Home extends Vue {

}
</script>

<style type="text/scss" lang="scss">
.Home {

}
</style>

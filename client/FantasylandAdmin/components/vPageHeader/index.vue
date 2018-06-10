<template>
  <PageHeader>
    <div class="left">
      <MenuItem to="/">{{$t('home')}}</MenuItem>
      <MenuItem>按钮1</MenuItem>
      <MenuItem>按钮2</MenuItem>
    </div>
    <div class="right">
      <MenuItem>{{$t('account')}}</MenuItem>
      <MenuItem>{{$t('settings')}}</MenuItem>
      <MenuItem @click="signout">{{$t('signout')}}</MenuItem>
    </div>
  </PageHeader>
</template>

<script lang="ts">
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
export default class vPageHeader extends Vue {
  @System.Action('signout')
  signout: () => void;
}
</script>

<style type="text/scss" lang="scss">
</style>

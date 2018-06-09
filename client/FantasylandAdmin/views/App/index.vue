<template>
  <div class="App">
    <template v-if="isInitialized">
      <PageHeader>
        <div class="left">
          <MenuItem to="/">{{$t('Home')}}</MenuItem>
          <MenuItem>按钮1</MenuItem>
          <MenuItem>按钮2</MenuItem>
        </div>
        <div class="right">
          <MenuItem>{{$t('Account')}}</MenuItem>
          <MenuItem>{{$t('Settings')}}</MenuItem>
          <MenuItem>{{$t('SignOut')}}</MenuItem>
        </div>
      </PageHeader>

      <router-view></router-view>
    </template>

    <LoadingModal></LoadingModal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

import { Store } from '../../../common/types';
import LoadingModal from '../../components/LoadingModal/index.vue';
import MenuItem from '../../../common/AdminComponents/MenuItem/index.vue';
import PageHeader from '../../../common/AdminComponents/PageHeader/index.vue';
import { modalTypes } from '../../constants';

const System = namespace('system');

@Component({
  components: {
    PageHeader,
    MenuItem,
    LoadingModal
  }
})
export default class extends Vue {
  @System.State((state: Store.System.State) => state.user)
  user: Store.System.User;

  @System.Action('getUser')
  getUser: () => void;

  @System.Mutation('showModal')
  showModal: (modalType: string) => void;

  @System.Mutation('hideModal')
  hideModal: (modalType: string) => void;

  isInitialized = false;

  async mounted() {
    this.showModal(modalTypes.LoadingModal);
    await this.getUser();

    this.hideModal(modalTypes.LoadingModal);
    this.showApp();
  }

  showApp() {
    this.isInitialized = true;
  }
}
</script>

<style type="text/scss" lang="scss">
@import '../../assets/scss/variable.scss';

.App {
  height: 100%;
}
</style>

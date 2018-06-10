<template>
  <div class="App">
    <router-view v-if="isInitialized"></router-view>

    <LoadingModal></LoadingModal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';
import { Route, RawLocation } from 'vue-router';

import { Store } from '../../../common/types';
import { modalTypes, linkUrls } from '../../constants';
import LoadingModal from '../../components/LoadingModal/index.vue';

const System = namespace('system');

@Component({
  components: {
    LoadingModal
  }
})
export default class App extends Vue {
  @System.State((state: Store.System.State) => state.user)
  user: Store.System.User;

  @System.Action('getUser')
  getUser: () => void;

  @System.Mutation('showModal')
  showModal: (modalType: string) => void;

  @System.Mutation('hideModal')
  hideModal: (modalType: string) => void;

  beforeRouteUpdate(to: Route, from: Route, next: () => void) {
    this.checkUser(next);
  }

  checkUser(next?: () => void) {
    if(!this.user) {
      this.$router.push(linkUrls.SIGNIN())
    } else {
      next && next();
    }
  }

  isInitialized = false;

  async mounted() {
    this.showModal(modalTypes.LoadingModal);
    await this.getUser();
    this.checkUser();

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

#app,
.App {
  height: 100%;
}
.App {
  overflow: auto;
}
</style>

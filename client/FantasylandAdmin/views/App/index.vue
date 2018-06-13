<template>
  <div class="App">
    <router-view v-if="isInitialized"></router-view>

    <LoadingModal></LoadingModal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component, Watch } from 'vue-property-decorator';
import { Route, RawLocation } from 'vue-router';

import { Types } from '../../../common/types';
import { modalTypes, linkUrls } from '../../constants';
import LoadingModal from '../../components/LoadingModal/index.vue';

const System = namespace('system');

@Component({
  components: {
    LoadingModal
  }
})
export default class App extends Vue {
  @System.State((state: Types.Store.System.State) => state.user)
  user: Types.Store.System.User;

  @System.Action('getUser')
  getUser: () => void;

  @System.Mutation('showModal')
  showModal: (modalType: Types.Store.System.Modal) => void;

  @System.Mutation('hideModal')
  hideModal: (modalType: Types.Store.System.Modal) => void;

  @Watch('user')
  userChangeHandler(user: Types.Store.System.User) {
    if(!user) {
      this.$router.push(linkUrls.SIGNIN());
    }
  }

  isInitialized = false;

  async mounted() {
    this.showModal({ type: modalTypes.LoadingModal });
    await this.getUser();

    this.hideModal({ type: modalTypes.LoadingModal });
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
.App {
  overflow: auto;
  > div:first-child {
    position: relative;
  }
}
</style>

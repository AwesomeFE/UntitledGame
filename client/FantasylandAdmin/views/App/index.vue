<template>
  <div class="App">
    <router-view v-if="isInitialized"></router-view>

    <LoadingModal></LoadingModal>
    <UploadModal></UploadModal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component, Watch } from 'vue-property-decorator';
import { Route, RawLocation } from 'vue-router';

import * as SystemTypes from '../../../common/vuex/system/types.d';
import { linkUrls } from '../../constants';
import { modalTypes } from '../../../common/constants';
import UploadModal from '../../../common/AdminComponents/UploadModal/index.vue';
import LoadingModal from '../../../common/AdminComponents/LoadingModal/index.vue';

const SystemStore = namespace('System');
const LoadingModalStore = namespace('modal/LoadingModal');

@Component({
  components: {
    UploadModal,
    LoadingModal
  }
})
export default class App extends Vue {
  @SystemStore.State((state: SystemTypes.System.State) => state.user)
  user: SystemTypes.System.Model.User;

  @SystemStore.Action('getUser')
  getUser: () => void;

  @Watch('user')
  userChangeHandler(user: SystemTypes.System.Model.User) {
    if(!user) {
      this.$router.push(linkUrls.SIGNIN());
    }
  }

  isInitialized = false;

  async mounted() {
    await this.getUser();
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

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

import { CommonTypes } from '../../types';
import { linkUrls } from '../../constants';
import { modalTypes } from '../../../common/constants';
import UploadModal from '../../../common/AdminComponents/UploadModal/index.vue';
import LoadingModal from '../../../common/AdminComponents/LoadingModal/index.vue';

const System = namespace('System');
const Modal = {
  UploadModal: namespace('Modal/UploadModal'),
  LoadingModal: namespace('Modal/LoadingModal')
};

@Component({
  components: {
    UploadModal,
    LoadingModal
  }
})
export default class App extends Vue {
  @System.State((state: CommonTypes.System.State) => state.user)
  user: CommonTypes.System.Model.User;

  @System.Action('getUser')
  getUser: () => void;

  @Modal.LoadingModal.Mutation('show')
  showLoadingModal: () => void;

  @Modal.LoadingModal.Mutation('hide')
  hideLoadingModal: () => void;

  @Watch('user')
  userChangeHandler(user: CommonTypes.System.Model.User) {
    if(!user) {
      this.$router.push(linkUrls.SIGNIN());
    }
  }

  isInitialized = false;

  async mounted() {
    this.showLoadingModal();

    await this.getUser();
    
    this.hideLoadingModal();
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

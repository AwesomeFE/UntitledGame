<template>
  <div class="App">
    <router-view v-if="isInitialized"></router-view>

    <!-- <LoadingModal></LoadingModal> -->
    <!-- <UploadModal></UploadModal> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component, Watch } from 'vue-property-decorator';
import { Route, RawLocation } from 'vue-router';

import { CommonTypes } from '../../../common/types';
import { linkUrls } from '../../constants';
import { modalTypes } from '../../../common/constants';
// import UploadModal from '../../../common/AdminComponents/UploadModal/index.vue';
// import LoadingModal from '../../../common/AdminComponents/LoadingModal/index.vue';

const System = namespace('system');
const LoadingModal = namespace('modal/LoadingModal');

@Component({
  components: {
    // UploadModal,
    // LoadingModal
  }
})
export default class App extends Vue {
  @System.State((state: CommonTypes.Store.System.State) => state.user)
  user: CommonTypes.Store.System.User;

  @System.Action('getUser')
  getUser: () => void;

  @LoadingModal.State((state) => state)
  isShow: boolean;

  @Watch('user')
  userChangeHandler(user: CommonTypes.Store.System.User) {
    if(!user) {
      this.$router.push(linkUrls.SIGNIN());
    }
  }

  isInitialized = false;

  async mounted() {
    console.log(this.isShow)
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

<template>
  <Modal class="loading-modal" v-show="isShow">
    loading
  </Modal>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

const Modal = {
  UploadModal: namespace('Modal/LoadingModal')
};

@Component({
  components: {
    Modal: () => import('../Modal/index.vue')
  }
})
export default class LoadingModal extends Vue {
  @Modal.UploadModal.State(state => state.isShow)
  isShow: boolean;
}
</script>

<style type="text/scss" lang="scss">
// .loading-modal {
// }
</style>
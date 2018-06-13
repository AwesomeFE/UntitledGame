<template>
  <Modal class="loading-modal" v-show="modal.isShow">
    loading
  </Modal>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component, Prop } from 'vue-property-decorator';

import { modalTypes } from '../../constants';
import { CommonTypes } from '../../types';
import Modal from '../../../common/AdminComponents/Modal/index.vue';

const System = namespace('system');

@Component({
  components: {
    Modal
  }
})
export default class LoadingModal extends Vue {
  @System.State((state: CommonTypes.Store.System.State) => (state.modals.find(modalItem => modalItem.type === modalTypes.LoadingModal) || {}))
  modal: CommonTypes.Store.System.Modal;

  @System.Mutation('registerModal')
  registerModal: (modal: CommonTypes.Store.System.Modal) => void;

  @System.Mutation('destoryModal')
  destoryModal: (modal: CommonTypes.Store.System.Modal) => void;

  created() {
    this.registerModal({
      type: modalTypes.LoadingModal,
      isShow: false
    });
  }

  destroyed() {
    this.destoryModal({ type: modalTypes.LoadingModal });
  }
}
</script>

<style type="text/scss" lang="scss">
.loading-modal {
}
</style>
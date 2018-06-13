<template>
  <Modal class="loading-modal" v-show="modal.isModalShow">
    loading
  </Modal>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component, Prop } from 'vue-property-decorator';

import { modalTypes } from '../../constants';
import { Types } from '../../../common/types';
import Modal from '../../../common/AdminComponents/Modal/index.vue';

const System = namespace('system');

@Component({
  components: {
    Modal
  }
})
export default class LoadingModal extends Vue {
  @System.State((state: Types.Store.System.State) => (state.modals.find(modalItem => modalItem.type === modalTypes.LoadingModal) || {}))
  modal: Types.Store.System.Modal;

  @System.Mutation('registerModal')
  registerModal: (modalType: string) => void;

  @System.Mutation('destoryModal')
  destoryModal: (modalType: string) => void;

  created() {
    this.registerModal(modalTypes.LoadingModal);
  }

  destroyed() {
    this.destoryModal(modalTypes.LoadingModal);
  }
}
</script>

<style type="text/scss" lang="scss">
.loading-modal {
}
</style>
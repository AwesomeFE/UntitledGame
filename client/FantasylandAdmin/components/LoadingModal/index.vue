<template>
  <Modal class="loading-modal" v-show="isModalShow">
    loading
  </Modal>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component, Prop } from 'vue-property-decorator';

import { modalTypes } from '../../constants';
import { Store } from '../../../common/types';
import Modal from '../../../common/AdminComponents/Modal/index.vue';

const System = namespace('system');

@Component({
  components: {
    Modal
  }
})
export default class extends Vue {
  @System.State((state: Store.System.State) => state.modals.find(modalItem => modalItem.type === modalTypes.LoadingModal).isShow)
  isModalShow: boolean;

  @System.Mutation('registerModal') registerModal: (modalType: string) => void;

  created() {
    this.registerModal(modalTypes.LoadingModal);
  }
}
</script>

<style type="text/scss" lang="scss">
.loading-modal {
}
</style>
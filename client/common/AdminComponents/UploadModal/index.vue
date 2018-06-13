<template>
  <Modal class="loading-modal" v-show="modal.isShow">
    <ModalHeader>{{$t('title')}}</ModalHeader>
    <ModalBody>

    </ModalBody>
    <!-- <ModalFooter>

    </ModalFooter> -->
  </Modal>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

import Modal from '../Modal/index.vue';
import ModalBody from '../ModalBody/index.vue';
import ModalHeader from '../ModalHeader/index.vue';
import { modalTypes } from '../../constants';
import { CommonTypes } from '../../types';

const System = namespace('system');

@Component({
  components: {
    Modal,
    ModalBody,
    ModalHeader
  }
})
export default class UploadModal extends Vue {
  @System.State((state: CommonTypes.Store.System.State) => (state.modals.find(modalItem => modalItem.type === modalTypes.UploadModal) || {}))
  modal: CommonTypes.Store.System.Modal;

  @System.Mutation('registerModal')
  registerModal: (modal: CommonTypes.Store.System.Modal) => void;

  @System.Mutation('destoryModal')
  destoryModal: (modal: CommonTypes.Store.System.Modal) => void;

  created() {
    this.registerModal({
      type: modalTypes.UploadModal,
      isShow: false,
      uploadFiles: []
    });
  }

  destroyed() {
    this.destoryModal({ type: modalTypes.UploadModal });
  }
}
</script>

<style type="text/scss" lang="scss">
.upload-modal {
}
</style>

<i18n lang="i18n">
"zh-cn":
  "title": "文件上传"
</i18n>
<template>
  <Modal class="upload-modal" v-show="isShow">
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
import * as ModalTypes from './store/types.d';

import UploadFile = ModalTypes.UploadModal.Model.UploadFile;

const Modal = {
  UploadModal: namespace('Modal/UploadModal')
};

@Component({
  components: {
    Modal: () => import('../Modal/index.vue'),
    ModalBody: () => import('../ModalBody/index.vue'),
    ModalHeader: () => import('../ModalHeader/index.vue')
  }
})
export default class UploadModal extends Vue {
  @Modal.UploadModal.State('isShow')
  isShow: boolean;

  @Modal.UploadModal.State('uploadFiles')
  uploadFiles: Array<UploadFile>;
}
</script>

<style type="text/scss" lang="scss">
// .upload-modal {
// }
</style>

<i18n lang="i18n">
"zh-cn":
  "title": "文件上传"
</i18n>
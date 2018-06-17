<template>
  <Modal class="upload-modal" v-show="isShow">
    <ModalHeader>{{$t('title')}}</ModalHeader>
    <ModalBody>
      <div class="upload-file" v-for="uploadFile in uploadFiles">
        <div class="file-name">
          <div>{{uploadFile.name}}</div>
        </div>
        <div class="file-progress">
          <div class="progress-bar">
            <div class="progress" :style="{ width: `${uploadFile.status}%` }"></div>
          </div>
          <div class="progress-value">{{uploadFile.status.toFixed(2)}}%</div>
        </div>
        <div class="clear-fix"></div>
      </div>
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
.upload-modal {
  .upload-file {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .file-progress {
    float: left;
    width: 75%;
    padding: 5px;
    background: #f0f0f0;
    box-sizing: border-box;
    position: relative;
  }

  .progress-bar {
    float: left;
    width: 75%;
    box-sizing: border-box;
    padding: 5px;
    height: 16px;
  }

  .progress {
    background: black;
    height: 100%;
    overflow: hidden;
    border-radius: 3px;
  }

  .progress-value {
    float: left;
    width: 25%;
  }

  .file-name {
    float: left;
    width: 25%;
    padding-right: 10px;
    box-sizing: border-box;
    
    > div {
      box-sizing: border-box;
      padding: 5px;
      background: #f0f0f0;
    }
  }
}
</style>

<i18n lang="i18n">
"zh-cn":
  "title": "文件上传"
</i18n>
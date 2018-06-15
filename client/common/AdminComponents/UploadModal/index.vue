<template>
  <Modal class="upload-modal" v-show="false">
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

const System = namespace('system');

@Component({
  components: {
    Modal,
    ModalBody,
    ModalHeader
  }
})
export default class UploadModal extends Vue {
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
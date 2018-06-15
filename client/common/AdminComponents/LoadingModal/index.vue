<template>
  <Modal class="loading-modal" v-show="isShow">
    loading
  </Modal>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component, Prop } from 'vue-property-decorator';

import Modal from '..//Modal/index.vue';

const System = namespace('system');

@Component({
  components: {
    Modal
  }
})
export default class LoadingModal extends Vue {
  isShow = false;
}
</script>

<style type="text/scss" lang="scss">
// .loading-modal {
// }
</style>
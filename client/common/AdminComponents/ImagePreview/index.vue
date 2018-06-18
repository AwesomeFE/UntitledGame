<template>
  <div class="image-preview">
    <!-- <img class="empty-image" v-if="!isLoading && !blobUrl" :src="emptyImageUrl" /> -->
    <img class="loading" v-if="isLoading" />
    <img class="image" v-if="!isLoading && blobUrl" :src="blobUrl" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import { UtilImage } from '../../utils';

// why png is empty???
import emptyUrl from './image.svg';

@Component
export default class ImagePreview extends Vue {
  @Prop() src: string;
  @Prop() file: File;

  blob?: string = null;
  isLoading: boolean = false;
  emptyImageUrl: string = emptyUrl;

  @Watch('src')
  async srcChangeHandler() {
    this.isLoading = true;
    this.blobUrl = await UtilImage.fetchImage(this.src);
    this.isLoading = false;
  }

  get blobUrl() {
    return this.file ? URL.createObjectURL(this.file) : this.blob;
  }

  set blobUrl(val) {
    this.blob = val;
  }

  mounted() {
    // this.srcChangeHandler();
  }
}
</script>

<style type="text/scss" lang="scss">
.image-preview {
  img {
    display: inline-block;
  }

  .image {
    max-width: 100%;
    max-height: 100%;
  }

  // .empty-image {
    
  // }
}
</style>

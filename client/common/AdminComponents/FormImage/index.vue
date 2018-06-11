<template>
  <div class="form-image">
    FormImage
    <div class="upload-button">
      <FormButton class="btn-primary">点击上传</FormButton>
      <input class="file-input" type="file" name="name" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';

import FormButton from '../FormButton/index.vue';

@Component({
  components: {
    FormButton
  }
})
export default class FormImage extends Vue {
  @Prop() name: string;
}
</script>

<style type="text/scss" lang="scss">
.form-image {
  .upload-button {
    position: relative;
  }
  .file-input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>

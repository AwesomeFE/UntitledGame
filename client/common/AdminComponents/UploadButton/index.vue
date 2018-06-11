<template>
  <span class="upload-button">
    <FormButton class="btn-primary">
      <slot></slot>
    </FormButton>
    <input class="file-input" type="file" :name="name" :value="value" @change="$emit('input', $event.target.value)" />
  </span>
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
export default class UploadButton extends Vue {
  @Prop() name: string;
  @Prop() value: string;
}
</script>

<style type="text/scss" lang="scss">
.upload-button {
  position: relative;
  display: inline-block;
  cursor: pointer;

  .file-input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>

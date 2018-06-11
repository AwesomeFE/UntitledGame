<template>
  <FormButton class="upload-button btn-primary">
    <slot></slot>
    <input class="file-input" type="file" :name="name" :value="value" @change="$emit('input', $event.target.value)" />
  </FormButton>
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
  overflow: hidden;

  input[type="file"].file-input {
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 300%;
    height: 200%;
    display: inline-block;
    border: 0;
    cursor: pointer;
  }
}
</style>

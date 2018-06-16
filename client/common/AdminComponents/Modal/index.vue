<template>
  <div class="modal">
    <div class="modal-dialog">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.modal {
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;

  .modal-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
<template>
  <header class="modal-body">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ModalBody extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.modal-body {
  padding: 15px;
  background: white;
  min-width: 600px;
}
</style>
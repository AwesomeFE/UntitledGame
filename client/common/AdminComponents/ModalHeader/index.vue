<template>
  <header class="modal-header">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ModalHeader extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.modal-header {
  padding: 15px;
  background: white;
  border-bottom: 1px solid #e5e5e5;
}
</style>
<template>
  <header class="modal-footer">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ModalFooter extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.modal-footer {
  padding: 15px;
  background: white;
  border-top: 1px solid #e5e5e5;
}
</style>
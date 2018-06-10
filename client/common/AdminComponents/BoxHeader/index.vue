<template>
  <div class="box-header">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class BoxHeader extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.box-header {
  padding: 10px;
  color: #444;
  border-bottom: 1px solid #f4f4f4;
}
</style>
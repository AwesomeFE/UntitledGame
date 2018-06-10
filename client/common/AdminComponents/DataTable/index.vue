<template>
  <div class="data-table">
    <table>
      <slot></slot>
    </table>
    <div v-if="isShowPaginaton"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class DataTable extends Vue {
  @Prop() isShowPaginaton: boolean;
}
</script>

<style type="text/scss" lang="scss">
.data-table {
  table {
    display: block;
    width: 100%;
  }
}
</style>
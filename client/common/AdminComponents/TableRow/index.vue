<template>
  <tr class="table-row">
    <td v-for="data in row" :key="data.key">{{data.value}}</td>
    <td v-if="isShowActions">
      <slot></slot>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { rowData } from './index.d';

@Component
export default class TableHeader extends Vue {
  @Prop({required: true}) row: Array<rowData>;

  get isShowActions() {
    return !!this.$slots.default;
  }
}
</script>

<style type="text/scss" lang="scss">
.table-row {
  td {
    border: 1px solid #f4f4f4;
    padding: 8px;
  }
}
</style>
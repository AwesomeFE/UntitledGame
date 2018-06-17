<template>
  <tr class="table-row">
    <td v-for="header in headers" v-if="header.key === 'no'">
      {{0}}
    </td>
    <td v-else-if="header.key !== 'action'" :key="header.key">
      {{row[header.key]}}
    </td>
    <td v-else>
      <slot></slot>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { TableHeaders, TableRow } from './index.d';

@Component
export default class TableHeader extends Vue {
  @Prop({required: true}) headers: TableHeaders;
  @Prop({required: true}) row: Array<TableRow>;
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
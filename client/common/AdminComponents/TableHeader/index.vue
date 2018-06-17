<template>
  <tr class="table-header">
    <th v-for="header in headers" :key="header.key">{{header.title}}</th>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { TableHeaders } from './types.d';

@Component
export default class TableHeader extends Vue {
  @Prop({required: true}) headers: TableHeaders;
}
</script>

<style type="text/scss" lang="scss">
.table-header {
  th {
    border: 1px solid #f4f4f4;
    padding: 8px;
  }
}
</style>
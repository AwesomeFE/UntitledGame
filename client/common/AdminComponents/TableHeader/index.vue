<template>
  <thead class="table-header">
    <tr>
      <th v-for="header in headers" :key="header">{{header}}</th>
    </tr>
  </thead>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class TableHeader extends Vue {
  @Prop({required: true}) headers: Array<string>;
}
</script>

<style type="text/scss" lang="scss">
.table-header {
}
</style>
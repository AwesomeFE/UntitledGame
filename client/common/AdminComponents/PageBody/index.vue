<template>
  <div class="page-body">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class PageBody extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.page-body {
}
</style>
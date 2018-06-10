<template>
  <div class="box-body">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class BoxBody extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.box-body {
  padding: 10px;
}
</style>
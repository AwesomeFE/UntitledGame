<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Box extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.box {
  border-top: 3px solid #d2d6de;
  background: white;
  border-radius: 3px;
  margin-bottom: 20px;
}
</style>
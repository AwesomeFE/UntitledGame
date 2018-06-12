<template>
  <div class="page-body">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Validator } from 'vee-validate';
import { Component, Inject } from 'vue-property-decorator';

@Component
export default class PageBody extends Vue {
  @Inject('$validator') $validator: Validator;
}
</script>

<style type="text/scss" lang="scss">
.page-body {
  padding: 15px;
  margin-left: 230px;
  background: #ecf0f5;
}
</style>
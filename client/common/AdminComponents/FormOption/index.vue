<template>
  <div class="form-option">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class FormOption extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.form-option {
}
</style>
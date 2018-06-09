<template>
  <router-link class="menu-item" :to="to">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop({default: '#'})
  to: string;
  
  get isSubMenu() {
    return this.$slots.default.length > 1;
  }
}
</script>

<style type="text/scss" lang="scss">
.menu-item {
  display: block;
  float: left;
  height: 50px;
  padding: 0 10px;
  line-height: 50px;
  cursor: pointer;
}
</style>
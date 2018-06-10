<template>
  <router-link class="side-item" :to="to" @click.native="clickHandler">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class SideItem extends Vue {
  @Prop({default: '#'})
  to: string;

  @Emit('click')
  clickHandler(event: MouseEvent) {}
  
  get isSubMenu() {
    return this.$slots.default.length > 1;
  }
}
</script>

<style type="text/scss" lang="scss">
.side-item {
  display: block;
  padding: 12px 5px 12px 15px;
  cursor: pointer;
  font-size: 13px;
}
</style>
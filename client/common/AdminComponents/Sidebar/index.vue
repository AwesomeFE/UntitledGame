<template>
  <aside class="sidebar">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

const System = namespace('system');

@Component
export default class Sidebar extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.sidebar {
  width: 230px;
  position: absolute;
  min-height: 100vh;
  height: 100%;
  top: 0;
  padding-top: 50px;
  background: #222d32;
  box-sizing: border-box;
  color: white;
}
</style>

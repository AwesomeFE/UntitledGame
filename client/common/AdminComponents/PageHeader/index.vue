<template>
  <header class="page-header">
    <div class="header-logo">Fantasyland</div>
    <nav class="header-menu">
      <slot></slot>
      <div class="clear-fix"></div>
    </nav>
    <div class="clear-fix"></div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class PageHeader extends Vue {

}
</script>

<style type="text/scss" lang="scss">
.page-header {
  position: relative;
  z-index: 1;
  color: white;
  .header-logo {
    height: 50px;
    width: 230px;
    float: left;
    line-height: 50px;
    text-align: center;
    background: #367fa9;
  }
  .header-menu {
    margin-left: 230px;
    background: #3c8dbc;
  }
}
</style>

<i18n lang="i18n">
</i18n>
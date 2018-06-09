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
export default class extends Vue {

}
</script>

<style type="text/scss" lang="scss">
.page-header {
  .header-logo {
    height: 50px;
    width: 230px;
    float: left;
    line-height: 50px;
    text-align: center;
  }
  .header-menu {
    margin-left: 230px;
  }
}
</style>

<i18n lang="i18n">
</i18n>
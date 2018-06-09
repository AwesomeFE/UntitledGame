<template>
  <router-link class="menu-item" to="/">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class extends Vue {

}
</script>

<style type="text/scss" lang="scss">
.menu-item {
  display: block;
  float: left;
  height: 50px;
  padding: 0 10px;
  line-height: 50px;
}
</style>
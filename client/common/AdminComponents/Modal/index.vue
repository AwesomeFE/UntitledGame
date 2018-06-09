<template>
  <div class="modal">
    <div class="modal-dialog">
      <header></header>
      <section>
        <slot></slot>
      </section>
      <footer></footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.modal {
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: gray;
  opacity: 0.8;
  top: 0;
  left: 0;

  .modal-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
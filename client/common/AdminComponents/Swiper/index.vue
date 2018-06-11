<template>
  <div class="swiper swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Swiper from 'swiper';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class NewSwiper extends Vue {
  instance: any = null;
  options: any = {
    direction: 'horizontal',
    loop: true,
  };

  mounted() {
    this.instance = new Swiper(this.$el, this.options);
  }
}
</script>

<style type="text/scss" lang="scss">
.swiper {
  height: 100%;
}
</style>
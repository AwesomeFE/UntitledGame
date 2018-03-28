<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { Vue } from '../../';
import { Component } from 'vue-property-decorator';

@Component()
class Slider extends Vue {

}

export default Slider;
</script>

<style type="text/scss" lang="scss">
</style>

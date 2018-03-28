<template>
  <div>
    <slot v-if="container2D.texture"></slot>
  </div>
</template>

<script>
import Vue from 'vue';
import GUI, { AdvancedDynamicTexture } from 'babylonjs-gui';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$system'
  ],
  provide() {
    return {
      $container2D: this.container2D
    };
  }
})
class Container2D extends Vue {
  container2D = {
    texture: null
  };

  mounted() {
    const { scene } = this.$system;
    this.container2D.texture = AdvancedDynamicTexture.CreateFullscreenUI('UI', true, scene);
  }
}

export default Container2D;
</script>

<style type="text/scss" lang="scss">
</style>

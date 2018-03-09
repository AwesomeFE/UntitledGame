<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { Vue } from '../../common';
import GUI, { AdvancedDynamicTexture } from 'babylonjs-gui';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$babylon'
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

  @Watch('$babylon.scene')
  onSceneChange(newValue, oldValue) {
    if(newValue !== oldValue) {
      this.container2D.texture = AdvancedDynamicTexture.CreateFullscreenUI('UI', true, newValue);
    }
  }
}

export default Container2D;
</script>

<style type="text/scss" lang="scss">
</style>

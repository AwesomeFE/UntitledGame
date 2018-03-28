<template>
  <div>
    <slot v-if="container2D.texture"></slot>
  </div>
</template>

<script>
import Babylon from '../common/Babylon';
import GUI from 'babylonjs-gui';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$container2D'
  ],
  provide() {
    return {
      $container2D: this.container2D
    };
  },
  props: {
    name: String,
    isVertical: Boolean,
    horizontalAlignment: Number,
    verticalAlignment: Number,
    left: {
      type: String,
      default: '0%'
    },
    top: {
      type: String,
      default: '0%'
    },
    paddingTop: {
      type: String,
      default: '0%'
    },
    paddingBottom: {
      type: String,
      default: '0%'
    },
    paddingLeft: {
      type: String,
      default: '0%'
    },
    paddingRight: {
      type: String,
      default: '0%'
    }
  }
})
class OneBlock extends Babylon {
  container2D = {
    texture: null
  };

  mounted() {
    this.container2D.texture = new GUI.StackPanel(this.name);
    this.container2D.texture.top = this.top;
    this.container2D.texture.left = this.left;
    this.container2D.texture.isVertical = this.isVertical;
    this.container2D.texture.horizontalAlignment = this.horizontalAlignment;
    this.container2D.texture.verticalAlignment = this.verticalAlignment;
    this.container2D.texture.paddingTop = this.paddingTop;
    this.container2D.texture.paddingBottom = this.paddingBottom;
    this.container2D.texture.paddingLeft = this.paddingLeft;
    this.container2D.texture.paddingRight = this.paddingRight;
    this.$container2D.texture.addControl(this.container2D.texture);
  }
}

export default OneBlock;
</script>

<style type="text/scss" lang="scss">
</style>

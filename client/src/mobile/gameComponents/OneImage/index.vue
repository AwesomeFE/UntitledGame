<template>
</template>

<script>
import Babylon from '../common/Babylon';
import GUI from 'babylonjs-gui';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$container2D'
  ],
  props: {
    name: String,
    url: String,
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    },
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
class OneImage extends Babylon {
  image = null;

  mounted() {
    if(this.url) {
      this.image = new GUI.Image(this.name, this.url);
      this.image.width = this.width;
      this.image.height = this.height;
      this.image.top = this.top;
      this.image.left = this.left;
      this.image.verticalAlignment = this.verticalAlignment;
      this.image.horizontalAlignment = this.horizontalAlignment;
      this.image.paddingTop = this.paddingTop;
      this.image.paddingBottom = this.paddingBottom;
      this.image.paddingLeft = this.paddingLeft;
      this.image.paddingRight = this.paddingRight;
      this.$container2D.texture.addControl(this.image);
    }
  }
}

export default OneImage;
</script>

<style type="text/scss" lang="scss">
</style>

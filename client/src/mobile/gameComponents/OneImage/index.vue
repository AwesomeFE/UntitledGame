<template>
</template>

<script>
import { Vue } from '../../common';
import GUI from 'babylonjs-gui';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$container2D'
  ],
  props: {
    background: String,
    height: [String, Number],
    width: [String, Number]
  }
})
class OneImage extends Vue {
  bgImage = null;

  @Watch('$container2D.texture')
  onTextureChange(newValue, oldValue) {
    if(this.background) {
      this.bgImage = new GUI.Image('background', this.background);
      this.bgImage.width = this.width;
      this.bgImage.height = this.height;
      this.bgImage.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
      this.$container2D.texture.addControl(this.bgImage);
    }
  }

  @Watch('height')
  onHeightChange(newValue, oldValue) {
    this.bgImage.height = newValue;
  }
}

export default OneImage;
</script>

<style type="text/scss" lang="scss">
</style>

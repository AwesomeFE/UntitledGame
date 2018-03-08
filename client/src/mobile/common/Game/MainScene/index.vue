<template>
</template>

<script>
import { Vue } from '../../';
import { Scene, Engine } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  props: {
    canvas: HTMLCanvasElement
  }
})
class MainScene extends Vue {
  engine = null;
  scene = null;

  mounted() {
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);

    this.$emit('sceneChanged', this.scene);
  }

  @Watch('canvas')
  onCanvasChange(newCanvas, oldCanvas) {
    if(newCanvas !== oldCanvas) {
      this.destoryScene();
      this.createScene(newCanvas);
    }
  }

  destoryScene() {
    this.engine = null;
    this.scene = null;
  }

  createScene(canvas) {
    this.engine = new Engine(canvas, false);
    this.scene = new Scene(this.engine);

    this.$emit('sceneChanged', this.scene);

    window.addEventListener('resize', this.resizeHandler);
  }

  resizeHandler() {
    this.engine.resize();
  }
}

export default MainScene;
</script>

<style type="text/scss" lang="scss">
</style>

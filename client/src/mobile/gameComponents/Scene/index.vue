<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { Vue } from '../../common';
import { Scene, Engine, MeshBuilder } from 'babylonjs';
import { Component, Watch, Provide } from 'vue-property-decorator';

@Component({
  props: {
    stage: HTMLCanvasElement
  },
  provide() {
    return {
      $babylon: this.babylon
    };
  }
})
class SceneClass extends Vue {
  babylon = {
    engine: null,
    scene: null,
    canvas: null
  };

  @Watch('stage')
  onCanvasChange(newStage, oldStage) {
    if(newStage !== oldStage) {
      this.destoryScene();
      this.createScene(newStage);
    }
  }

  destoryScene() {
    this.babylon.engine = null;
    this.babylon.scene = null;
  }

  createScene(canvas) {
    this.babylon.canvas = canvas;
    this.babylon.engine = new Engine(this.babylon.canvas, false);
    this.babylon.scene = new Scene(this.babylon.engine);
    this.babylon.engine.runRenderLoop(() => this.babylon.scene.render());

    MeshBuilder.CreateBox('box', { height: 2, width: 2, depth: 2 }, this.babylon.scene);

    window.addEventListener('resize', this.resizeHandler);
  }

  resizeHandler() {
    this.babylon.engine.resize();
  }

  // life cycle hook
  mounted() {
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }
}

export default SceneClass;
</script>

<style type="text/scss" lang="scss">
</style>

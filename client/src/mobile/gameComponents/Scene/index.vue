<template>
  <div class="Scene">
    <canvas class="canvas" :id="name" ref="canvas" touch-action="none"></canvas>
    <slot class="Elments" v-if="system.canvas"></slot>
  </div>
</template>

<script>
import Babylon from '../common/Babylon';
import { Scene, Engine, MeshBuilder } from 'babylonjs';
import { Component, Watch, Provide } from 'vue-property-decorator';

@Component({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  provide() {
    return { $system: this.system };
  }
})
class SceneClass extends Babylon {
  system = {
    engine: null,
    scene: null,
    canvas: null,
    camera: null
  };

  resizeHandler() {
    this.system.engine.resize();
  }

  mounted() {
    this.system.canvas = this.$refs.canvas;
    this.resizeHandler = this.resizeHandler.bind(this);
    
    this.system.engine = new Engine(this.system.canvas, false);
    this.system.scene = new Scene(this.system.engine);

    this.system.engine.runRenderLoop(() => this.system.scene.render());

    window.addEventListener('resize', this.resizeHandler);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }
}

export default SceneClass;
</script>

<style type="text/scss" lang="scss">
body,
html,
#app,
.App,
.Game,
.Scene,
.canvas {
  height: 100%;
  width: 100%;
}
.canvas {
  display: block;
  outline: none;
  touch-action: none;
}
body, html {
  position: fixed;
  touch-action: none;
  overflow: hidden;
}

[touch-action="none"]{
  -ms-touch-action: none;
  touch-action: none;
  touch-action-delay: none;
}
</style>

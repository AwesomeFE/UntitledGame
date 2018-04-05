<template>
  <div class="Scene">
    <canvas class="canvas" :id="name" ref="canvas" touch-action="none"></canvas>
    <div class="fps" v-if="fps">{{fps}}</div>
    <slot class="Elments" v-if="system.canvas"></slot>
  </div>
</template>

<script>
import Vue from 'vue';
import BABYLON, { Scene, Engine, MeshBuilder, Vector3 } from 'babylonjs';
import { Component, Watch, Provide } from 'vue-property-decorator';

BABYLON.DebugLayer.InspectorURL = '/public/mobile-game/javascripts/babylon.inspector.bundle.js';

@Component({
  props: {
    name: {
      type: String,
      required: true
    },
    gravity: {
      type: Object
    },
    isShowDebug: {
      type: Boolean
    },
    isShowFPS: {
      type: Boolean
    }
  },
  provide() {
    return { $system: this.system };
  }
})
class SceneClass extends Vue {
  system = {
    engine: null,
    scene: null,
    canvas: null,
    camera: null
  };

  fps = 0;

  mounted() {
    this.system.canvas = this.$refs.canvas;
    this.resizeHandler = this.resizeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    
    this.system.engine = new Engine(this.system.canvas, false);
    this.system.scene = new Scene(this.system.engine);

    this.system.engine.runRenderLoop(this.renderLoop);

    this.system.scene.ambientColor = new Vector3(1, 1, 1);
    this.system.engine.switchFullscreen();

    if(this.gravity) {
      this.system.scene.gravity = this.gravity;	
      this.system.scene.collisionsEnabled = true;	
      this.system.scene.workerCollisions = true;
    }

    this.isShowDebug ? this.showDebugLayer() : null;
    this.isShowFPS ? this.showFPS() : null;

    window.addEventListener('resize', this.resizeHandler);
    document.addEventListener('touchend', this.clickHandler);
    document.addEventListener('click', this.clickHandler);
  }

  beforeDestroy() {
    this.system.scene.dispose();
    window.removeEventListener('resize', this.resizeHandler);
    document.removeEventListener('touchend', this.clickHandler);
    document.removeEventListener('click', this.clickHandler);
  }

  renderLoop() {
    this.system.scene.render();
  }

  resizeHandler() {
    this.system.engine.resize();
  }

  clickHandler(event) {
    const { scene } = this.system;
    
    this.$emit('click', scene.pick(scene.pointerX, scene.pointerY));
  }

  showFPS() {
    setInterval(() => {
      this.fps = this.system.engine.getFps().toFixed(0);
    }, 250);
  }

  showDebugLayer() {
    this.system.scene.debugLayer.show({
      initialTab : 2, 
      newColors: {
        backgroundColor: '#eee',
        backgroundColorLighter: '#fff',
        backgroundColorLighter2: '#fff',
        backgroundColorLighter3: '#fff',
        color: '#333',
        colorTop:'red', 
        colorBottom:'blue'
      }
    });
  }
}

export default SceneClass;
</script>

<style type="text/scss" lang="scss">
.canvas {
  position: absolute;
  display: block;
  outline: none;
  touch-action: none;
}
.Scene {
  .fps {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    background: white;
  }
}
</style>

<template>
  <div class="Scene">
    <canvas class="canvas" :id="name" ref="canvas" touch-action="none"></canvas>
    <div class="fps" v-if="isShowFPS">{{fps}}</div>
    <slot class="Elments" v-if="system.canvas"></slot>
  </div>
</template>

<script>
import Babylon from '../common/Babylon';
import { Scene, Engine, MeshBuilder, Vector3 } from 'babylonjs';
import { Component, Watch, Provide } from 'vue-property-decorator';

@Component({
  props: {
    name: {
      type: String,
      required: true
    },
    gravity: {
      type: Object
    },
    isShowFPS: {
      type: Boolean
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

  fps = 0;

  mounted() {
    // if(!Engine.isSupported()) {
    //   alert('go away');
    //   return;
    // }

    this.system.canvas = this.$refs.canvas;
    this.resizeHandler = this.resizeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    
    this.system.engine = new Engine(this.system.canvas, false);
    this.system.scene = new Scene(this.system.engine);

    this.system.engine.runRenderLoop(this.renderLoop);

    if(this.gravity) {
      this.system.scene.gravity = this.gravity;	
      this.system.scene.collisionsEnabled = true;	
      this.system.scene.workerCollisions = true;
    }

    if(this.isShowFPS) {
      setInterval(() => {
        this.fps = Math.round(this.system.engine.getFps());
      }, 200);
    }

    window.addEventListener('resize', this.resizeHandler);
    document.addEventListener('touchend', this.clickHandler);
    document.addEventListener('click', this.clickHandler);
  }

  beforeDestroy() {
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
    const pickResult = scene.pick(scene.pointerX, scene.pointerY);

    if(pickResult.pickedMesh && pickResult.pickedMesh.name !== 'ground') {
      // console.log(pickResult.pickedMesh)
      // alert(pickResult.pickedMesh.name);
    }
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
.fps {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  color: white;
  background: gray;
}
</style>

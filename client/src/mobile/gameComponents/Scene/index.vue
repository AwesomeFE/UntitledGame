<template>
  <div class="Scene">
    <canvas class="canvas" :id="name" ref="canvas" touch-action="none"></canvas>
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

  clickHandler(event) {
    const { scene } = this.system;
    const pickResult = scene.pick(scene.pointerX, scene.pointerY);

    if(pickResult.pickedMesh && pickResult.pickedMesh.name !== 'ground') {
      // console.log(pickResult.pickedMesh)
      // alert(pickResult.pickedMesh.name);
    }
  }

  mounted() {
    this.system.canvas = this.$refs.canvas;
    this.resizeHandler = this.resizeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    
    this.system.engine = new Engine(this.system.canvas, false);
    this.system.scene = new Scene(this.system.engine);

    this.system.engine.runRenderLoop(() => this.system.scene.render());

    if(this.gravity) {
      this.system.scene.gravity = this.gravity;	
      this.system.scene.collisionsEnabled = true;	
    }

    // const box = new MeshBuilder.CreateBox('box', { width: 0.5, height: 0.5, depth: 0.5 }, this.system.scene);
    // box.position = new Vector3(0, 10, 0);
    // box.checkCollisions = true;
    // box.applyGravity = true;
    // box.ellipsoid = new Vector3(0.25, 0.25, 0.25);

    // setInterval(() => {
    //   box.moveWithCollisions(new Vector3(0, -1, 0));
    // }, 100);
    // const box = new MeshBuilder.CreateBox('box', { width: 0.3, height: 0.3, depth: 0.3 }, this.system.scene);
    // box.position = new Vector3(0, 0, 0);


    window.addEventListener('resize', this.resizeHandler);
    document.addEventListener('touchend', this.clickHandler);
    document.addEventListener('click', this.clickHandler);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
    document.removeEventListener('touchend', this.clickHandler);
    document.removeEventListener('click', this.clickHandler);
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

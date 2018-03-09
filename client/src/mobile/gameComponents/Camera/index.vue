<template>
</template>

<script>
import { Vue } from '../../common';
import { UniversalCamera, Vector3, FreeCamera } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$babylon'
  ],
  props: {
    name: String,
    type: String,
    position: {
      type: Object,
      default: new Vector3(0, 0, -10)
    },
    target: {
      type: Object,
      default: Vector3.Zero()
    },
    canRotate: {
      type: Boolean,
      default: true
    }
  }
})
class Camera extends Vue {
  camera = null;

  @Watch('$babylon.scene')
  onSceneChange(newValue, oldValue) {
    if(newValue !== oldValue) {
      this.destoryCamera();
      this.createCamera(newValue);
    }
  }

  @Watch('target')
  onTargetChange(newValue, oldValue) {
    this.camera.setTarget(newValue);
  }

  @Watch('position')
  onTargetChange(newValue, oldValue) {
    this.camera.position = newValue;
  }

  createCamera(scene) {
    const { Game } = this.strings;
    const position = this.position;
    const target = this.target;

    switch(this.type) {
      case Game.CAMERA.UNIVERSAL:
        this.camera = new UniversalCamera(this.name, position, scene);
        break;
      case Game.CAMERA.FREE:
      default:
        this.camera = new FreeCamera(this.name, position, scene);
        break;
    }
    this.camera.setTarget(target);
    this.camera.attachControl(this.$babylon.canvas, false);
    
    if(!this.canRotate) {
      this.camera.detachControl(this.$babylon.canvas, false);
    }
  }

  destoryCamera() {
    this.camera = null;
  }
}

export default Camera;
</script>

<style type="text/scss" lang="scss">
</style>

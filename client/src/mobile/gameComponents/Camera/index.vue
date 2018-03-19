<template>
</template>

<script>
import Babylon from '../common/Babylon';
import { watchArray } from './configs';
import { UniversalCamera, Vector3, FreeCamera, ArcRotateCamera } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$system'
  ],
  props: {
    name: String,
    type: String,
    position: {
      type: Object,
      required: true
    },
    target: {
      type: Object,
      required: true
    },
    alpha: {
      type: Number
    },
    beta: {
      type: Number
    },
    radius: {
      type: Number
    },
    canRotate: {
      type: Boolean,
      default: true
    }
  }
})
class Camera extends Babylon {
  mounted() {
    const { Game } = this.strings;
    const { scene, canvas } = this.$system;

    const position = this.position;
    const target = this.target;

    switch(this.type) {
      case Game.CAMERA.ARC:
        this.$system.camera = new ArcRotateCamera(this.name, this.alpha, this.beta, this.radius, target, scene);
        this.$system.camera.setPosition(position);
        break;
      case Game.CAMERA.UNIVERSAL:
        this.$system.camera = new UniversalCamera(this.name, position, scene);
        break;
      case Game.CAMERA.FREE:
      default:
        this.$system.camera = new FreeCamera(this.name, position, scene);
        break;
    }
    this.$system.camera.setTarget(target);

    if(this.canRotate) {
      this.$system.camera.attachControl(canvas, false);
    }

    this.watchingProps(watchArray);
  }
}

export default Camera;
</script>

<style type="text/scss" lang="scss">
</style>

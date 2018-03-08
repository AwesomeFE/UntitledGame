<template>
</template>

<script>
import { Vue } from '../../';
import { UniversalCamera, Vector3 } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  props: {
    canvas: HTMLCanvasElement,
    scene: Object,
    name: String,
    position: Object
  }
})
class Camera extends Vue {
  camera = null;

  @Watch('scene')
  onSceneChange(newScene, oldScene) {
    if(newScene !== oldScene) {
      this.destoryCamera();
      this.createCamera(newScene);
    }
  }

  createCamera(scene) {
    console.log('createCamera')
    const currentPosition = this.position || new Vector3(0, 0, -10);

    this.camera = new UniversalCamera(this.name, currentPosition, scene);
    this.camera.setTarget(Vector3.Zero());
    this.camera.attachControl(this.canvas, false);
  }

  destoryCamera() {
    this.camera = null;
  }
}

export default Camera;
</script>

<style type="text/scss" lang="scss">
</style>

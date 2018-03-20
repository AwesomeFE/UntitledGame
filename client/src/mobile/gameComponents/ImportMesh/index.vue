<template>
</template>

<script>
import Babylon from '../common/Babylon';
import { SceneLoader, Vector3 } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$system'
  ],
  props: {
    name: {
      type: String
    },
    scaling: {
      type: Object
    },
    rotation: {
      type: Object
    },
    position: {
      type: Object
    },
    assetUrl: {
      type: String
    },
    speed: {
      type: Number
    },
    size: {
      type: Object
    }
  }
})
class ImportMesh extends Babylon {
  container = null;
  from = null;
  to = null;
  movingTimer = null;

  async mounted() {
    const { scene } = this.$system;
    const { rootUrl, fileName } = this.parseUrl();
    this.container = await SceneLoader.LoadAssetContainerAsync(rootUrl, fileName, scene);
    this.container.addAllToScene();

    this.setPosition();
    this.setRotation();
    this.setScaling();
  }

  setScaling() {
    if(this.scaling) {
      this.container.meshes[0].scaling = this.scaling;
    }
  }

  @Watch('position')
  onPositionChange() {
    if(this.movingTimer) {
      this.stopMoving();
    }

    this.startMoving();
  }

  setPosition() {
    if(this.position) {
      this.container.meshes[0].checkCollisions = true;
      this.container.meshes[0].applyGravity = true;
      this.container.meshes[0].position = new Vector3(0, 10, 0);
      this.container.meshes[0].moveWithCollisions(new Vector3(0, -10, 0));
      // this.container.meshes[0].position = this.position;
    }
  }

  stopMoving() {
    clearInterval(this.movingTimer);
    this.movingTimer = null;
  }

  startMoving() {
    setInterval(() => {
      // console.log('startMoving')
      this.container.meshes[0].moveWithCollisions(new Vector3(0, -0.01, 0.01));
    }, 10);
  }

  setRotation() {
    if(this.rotation) {
      this.container.meshes[0].rotation.x = this.rotation.x;
      this.container.meshes[0].rotation.y = this.rotation.y;
      this.container.meshes[0].rotation.z = this.rotation.z;
    }
  }

  parseUrl() {
    const paths = this.assetUrl.split('/');
    const fileName = paths[paths.length - 1];
    const rootUrl = this.assetUrl.replace(fileName, '');

    return { rootUrl, fileName };
  }
}

export default ImportMesh;
</script>

<style type="text/scss" lang="scss">
</style>

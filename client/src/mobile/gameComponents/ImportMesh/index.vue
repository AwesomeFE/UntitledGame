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
    this.setMoving();
  }

  setPosition() {
    if(this.position) {
      this.container.meshes[0].position = this.position;
      this.from = this.position;
    }
  }

  setMoving() {
    this.to = this.position;

    if(this.movingTimer) {
      this.stopMoving();
    }

    this.startMoving();
  }

  stopMoving() {
    clearInterval(this.movingTimer);
    this.movingTimer = null;
  }

  startMoving() {
    const distance = Vector3.Distance(this.from, this.to);
    console.log(distance);
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

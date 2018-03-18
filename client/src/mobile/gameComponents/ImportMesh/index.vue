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
    }
  }
})
class ImportMesh extends Babylon {
  container = null;

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
      for(const mesh of this.container.meshes) {
        mesh.scaling = this.scaling;
      }
    }
  }

  setPosition() {
    if(this.position) {
      for(const mesh of this.container.meshes) {
        mesh.position = this.position;
      }
    }
  }

  setRotation() {
    if(this.rotation) {
      for(const mesh of this.container.meshes) {
        mesh.rotation.x = this.rotation.x;
        mesh.rotation.y = this.rotation.y;
        mesh.rotation.z = this.rotation.z;
      }
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

<template>
</template>

<script>
import Babylon from '../common/Babylon';
import { SceneLoader } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$system'
  ],
  props: {
    name: {
      type: String
    },
    position: {
      type: Object
    },
    assetUrl: {
      validator(value = {}) {
        return typeof value.path === 'string'
          && typeof value.fileName === 'string';
      }
    }
  }
})
class ImportMesh extends Babylon {
  mesh = null;

  async mounted() {
    const { scene } = this.$system;
    const { path, fileName } = this.assetUrl;
    const { meshes } = SceneLoader.ImportMeshAsync(this.name, path, fileName, scene).then((result) => {
      console.log(result)
    });
  }
}

export default ImportMesh;
</script>

<style type="text/scss" lang="scss">
</style>

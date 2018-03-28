<template>
</template>

<script>
import Vue from 'vue';
import { SceneLoader, Vector3 } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';
import * as handler from './handler';

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
    },
    ellipsoidOffset: {
      type: Object
    },
    isEnableCollisions: {
      type: Boolean
    },
    onGroundName: {
      type: String,
      required: true
    }
  }
})
class ImportMesh extends Vue {
  container = null;
  ground = null;
  
  movingTimer = null;
  rotationTimer = null;

  prePosition = null;
  preRotation = null;

  async mounted() {
    const { scene } = this.$system;
    const { rootUrl, fileName } = this.parseUrl();

    this.container = await SceneLoader.LoadAssetContainerAsync(rootUrl, fileName, scene);
    this.container.addAllToScene();

    this.setGround();
    this.setRotation();
    this.setScaling();
    this.setCollisions();
    this.setPosition();
  }

  setGround() {
    this.ground = this.$system.scene.getMeshByName(this.onGroundName);
  }

  setPosition() {
    const y = this.ground.getHeightAtCoordinates(this.position.x, this.position.z);
    this.container.meshes[0].position = new Vector3(this.position.x, y, this.position.z);
  }
  
  setRotation() {
    this.container.meshes[0].rotation.x = (this.rotation && this.rotation.x) || 0;
    this.container.meshes[0].rotation.y = (this.rotation && this.rotation.y) || 0;
    this.container.meshes[0].rotation.z = (this.rotation && this.rotation.z) || 0;
  }

  setScaling() {
    this.container.meshes[0].scaling = this.scaling || new Vector3(1, 1, 1);
  }

  setCollisions() {
    if(this.isEnableCollisions) {
      this.container.meshes[0].applyGravity = true;
      this.container.meshes[0].checkCollisions = true;
    }
    this.container.meshes[0].ellipsoidOffset = this.ellipsoidOffset || new Vector3(0, 0, 0);
  }

  @Watch('position')
  onPositionChange(newValue, oldValue) {
    if(this.container) {
      handler.onPositionChange(this, oldValue);
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

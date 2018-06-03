<template>
</template>

<script>
import Vue from 'vue';
import { SceneLoader, Vector3, MeshBuilder, StandardMaterial, Color3 } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';
import * as handler from './handler';

const containerCache = {};
const pendingPool = {};

@Component({
  inject: [
    '$system'
  ],
  props: {
    name: {
      type: String
    },
    id: {
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
      type: Number,
      default: 1
    },
    size: {
      type: Object
    },
    ellipsoidOffset: {
      type: Object
    },
    isEnableCollisions: {
      type: Boolean,
      default: false
    },
    onGroundName: {
      type: String,
      required: true
    },
    isDebugMode: {
      type: Boolean,
      required: false
    }
  }
})
class ImportMesh extends Vue {
  instance = null;
  ground = null;
  
  movingTimer = null;
  rotationTimer = null;

  prePosition = null;
  preRotation = null;

  async mounted() {
    this.instance = await this.getInstance();

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
    const x = this.position && this.position.x || 0;
    const z = this.position && this.position.z || 0;
    const y = this.position && this.position.y
      || this.ground && this.ground.getHeightAtCoordinates(x, z)
      || 0;
    this.instance.position = new Vector3(x, y, z);
  }
  
  setRotation() {
    this.instance.rotation.x = (this.rotation && this.rotation.x) || 0;
    this.instance.rotation.y = (this.rotation && this.rotation.y) || 0;
    this.instance.rotation.z = (this.rotation && this.rotation.z) || 0;
  }

  setScaling() {
    this.instance.scaling = this.scaling || new Vector3(1, 1, 1);
  }

  setCollisions() {
    if(this.isEnableCollisions) {
      this.instance.applyGravity = true;
      this.instance.checkCollisions = true;
    }
    this.instance.ellipsoidOffset = this.ellipsoidOffset || new Vector3(0, 0, 0);
  }

  @Watch('position')
  onPositionChange(newValue, oldValue) {
    if(this.instance) {
      handler.onPositionChange(this, oldValue);
    }
  }

  parseUrl() {
    const paths = this.assetUrl.split('/');
    const fileName = paths[paths.length - 1];
    const rootUrl = this.assetUrl.replace(fileName, '');

    return { rootUrl, fileName };
  }

  async getInstance() {
    const { scene } = this.$system;
    const { rootUrl, fileName } = this.parseUrl();

    if(!containerCache[this.assetUrl]) {
      if(!pendingPool[this.assetUrl]) {
        pendingPool[this.assetUrl] = SceneLoader.LoadAssetContainerAsync(rootUrl, fileName, scene);
        containerCache[this.assetUrl] = await pendingPool[this.assetUrl];
        delete pendingPool[this.assetUrl];
        containerCache[this.assetUrl].addAllToScene();

        this.getDebugLayer();
      } else {
        await pendingPool[this.assetUrl];
        return containerCache[this.assetUrl].meshes[0].clone();
      }
    }

    return containerCache[this.assetUrl].meshes[0];
  }

  getDebugLayer() {
    if(this.isDebugMode) {
      const { scene } = this.$system;

      containerCache[this.assetUrl].meshes.forEach((mesh, index) => {
        // mesh.visibility = 0;
        mesh.showBoundingBox = true;
        // mesh.refreshBoundingInfo();
        const sphereMat = new StandardMaterial(`${this.id}-${index}-mat`, scene);
        const sphere = MeshBuilder.CreateSphere(`${this.id}-${index}`, {
          diameterX: mesh.ellipsoid.x,
          diameterY: mesh.ellipsoid.y,
          diameterZ: mesh.ellipsoid.z
        }, scene);

        sphereMat.wireframe = true;
        sphere.position = mesh.getAbsolutePosition().add(mesh.ellipsoidOffset);
        sphere.material = sphereMat;
        sphere.material.diffuseColor = Color3.Yellow();
      });
    }
  }
}

export default ImportMesh;
</script>

<style type="text/scss" lang="scss">
</style>

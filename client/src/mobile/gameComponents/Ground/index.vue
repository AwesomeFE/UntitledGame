<template>
</template>

<script>
import Babylon from '../common/Babylon';
import { MeshBuilder, StandardMaterial, Texture } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$system'
  ],
  props: {
    name: {
      type: String
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    heightMap: {
      type: String
    },
    material: {
      type: String
    },
    subdivisions: {
      type: Number
    },
    minHeight: {
      type: Number
    },
    maxHeight: {
      type: Number
    }
  }
})
class Ground extends Babylon {
  ground = null;

  mounted() {
    const { scene } = this.$system;
    this.ground = MeshBuilder.CreateGroundFromHeightMap(this.name, this.heightMap, this.getOption(), scene);
    // this.ground = MeshBuilder.CreateGround(this.name, this.getOption(), scene);

    const groundMaterial = new StandardMaterial(`${this.name}Mat`, scene);
    groundMaterial.diffuseTexture = new Texture(this.material, scene);
    groundMaterial.diffuseTexture.uScale = 5.0;
    groundMaterial.diffuseTexture.vScale = 5.0;

    this.ground.material = groundMaterial;	
    this.ground.checkCollisions = true;
  }

  getOption() {
    return {
      width: this.width,
      height: this.height,
      subdivisions: this.subdivisions || 100,
      minHeight: this.minHeight || 0,
      maxHeight: this.maxHeight || 1
    }
  }
}

export default Ground;
</script>

<style type="text/scss" lang="scss">
</style>

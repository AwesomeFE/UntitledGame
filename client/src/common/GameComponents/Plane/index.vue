<template>
</template>

<script>
import Vue from 'vue';
import { MeshBuilder, StandardMaterial, Texture, Vector3 } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$system'
  ],
  props: {
    name: String,
    url: String,
    width: Number,
    height: Number,
    position: Object
  }
})
class Plane extends Vue {
  plane = null;
  material = null;

  mounted() {
    const { scene } = this.$system;
    const options = this.getOptions();

    this.plane = MeshBuilder.CreatePlane(this.name, options, scene);
    this.material = new StandardMaterial(`${this.name}-material`, scene);
    this.material.diffuseTexture = new Texture(this.url, scene);
    this.plane.material = this.material;
    this.plane.setPositionWithLocalVector(new Vector3(this.position.x, this.position.y, this.position.z ));
  }

  getOptions() {
    return {
      width: this.width,
      height: this.height
    }
  }
}

export default Plane;
</script>

<style type="text/scss" lang="scss">
</style>

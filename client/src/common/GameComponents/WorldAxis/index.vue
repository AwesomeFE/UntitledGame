<template>
</template>

<script>
import { Vue } from '../../';
import { DynamicTexture, Mesh, StandardMaterial, Color3, Vector3 } from 'babylonjs';
import { Component } from 'vue-property-decorator';

@Component({
  inject: [
    '$system'
  ]
})
class WorldAxis extends Vue {
  size = 8;

  mounted() {
    this.createAxis();
  }

  makeTextPlane(text, color, size) {
    const { scene } = this.$system;

    const dynamicTexture = new DynamicTexture('DynamicTexture', 50, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 5, 40, 'bold 36px Arial', color , 'transparent', true);
    const plane = new Mesh.CreatePlane('TextPlane', size, scene, true);
    plane.material = new StandardMaterial('TextPlaneMaterial', scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = new Color3(0, 0, 0);
    plane.material.diffuseTexture = dynamicTexture;

    return plane;
  }

  createAxis() {
    const { scene } = this.$system;
    const { size, makeTextPlane } = this;

    const axisX = Mesh.CreateLines("axisX", [ 
      new Vector3.Zero(),
      new Vector3(size, 0, 0),
      new Vector3(size * 0.95, 0.05 * size, 0), 
      new Vector3(size, 0, 0),
      new Vector3(size * 0.95, -0.05 * size, 0)
    ], scene);
    axisX.color = new Color3(1, 0, 0);

    const xChar = makeTextPlane("X", "red", size / 10);
    xChar.position = new Vector3(0.9 * size, -0.05 * size, 0);

    const axisY = Mesh.CreateLines("axisY", [
      new Vector3.Zero(),
      new Vector3(0, size, 0),
      new Vector3( -0.05 * size, size * 0.95, 0), 
      new Vector3(0, size, 0),
      new Vector3( 0.05 * size, size * 0.95, 0)
    ], scene);
    axisY.color = new Color3(0, 1, 0);

    const yChar = makeTextPlane("Y", "green", size / 10);
    yChar.position = new Vector3(0, 0.9 * size, -0.05 * size);

    const axisZ = Mesh.CreateLines("axisZ", [
      new Vector3.Zero(),
      new Vector3(0, 0, size),
      new Vector3( 0 , -0.05 * size, size * 0.95),
      new Vector3(0, 0, size),
      new Vector3( 0, 0.05 * size, size * 0.95)
    ], scene);
    axisZ.color = new Color3(0, 0, 1);

    const zChar = makeTextPlane("Z", "blue", size / 10);
    zChar.position = new Vector3(0, 0.05 * size, 0.9 * size);
  }
}

export default WorldAxis;
</script>

<style type="text/scss" lang="scss">
</style>

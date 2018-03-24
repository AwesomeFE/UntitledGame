<template>
  <div class="Game">
    <Scene name="Resource" :gravity="scene.gravity" :isShowFPS="true">
      <Camera type="Arc" :position="camera.position" :target="camera.target" :alpha="0" :beta="0" :radius="-10" />
      <WorldAxis />
      <Light :direction="light.direction" />
      <Ground
        name="ground"
        :width="ground.width"
        :height="ground.height"
        :heightMap="ground.heightMap"
        :material="ground.material"
      />
      <Container2D>
        <OneButton width="100px" height="50px" text="返回" paddingRight="30px" path="gameHome" />
      </Container2D>

      <ImportMesh
        v-for="resource in resources"
        :key="resource.id"
        :name="resource.id"
        :assetUrl="resource.url"
        :position="resource.position"
        :scaling="resource.scaling"
        :rotation="resource.rotation"
        :ellipsoidOffset="resource.ellipsoidOffset"
        :speed="resource.speed"
        :enableCollisions="true"
      ></ImportMesh>
    </Scene>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Vue } from '../../common';
import { Vector3 } from 'babylonjs';
import GameComponents from '../../gameComponents';
import { Component } from 'vue-property-decorator';
import script from './script';

const images = Vue.images.Game.resources;

@Component({
  components: {
    Scene: GameComponents.Scene,
    Light: GameComponents.Light,
    Camera: GameComponents.Camera,
    Ground: GameComponents.Ground,
    Plane: GameComponents.Plane,
    ImportMesh: GameComponents.ImportMesh,
    OneImage: GameComponents.OneImage,
    OneBlock: GameComponents.OneBlock,
    OneButton: GameComponents.OneButton,
    Container2D: GameComponents.Container2D,
    WorldAxis: GameComponents.WorldAxis,
  }
})
class GameResource extends Vue {
  scene = {
    gravity: new Vector3(0, -0.5, 0)
  };

  camera = {
    position: new Vector3(0, 0, -10),
    target: Vector3.Zero()
  };

  light = {
    direction: new Vector3(0, -50, 50)
  };

  ground = {
    width: 10,
    height: 10,
    heightMap: images.ground.heightMap,
    material: images.ground.material
  };

  resources = [];

  getRandomPosition(isFirst) {
    return new Vector3((Math.random() - 0.5) * 3, 0, (Math.random() - 0.5) * 3);
  }

  enableResources() {
    const resources = this.$store.state.GameResource.resources;

    resources.forEach((resource, i) => {
      this.resources.push({...resource, position: this.getRandomPosition()});

      this.randomMove(resource, i, true);
    });
  }

  randomMove(resource, i, isFirst) {
    let duration = !isFirst ? Math.random() * 10000 : 1000;

    setTimeout(() => {
      this.resources[i].position = this.getRandomPosition();

      this.randomMove(resource, i);
    }, duration);
  }

  async mounted() {
    await this.$store.dispatch('GameResource/getResources');
    this.enableResources();
  }
}

export default GameResource;
</script>

<style type="text/scss" lang="scss">
</style>

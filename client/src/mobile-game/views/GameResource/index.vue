<template>
  <div class="Game Resource">
    <Scene name="Resource" :gravity="scene.gravity" :isShowFPS="true" @click="clickHandler">
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
        :isEnableCollisions="false"
        onGroundName="ground"
      ></ImportMesh>
    </Scene>

    <div class="ActionBar">
      <router-link
        class="button"
        :to="linkUrls.GAME_HOME(playerId)">
        {{$t('GameResource.ActionBar.return')}}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Vue, GameComponents } from '../../common';
import { Vector3 } from 'babylonjs';
import { Component } from 'vue-property-decorator';

const images = Vue.images.GameResource;
const models = Vue.models.GameResource;

@Component({
  props: [
    'playerId'
  ],
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
  },
  computed: {
    ...mapState('system', {
      user: state => state.user
    })
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
    width: 100,
    height: 100,
    heightMap: images.heightMap,
    material: images.material
  };

  resources = [];

  getRandomPosition(isFirst) {
    const positionX = (Math.random() - 0.5) * 20;
    const positionY = (Math.random() - 0.5) * 20;

    return new Vector3(positionX, 0, positionY);
  }

  enableResources() {
    const resources = this.$store.state.GameResource.resources;

    resources.forEach(async (resource, i) => {
      this.resources.push({
        ...resource,
        position: this.getRandomPosition(),
        url: models.Sheep.url
      });

      do {
        await this.randomMove(resource, i);
      } while(1);
    });
  }

  clickHandler(pickResult) {
    // this.resources[0].position = pickResult.pickedPoint;
  }

  randomMove(resource, i, isFirst) {
    let duration = Math.random() * 10000;

    return new Promise((resolve, reject) => {
      const timer = setInterval(() => {
        this.resources[i].position = this.getRandomPosition();

        clearInterval(timer);
        resolve();
      }, duration);
    });
  }

  async mounted() {
    await this.$store.dispatch('GameResource/getResources');
    this.enableResources();
  }
}

export default GameResource;
</script>

<style type="text/scss" lang="scss">
.Resource {
  .ActionBar {
    position: absolute;
    bottom: 0;
    right: 0;
    background: blue;
  }
  .button {
    display: inline-block;
    padding: 10px;
    background: white;
  }
}
</style>

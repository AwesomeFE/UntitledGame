<template>
  <div class="Game">
    <!-- <canvas id="canvas" class="canvas"></canvas> -->
    <Scene name="Resource" :gravity="gravity">
      <Camera type="Arc" :position="position" :target="target" :alpha="0" :beta="0" :radius="-10" />
      <WorldAxis />
      <Light :direction="direction" />
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
  },
  computed: {
    ...mapState('GameResource', {
      resources: state => state.resources
    })
  }
})
class GameResource extends Vue {
  gravity = new Vector3(0, -9.81, 0);
  // position = new Vector3(0, 2.5, -10);
  position = new Vector3(0, 0, -10);
  target = Vector3.Zero();
  direction = new Vector3(0, -50, 50);
  ground = {
    width: 10,
    height: 10,
    heightMap: images.ground.heightMap,
    material: images.ground.material
  };

  async mounted() {
    // script('canvas');
    await this.$store.dispatch('GameResource/getResources');
    
    setTimeout(() => {
      this.$store.commit('GameResource/moveResourceById', '羊-1');
    }, 5000)
  }
}

export default GameResource;
</script>

<style type="text/scss" lang="scss">
// body,
// html,
// #app,
// .App,
// .Game,
// .Scene,
// .canvas {
//   height: 100%;
//   width: 100%;
// }
// .canvas {
//   display: block;
//   outline: none;
//   touch-action: none;
// }
// body, html {
//   position: fixed;
//   touch-action: none;
//   overflow: hidden;
// }
// [touch-action="none"]{
//   -ms-touch-action: none;
//   touch-action: none;
//   touch-action-delay: none;
// }
</style>

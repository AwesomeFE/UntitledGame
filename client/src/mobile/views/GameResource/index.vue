<template>
  <div class="Game">
    <Scene name="Resource">
      <Camera :position="position" :target="target" />
      <Light :direction="direction" />
      <Ground name="ground" :width="ground.width" :height="ground.height"></Ground>
      <Container2D>
        <OneButton width="100px" height="50px" text="返回" paddingRight="30px" path="gameHome" />
      </Container2D>

      <Plane
        v-for="resource in resources"
        :key="resource.id"
        :name="resource.id"
        :width="resource.width"
        :height="resource.height"
        :url="images.Game.resources.sheep"
        :position="resource.position"
      ></Plane>
    </Scene>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Vue } from '../../common';
import GUI from 'babylonjs-gui';
import { Vector3 } from 'babylonjs';
import GameComponents from '../../gameComponents';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Scene: GameComponents.Scene,
    Light: GameComponents.Light,
    Camera: GameComponents.Camera,
    Ground: GameComponents.Ground,
    Plane: GameComponents.Plane,
    OneImage: GameComponents.OneImage,
    OneBlock: GameComponents.OneBlock,
    OneButton: GameComponents.OneButton,
    Container2D: GameComponents.Container2D,
  },
  computed: {
    ...mapState('GameResource', {
      resources: state => state.resources
    })
  }
})
class GameResource extends Vue {
  position = new Vector3(0, 2.5, -10);
  target = Vector3.Zero();
  direction = new Vector3(0, -50, 50);
  GUI = GUI;
  ground = {
    width: 10,
    height: 10
  };

  async mounted() {
    await this.$store.dispatch('GameResource/getResources');
  }
}

export default GameResource;
</script>

<style type="text/scss" lang="scss">
</style>

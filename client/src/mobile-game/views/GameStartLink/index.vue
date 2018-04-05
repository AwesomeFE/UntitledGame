<template>
  <div class="Game StartLink">
    <!-- <Scene name="StartLink" :isShowFPS="true">
      <Camera type="Arc" :position="camera.position" :target="camera.target" :alpha="0" :beta="0" :radius="-100" />
      <Ground
        name="ground"
        :width="ground.width"
        :height="ground.height"
      />
      <Light :direction="light.direction" />
    </Scene> -->
    <img class="BackgroundImage" :src="images.background" />
    <GameSignIn />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Vector3 } from 'babylonjs';
import { Component } from 'vue-property-decorator';
import { Vue, GameComponents } from '../../common';
import GameSignIn from '../../components/GameSignIn';

const images = Vue.images.GameStartLink;
const assets = Vue.assets;

@Component({
  components: {
    Scene: GameComponents.Scene,
    Camera: GameComponents.Camera,
    ImportMesh: GameComponents.ImportMesh,
    Ground: GameComponents.Ground,
    Light: GameComponents.Light,
    GameSignIn
  },
  computed: {
    ...mapState('system', {
      user: state => state.user
    })
  }
})
class GameStartLink extends Vue {
  images = images;

  ground = {
    width: 10,
    height: 10
  };

  camera = {
    position: new Vector3(0, 5.5, 20),
    target: new Vector3(0, 8, -10)
  };

  light = {
    direction: new Vector3(0, -50, -20)
  };

  mounted() {
    if(this.user) {
      return this.$router.push(this.linkUrls.GAME_PLAYER());
    }
  }
}

export default GameStartLink;
</script>

<style type="text/scss" lang="scss">
.StartLink {
  background: black;
  .BackgroundImage {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

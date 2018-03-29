<template>
  <div class="Game">
    <Scene name="Player">
      <Camera :position="camera.position" :target="camera.target" />
    </Scene>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Vector3 } from 'babylonjs';
import { Component } from 'vue-property-decorator';
import { Vue, GameComponents } from '../../common';

const images = Vue.images.GamePlayer;

@Component({
  components: {
    Scene: GameComponents.Scene,
    Camera: GameComponents.Camera
  },
  computed: {
    ...mapState('system', {
      user: state => state.user
    })
  }
})
class GamePlayer extends Vue {
  images = images;

  camera = {
    position: new Vector3(0, 0, -10),
    target: Vector3.Zero()
  };

  mounted() {
    if(!this.user) {
      return this.$router.push(this.linkUrls.GAME_START_LINK);
    }
  }
}

export default GamePlayer;
</script>

<style type="text/scss" lang="scss">
</style>

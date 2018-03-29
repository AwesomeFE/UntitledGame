<template>
  <div class="Game">
    <Scene name="Home">
      <Camera :position="position" :target="target" />
    </Scene>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Vue, GameComponents } from '../../common';
import { Vector3 } from 'babylonjs';
import { Component } from 'vue-property-decorator';

const images = Vue.images.GameHome;

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
class GameHome extends Vue {
  position = new Vector3(0, 0, -10);
  target = Vector3.Zero();

  mounted() {
    if(!this.user) {
      return this.$router.push(this.linkUrls.GAME_START_LINK);
    }
  }
}

export default GameHome;
</script>

<style type="text/scss" lang="scss">
</style>

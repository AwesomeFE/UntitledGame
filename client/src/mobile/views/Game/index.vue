<template>
  <div>
    <canvas ref="canvas" class="GameHome"></canvas>
    <Scene :stage="canvas">
      <Camera name="camera" />
    </Scene>
  </div>
</template>

<script>
import { Vue, Game } from '../../common';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Scene: Game.Scene,
    Camera: Game.Camera
  }
})
class GameHome extends Vue {
  canvas = null;

  mounted() {
    this.canvas = this.$refs.canvas;
  }
}

export default GameHome;
</script>

<style type="text/scss" lang="scss">
.GameHome {
  width: 100vw;
  height: 100vh;
  display: block;
  outline: none;
}
</style>

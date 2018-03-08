<template>
  <div>
    <canvas ref="canvas" class="GameHome"></canvas>
    <MainScene
      :canvas="canvas"
      @sceneChanged="sceneChanged"
    />
    <Camera
      name="camera"
      :canvas="canvas"
      :scene="scene"
      @cameraChanged="cameraChanged"
    />
  </div>
</template>

<script>
import { Vue, Game } from '../../common';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    MainScene: Game.MainScene,
    Camera: Game.Camera
  }
})
class GameHome extends Vue {
  canvas = null;
  scene = null;
  camera = null;

  mounted() {
    this.canvas = this.$refs.canvas;
  }

  sceneChanged(scene) {
    this.scene = scene;
  }

  cameraChanged(camera) {
    this.camera = camera;
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

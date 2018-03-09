<template>
  <div>
    <canvas ref="canvas" class="GameHome"></canvas>
    <Scene :stage="canvas">
      <Camera
        name="camera"
        :type="strings.GAME.CAMERA.UNIVERSAL"
        :position="camera.position"
        :target="camera.target"
        :canRotate="false"
      />
      <Container2D>
        <HomeHeader
          :width="1"
          :height="'40px'"
          :background="images.Game.MainBackgound" />
        <Slider>
          <Button></Button>
        </Slider>
      </Container2D>
    </Scene>
  </div>
</template>

<script>
import { Vue, Game } from '../../common';
import { Vector3 } from 'babylonjs';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Scene: Game.Scene,
    Camera: Game.Camera,
    Slider: Game.Slider,
    Button: Game.Button,
    HomeHeader: Game.HomeHeader,
    Container2D: Game.Container2D
  }
})
class GameHome extends Vue {
  canvas = null;

  camera = {
    position: new Vector3(0, 0, -10),
    target: Vector3.Zero()
  };

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

<template>
  <div>
    <Scene name="Resource">
      <Camera :position="position" :target="target" />
      <Container2D>
        <OneButton width="100px" height="50px" text="我是羊" paddingRight="30px" />
      </Container2D>
    </Scene>
  </div>
</template>

<script>
import { Vue } from '../../common';
import GUI from 'babylonjs-gui';
import { Vector3 } from 'babylonjs';
import GameComponents from '../../gameComponents';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Scene: GameComponents.Scene,
    Camera: GameComponents.Camera,
    OneImage: GameComponents.OneImage,
    OneBlock: GameComponents.OneBlock,
    OneButton: GameComponents.OneButton,
    Container2D: GameComponents.Container2D,
  }
})
class GameResource extends Vue {
  position = new Vector3(0, 0, -10);
  target = Vector3.Zero();
  GUI = GUI;

  mounted() {
  }
}

export default GameResource;
</script>

<style type="text/scss" lang="scss">
</style>

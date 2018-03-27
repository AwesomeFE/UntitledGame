<template>
  <div class="Game">
    <Scene name="Home">
      <Camera :position="position" :target="target" />
      <Container2D>

        <OneBlock name="header" :verticalAlignment="GUI.Control.VERTICAL_ALIGNMENT_TOP">
          <OneImage name="header-image" :url="headerUrl" width="100%" height="50px" />
        </OneBlock>

        <!-- <OneBlock name="QuickAction">
          <OneBlock width="100%" height="50px">
            <OneButton></OneButton>
            <OneButton></OneButton>
          </OneBlock>
          <OneBlock width="100%" height="50px">
            <OneButton></OneButton>
            <OneButton></OneButton>
          </OneBlock>
        </OneBlock> -->

        <OneBlock name="menu" :verticalAlignment="GUI.Control.VERTICAL_ALIGNMENT_BOTTOM">
          <OneButton width="100px" height="50px" text="首页" paddingRight="30px" path="gameHome" />
          <OneButton width="100px" height="50px" text="副本" paddingRight="30px" path="gameFuBen" />
          <OneButton width="100px" height="50px" text="素材" paddingRight="30px" path="gameResource" />
          <OneButton width="100px" height="50px" text="公会" paddingRight="30px" path="gameGongHui" />
          <OneButton width="100px" height="50px" text="氪金" paddingRight="30px" path="gameShop" />
          <OneButton width="100px" height="50px" text="交易" paddingRight="30px" path="gameExchange" />
          <OneButton width="100px" height="50px" text="设置" paddingRight="30px" path="gameSetting" />
          <OneButton width="100px" height="50px" text="聊天" paddingRight="30px" path="gameChat" />
        </OneBlock>

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
class Game extends Vue {
  position = new Vector3(0, 0, -10);
  target = Vector3.Zero();
  GUI = GUI;
  headerUrl = Vue.images.Game.MainBackgound

  mounted() {
  }
}

export default Game;
</script>

<style type="text/scss" lang="scss">
</style>

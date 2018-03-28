<template>
  <div class="Game">
    <Scene name="StartLink">
      <Camera :position="camera.position" :target="camera.target" />
      <Container2D>
        <OneImage
          name="logo" :url="images.logo"
          width="50px" height="50px"
          top="10px" left="10px"
        />

        <OneImage
          name="dialog"
          :url="images.dialog"
          width="200px" height="150px" top="-20px"
          :verticalAlignment="VERTICAL_ALIGNMENT_BOTTOM"
          :horizontalAlignment="HORIZONTAL_ALIGNMENT_CENTER"
        />

        <OneBlock
          width="200px" height="150px" top="-20px"
          :isVertical="true"
          :verticalAlignment="VERTICAL_ALIGNMENT_BOTTOM"
          :horizontalAlignment="HORIZONTAL_ALIGNMENT_CENTER"
        >
          <OneInput
            name="username"
            width="100px"
            height="30px"
            background="transparent"
            focusedBackground="transparent"
            color="black"
            v-model="formData.username"
            :horizontalAlignment="HORIZONTAL_ALIGNMENT_CENTER"
          />
          <OneInput
            name="password"
            width="100px"
            height="30px"
            background="transparent"
            focusedBackground="transparent"
            color="black"
            v-model="formData.password"
            :horizontalAlignment="HORIZONTAL_ALIGNMENT_CENTER"
          />

          <OneBlock width="200px" height="30px">
            <OneButton
              name="submit"
              text="submit"
              height="30px"
              width="50%"
              :imageUrl="images.button"
              :horizontalAlignment="HORIZONTAL_ALIGNMENT_CENTER"
            />
            <OneButton
              name="cancle"
              text="cancle"
              height="30px"
              width="50%"
              :imageUrl="images.button"
              :horizontalAlignment="HORIZONTAL_ALIGNMENT_CENTER"
            />
          </OneBlock>
        </OneBlock>
      </Container2D>
    </Scene>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Vue, GameComponents } from '../../common';
import { Vector3 } from 'babylonjs';
import { Control } from 'babylonjs-gui';
import { Component } from 'vue-property-decorator';

const images = Vue.images.GameStartLink;

@Component({
  components: {
    Scene: GameComponents.Scene,
    Camera: GameComponents.Camera,
    Container2D: GameComponents.Container2D,
    OneImage: GameComponents.OneImage,
    OneInput: GameComponents.OneInput,
    OneBlock: GameComponents.OneBlock,
    OneButton: GameComponents.OneButton,
  },
  computed: {
    ...mapState('system', {
      user: state => state.user
    })
  }
})
class GameStartLink extends Vue {
  images = images;

  camera = {
    position: new Vector3(0, 0, -10),
    target: Vector3.Zero()
  };

  HORIZONTAL_ALIGNMENT_CENTER = Control.HORIZONTAL_ALIGNMENT_CENTER;
  VERTICAL_ALIGNMENT_BOTTOM = Control.VERTICAL_ALIGNMENT_BOTTOM;

  formData = {
    username: '',
    password: ''
  };

  mounted() {
    if(this.user) {
      this.$router.push(this.linkUrls.GAME_HOME);
    }
  }
}

export default GameStartLink;
</script>

<style type="text/scss" lang="scss">
</style>

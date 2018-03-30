<template>
  <div class="Game Player">
    <Scene name="Player">
      <Camera type="Arc" :position="camera.position" :target="camera.target" :alpha="0" :beta="0" :radius="-100" />
      <Ground
        name="ground"
        :width="ground.width"
        :height="ground.height"
      />
      <Light :direction="light.direction" />
    </Scene>
    
    <div class="ActionBar">
      <router-link
        class="button"
        to="linkUrls.GAME_PLAYER_CREATOR">
        {{$t('GamePlayer.ActionBar.create')}}
      </router-link>

      <a class="button"
        @click="enter">
        {{$t('GamePlayer.ActionBar.enter')}}
      </a>

      <a class="button"
        @click="selectPlayer(1)">
        {{$t('GamePlayer.ActionBar.next')}}
      </a>

      <a class="button"
        @click="selectPlayer(-1)">
        {{$t('GamePlayer.ActionBar.prev')}}
      </a>
    </div>
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
    Camera: GameComponents.Camera,
    Ground: GameComponents.Ground,
    Light: GameComponents.Light
  },
  computed: {
    ...mapState('system', {
      user: state => state.user
    })
  }
})
class GamePlayer extends Vue {
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
    if(!this.user) {
      return this.$router.push(this.linkUrls.GAME_START_LINK());
    }
  }

  enter() {
    this.$router.push(this.linkUrls.GAME_HOME('123'));
  }

  selectPlayer(dir) {
    console.log(dir);
  }
}

export default GamePlayer;
</script>

<style type="text/scss" lang="scss">
.Player {
  .ActionBar {
    position: absolute;
    bottom: 0;
    right: 0;
    background: blue;
  }
  .button {
    display: inline-block;
    padding: 10px;
    background: white;
  }
}
</style>

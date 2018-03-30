<template>
  <div class="Game Home">
    <Scene name="Home">
      <Camera :position="position" :target="target" />
    </Scene>

    <div class="ActionBar">
      <router-link
        class="button"
        :to="linkUrls.GAME_RESOURCE(playerId)">
        {{$t('GameHome.ActionBar.resource')}}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Vue, GameComponents } from '../../common';
import { Vector3 } from 'babylonjs';
import { Component } from 'vue-property-decorator';

const images = Vue.images.GameHome;

@Component({
  props: [
    'playerId'
  ],
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
      return this.$router.push(this.linkUrls.GAME_START_LINK());
    }
  }
}

export default GameHome;
</script>

<style type="text/scss" lang="scss">
.Game {
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

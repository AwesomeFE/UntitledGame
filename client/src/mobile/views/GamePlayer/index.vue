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
      <ImportMesh
        :name="'gPlayer'"
        :assetUrl="gPlayer.assetUrl"
        :position="gPlayer.position"
        :scaling="gPlayer.scaling"
        :rotation="gPlayer.rotation"
        onGroundName="ground"
      />
      <ImportMesh
        :name="'gPlayer'"
        :assetUrl="gPlayer1.assetUrl"
        :position="gPlayer1.position"
        :scaling="gPlayer1.scaling"
        :rotation="gPlayer1.rotation"
        onGroundName="ground"
      />
      <ImportMesh
        :name="'gPlayer'"
        :assetUrl="gPlayer2.assetUrl"
        :position="gPlayer2.position"
        :scaling="gPlayer2.scaling"
        :rotation="gPlayer2.rotation"
        onGroundName="ground"
      />
      <ImportMesh
        :name="'gPlayer'"
        :assetUrl="gPlayer3.assetUrl"
        :position="gPlayer3.position"
        :scaling="gPlayer3.scaling"
        :rotation="gPlayer3.rotation"
        onGroundName="ground"
      />
    </Scene>
    
    <div class="ActionBar">
      <router-link
        class="button"
        :to="linkUrls.GAME_PLAYER_CREATOR()">
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
const assets = Vue.assets;

@Component({
  components: {
    Scene: GameComponents.Scene,
    Camera: GameComponents.Camera,
    Ground: GameComponents.Ground,
    Light: GameComponents.Light,
    ImportMesh: GameComponents.ImportMesh
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
    width: 100,
    height: 100
  };

  camera = {
    position: new Vector3(0, 5.5, -20),
    target: new Vector3(0, 5.5, 0)
  };

  light = {
    direction: new Vector3(0, -20, 20)
  };

  gPlayer = {
    assetUrl: assets.gPlayer.babylon,
    position: new Vector3(0, 0, -10),
    scaling: new Vector3(7, 7, 7),
    rotation: new Vector3(0, 0, 0),
  };

  gPlayer1 = {
    assetUrl: assets.gPlayer.babylon,
    position: new Vector3(10, 0, 0),
    scaling: new Vector3(7, 7, 7),
    rotation: new Vector3(0, -90 / 180 * Math.PI, 0),
  };

  gPlayer2 = {
    assetUrl: assets.gPlayer.babylon,
    position: new Vector3(0, 0, 10),
    scaling: new Vector3(7, 7, 7),
    rotation: new Vector3(0, Math.PI, 0),
  };

  gPlayer3 = {
    assetUrl: assets.gPlayer.babylon,
    position: new Vector3(-10, 0, 0),
    scaling: new Vector3(7, 7, 7),
    rotation: new Vector3(0, 90 / 180 * Math.PI, 0),
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

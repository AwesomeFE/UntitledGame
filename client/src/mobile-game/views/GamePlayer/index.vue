<template>
  <div class="Game Player">
    <Scene name="Player" :isShowFPS="true">
      <Camera type="Arc" :position="camera.position" :target="camera.target" :alpha="0" :beta="0" :radius="-100" />
      <Ground
        name="ground"
        :width="ground.width"
        :height="ground.height"
      />
      <Light :direction="light.direction" />
      <ImportMesh
        :name="fountain.name"
        :assetUrl="fountain.assetUrl"
        :position="fountain.position"
        :scaling="fountain.scaling"
        :rotation="fountain.rotation"
        onGroundName="ground"
      />
      <ImportMesh
        v-for="player in players"
        :key="player._id"
        :name="player.name"
        :assetUrl="player.assetUrl"
        :position="player.position"
        :scaling="player.scaling"
        :rotation="player.rotation"
        :ellipsoidOffset="player.ellipsoidOffset"
        :speed="player.speed"
        :isEnableCollisions="false"
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
const models = Vue.models.GamePlayer;

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
    }),
    ...mapState('Player', {
      playerArray: state => state.playerArray
    })
  }
})
class GamePlayer extends Vue {
  images = images;

  ground = {
    width: 30,
    height: 30
  };

  camera = {
    position: new Vector3(0, 3.5, -10),
    target: new Vector3(0, 2, 0)
  };

  light = {
    direction: new Vector3(0, -20, 20)
  };

  fountain = {
    name: 'fountain',
    assetUrl: models.fountain.url,
    position: Vector3.Zero(),
    scaling: new Vector3(0.05, 0.05, 0.05),
    rotation: Vector3.Zero()
  };

  players = [];

  async mounted() {
    if(!this.user) {
      return this.$router.push(this.linkUrls.GAME_START_LINK());
    }
    await this.$store.dispatch('Player/freshPlayerArray');

    this.playerArray.forEach((playerData, index) => {
      const playerModelUrl = playerData.gender === 'female'
        ? models.fPlayer.url
        : models.mPlayer.url;

      const radian = index / this.playerArray.length * Math.PI;
      const position = new Vector3(-5 * Math.sin(radian), 0, -5 * Math.cos(radian));
      const rotation = new Vector3(0, radian, 0);
      const scaling = playerData.gender === 'female'
        ? new Vector3(4, 4, 4)
        : new Vector3(0.08, 0.08, 0.08);

      this.players.push({
        _id: playerData._id,
        name: playerData.name,
        assetUrl: playerModelUrl,
        position,
        scaling,
        rotation,
      });
    });
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

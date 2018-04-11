<template>
  <div class="Game Home">
    <div class="Character">
      <img class="Character__img" :src="images.character"/>
    </div>
    <div class="ActionBar">
      <router-link
        class="button"
        :to="linkUrls.GAME_RESOURCE(playerId)">
        {{$t('GameHome.ActionBar.resource')}}
      </router-link>

      <router-link
        class="button"
        :to="linkUrls.GAME_RESOURCE(playerId)">
        {{$t('GameHome.ActionBar.dungeon')}}
      </router-link>

      <router-link
        class="button"
        :to="linkUrls.GAME_PLAYER()">
        {{$t('GameHome.ActionBar.player')}}
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
  computed: {
    ...mapState('Player', {
      players: state => state.playerArray
    })
  }
})
class GameHome extends Vue {
  images = images;
}

export default GameHome;
</script>

<style type="text/scss" lang="scss">
.Game {
  background: linear-gradient(rgb(38, 38, 38), rgb(94, 94, 130));
  .Character {
    width: 50%;
    height: 100%;
    text-align: center;
  }
  .Character__img {
    max-width: 100%;
    max-height: 100%;
  }
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

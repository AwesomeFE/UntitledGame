<template>
  <div class="Game Player">

    <div class="Header">
      <span class="Header__name" v-if="selectedPlayer.name">{{selectedPlayer.name}}</span>
    </div>

    <div class="Body swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="player in players" :key="player._id">
          <img class="OnePlayer" :src="player.gender === 'female' ? images.fPlayer : images.mPlayer" />
        </div>
      </div>
    </div>

    <div class="Footer">
      <span class="Header__name" v-if="!isNaN(selectedPlayer.level)">Lv.{{selectedPlayer.level}}</span>
    </div>
    
    <div class="ActionBar">
      <router-link
        class="button"
        :to="linkUrls.GAME_PLAYER_CREATOR()">
        {{$t('GamePlayer.ActionBar.create')}}
      </router-link>

      <a class="button"
        @click="enter(selectedPlayer)">
        {{$t('GamePlayer.ActionBar.enter')}}
      </a>

      <a class="button"
        @click="switchPlayer(prevPlayer)">
        {{$t('GamePlayer.ActionBar.prev')}}
      </a>

      <a class="button"
        @click="switchPlayer(nextPlayer)">
        {{$t('GamePlayer.ActionBar.next')}}
      </a>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import { mapState } from 'vuex';
import { Vector3 } from 'babylonjs';
import { Component } from 'vue-property-decorator';
import { Vue, GameComponents } from '../../common';

const images = Vue.images.GamePlayer;
const models = Vue.models.GamePlayer;

@Component({
  computed: {
    ...mapState('Player', {
      players: state => state.playerArray
    })
  }
})
class GamePlayer extends Vue {
  images = images;
  swiper = null;
  selectedPlayer = {};

  get selectedPlayerIndex() {
    return this.players.findIndex(player => player._id === this.selectedPlayer._id);
  }

  get prevPlayer() {
    return this.players[this.selectedPlayerIndex - 1];
  }

  get nextPlayer() {
    return this.players[this.selectedPlayerIndex + 1];
  }

  initPlayersData() {
    this.selectedPlayer = this.players[0] || {};
    this.swiper = new Swiper(this.$refs.swiper);
  }

  async mounted() {
    await this.$store.dispatch('Player/freshPlayerArray');
    await this.initPlayersData();
  }

  switchPlayer(player) {
    if(player) {
      const index = this.players.findIndex(playerItem => playerItem._id === player._id);

      this.swiper.slideTo(index);
      this.selectedPlayer = this.players[index];
    }
  }

  enter(player) {
    this.$router.push(this.linkUrls.GAME_HOME(player._id));
  }
}

export default GamePlayer;
</script>

<style type="text/scss" lang="scss">
.Player {
  background: linear-gradient(rgb(38, 38, 38), rgb(94, 94, 130));
  .Header,
  .Footer {
    height: 15%;
    text-align: center;
  }
  .Header__name {
    color: white;
    font-size: 0.20rem;
  }
  .Body {
    height: 70%;
  }
  .swiper-slide {
    text-align: center;
  }
  .OnePlayer {
    height: 100%;
  }
  .ActionBar {
    position: absolute;
    bottom: 0;
    right: 0;
    background: blue;
    z-index: 2;
  }
  .button {
    display: inline-block;
    padding: 10px;
    background: white;
  }
}
</style>

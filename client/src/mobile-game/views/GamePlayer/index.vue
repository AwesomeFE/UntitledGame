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
        {{$t('ActionBar.create')}}
      </router-link>

      <a class="button"
        @click="enter(selectedPlayer)">
        {{$t('ActionBar.enter')}}
      </a>

      <a class="button"
        @click="deletePlayer(selectedPlayer)">
        {{$t('ActionBar.delete')}}
      </a>

      <a class="button"
        @click="switchPlayer(prevPlayer)">
        {{$t('ActionBar.prev')}}
      </a>

      <a class="button"
        @click="switchPlayer(nextPlayer)">
        {{$t('ActionBar.next')}}
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Swiper from 'swiper';
import { mapState } from 'vuex';
import { Component } from 'vue-property-decorator';

import { linkUrls } from '../../common';
import { GamePlayer as images } from '../../assets/images';

@Component({
  computed: {
    ...mapState('Player', {
      players: state => state.playerArray
    })
  }
})
class GamePlayer extends Vue {
  images = images;
  linkUrls = linkUrls;
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

  async mounted() {
    await this.initData();
    await this.initView();
  }

  async initData() {
    await this.$store.dispatch('Player/freshPlayerArray');

    this.selectedPlayer = this.players[0] || {};
  }

  async initView() {
    this.$nextTick(() =>
      this.initSwiper()
    );
  }

  initSwiper() {
    this.swiper = new Swiper(this.$refs.swiper);
    this.swiper.on('slideChangeTransitionEnd', () => {
      const index = this.swiper.activeIndex;
      this.selectedPlayer = this.players[index];
      this.swiper.update();
    });
  }

  switchPlayer(player) {
    if(player) {
      const index = this.players.findIndex(playerItem => playerItem._id === player._id);

      this.swiper.slideTo(index);
      this.selectedPlayer = this.players[index];
    }
  }

  enter(player) {
    this.$router.push(linkUrls.GAME_HOME(player._id));
  }

  async deletePlayer(player) {
    const { prevPlayer, nextPlayer } = this;

    await this.$store.dispatch('Player/deletePlayer', player._id);

    this.switchPlayer(prevPlayer ? prevPlayer : nextPlayer);
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

<template>
  <div class="Game Player">

    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="player in players"
          :key="player._id"
        >
          <img class="OnePlayer" :src="player.assetUrl" />
        </div>
      </div>
  </div>
    
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
import Swiper from 'swiper';
import { mapState } from 'vuex';
import { Vector3 } from 'babylonjs';
import { Component } from 'vue-property-decorator';
import { Vue, GameComponents } from '../../common';

const images = Vue.images.GamePlayer;
const models = Vue.models.GamePlayer;

@Component({
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
  players = [];
  playerSwiper = null;

  async mounted() {
    if(!this.user) {
      return this.$router.push(this.linkUrls.GAME_START_LINK());
    }

    await this.$store.dispatch('Player/freshPlayerArray');

    await this.playerArray.forEach((playerData, index) => {
      const playerUrl = playerData.gender === 'female'
        ? images.fPlayer
        : images.mPlayer;

      this.players.push({
        _id: playerData._id,
        name: playerData.name,
        assetUrl: playerUrl
      });
    });

    this.playerSwiper = new Swiper(this.$refs.swiper);
  }

  selectPlayer(dir) {
    dir > 0 ? this.playerSwiper.slideNext() : this.playerSwiper.slidePrev();
  }

  enter(playerId) {
    this.$router.push(this.linkUrls.GAME_HOME(playerId));
  }
}

export default GamePlayer;
</script>

<style type="text/scss" lang="scss">
.Player {
  background: linear-gradient(rgb(38, 38, 38), rgb(94, 94, 130));
  .swiper-container {
    height: 100%;
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

<template>
  <div class="Game Dungeon">
    <div class="Stage">
      <div class="enemy">
        <img :src="images.monster" />
      </div>
      <div class="attacker">
        <div style="display: inline-block;">
          <img :src="images.fPlayer" />
          <div style="text-align: left;">
            <span style="background: white;" @click="attack">攻击</span>
          </div>
        </div>
      </div>

      <div v-if="isFinished" style="position: absolute; top: 50%; left: 50%; transfrom: translate(-50%, -50%); background: rgba(255, 255, 255, 0.5); padding: 10px;">
        战斗胜利
      </div>
    </div>
    <div class="ActionBar">
      <router-link
        class="button"
        :to="linkUrls.GAME_HOME(playerId)">
        {{$t('ActionBar.home')}}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Vue } from '../../common';
import { Component } from 'vue-property-decorator';

const images = Vue.images.GameDungeon;

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
  isFinished = false;

  attack() {
    this.isFinished = true;
  }
}

export default GameHome;
</script>

<style type="text/scss" lang="scss">
.Dungeon {
  background: linear-gradient(rgb(38, 38, 38), rgb(94, 94, 130));
  .enemy,
  .attacker {
    width: 50%;
    height: 100%;
    position: relative;
    float: left;
    box-sizing: border-box;
  }
  .enemy {
    text-align: left;
    padding-left: 0.3rem;
    img {
      max-width: 100vw;
      max-height: 100vh;
    }
  }
  .attacker {
    text-align: right;
    padding-right: 0.3rem;
    padding-top: 1rem;
    img {
      max-width: 50vw;
      max-height: 50vh;
    }
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

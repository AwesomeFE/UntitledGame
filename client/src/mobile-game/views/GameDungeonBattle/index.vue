<template>
  <div class="Game DungeonBattle">
    {{JSON.stringify(dungeons)}}

    <div></div>
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
import Vue from 'vue';
import { mapState } from 'vuex';
import { Component } from 'vue-property-decorator';

import { linkUrls } from '../../common';
import { GameDungeonBattle as images } from '../../assets/images';

@Component({
  props: [
    'playerId',
    'dungeonId',
    'levelIdx'
  ],
  computed: {
    ...mapState('Dungeon', {
      dungeons: state => state.dungeonArray
    })
  }
})
class GameDungeonBattle extends Vue {
  images = images;
  linkUrls = linkUrls;

  async mounted() {
    await this.$store.dispatch('Dungeon/getAllDungeons');
  }
}

export default GameDungeonBattle;
</script>

<style type="text/scss" lang="scss">
.DungeonBattle {
  background: linear-gradient(rgb(38, 38, 38), rgb(94, 94, 130));
  .DungeonName {
    color: red;
    border: 1px solid red;
    padding: 10px;
  }
  .LevelName {
    color: yellow;
    border: 1px solid yellow;
    padding: 10px;
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

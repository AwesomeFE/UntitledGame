<template>
  <div class="Game Dungeon">
    <div class="DungeonItem" v-for="dungeon in dungeons" :key="dungeon._id">
      <h1 class="DungeonName" @click="toggleDungeonLevel(dungeon._id)">
        <span>{{$t('GameDungeon.order.' + dungeon.order)}}</span>
        <span>{{dungeon.name}}</span>
      </h1>

      <div class="DungeonLevels" v-if="dungeon.isShowLevels">
        <div class="LevelName" v-for="level in dungeon.levels" :key="level._id" @click="selectLevel(dungeon._id, level.order)">
          <span>{{dungeon.order + '-' + level.order}}</span>
          <span>{{level.name}}</span>
        </div>
      </div>
    </div>

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
import { GameDungeon as images } from '../../assets/images';

@Component({
  props: [
    'playerId'
  ],
  computed: {
    ...mapState('Player', {
      players: state => state.playerArray
    }),
    ...mapState('Dungeon', {
      dungeons: state => state.dungeonArray
    })
  }
})
class GameDungeon extends Vue {
  images = images;
  linkUrls = linkUrls;

  toggleDungeonLevel(dungeonId) {
    this.$store.commit('Dungeon/toggleLevelsById', dungeonId);
  }

  selectLevel(dungeonId, levelIdx) {
    this.$router.push(linkUrls.GAME_DUNGEON_LEVEL(this.playerId, dungeonId, levelIdx));
  }

  async mounted() {
    await this.$store.dispatch('Dungeon/getAllDungeons');
  }
}

export default GameDungeon;
</script>

<style type="text/scss" lang="scss">
.Dungeon {
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

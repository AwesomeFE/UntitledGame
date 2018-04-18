<template>
  <div class="Game DungeonBattle">
    <div v-for="battle of battles" :key="battle.idx" v-if="battleIdx === battle.idx">
      <div class="EnemyArray">
        <div class="Enemy"
          v-for="enemy of battle.enemys"
          :key="enemy._id"
          @click="attack(enemy._id)">
          <div class="EnemyHP">
            <div class="EnemyHP__value" :style="{ width: enemy.status.HP / enemy.status.MAXHP * 100 + '%' }"></div>
          </div>
          <h1 class="EnemyName">{{enemy.name}}</h1>
        </div>
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
      battlesData: state => state.battles
    })
  }
})
class GameDungeonBattle extends Vue {
  images = images;
  linkUrls = linkUrls;
  battleIdx = 0;
  battles = [];

  initData() {
    for(const battleData of this.battlesData) {
      const enemys = [];
      battleData.enemys.forEach((enemy, idx) => {
        enemy = { ...enemy, _id: `${enemy._id}_${idx}` };
        enemy.status.HP = enemy.status.MAXHP;
        enemy.status.MP = enemy.status.MAXMP;

        enemys.push(enemy);
      });
      this.battles.push({ ...battleData, enemys });
    }
  }

  attack(enemyId) {
    const { battleIdx, battles } = this;
    const currentBattle = battles[battleIdx];
    const enemyIdx = currentBattle.enemys.findIndex(enemy => enemy._id === enemyId);

    currentBattle.enemys[enemyIdx].status.HP--;
  }

  async mounted() {
    const { playerId, dungeonId, levelIdx } = this;
    await this.$store.dispatch('Dungeon/startLevel', { playerId, dungeonId, levelIdx });

    this.initData();
  }
}

export default GameDungeonBattle;
</script>

<style type="text/scss" lang="scss">
.DungeonBattle {
  background: linear-gradient(rgb(38, 38, 38), rgb(94, 94, 130));
  .EnemyArray {
    position: relative;
    width: 50%;
    height: 100%;
  }
  .Enemy {
    display: inline-block;
    width: 33.3333%;
    height: 50%;
    box-sizing: border-box;
    padding: 10px;
  }
  .EnemyHP {
    width: 100%;
    border: 1px solid green;
  }
  .EnemyHP__value {
    width: 100%;
    height: 10px;
    background: red;
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

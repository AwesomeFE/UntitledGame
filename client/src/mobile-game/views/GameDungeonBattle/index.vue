<template>
  <div class="Game DungeonBattle">
    <div class="Battle" v-for="battle of battles" :key="battle.idx" v-if="currentBattleIdx === battle.idx">
      <div
        class="Enemy"
        v-if="enemy.status.HP"
        v-for="enemy of battle.enemys"
        :key="enemy._id"
        :style="{ width: 1 / battle.enemys.length * 100 + '%' }"
        @click="attack(enemy._id)">
        <div class="EnemyHeader">
          <div class="EnemyName">{{enemy.name}}</div>
          <div class="EnemyHP">
            <div class="EnemyHP__value" :style="{ width: enemy.status.HP / enemy.status.MAXHP * 100 + '%' }"></div>
          </div>
        </div>

        <div class="EnemyBody">
          <img :src="linkUrls.BASE_URL() + enemy.url2D" />
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
  ]
})
class GameDungeonBattle extends Vue {
  images = images;
  linkUrls = linkUrls;
  battles = [];

  get currentBattleIdx() {
    let battleIdx = 0;
    for(const battle of this.battles) {
      for(const enemy of battle.enemys) {
        if(enemy.status.HP) {
          return battleIdx;
        }
      }
      battleIdx++;
    }
  }

  get currentBattle() {
    return this.battles[this.currentBattleIdx];
  }

  get activeEnemyCount() {
    let activeEnemyCount = 0;
    for(const enemy of this.currentBattle.enemys) {
      enemy.status.HP && activeEnemyCount++;
    }
    return activeEnemyCount;
  }

  initData(battlesData) {
    for(const battleData of battlesData) {
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
    const { currentBattleIdx, battles } = this;
    const currentBattle = battles[currentBattleIdx];
    const attackedEnemy = currentBattle.enemys.find(enemy => enemy._id === enemyId);

    attackedEnemy.status.HP && attackedEnemy.status.HP--;
  }

  async mounted() {
    const { playerId, dungeonId, levelIdx } = this;
    const battlesData = await this.$store.dispatch('Dungeon/startLevel', { playerId, dungeonId, levelIdx });

    this.initData(battlesData);
  }
}

export default GameDungeonBattle;
</script>

<style type="text/scss" lang="scss">
.DungeonBattle {
  background: linear-gradient(rgb(38, 38, 38), rgb(94, 94, 130));
  .Battle {
    width: 50%;
    height: 100%;
    padding: 0.1rem;
    box-sizing: border-box;
  }
  .Enemy {
    display: inline-block;
    height: 100%;
    box-sizing: border-box;
    padding: 0 0.1rem;
  }
  .EnemyName {
    color: white;
  }
  .EnemyHeader {
    height: 20%;
  }
  .EnemyHP {
    width: 100%;
    border: 1px solid green;
    box-sizing: border-box;
    height: 0.1rem;
  }
  .EnemyHP__value {
    height: 100%;
    background: red;
  }
  .EnemyBody {
    position: relative;
    height: 80%;
  }
  .EnemyBody > img {
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0.2rem;
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

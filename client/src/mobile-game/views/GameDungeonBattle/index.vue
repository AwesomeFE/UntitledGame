<template>
  <div class="Game DungeonBattle">
    <div class="Battle" v-for="battle of battles" :key="battle.idx" v-if="currentBattleIdx === battle.idx">
      <div class="Enemys">
        <div
          class="Enemy"
          v-if="enemy.status.HP > 0"
          v-for="enemy of battle.enemys"
          :key="enemy._id"
          :style="{ width: 1 / battle.enemys.length * 100 + '%' }"
          :class="{ selected: selectedEnemy._id === enemy._id }"
          @click="selectEnemy(enemy._id)">
          <div class="EnemyHeader">
            <div class="EnemyName">{{enemy.name}}</div>
            <div class="EnemyHP">
              <div class="EnemyHP__value" :style="{ width: (enemy.status.HP > 0 ? enemy.status.HP : 0) / enemy.status.MAXHP * 100 + '%' }"></div>
            </div>
            <div class="this"></div>
          </div>

          <div class="EnemyBody">
            <img :src="linkUrls.BASE_URL() + enemy.url2D" />
          </div>
        </div>
      </div>

      <div class="Players">
        <div class="Player">
          <div class="PlayerHeader">
            <div class="PlayerName">{{player.name}}</div>
            <div class="PlayerHP">
              <div class="PlayerHP__value" :style="{ width: player.status.HP / player.status.MAXHP * 100 + '%' }"></div>
            </div>
          </div>

          <div class="PlayerBody">
            <img :src="images.fPlayer" />
            <div class="PlayerAction">
              <span class="PlayerAction_ATK" @click="attack">物理攻击</span>
              <span class="PlayerAction_MATK">魔法攻击</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Success" v-if="currentBattleIdx === -1">
      <div>战斗胜利</div>
      <div>战利品：店长的守护</div>
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
    ...mapState('Player', {
      playerData(state) {
        return state.playerArray.find(player => this.playerId === player._id);
      }
    })
  }
})
class GameDungeonBattle extends Vue {
  images = images;
  linkUrls = linkUrls;
  battles = [];
  selectedEnemyIdx = 0;
  player = null;

  get currentBattleIdx() {
    let battleIdx = 0;
    for(const battle of this.battles) {
      for(const enemy of battle.enemys) {
        if(enemy.status.HP > 0) {
          return battleIdx;
        }
      }
      battleIdx++;
    }
    return -1;
  }

  get selectedEnemy() {
    return this.currentBattle.enemys[this.selectedEnemyIdx];
  }

  get currentBattle() {
    return this.battles[this.currentBattleIdx];
  }

  get activeEnemyCount() {
    let activeEnemyCount = 0;
    for(const enemy of this.currentBattle.enemys) {
      enemy.status.HP > 0 && activeEnemyCount++;
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

    this.player = JSON.parse(JSON.stringify(this.playerData));
    this.player.status.HP = this.player.status.MAXHP;
    this.player.status.MP = this.player.status.MAXMP;
  }

  attack() {
    const { currentBattleIdx, battles, selectedEnemyIdx } = this;
    const currentBattle = battles[currentBattleIdx];
    const attackedEnemy = currentBattle.enemys[selectedEnemyIdx];

    if(attackedEnemy.status.HP > 0) {
      attackedEnemy.status.HP = attackedEnemy.status.HP - this.player.status.ATK;
    }
    if(attackedEnemy.status.HP < 0) {
      this.selectedEnemyIdx = this.currentBattle.enemys.findIndex(enemy => enemy.status.HP > 0);
    }
  }

  selectEnemy(enemyId) {
    this.selectedEnemyIdx = this.currentBattle.enemys.findIndex(enemy => enemy._id === enemyId);
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
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .Enemys,
  .Players {
    float: left;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 0.1rem;
  }
  .Player {
    display: inline-block;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.1rem;
  }
  .Enemy {
    display: inline-block;
    height: 100%;
    box-sizing: border-box;
    padding: 0 0.1rem;
    &.selected .this {
      display: block;
    }
  }
  .EnemyName,
  .PlayerName {
    color: white;
  }
  .EnemyHeader,
  .PlayerHeader {
    height: 20%;
    .this {
      display: none;
      width: 0.1rem;
      height: 0.05rem;
      background: greenyellow;
    }
  }
  .EnemyHP,
  .PlayerHP {
    width: 100%;
    border: 1px solid green;
    box-sizing: border-box;
    height: 0.1rem;
  }
  .EnemyHP__value,
  .PlayerHP__value {
    height: 100%;
    background: red;
  }
  .EnemyBody,
  .PlayerBody {
    position: relative;
    height: 80%;
  }
  .EnemyBody > img,
  .PlayerBody > img {
    display: block;
    position: absolute;
    bottom: 0.2rem;
    max-width: 100%;
    max-height: 100%;
    left: 50%;
    transform: translate(-50%);
  }
  .PlayerAction {
    position: absolute;
    bottom: 0.1rem;
  }
  .PlayerAction_ATK {
    padding: 0.1rem;
    background: red;
    color: yellow;
  }
  .PlayerAction_MATK {
    padding: 0.1rem;
    background: blue;
    color: yellow;
  }
  .Success {
    padding: 0.1rem;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

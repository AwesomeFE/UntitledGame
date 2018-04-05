<template>
  <div class="Game NewPlayer">
    <div class="container">

      <div class="PlayerForm">
        <div class="MenuTab__bar">
          <a class="MenuTab__item" @click="viewType = 'PlayerInfo'">
            {{$t('GameNewPlayer.PlayerForm.info')}}
          </a>
          <a class="MenuTab__item" @click="viewType = 'Selector'">
            {{$t('GameNewPlayer.PlayerForm.appearance')}}
          </a>
        </div>

        <div class="PlayerInfo" v-show="viewType === 'PlayerInfo'">
          <div class="FormControl">
            <label for="name">
              {{$t('GameNewPlayer.PlayerForm.name')}}
            </label>
            <input
              id="name"
              name="name"
              class="FormInput"
              v-validate="'required'"
              v-model="player.name"
            />
          </div>

          <div class="FormControl">
            <label for="gender">
              {{$t('GameNewPlayer.PlayerForm.gender')}}
            </label>
            <input
              id="gender"
              name="gender"
              class="FormInput"
              v-validate="'required'"
              v-model="player.gender"
            />
          </div>

          <div class="FormControl">
            <label for="age">
              {{$t('GameNewPlayer.PlayerForm.age')}}
            </label>
            <input
              id="age"
              name="age"
              class="FormInput"
              v-validate="'required'"
              v-model="player.age"
            />
          </div>
        </div>

        <div class="Selector" v-show="viewType === 'Selector'">
          <div class="Selector__item">
            <img :src="images.head">
          </div>
          <div class="Selector__item">
            <img :src="images.body">
          </div>
          <div class="Selector__item">
            <img :src="images.foot">
          </div>
        </div>
      </div>

      <div class="Viewer">
        <img class="Viewer__player" :src="images.player">
      </div>
    </div>

    <div class="ActionBar">
        <a class="button" @click="createPlayer">
          {{$t('GameNewPlayer.ActionBar.create')}}
        </a>
        <router-link
          class="button"
          :to="linkUrls.GAME_PLAYER()">
          {{$t('GameNewPlayer.ActionBar.back')}}
        </router-link>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Component } from 'vue-property-decorator';
import { Vue } from '../../common';

const images = Vue.images.GameNewPlayer;
const models = Vue.models.GameNewPlayer;

@Component({
  computed: {
    ...mapState('system', {
      user: state => state.user
    })
  }
})
class GameNewPlayer extends Vue {
  images = images;
  viewType = 'PlayerInfo';

  player = {
    name: '',
    gender: 'female',
    age: 18
  };

  mounted() {
    if(!this.user) {
      return this.$router.push(this.linkUrls.GAME_START_LINK());
    }
  }

  async createPlayer() {
    const isFormValid = await this.$validator.validateAll();

    if(isFormValid) {
      try {
        this.disableFrom();
        await this.$store.dispatch('Player/create', this.player);
        this.$router.push(this.linkUrls.GAME_PLAYER());
      } catch(e) {
        this.enableFrom();
      }
    }
  }

  disableFrom() {
    this.disabled = true;
  }

  enableFrom() {
    this.disabled = false;
  }
}

export default GameNewPlayer;
</script>

<style type="text/scss" lang="scss">
.NewPlayer {
  background: linear-gradient(rgb(38, 38, 38), rgb(94, 94, 130));
  padding: 0.3rem 0.8rem;
  box-sizing: border-box;

  .container {
    overflow: hidden;
    height: 100%;
  }

  .Viewer,
  .PlayerForm {
    height: 100%;
    box-sizing: border-box;
    width: 2.3rem;
  }

  .Viewer {
    float: right;
  }

  .PlayerForm {
    float: left;
    border: 1px solid black;
  }

  .MenuTab__bar {
    overflow: hidden;
    border-bottom: 1px solid black;
  }
  .MenuTab__item {
    display: block;
    float: left;
    padding: 5px 10px;
  }
  .Selector__item {
    padding: 0.1rem 0;
    text-align: center;
    img {
      max-width: 0.9rem;
      display: block;
      margin: 0 auto;
    }
  }

  .PlayerInfo {
    padding: 20px;
  }

  .FormControl {
    margin-bottom: 15px
  }

  .Viewer__player {
    display: block;
    height: 2.3rem;
    padding: 0.1rem;
  }

  .ActionBar {
    position: absolute;
    right: 0;
    bottom: 0;
    .button {
      padding: 10px;
      background: white;
      display: block;
      float: right;
    }
  }
}
</style>

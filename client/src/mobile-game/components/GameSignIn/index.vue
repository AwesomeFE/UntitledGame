<template>
  <form class="GameSignIn">
    <h1 class="GameSignIn__title">
      {{$t('GameSignIn.title')}}
      <small class="GameSignIn__desc">{{$t('GameSignIn.desc')}}</small>
    </h1>

    <div class="GameSignIn__body">
      <div class="InputControl">
        <label class="InputLabel" for="username">
          {{$t('GameSignIn.username.label')}}
        </label>
        <input
          id="username"
          name="username"
          type="text"
          class="GameInput"
          :placeholder="$t('GameSignIn.username.placeholder')"
          v-model="formData.username"
          v-validate="'required'"
        />
      </div>

      <div class="InputControl">
        <label class="InputLabel" for="password">
          {{$t('GameSignIn.password.label')}}
        </label>
        <input
          id="password"
          name="password"
          type="password"
          class="GameInput"
          :placeholder="$t('GameSignIn.password.placeholder')"
          v-model="formData.password"
          v-validate="'required'"
        />
      </div>
      <div class="ButtonControl">
        <button type="button" class="GameButton" @click="handleSubmit">
          {{$t('GameSignIn.submit')}}
        </button>
        <button type="button" class="GameButton" @click="handleSubmit">
          {{$t('GameSignIn.cancel')}}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex';
import { Vue } from '../../common';
import { Component } from 'vue-property-decorator';

@Component({
  computed: {
    ...mapState('system', {
      user: state => state.user
    })
  }
})
class GameSignIn extends Vue {
  formData = {
    username: '',
    password: ''
  };

  disabled = false;

  async handleSubmit() {
    const isFormValid = await this.$validator.validateAll();

    if(isFormValid) {
      try {
        this.disableFrom();
        await this.$store.dispatch('system/signin', this.formData);
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

export default GameSignIn;
</script>

<style type="text/scss" lang="scss">
.GameSignIn {
  display: block;
  position: absolute;
  bottom: 0.1rem;
  left: 50%;
  width: 2rem;
  background: rgba(30, 43, 30, 0.8);
  transform: translate3d(-50%, 0, 0);
  border-radius: 0.05rem;
  overflow: hidden;
  color: white;

  .GameSignIn__title {
    background: rgba(20, 30, 20, 0.8);
    text-align: center;
    padding: 0.05rem;
    font-size: 0.12rem;
    font-weight: 400;
  }
  .GameSignIn__body {
    padding: 0.2rem;
  }
  .GameSignIn__desc {
    font-size: 0.1rem;
    font-weight: 300;
  }
  .InputControl {
    margin-bottom: 0.15rem;
  }
  .InputLabel {
    display: inline-block;
    width: 0.3rem;
    margin-right: 0.05rem;
  }
  .GameInput {
    display: inline-block;
    width: 1.2rem;
    box-sizing: border-box;
    outline: none;
    background: rgb(27, 25, 30);
    border: 0;
    padding: 0.05rem;
    box-shadow: 2px 2px 3px #000 inset;
    color: wheat;
  }
  .ButtonControl {
    text-align: center;
  }
  .GameButton {
    border: 1px solid rgb(90, 151, 146);
    width: 70px;
    height: 30px;
    background: rgb(9, 11, 24);
    color: white;
  }
}
</style>
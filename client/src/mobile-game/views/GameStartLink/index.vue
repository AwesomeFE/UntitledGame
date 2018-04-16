<template>
  <div class="Game StartLink">
    <img class="BackgroundImage" :src="images.background" />
    <GameSignIn />
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import { Component } from 'vue-property-decorator';

import GameSignIn from '../../components/GameSignIn';
import { GameStartLink as images } from '../../assets/images';

@Component({
  components: {
    GameSignIn
  }
})
class GameStartLink extends Vue {
  images = images;
}

export default GameStartLink;
</script>

<style type="text/scss" lang="scss">
.StartLink {
  background: black;
  .BackgroundImage {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

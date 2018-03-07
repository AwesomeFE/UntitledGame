<template>
  <canvas ref="Stage" class="GameHome"></canvas>
</template>

<script>
import { Game } from '../../common';
import { Component } from 'vue-property-decorator';

@Component()
class GameHome extends Game {
  mounted() {
    const canvas = this.$refs.Stage;

    this.init({ canvas });
    this.initEventListener();
  }

  beforeDestroy() {
    this.removeEventListener();
  }

  initEventListener() {
    window.addEventListener('resize', this.resizeHandler);
  }

  removeEventListener() {
    window.removeEventListener('resize', this.resizeHandler);
  }
}

export default GameHome;
</script>

<style type="text/scss" lang="scss">
.GameHome {
  width: 100vw;
  height: 100vh;
  display: block;
  outline: none;
}
</style>

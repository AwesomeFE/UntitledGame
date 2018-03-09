<template>
  <div>
    <canvas ref="canvas" class="Game"></canvas>
  </div>
</template>

<script>
import { Vue } from '../../common';
import { Home } from './scripts';
import { Component } from 'vue-property-decorator';

@Component()
class Game extends Vue {
  mounted() {
    Home({ canvas: this.$refs.canvas });
  }
}

export default Game;
</script>

<style type="text/scss" lang="scss">
.Game {
  width: 100vw;
  height: 100vh;
  display: block;
  outline: none;
  touch-action: none;
}
</style>

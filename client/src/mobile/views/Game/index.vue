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
    this.startup();
  }
}

export default GameHome;
</script>

<style type="text/scss" lang="scss">
.GameHome {

}
</style>

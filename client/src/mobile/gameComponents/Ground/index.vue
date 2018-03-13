<template>
</template>

<script>
import Babylon from '../common/Babylon';
import { MeshBuilder } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$system'
  ],
  props: {
    name: {
      type: String
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  }
})
class Ground extends Babylon {
  ground = null;

  mounted() {
    this.ground = MeshBuilder.CreateGround(this.name, this.getOption(), this.$system.scene);
  }

  getOption() {
    return {
      width: this.width,
      height: this.height
    }
  }
}

export default Ground;
</script>

<style type="text/scss" lang="scss">
</style>

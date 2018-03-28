<template>
</template>

<script>
import Babylon from '../common/Babylon';
import { DirectionalLight, PointLight, SpotLight, HemisphericLight } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$system'
  ],
  props: {
    type: {
      type: String
    },
    name: {
      type: String
    },
    direction: {
      type: Object
    }
  }
})
class Light extends Babylon {
  light = null;

  mounted() {
    this.light = new DirectionalLight(this.name, this.direction, this.$system.scene);
  }
}

export default Light;
</script>

<style type="text/scss" lang="scss">
</style>

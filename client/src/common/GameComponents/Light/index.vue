<template>
</template>

<script>
import Vue from 'vue';
import { DirectionalLight, PointLight, SpotLight, HemisphericLight, Vector3 } from 'babylonjs';
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
class Light extends Vue {
  light = null;

  mounted() {
    this.light = new DirectionalLight(this.name, this.direction, this.$system.scene);
    this.light.groundColor = new Vector3(0.5, 0.5, 0.5);
  }
}

export default Light;
</script>

<style type="text/scss" lang="scss">
</style>

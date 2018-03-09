<template>
</template>

<script>
import { Vue } from '../../common';
import { MeshBuilder } from 'babylonjs';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$babylon'
  ]
})
class Plane extends Vue {
  @Watch('$babylon.scene')
  onSceneChanged(newValue, oldValue) {
    MeshBuilder.CreatePlane('Dashboard', {}, newValue);
  }
}

export default Plane;
</script>

<style type="text/scss" lang="scss">
</style>

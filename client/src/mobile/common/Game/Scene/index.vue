<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { Vue } from '../../';
import { Scene, Engine } from 'babylonjs';
import { Component, Watch, Provide } from 'vue-property-decorator';

export default {
  data() {
    return {
      engine: null,
      scene: null,
      canvas: null
    };
  },
  props: {
    stage: HTMLCanvasElement
  },
  provide() {
    return {
      engine: this.engine,
      scene: this.scene,
      canvas: this.canvas
    };
  },
  watch: {
    stage(newStage, oldStage) {
      if(newStage !== oldStage) {
        this.destoryScene();
        this.createScene(newStage);
      }
    }
  },
  methods: {
    destoryScene() {
      this.engine = null;
      this.scene = null;
    },
    createScene(canvas) {
      this.canvas = canvas;
      this.engine = new Engine(this.canvas, false);
      this.scene = new Scene(this.engine);

      window.addEventListener('resize', this.resizeHandler);
    },

    resizeHandler() {
      this.engine.resize();
    }
  },
  mounted() {
    console.log(this);
    this.resizeHandler = this.resizeHandler.bind(this);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }
}


// @Component({
//   props: {
//     stage: HTMLCanvasElement
//   },
//   provide() {
//     return {
//       $engine: this.$engine,
//       $scene: this.$scene,
//       $canvas: this.$canvas
//     };
//   }
// })
// class SceneClass extends Vue {
//   $engine = null;
//   $scene = null;
//   $canvas = null;

//   // @Provide('$engine') $engine = 'engine';
//   // @Provide('$scene') $scene = 'scene';
//   // @Provide('$canvas') $canvas = 'canvas';

//   @Watch('stage')
//   onCanvasChange(newStage, oldStage) {
//     if(newStage !== oldStage) {
//       this.destoryScene();
//       this.createScene(newStage);
//     }
//   }

//   destoryScene() {
//     this.$engine = null;
//     this.$scene = null;
//   }

//   createScene(canvas) {
//     this.$canvas = canvas;
//     this.$engine = new Engine(this.$canvas, false);
//     this.$scene = new Scene(this.$engine);

//     window.addEventListener('resize', this.resizeHandler);
//   }

//   resizeHandler() {
//     this.$engine.resize();
//   }

//   // life cycle hook
//   mounted() {
//     this.resizeHandler = this.resizeHandler.bind(this);
//   }

//   beforeDestroy() {
//     window.removeEventListener('resize', this.resizeHandler);
//   }
// }

// export default SceneClass;
</script>

<style type="text/scss" lang="scss">
</style>

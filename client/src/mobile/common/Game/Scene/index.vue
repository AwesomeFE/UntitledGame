<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { Vue } from '../../';
import { Scene, Engine } from 'babylonjs';
import { Component, Watch, Provide } from 'vue-property-decorator';

// export default {
//   data() {
//     return {
//       engine: null,
//       scene: null,
//       canvas: null
//     };
//   },
//   props: {
//     stage: HTMLCanvasElement
//   },
//   provide() {
//     return {
//       engine: this.engine,
//       scene: this.scene,
//       canvas: this.canvas
//     };
//   },
//   watch: {
//     stage(newStage, oldStage) {
//       if(newStage !== oldStage) {
//         this.destoryScene();
//         this.createScene(newStage);
//       }
//     }
//   },
//   methods: {
//     destoryScene() {
//       this.engine = null;
//       this.scene = null;
//     },
//     createScene(canvas) {
//       this.canvas = canvas;
//       this.engine = new Engine(this.canvas, false);
//       this.scene = new Scene(this.engine);
//       console.log('createScene')

//       window.addEventListener('resize', this.resizeHandler);
//     },

//     resizeHandler() {
//       this.engine.resize();
//     }
//   },

//   created() {
//     console.log('scene created', this);
//   },

//   mounted() {
//     console.log('scene mounted', this);
//     this.resizeHandler = this.resizeHandler.bind(this);
//   },

//   beforeDestroy() {
//     window.removeEventListener('resize', this.resizeHandler);
//   }
// }


@Component({
  props: {
    stage: HTMLCanvasElement
  },
  provide() {
    return {
      $babylon: this.babylon
    };
  }
})
class SceneClass extends Vue {
  babylon = {
    engine: null,
    scene: null,
    canvas: null
  };

  @Watch('stage')
  onCanvasChange(newStage, oldStage) {
    if(newStage !== oldStage) {
      this.destoryScene();
      this.createScene(newStage);
    }
  }

  destoryScene() {
    this.babylon.engine = null;
    this.babylon.scene = null;
  }

  createScene(canvas) {
    this.babylon.canvas = canvas;
    this.babylon.engine = new Engine(this.babylon.canvas, false);
    this.babylon.scene = new Scene(this.babylon.engine);

    window.addEventListener('resize', this.resizeHandler);
  }

  resizeHandler() {
    this.babylon.engine.resize();
  }

  // life cycle hook
  mounted() {
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }
}

export default SceneClass;
</script>

<style type="text/scss" lang="scss">
</style>

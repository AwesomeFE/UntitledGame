// import { Vue } from '../Vue';
// import {
//   Scene,
//   Engine,
//   FreeCamera,
//   Vector3,
//   HemisphericLight,
//   MeshBuilder,
//   UniversalCamera
// } from 'babylonjs';
// import {
//   Button
// } from 'babylonjs-gui';

// export class Game extends Vue {
//   canvas = null;
//   engine = null;
//   scene = null;
//   cameras = [];

//   resizeHandler() {
//     this.engine.resize();
//   }

//   init({ canvas }) {
//     this.canvas = canvas;

//     this.resizeHandler = this.resizeHandler.bind(this);

//     this.engine = new Engine(this.canvas, false);
//     this.scene = new Scene(this.engine);
//     this.camera = new UniversalCamera('camera', new Vector3(10, 0, -10), this.scene);
//     this.camera.setTarget(Vector3.Zero());
//     this.camera.attachControl(this.canvas, false);

//     this.engine.runRenderLoop(() => this.scene.render());
//   }
// };
import MainScene from './MainScene';
import Camera from './Camera';

export const Game = {
  MainScene,
  Camera
};
import { Vue } from '../Vue';
import {
  Scene,
  Engine,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  UniversalCamera
} from 'babylonjs';

export class Game extends Vue {
  canvas = null;
  engine = null;
  scene = null;
  camera = null;
  light = null;
  sphere = null;
  ground = null;

  target = {
    x: 0,
    y: 0,
    z: 0,
  }

  resizeHandler() {
    this.engine.resize();
  }

  init({ canvas }) {
    this.canvas = canvas;

    this.resizeHandler = this.resizeHandler.bind(this);

    this.engine = new Engine(this.canvas, false);
    this.scene = new Scene(this.engine);
    this.camera = new UniversalCamera('camera', new Vector3(10, 0, -10), this.scene);
    this.light = new HemisphericLight('light1', new Vector3(0,1,0), this.scene);
    // this.sphere = MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, this.scene);
    // this.ground = MeshBuilder.CreateGround('ground1', {height:6, width:6, subdivisions: 2}, this.scene);

    // this.sphere.position.y = 1;

    this.camera.setTarget(Vector3.Zero());
    
    setInterval(() => {
      this.camera.setTarget(new Vector3(this.target.x, this.target.y, this.target.z));
      this.target.x += 1;
    }, 500);

    this.camera.attachControl(this.canvas, false);

    this.createShape();
    this.engine.runRenderLoop(() => this.scene.render());
  }

  createShape() {
    const square = MeshBuilder.CreateBox('box', {height: 5, width: 2, depth: 0.5}, this.scene);
  }
};

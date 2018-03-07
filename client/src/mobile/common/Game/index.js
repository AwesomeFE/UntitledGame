import { Vue } from '../Vue';
import { Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder } from 'babylonjs';

export class Game extends Vue {
  canvas = null;
  engine = null;
  scene = null;
  camera = null;
  light = null;
  sphere = null;
  ground = null;

  init({ canvas }) {
    this.canvas = canvas;

    this.engine = new Engine(this.canvas, true);
    this.scene = new Scene(this.engine);
    this.camera = new FreeCamera('camera', new Vector3(0, 5,-10), this.scene);
    this.light = new HemisphericLight('light1', new Vector3(0,1,0), this.scene);
    this.sphere = MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, this.scene);
    this.ground = MeshBuilder.CreateGround('ground1', {height:6, width:6, subdivisions: 2}, this.scene);

    this.sphere.position.y = 1;
    this.camera.setTarget(Vector3.Zero());
    this.camera.attachControl(this.canvas, false);
  }

  startup() {
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });

    window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }
};

import { Vue } from '../../common';
import { Vector3, Scene, Engine, MeshBuilder, ArcRotateCamera, DirectionalLight, StandardMaterial, Texture } from "babylonjs";

const images = Vue.images.Game.resources.ground;

export default (canvasId) => {
  const canvas = document.querySelector(`#${canvasId}`);
  const engine = new Engine(canvas, false);
  const scene = new Scene(engine);

  const camera = new ArcRotateCamera('camera', 0, 0, -10, Vector3.Zero(), scene);
  camera.setPosition(new Vector3(0, 0, -20));
  camera.attachControl(canvas);

  const light = new DirectionalLight('lignt', new Vector3(0, -50, 50), scene);

  const box = MeshBuilder.CreateBox('box', {height: 1, width: 1, depth: 1}, scene);
  box.position = new Vector3(0, 5, 0);

  const groundMat = new StandardMaterial('groundMat', scene);
  groundMat.diffuseTexture = new Texture(images.material, scene);
  groundMat.diffuseTexture.uScale = 5.0;
  groundMat.diffuseTexture.vScale = 5.0;

  const ground = MeshBuilder.CreateGroundFromHeightMap('ground', images.heightMap, { width: 100, height: 100, subdivisions: 100, minHeight: 0, maxHeight: 10}, scene);
  ground.material = groundMat;

  scene.gravity = new Vector3(0, -9.8, 0);
  scene.collisionsEnabled = true;

  ground.checkCollisions = true;
  box.checkCollisions = true;

  setInterval(() => {
    box.moveWithCollisions(new Vector3(-0.1, -0.1, 0));
  }, 100);

  engine.runRenderLoop(() => {
    scene.render();
  });
}
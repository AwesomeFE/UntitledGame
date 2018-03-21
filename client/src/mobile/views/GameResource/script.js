import { Vue } from '../../common';
import { Vector3, Scene, Engine, MeshBuilder, ArcRotateCamera, DirectionalLight, StandardMaterial, Texture, Mesh, DynamicTexture, Color3, Color4 } from "babylonjs";

const images = Vue.images.Game.resources.ground;

export default (canvasId) => {
  const canvas = document.querySelector(`#${canvasId}`);
  const engine = new Engine(canvas, false);
  const scene = new Scene(engine);

  scene.gravity = new Vector3(0, -9.8, 0);
  scene.collisionsEnabled = true;

  const camera = new ArcRotateCamera('camera', 0, 0, -10, Vector3.Zero(), scene);
  camera.setPosition(new Vector3(0, 0, -20));
  camera.attachControl(canvas);

  const light = new DirectionalLight('lignt', new Vector3(0, -50, 50), scene);

  createAxis(8);

  const ball = MeshBuilder.CreateSphere('ball', { segments: 10, diameter: 1 }, scene);
  ball.material = new StandardMaterial('ballMat', scene);
  ball.position = new Vector3(0, 2, 0);

  /**
   * Ground
   */
  const groundMat = new StandardMaterial('groundMat', scene);
  groundMat.diffuseTexture = new Texture(images.material, scene);
  groundMat.diffuseTexture.uScale = 5.0;
  groundMat.diffuseTexture.vScale = 5.0;

  const ground = MeshBuilder.CreateGroundFromHeightMap('ground', images.heightMap, { width: 100, height: 100, subdivisions: 100, minHeight: 0, maxHeight: 10}, scene);
  ground.material = groundMat;
  ground.checkCollisions = true;

  if(ball.intersectsMesh(ground, false)) {
    ball.material.emissiveColor = new Color3(1, 0, 0);
  } else {
    ball.material.emissiveColor = new Color3(1, 1, 1);
  }

  /**
   * Box
   */
  // const box = MeshBuilder.CreateBox('box', {height: 1, width: 1, depth: 1}, scene);
  // box.position = new Vector3(0, 5, 0);
  // box.checkCollisions = true;

  // setInterval(() => {
  //   box.moveWithCollisions(new Vector3(-0.1, -0.1, 0));
  // }, 100);

  engine.runRenderLoop(() => {
    scene.render();
  });

  function makeTextPlane(text, color, size) {
    const dynamicTexture = new DynamicTexture('DynamicTexture', 50, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 5, 40, 'bold 36px Arial', color , 'transparent', true);
    const plane = new Mesh.CreatePlane('TextPlane', size, scene, true);
    plane.material = new StandardMaterial('TextPlaneMaterial', scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = new Color3(0, 0, 0);
    plane.material.diffuseTexture = dynamicTexture;
  
    return plane;
  }

  function createAxis(size) {
    const axisX = Mesh.CreateLines("axisX", [ 
      new Vector3.Zero(),
      new Vector3(size, 0, 0),
      new Vector3(size * 0.95, 0.05 * size, 0), 
      new Vector3(size, 0, 0),
      new Vector3(size * 0.95, -0.05 * size, 0)
    ], scene);
    axisX.color = new Color3(1, 0, 0);
  
    const xChar = makeTextPlane("X", "red", size / 10);
    xChar.position = new Vector3(0.9 * size, -0.05 * size, 0);
  
    const axisY = Mesh.CreateLines("axisY", [
      new Vector3.Zero(),
      new Vector3(0, size, 0),
      new Vector3( -0.05 * size, size * 0.95, 0), 
      new Vector3(0, size, 0),
      new Vector3( 0.05 * size, size * 0.95, 0)
    ], scene);
    axisY.color = new Color3(0, 1, 0);
  
    const yChar = makeTextPlane("Y", "green", size / 10);
    yChar.position = new Vector3(0, 0.9 * size, -0.05 * size);
  
    const axisZ = Mesh.CreateLines("axisZ", [
      new Vector3.Zero(),
      new Vector3(0, 0, size),
      new Vector3( 0 , -0.05 * size, size * 0.95),
      new Vector3(0, 0, size),
      new Vector3( 0, 0.05 * size, size * 0.95)
    ], scene);
    axisZ.color = new Color3(0, 0, 1);
  
    const zChar = makeTextPlane("Z", "blue", size / 10);
    zChar.position = new Vector3(0, 0.05 * size, 0.9 * size);
  }
}
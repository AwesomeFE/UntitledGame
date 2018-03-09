import { Game } from '../../../../assets/images';
import {
  MeshBuilder,
  Vector3,
  Engine,
  Scene,
  FreeCamera,
  StandardMaterial,
  Texture,
  HemisphericLight
} from 'babylonjs';
import GUI, {
  Image,
  Button,
  StackPanel,
  Rectangle,
  AdvancedDynamicTexture
} from 'babylonjs-gui';

const CameraOptions = {
  position: new Vector3(0, 0, -10),
  target: Vector3.Zero()
};

const BackgroundOptions = {
  height: 9,
  width: 19
};

const HeaderOptions = {
  width: 1,
  height: '60px',
  align: GUI.Control.VERTICAL_ALIGNMENT_TOP
};

const LightOption = {
  position: new Vector3(10, 10, -10)
};

const menuButtonOptions = [
  { name: 'home', text: 'home', url: '' },
  { name: 'search', text: 'search', url: '' },
  { name: 'test', text: 'test', url: '' },
  { name: 'ccc', text: 'ccc', url: '' },
];

export function Home({ canvas }) {
  const engine = new Engine(canvas, false);
  const scene = new Scene(engine);
  const camera = new FreeCamera('camera', CameraOptions.position, scene);

  const light = new HemisphericLight('light', LightOption.position, scene);
  const background = MeshBuilder.CreatePlane('background', BackgroundOptions, scene);
  const backgroundMaterial = new StandardMaterial('backgroundMaterial', scene);
  const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI('UI', true, scene);
  const header = new Image('header', Game.HomeHeader);
  const menuButtons = menuButtonOptions.map(btn => new Button.CreateSimpleButton(btn.name, btn.text));
  const menuButtonMargin = menuButtonOptions.map(() => new Rectangle());
  const menuPanel = new StackPanel();

  backgroundMaterial.diffuseTexture = new Texture(Game.MainBackgound, scene);
  background.material = backgroundMaterial;

  header.width = HeaderOptions.width;
  header.height = HeaderOptions.height;
  header.verticalAlignment = HeaderOptions.align;
  advancedTexture.addControl(header);

  menuPanel.verticalAlignment = GUI.Control._VERTICAL_ALIGNMENT_BOTTOM;
  menuPanel.isVertical = false;
  menuPanel.width = 1;

  menuButtons.forEach((btn, index) => {
    btn.width = (1 - (menuButtons.length - 1) * 0.05) / menuButtons.length;
    btn.height = '30px';
    btn.color = 'white';
    btn.background = 'green';
    menuPanel.addControl(btn);

    if(index < menuButtons.length - 1) {
      menuButtonMargin[index].width = 0.05;
      menuButtonMargin[index].height = '30px';
      menuPanel.addControl(menuButtonMargin[index]);
    }
  });

  advancedTexture.addControl(menuPanel);

  camera.setTarget(CameraOptions.target);

  engine.runRenderLoop(() => scene.render());
}
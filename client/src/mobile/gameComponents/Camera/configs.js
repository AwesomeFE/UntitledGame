import util from '../utils';

export const watchArray = [
  {
    name: 'name',
    handler(newValue, oldValue) {
      util.showPropsWarning(propName);
    }
  },
  {
    name: 'type',
    handler(newValue, oldValue) {
      util.showPropsWarning(propName);
    }
  },
  {
    name: 'position',
    handler(newValue, oldValue) {
      this.$system.camera.position = newValue;
    }
  },
  {
    name: 'target',
    handler(newValue, oldValue) {
      this.$system.camera.setTarget(newValue);
    }
  },
  {
    name: 'canRotate',
    handler(newValue, oldValue) {
      const { camera, canvas } = this.$system;

      newValue
        ? camera.attachControl(canvas, false)
        : camera.detachControl(canvas, false);
    }
  }
];
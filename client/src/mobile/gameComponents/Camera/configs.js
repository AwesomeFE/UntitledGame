import util from '../utils';

export const watchArray = [
  {
    propName: 'name',
    handler(newValue, oldValue) {
      util.showPropsWarning(propName);
    }
  },
  {
    propName: 'type',
    handler(newValue, oldValue) {
      util.showPropsWarning(propName);
    }
  },
  {
    propName: 'position',
    handler(newValue, oldValue) {
      this.$system.camera.position = newValue;
    }
  },
  {
    propName: 'target',
    handler(newValue, oldValue) {
      this.$system.camera.setTarget(newValue);
    }
  },
  {
    propName: 'canRotate',
    handler(newValue, oldValue) {
      const { camera, canvas } = this.$system;

      newValue
        ? camera.attachControl(canvas, false)
        : camera.detachControl(canvas, false);
    }
  }
];
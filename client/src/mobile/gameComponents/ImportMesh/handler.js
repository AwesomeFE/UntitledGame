import { Vector3 } from "babylonjs";

const minUnit = 0.01;

export function onPositionChange(_this, oldValue) {
  _this.prePosition = oldValue;

  stopMoving(_this);
  startMoving(_this);
}

function stopMoving(_this) {
  clearInterval(_this.movingTimer);
  _this.movingTimer = null;
}

function startMoving(_this) {
  const { position, prePosition, speed } = _this;
  const { x: newX, z: newZ } = position;
  const { x: oldX, z: oldZ } = prePosition;

  const distanceX = Math.abs(newX - oldX);
  const distanceZ = Math.abs(newZ - oldZ);
  const sin = Math.sin(Math.atan(distanceZ / distanceX));
  const dirX = distanceX * Math.abs(1 / distanceX);
  const dirZ = distanceZ * Math.abs(1 / distanceZ);

  _this.movingTimer = setInterval(() => {
    _this.container.meshes[0].moveWithCollisions(new Vector3(sin * minUnit * dirX, -0.1, sin * minUnit * dirZ));
    _this.prePosition = _this.container.meshes[0].position;

    console.log(Vector3.Distance(_this.position, _this.prePosition))

    if(Vector3.Distance(_this.position, _this.prePosition) < 0.02) {
      stopMoving(_this);
    }
  }, 1 / speed * minUnit * 1000);
}
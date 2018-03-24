import { Vector3 } from "babylonjs";

const minSecond = 100;

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

  const offsetX = newX - oldX;
  const offsetZ = newZ - oldZ;
  const distanceX = Math.abs(offsetX);
  const distanceZ = Math.abs(offsetZ);
  const sin = Math.sin(Math.atan(distanceZ / distanceX));
  const cos = Math.cos(Math.atan(distanceZ / distanceX));
  const dirX = !isNaN(offsetX * Math.abs(1 / offsetX)) ? offsetX * Math.abs(1 / offsetX) : 1;
  const dirZ = !isNaN(offsetZ * Math.abs(1 / offsetZ)) ? offsetZ * Math.abs(1 / offsetZ) : 1;

  _this.movingTimer = setInterval(() => {
    const unitSpeed = new Vector3(cos * speed / minSecond * dirX, -0.1, sin * speed / minSecond * dirZ);

    _this.container.meshes[0].moveWithCollisions(unitSpeed);
    _this.prePosition = _this.container.meshes[0].position;

    const isAttachDestination =
      Math.abs(_this.position.x - _this.prePosition.x) < 0.1 &&
      Math.abs(_this.position.z - _this.prePosition.z) < 0.1;

    if(isAttachDestination) {
      stopMoving(_this);
    }
  }, minSecond);
}
import { Vector3 } from "babylonjs";

const minMS = 10;

export function onPositionChange(_this, oldValue) {
  if(!_this.prePosition) {
    _this.prePosition = oldValue;
  }

  stopMoving(_this);
  startMoving(_this);
}

function stopMoving(_this) {
  clearInterval(_this.movingTimer);
  _this.movingTimer = null;
}

function startMoving(_this) {
  _this.movingTimer = setInterval(() => {
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
    
    const speedX = cos * speed / 1000 * minMS * dirX;
    const speedZ = sin * speed / 1000 * minMS * dirZ;
    const speedY = Math.abs(Math.min(speedX, speedZ)) * -1;
    const unitSpeed = new Vector3(speedX, speedY, speedZ);

    _this.container.meshes[0].moveWithCollisions(unitSpeed);
    _this.prePosition = _this.container.meshes[0].position;

    const isAttachDestination =
      Math.abs(_this.position.x - _this.prePosition.x) < 0.1 &&
      Math.abs(_this.position.z - _this.prePosition.z) < 0.1;

    if(isAttachDestination) {
      stopMoving(_this);
    }
  }, minMS);
}
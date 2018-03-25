import { Vector3 } from "babylonjs";

const minMS = 5;

export function onPositionChange(_this, oldValue) {
  if(!_this.prePosition) {
    _this.prePosition = oldValue;
    _this.preRotation = _this.rotation;
  }

  stopMoving(_this);
  startMoving(_this);
  // startMovingH(_this);

  stopRotation(_this);
  startRotation(_this);
}

function stopMoving(_this) {
  clearInterval(_this.movingTimer);
  _this.movingTimer = null;
}

function startMoving(_this) {
  _this.movingTimer = setInterval(() => {
    const { position, prePosition, speed } = _this;

    const unitSpeed = speed / 1000 * minMS;
    const totalMoveVector = position.multiplyByFloats(1, 0, 1).subtract(prePosition);
    const ratio = unitSpeed / totalMoveVector.length();
    const unitMoveVector = totalMoveVector.multiplyByFloats(ratio, 1, ratio);

    const speedX = unitMoveVector.x;
    const speedZ = unitMoveVector.z;
    const speedY = Math.abs(Math.max(speedX, speedZ)) * -1;
    const velocity = new Vector3(speedX, speedY, speedZ);

    _this.container.meshes[0].moveWithCollisions(velocity);
    _this.prePosition = _this.container.meshes[0].position.multiplyByFloats(1, 0, 1);

    const isAttachDestination =
      Math.abs(_this.position.x - _this.prePosition.x) < 0.1 &&
      Math.abs(_this.position.z - _this.prePosition.z) < 0.1;

    if(isAttachDestination) {
      stopMoving(_this);
    }
  }, minMS);
}

function stopRotation(_this) {
  clearInterval(_this.rotationTimer);
  _this.rotationTimer = null;
}

function startRotation(_this) {
  // _this.rotationTimer = setInterval(() => {
  //   const { position, prePosition, preRotation, speed } = _this;
  //   const { x: newX, z: newZ } = position;
  //   const { x: oldX, z: oldZ } = prePosition;
  //   const { y: oldY } = preRotation;

  //   const offsetX = newX - oldX;
  //   const offsetZ = newZ - oldZ;
  //   const distanceX = Math.abs(offsetX);
  //   const distanceZ = Math.abs(offsetZ);
  //   // const sin = Math.sin(Math.atan(distanceZ / distanceX));
  //   // const cos = Math.cos(Math.atan(distanceZ / distanceX));
  //   // const dirX = !isNaN(offsetX * Math.abs(1 / offsetX)) ? offsetX * Math.abs(1 / offsetX) : 1;
  //   // const dirZ = !isNaN(offsetZ * Math.abs(1 / offsetZ)) ? offsetZ * Math.abs(1 / offsetZ) : 1;
    
  //   // const speedX = cos * speed / 1000 * minMS * dirX;
  //   // const speedZ = sin * speed / 1000 * minMS * dirZ;
  //   // const speedY = Math.abs(Math.min(speedX, speedZ)) * -1;
  //   // const unitSpeed = new Vector3(speedX, speedY, speedZ);

  //   // _this.container.meshes[0].moveWithCollisions(unitSpeed);
  //   // _this.prePosition = _this.container.meshes[0].position;

  //   // const isAttachDestination =
  //   //   Math.abs(_this.position.x - _this.prePosition.x) < 0.1 &&
  //   //   Math.abs(_this.position.z - _this.prePosition.z) < 0.1;

  //   if(isAttachDestination) {
  //     stopRotation(_this);
  //   }
  // }, minMS);
}

/**
 * 自己写的算法
 */
function startMovingH(_this) {
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
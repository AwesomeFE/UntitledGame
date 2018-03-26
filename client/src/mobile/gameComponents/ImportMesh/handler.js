import { Vector3 } from "babylonjs";

const minMS = 5;
const vDeg = 10;

export function onPositionChange(_this, oldValue) {
  if(!_this.prePosition) {
    _this.prePosition = oldValue;
    _this.preRotation = { ..._this.rotation };
  }

  stopMoving(_this);
  startMoving(_this);

  stopRotation(_this);
  startRotation(_this);
}

function stopMoving(_this) {
  clearInterval(_this.movingTimer);
  _this.movingTimer = null;
}

function startMoving(_this) {
  _this.movingTimer = setInterval(() => {
    const { position, prePosition, speed, ground } = _this;

    // 终点向量(x-z坐标) - 起点向量(x-z坐标) = 位移向量(x-z坐标)
    // 计算 单位移动向量长度 / 位移向量长度 之比
    // 获得 单位移动向量(x-z坐标)
    const totalMoveVector = position.multiplyByFloats(1, 0, 1).subtract(prePosition.multiplyByFloats(1, 0, 1));
    const totalMove = totalMoveVector.length();
    const unitMove = speed / 1000 * minMS;
    const ratio = unitMove / totalMove;
    const unitMoveVector = totalMoveVector.multiplyByFloats(ratio, 1, ratio);

    // 获取 当前地面高度，移动后地面高度
    // 移动后地面高度 - 当前地面高度 = 单位移动地面高度(y)
    const currentY = ground.getHeightAtCoordinates(prePosition.x, prePosition.z);
    const nextY = ground.getHeightAtCoordinates(prePosition.x + unitMoveVector.x, prePosition.z + unitMoveVector.z);

    // 组合为速度向量
    const speedX = unitMoveVector.x;
    const speedZ = unitMoveVector.z;
    const speedY = nextY - currentY;
    const velocity = new Vector3(speedX, speedY, speedZ);

    // 移动物体
    _this.container.meshes[0].moveWithCollisions(velocity);
    _this.prePosition = _this.container.meshes[0].position;

    // 判断是否到达终点(x/z 0.1误差)
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

// 注：rotation范围为0~360
function startRotation(_this) {
  const { position, prePosition, preRotation, speed } = _this;

  // x-z平面法向量 normal
  const normal = new Vector3(0, 1, 0);
  // 初始方向向量 (注: V0方向向量x,z与Vw世界轴坐标相反，即V0第一象限角为Vw第四象限角
  const preVector = new Vector3(-Math.sin(preRotation.y), 0, -Math.cos(preRotation.y));
  // 最终方向向量
  const destVector = position.multiplyByFloats(1, 0, 1).subtract(prePosition.multiplyByFloats(1, 0, 1));
  // 最终偏移角度 = 初始方向向量 与 最终方向向量 的 夹角 (注: 以初始向量顺时针为正
  const offsRotation = Vector3.GetAngleBetweenVectors(preVector, destVector, normal);
  const destRotation = preRotation.y + offsRotation;
  const dir = offsRotation / Math.abs(offsRotation);

  _this.rotationTimer = setInterval(() => {
    // 累加单元旋转角
    const unitRotation = vDeg / 1000 * minMS * dir;

    // 旋转物体
    _this.container.meshes[0].rotation.y += unitRotation;
    _this.preRotation.y += unitRotation;

    // 判断是否到达终点(x/z 0.1误差) 或者 是否旋转到最终角
    const isAttachRotation = Math.abs(_this.preRotation.y - destRotation) < 0.05 ||
      (Math.abs(_this.position.x - _this.prePosition.x) < 0.1 &&
      Math.abs(_this.position.z - _this.prePosition.z) < 0.1);

    if(isAttachRotation) {
      stopRotation(_this);
    }
  }, minMS);
}
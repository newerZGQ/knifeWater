// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    //最大速度
    maxSpeed: 0,
    // 加速度
    accel: 0,
  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},
  onLoad: function () {
    this.node.x = 0.00001;
  },

  start() {
    this.speed = this.maxSpeed;
    this.node.x = 0.00001;
    this.node.y = -100;
  },

  update(dt) {
    let originPos = this.node.x;
    let speed = this.speed + this.accel * dt;
    this.speed =
      (speed / Math.abs(speed)) * Math.min(Math.abs(speed), this.maxSpeed);

    this.node.x = this.node.x + speed * dt;
    if (this.node.x * originPos < 0) {
      this.accel = -this.accel;
    }
  },

  // update (dt) {},
});

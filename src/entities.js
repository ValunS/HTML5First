import { drawRect } from "./drawAny.js";
import { ctx } from "./canvasBasics.js";

class TestEntity {
  constructor(src, picX, picY, picW, picH) {
    this.pic = new Image();
    this.pic.src = src;
    this.X = picX;
    this.Y = picY;//add real W and H
    this.W = picW;
    this.H = picH;
    this.pastX = 0;
    this.pastY = 0;
  }
  drawPic(X, Y) {
    // prettier-ignore
    ctx.drawImage(this.pic,
      this.pastX, this.pastY, this.W, this.H,
      this.pastX, this.pastY, this.W, this.H
    );
    this.pastX = X;
    this.pastY = Y;
    // prettier-ignore
    ctx.drawImage(this.pic,
      this.X, this.Y, this.W, this.H,
      X, Y, this.W, this.H);
  }
}

class Background {
  constructor(src, picX, picY, picW, picH) {
    this.pic = new Image();
    this.pic.src = src;
    this.X = picX;
    this.Y = picY;
    this.W = picW;
    this.H = picH;
    this.pastX = 0;
    this.pastY = 0;
  }
  drawPic(X, Y) {
    // prettier-ignore
    ctx.drawImage(this.pic,
      this.pastX, this.pastY, this.W, this.H,
      this.pastX, this.pastY, this.W, this.H
    );
    this.pastX = X;
    this.pastY = Y;
    // prettier-ignore
    ctx.drawImage(this.pic,
      this.X, this.Y, this.W, this.H,
      X, Y, this.W, this.H);
  }
}

let a = new TestEntity("./files/pic/avatar_woman.jpg", 1, 1, 1, 1);
// a.drawPic();

export { TestEntity, Background };

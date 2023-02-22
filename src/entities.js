import { drawRect } from "./drawAny.js";
import { ctx } from "./canvasBasics.js";

class TestEntity {
  constructor(src, picX, picY, picW, picH, DrawW, DrawH) {
    this.pic = new Image();
    this.pic.src = src;
    this.X = picX;
    this.Y = picY;
    this.W = picW; //cutting from original pic
    this.H = picH;
    this.DrawW = DrawW; //Drawing to canvas
    this.DrawH = DrawH;
    //
    this.speed = 2;
    this.countSprites;
    this.countSpritesInLine;
    this.stepBetweenSprites;
    //
    this.pos = {
      X: 0,
      Y: 0,
      pastX: 0,
      pastY: 0,
    };
  }
  drawPic(X, Y) {
    // prettier-ignore
    // ctx.drawImage(this.pic,
    //   this.X, this.Y, this.W, this.H,
    //   this.pos.pastX, this.pos.pastY, this.DrawW, this.DrawH
    // );
    this.pos.pastX = this.pos.X;
    this.pos.pastY = this.pos.Y;
    // prettier-ignore
    ctx.drawImage(this.pic,
      this.X, this.Y, this.W, this.H,
      this.pos.X, this.pos.Y, this.DrawW, this.DrawH);
  }
}

class Background {
}

let a = new TestEntity("./files/pic/avatar_woman.jpg", 1, 1, 1, 1);
// a.drawPic();

export { TestEntity, Background };

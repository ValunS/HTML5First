//import { drawRect } from "./drawAny.js";
import { canvas, ctx } from "./canvasBasics.js";

class TestEntity {
  constructor(src, spriteW, spriteH, DrawW, DrawH, countSprites, countSpritesInLine) {
    this.pics = {
      u: new Image(),
      d: new Image(),
      l: new Image(),
      r: new Image(),
    };
    this.pics["u"].src = src.replace(/(\.[^\.]+)$/, "_up$1");
    this.pics["d"].src = src.replace(/(\.[^\.]+)$/, "_down$1");
    this.pics["l"].src = src.replace(/(\.[^\.]+)$/, "_left$1");
    this.pics["r"].src = src.replace(/(\.[^\.]+)$/, "_right$1");
    // this.X = picX;
    // this.Y = picY;
    // this.W = picW; //cutting from original pic
    // this.H = picH;
    this.DrawW = DrawW; //Drawing to canvas
    this.DrawH = DrawH;
    // this.backg = backg;
    //
    this.speed = 3;
    //
    this.ispeed = 0;
    this.spritesspeed = 3;
    //
    this.spriteNum = 1;
    this.spriteCol = 1;
    this.spriteLine = 1;
    //
    this.sprite = {
      X: 0,
      Y: 0,
      W: spriteW,
      H: spriteH,
    };
    this.countSprites = countSprites;
    this.countSpritesInLine = countSpritesInLine;
    this.stepBetweenSprites = 256;
    //
    this.pos = {
      X: 0,
      Y: 0,
      pastX: 0,
      pastY: 0,
      movToSide: "r", //движение в сторону
      changeMovToSide: (side) => {
        if (movToSide !== side) {
          this.pos.movToSide = side; //от чего this
        }
      },
    };
  }

  drawPic(X, Y) {
    //prettier-ignore
    // ctx.drawImage(this.backg.backg,
    //   this.pos.pastX,this.pos.pastY,this.DrawW,this.DrawH,//remove *2
    //   this.pos.pastX, this.pos.pastY,this.DrawW,this.DrawH
    // );

    ctx.clearRect(
      0, 0, canvas.width, canvas.height
    )

    this.pos.pastX = this.pos.X;
    this.pos.pastY = this.pos.Y;
    // prettier-ignore
    ctx.drawImage(this.pics[this.pos.movToSide],
      this.sprite.X, this.sprite.Y, this.sprite.W, this.sprite.H,
      this.pos.X, this.pos.Y, this.DrawW, this.DrawH
    );
    console.log(
      // this.sprite.X,
      // this.sprite.Y,
      // this.spriteCol,
      // this.spriteLine,
      // this.spriteNum
      this.pos.mvmnt
    );

    this.ispeed++;

    if (this.ispeed == this.spritesspeed) {
      if (this.spriteNum == this.countSprites) {
        //ready next sprite
        this.spriteNum = 1;
        this.spriteLine = 1;
        this.spriteCol = 1;
        this.sprite.X = 0;
        this.sprite.Y = 0;
      } else {
        this.spriteCol = (this.spriteNum % this.countSpritesInLine) + 1;
        this.spriteLine = Math.ceil((this.spriteNum + 1) / this.countSpritesInLine);
        this.sprite.X = (this.spriteCol - 1) * this.sprite.W;
        this.sprite.Y = (this.spriteLine - 1) * this.sprite.H;
        this.spriteNum++;
      } //checkSprites
      this.ispeed = 0;
    }
  } //drawPic()
}

class Background {
  constructor(src, DrawW, DrawH) {
    this.backg = new Image();
    this.backg.src = src;
    this.backglist = [];
    this.X = 0;
    this.Y = 0;
    this.W = this.backg.width; //cutting from original backg
    this.H = this.backg.height;
    this.DrawW = DrawW; //Drawing to canvas
    this.DrawH = DrawH;
    //
    this.pos = {
      X: 0,
      Y: 0,
      pastX: 0,
      pastY: 0,
    };
  }
}

export { TestEntity, Background };

// class TestEntity {
//   constructor(src, picX, picY, picW, picH, DrawW, DrawH, backg) {
//     this.pic = new Image();
//     this.pic.src = src;
//     this.X = picX;
//     this.Y = picY;
//     this.W = picW; //cutting from original pic
//     this.H = picH;
//     this.DrawW = DrawW; //Drawing to canvas
//     this.DrawH = DrawH;
//     this.backg = backg;
//     //
//     this.speed = 2;
//     this.spritesspeed = 1;
//     //
//     this.spriteNum = 1;
//     this.spriteCol = 1;
//     this.spriteLine = 1;
//     //
//     this.sprite = {
//       X: 0,
//       Y: 0,
//       W: 0,
//       H: 0,
//     };
//     this.countSprites = 4;
//     this.countSpritesInLine = 2;
//     this.stepBetweenSprites = 256;
//     //
//     this.pos = {
//       X: 0,
//       Y: 0,
//       pastX: 0,
//       pastY: 0,
//     };
//   }

//   drawPic(X, Y) {
//     //prettier-ignore
//     ctx.drawImage(this.backg.backg,
//       this.pos.pastX*2,this.pos.pastY*2,this.DrawW*2,this.DrawH*2,//remove *2
//       this.pos.pastX, this.pos.pastY,this.DrawW,this.DrawH
//     );
//     this.pos.pastX = this.pos.X;
//     this.pos.pastY = this.pos.Y;
//     // prettier-ignore
//     ctx.drawImage(this.pic,
//       this.sprite.X, this.sprite.Y, this.DrawW, this.DrawH,
//       this.pos.X, this.pos.Y, this.DrawW, this.DrawH
//     );
//     console.log(
//       this.sprite.X,
//       this.sprite.Y,
//       this.spriteCol,
//       this.spriteLine,
//       this.spriteNum
//     );

//     if (this.spriteNum == this.countSprites) {
//       //ready next sprite
//       this.spriteNum = 1;
//       this.spriteLine = 1;
//       this.spriteCol = 1;
//       this.sprite.X = 0;
//       this.sprite.Y = 0;
//     } else {
//       this.spriteCol = (this.spriteNum % this.countSpritesInLine) + 1;
//       this.spriteLine = Math.ceil(
//         ((this.spriteNum + 1) * this.countSpritesInLine) / this.countSprites
//       );
//       this.sprite.X = (this.spriteCol - 1) * this.DrawW;
//       this.sprite.Y = (this.spriteLine - 1) * this.DrawH;
//       this.spriteNum++;
//     } //checkSprites
//   } //drawPic()
// }

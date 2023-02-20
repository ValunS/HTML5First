import { drawRect } from "./drawAny.js";

class tmpPic {
    constructor(src, rectX, rectY, rectW, rectH) {
      this.pic = new Image();
      this.pic.src = src;
      this.rx = rectX;
      this.ry = rectY;
      this.rw = rectW;
      this.rh = rectH;
      }
      drawPic(){
        drawRect(50, 50)
    }
  }
  let a=new tmpPic('./files/pic/avatar_woman.jpg',1,1,1,1)
  a.drawPic();
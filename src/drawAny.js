import { canvas, ctx } from "./canvasBasics.js";
import { TestEntity } from "./entities.js";

//timed $

import { rx, ry, rw, rh, rstep } from "./keysChecker.js";

ctx.fillStyle = "#055550";
// let pic = new tmpPic("./files/pic/avatar_woman.jpg", 1, 1, 1, 1);
var pic = new Image();
pic.src =  "./files/pic/avatar_woman.jpg";
pic.onload = function() { 
  ctx.drawImage(pic, 0, 0, 512, 512, 0, 0, canvas.width, canvas.height);
}
var lastx = 0,
  lasty = 0;

function drawRect(x, y, pic) {
  ctx.fillStyle = "black";
  console.log(pic)
  // ctx.drawImage(pic, lastx, lasty, rw, rh, lastx, lastx, rw, rh);
  lastx = x;
  lasty = y;
  ctx.strokeStyle = "orange";
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.fillRect(x, y, rw, rh);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

export { drawRect };

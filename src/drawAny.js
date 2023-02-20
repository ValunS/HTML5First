import { canvas, ctx } from "./canvasBasics.js";

//timed $

import { rx, ry, rw, rh, rstep } from "./keysChecker.js";

ctx.fillStyle = "yellow";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var lastx = 0,
  lasty = 0;

function drawRect(x, y) {
  ctx.fillStyle = "black";
  ctx.clearRect(lastx, lasty, rw, rh);
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

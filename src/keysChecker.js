import { canvas, ctx } from "./canvasBasics.js";
import { drawRect } from "./drawAny.js";
import { Background, TestEntity } from "./entities.js";

//timed $

export var rx = 0,
  ry = 0,
  rw = 50,
  rh = 50,
  rstep = 2;
//
var b = new Background("./files/pic/avatar_woman.jpg", 256, 256);
var a = new TestEntity("./files/pic/avatar_woman.jpg", 0, 0, 512, 512, 100, 100, b);

function checkKeys(pressedKeys) {
  var countPressedKeys = Object.keys(pressedKeys).length;
  switch (countPressedKeys) {
    // case 3: {
    //   checkKeysThreeTap(pressedKeys);
    //   break;
    // }
    // case 2: {
    //   checkKeysTwoTap(pressedKeys);
    //   break;
    // }
    default: {
      checkKeysOneTap(pressedKeys);
    }
  }
}

function checkKeysOneTap(pressedKeys) {
  if (pressedKeys["KeyW"]) {
    a.drawPic(a.pos.X, a.pos.Y-rstep >= 0 ? (a.pos.Y -= rstep) : a.pos.Y=0);
  }
  if (pressedKeys["KeyA"]) {
    a.drawPic(a.pos.X-rstep >= 0 ? (a.pos.X -= rstep) : a.pos.X, a.pos.Y);
  }
  if (pressedKeys["KeyS"]) {
    a.drawPic(a.pos.X, a.pos.Y <= canvas.height - a.DrawH - rstep ? (a.pos.Y += rstep) : a.pos.Y);
  }
  if (pressedKeys["KeyD"]) {
    a.drawPic(a.pos.X <= canvas.width - a.DrawW - rstep ? (a.pos.X += rstep) : a.pos.X, a.pos.Y);
  }
}

// function checkKeysTwoTap(pressedKeys) {
//   if (pressedKeys["KeyW"] && pressedKeys["KeyD"]) {
//     drawRect(
//       rx <= canvas.width - rw - rstep ? (rx += rstep) : rx,
//       ry >= 0 ? (ry -= rstep) : ry
//     );
//   }
//   if (pressedKeys["KeyD"] && pressedKeys["KeyS"]) {
//     drawRect(
//       rx <= canvas.width - rw - rstep ? (rx += rstep) : rx,
//       ry <= canvas.height - rh - rstep ? (ry += rstep) : ry
//     );
//   }
//   if (pressedKeys["KeyS"] && pressedKeys["KeyA"]) {
//     drawRect(
//       rx >= 0 ? (rx -= rstep) : rx,
//       ry <= canvas.height - rh - rstep ? (ry += rstep) : ry
//     );
//   }
//   if (pressedKeys["KeyA"] && pressedKeys["KeyW"]) {
//     drawRect(rx >= 0 ? (rx -= rstep) : rx, ry >= 0 ? (ry -= rstep) : ry);
//   }
// }

// function checkKeysThreeTap(pressedKeys) {
//   if (pressedKeys["KeyA"] && pressedKeys["KeyW"] && pressedKeys["KeyD"]) {
//     drawRect(rx, ry >= 0 ? (ry -= rstep) : ry);
//   }
//   if (pressedKeys["KeyS"] && pressedKeys["KeyA"] && pressedKeys["KeyW"]) {
//     drawRect(rx >= 0 ? (rx -= rstep) : rx, ry);
//   }
//   if (pressedKeys["KeyD"] && pressedKeys["KeyS"] && pressedKeys["KeyA"]) {
//     drawRect(rx, ry <= canvas.height - rh - rstep ? (ry += rstep) : ry);
//   }
//   if (pressedKeys["KeyW"] && pressedKeys["KeyD"] && pressedKeys["KeyS"]) {
//     drawRect(rx <= canvas.width - rw - rstep ? (rx += rstep) : rx, ry);
//   }
// }

export { checkKeys };

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
// var a = new TestEntity("./files/pic/avatar_woman.jpg", 100, 100, 100, 100, b);
var a = new TestEntity("./files/pic/HumanSprite.png", 100, 100, 100, 100, b);

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
    a.drawPic(
      a.pos.X,
      a.pos.Y - a.speed >= 0 ? (a.pos.Y -= a.speed) : (a.pos.Y = 0)
    );
  }
  if (pressedKeys["KeyA"]) {
    a.drawPic(a.pos.X - a.speed >= 0 ? (a.pos.X -= a.speed) : a.pos.X, a.pos.Y);
  }
  if (pressedKeys["KeyS"]) {
    a.drawPic(
      a.pos.X,
      a.pos.Y <= canvas.height - a.DrawH - a.speed
        ? (a.pos.Y += a.speed)
        : a.pos.Y
    );
  }
  if (pressedKeys["KeyD"]) {
    a.drawPic(
      a.pos.X <= canvas.width - a.DrawW - a.speed
        ? (a.pos.X += a.speed)
        : a.pos.X,
      a.pos.Y
    );
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

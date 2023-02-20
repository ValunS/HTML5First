import { canvas, ctx } from "./canvasBasics.js";
import { drawRect } from "./drawAny.js";
import { TestEntity } from "./entities.js";

//timed $


export var rx = 0,
ry = 0,
rw = 35,
rh = 50,
rstep = 2;
//
var a = new TestEntity("./files/pic/avatar_woman.jpg", 0, 0, 512, 512)

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
    console.log(a);
    a.drawPic(rx, ry >= 0 ? (ry -= rstep) : ry);
  }
  if (pressedKeys["KeyA"]) {
    drawRect(rx >= 0 ? (rx -= rstep) : rx, ry);
  }
  if (pressedKeys["KeyS"]) {
    drawRect(rx, ry <= canvas.height - rh - rstep ? (ry += rstep) : ry);
  }
  if (pressedKeys["KeyD"]) {
    drawRect(rx <= canvas.width - rw - rstep ? (rx += rstep) : rx, ry);
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

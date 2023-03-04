import { canvas, ctx } from "./canvasBasics.js";
//import { drawRect } from "./drawAny.js";
import { Background, TestEntity } from "./entities.js";

//timed $

var b = new Background("./files/pic/avatar_woman.jpg", 256, 256);

// var a = new TestEntity("./files/pic/avatar_woman.jpg", 100, 100, 100, 100, b);
// window.a = new TestEntity("./files/pic/avatar_woman.jpg",100,100,100,100,b);
// ents[0].countSprites = 25;
// ents[0].countSpritesInLine = 5;

// var a = new TestEntity("./files/pic/burn.png", 180, 180, 90, 90, b);
// ents[0].countSprites = 25;
// ents[0].countSpritesInLine = 5;

var ents = new Array();
var bks = new Array();

//prettier-ignore
ents.push(
  new TestEntity("./files/pic/mvmntcheck.png", 100, 100, 100, 100, 8, 8)
)
bks.push();
window.ents = ents;

//

function checkKeys(pressedKeys) {
  var countPressedKeys = Object.keys(pressedKeys).length;
  switch (countPressedKeys) {
    case 3: {
      checkKeysThreeTap(pressedKeys);
      break;
    }
    case 2: {
      checkKeysTwoTap(pressedKeys);
      break;
    }
    default: {
      checkKeysOneTap(pressedKeys);
    }
  }
  ents[0].drawPic(1, 1);
}

function checkKeysOneTap(pressedKeys) {
  if (pressedKeys["KeyW"]) {
    up(ents[0]);
  }
  if (pressedKeys["KeyA"]) {
    left(ents[0]);
  }
  if (pressedKeys["KeyS"]) {
    down(ents[0]);
  }
  if (pressedKeys["KeyD"]) {
    right(ents[0]);
  }
}

function checkKeysTwoTap(pressedKeys) {
  if (pressedKeys["KeyW"] && pressedKeys["KeyA"]) {
    upLeft(ents[0]);
  }
  if (pressedKeys["KeyW"] && pressedKeys["KeyD"]) {
    upRight(ents[0]);
  }
  if (pressedKeys["KeyS"] && pressedKeys["KeyA"]) {
    downLeft(ents[0]);
  }
  if (pressedKeys["KeyS"] && pressedKeys["KeyD"]) {
    downRight(ents[0]);
  }
}

function checkKeysThreeTap(pressedKeys) {
  if (pressedKeys["KeyW"] && pressedKeys["KeyA"] && pressedKeys["KeyD"]) {
    up(ents[0]);
  }
  if (pressedKeys["KeyW"] && pressedKeys["KeyD"] && pressedKeys["KeyS"]) {
    left(ents[0]);
  }
  if (pressedKeys["KeyS"] && pressedKeys["KeyA"] && pressedKeys["KeyW"]) {
    right(ents[0]);
  }
  if (pressedKeys["KeyS"] && pressedKeys["KeyD"] && pressedKeys["KeyA"]) {
    down(ents[0]);
  }
}

function up(ent) {
  ent.pos.movToSide = "u";
  if (ent.pos.Y - ent.speed >= 0) {
    ent.pos.Y -= ent.speed;
  } else {
    ent.pos.Y = 0;
  }
}

function upLeft(ent) {
  ent.pos.movToSide = "u";
  if (ent.pos.Y - ent.speed >= 0) {
    ent.pos.Y -= ent.speed;
  } else {
    ent.pos.Y = 0;
  }
  //
  if (ent.pos.X - ent.speed >= 0) {
    ent.pos.X -= ent.speed;
  } else {
    ent.pos.X = 0;
  }
}

function upRight(ent) {
  ent.pos.movToSide = "u";
  if (ent.pos.Y - ent.speed >= 0) {
    ent.pos.Y -= ent.speed;
  } else {
    ent.pos.Y = 0;
  }
  //
  if (ent.pos.X <= canvas.width - ent.DrawW - ent.speed) {
    ent.pos.X += ent.speed;
  } else {
    ent.pos.X;
  }
}

function left(ent) {
  ent.pos.movToSide = "l";
  if (ent.pos.X - ent.speed >= 0) {
    ent.pos.X -= ent.speed;
  } else {
    ent.pos.X = 0;
  }
}

function down(ent) {
  ent.pos.movToSide = "d";
  if (ent.pos.Y <= canvas.height - ent.DrawH - ent.speed) {
    ent.pos.Y += ent.speed;
  } else {
    ent.pos.Y;
  }
}

function downLeft(ent) {
  ent.pos.movToSide = "d";
  if (ent.pos.Y <= canvas.height - ent.DrawH - ent.speed) {
    ent.pos.Y += ent.speed;
  } else {
    ent.pos.Y;
  }
  //
  if (ent.pos.X - ent.speed >= 0) {
    ent.pos.X -= ent.speed;
  } else {
    ent.pos.X = 0;
  }
}

function downRight(ent) {
  ent.pos.movToSide = "d";
  if (ent.pos.Y <= canvas.height - ent.DrawH - ent.speed) {
    ent.pos.Y += ent.speed;
  } else {
    ent.pos.Y;
  }
  //
  if (ent.pos.X <= canvas.width - ent.DrawW - ent.speed) {
    ent.pos.X += ent.speed;
  } else {
    ent.pos.X;
  }
}

function right(ent) {
  ent.pos.movToSide = "r";
  if (ent.pos.X <= canvas.width - ent.DrawW - ent.speed) {
    ent.pos.X += ent.speed;
  } else {
    ent.pos.X;
  }
}

export { checkKeys };

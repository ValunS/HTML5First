import { checkKeys } from "./keysChecker.js";

var pressedKeys = {};

document.addEventListener("keyup", function (event) {
  delete pressedKeys[event.code];
});

document.addEventListener("keydown", function (event) {
  if (event.repeat) {
    return;
  }
  pressedKeys[event.code] = true;
});

setInterval(() => {
  requestAnimationFrame(() => {
    checkKeys(pressedKeys);
  });
}, 1000 / 5);

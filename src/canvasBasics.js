const canvas = document.querySelector("canvas");
canvas.height = 288;
canvas.width = 512;
var ctx = canvas.getContext("2d");
var input = document.querySelector("input");

export { canvas, input, ctx };

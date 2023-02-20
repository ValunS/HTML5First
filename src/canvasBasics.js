const canvas = document.querySelector("canvas");
canvas.height = 256;
canvas.width = 256;
var ctx = canvas.getContext("2d");
var input = document.querySelector("input");

export { canvas, input, ctx };

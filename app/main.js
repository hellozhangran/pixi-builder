var PIXI = require('pixi.js');
let a = 11111;
document.write('<h1>'+a+'</h1>');

var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);
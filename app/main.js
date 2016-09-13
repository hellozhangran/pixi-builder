import PIXI from 'pixi.js'; 
var canvas = document.getElementById('canvas');
var renderer = PIXI.autoDetectRenderer(960, 640,{
        view:canvas,
        antialias:true,
        preserveDrawingBuffer: true,
        resolution: 1,
        backgroundColor : 0x1099bb
    },false);

console.log(renderer.view);
window.canvas = renderer.view;
// create the root of the scene graph
var stage = new PIXI.Container();

// create a texture from an image path
var texture = PIXI.Texture.fromImage('https://s.momocdn.com/w/u/img/2016/08/05/1470368731049-8.png');

// create a new Sprite using the texture
var bunny = new PIXI.Sprite(texture);

// center the sprite's anchor point
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// move the sprite to the center of the screen
bunny.position.x = 200;
bunny.position.y = 150;

stage.addChild(bunny);

// start animating
//animate();
var i = 0
function animate() {
    //requestAnimationFrame(animate);

    // just for fun, let's rotate mr rabbit a little
    bunny.rotation += 0.1;

    // render the container
    renderer.render(stage);
}

var ticker = PIXI.ticker.shared;
ticker.autoStart = false;
ticker.add(animate,this);
ticker.start();


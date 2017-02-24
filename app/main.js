import * as PIXI from 'pixi.js'; 
var canvas = document.getElementById('canvas');
var renderer = PIXI.autoDetectRenderer(960, 640,{
        view:canvas,
        antialias:true,
        preserveDrawingBuffer: true,
        resolution: 1,
        backgroundColor : 0x1099bb
    },false);


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
bunny.position.y = 50;
console.log('width',bunny.width);
console.log('height',bunny.height);

stage.addChild(bunny);

// start animating
//animate();

// renderer.render(stage);
// setTimeout(function(){
//     renderer.render(stage);
// },1000)



function animate() {
    //requestAnimationFrame(animate);

    // just for fun, let's rotate mr rabbit a little
    bunny.rotation += 0.2;

    // render the container
    renderer.render(stage);
}

//var ticker = PIXI.ticker.shared;//自动设置了started=true，add后，不需触发直接执行
//ticker.add(animate,this);

//ticker.autoStart = true;
//ticker.started = true;

var ticker = new PIXI.ticker.Ticker();//add之后，需要调用ticker.start()处罚
ticker.add(animate,this);

setTimeout(function(){
    ticker.start();
},2000)


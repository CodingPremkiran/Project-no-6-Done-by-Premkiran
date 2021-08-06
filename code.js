var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c881c148-717b-4bd3-915f-ac99d5c63fd0"],"propsByKey":{"c881c148-717b-4bd3-915f-ac99d5c63fd0":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"hrQOKdiH8dvuesptTDdo5tL.XnpvV2nk","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c881c148-717b-4bd3-915f-ac99d5c63fd0.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var theif = createSprite(14,392,20,20);
var diamond = createSprite(394,14,20,20);
var laserbeam1 = createSprite(0,295,200,5);
var laserbeam2 = createSprite(282,83,200,5);
laserbeam1.velocityX = 0;
laserbeam1.velocityY = -3;
laserbeam2.velocityX = 0;
laserbeam2.velocityY = 3;
laserbeam1.shapeColor = ("red");
laserbeam2.shapeColor = ("red");
//theif.velocityX = 2;
//theif.velocityY = 3;
theif.shapeColor = ("blue");
diamond.shapeColor = ("green");







function draw(){
background("yellow");
fill("green");
shape(390, 0, 380, 10, 390, 20,400,10);
    
   createEdgeSprites();
   theif.bounceOff(topEdge);
  theif.bounceOff(bottomEdge);
  theif.bounceOff(rightEdge);
  theif.bounceOff(leftEdge);
 /* laserbeam1.bounceOff(topEdge);
  laserbeam1.bounceOff(bottomEdge);
  laserbeam2.bounceOff(topEdge);
  laserbeam2.bounceOff(bottomEdge);
  laserbeam1.bounceOff(rightEdge);
  laserbeam1.bounceOff(leftEdge);
  laserbeam2.bounceOff(rightEdge);
  laserbeam2.bounceOff(leftEdge);*/
  createEdgeSprites();
  laserbeam1.bounceOff(edges);
  laserbeam2.bounceOff(edges);

if (keyDown("UP_ARROW")){
  theif.velocityX = 0;
  theif.velocityY = -3;
    }
if (keyDown("DOWN_ARROW")) {
  theif.velocityX = 0;
  theif.velocityY = 3; 
    }
if (keyDown("RIGHT_ARROW")) {
  theif.velocityX = 3;
   theif.velocityY = 0;
    }
if (keyDown("LEFT_ARROW")) {
  theif.velocityX = -3;
  theif.velocityY = 0;
    }
if (laserbeam1.isTouching(theif)||laserbeam2.isTouching(theif) ){
  text(70);
  text("THEIF IS CAUGHT",120,200);
  laserbeam1.velocityX = 0;
      laserbeam1.velocityY = 0;
      laserbeam2.velocityX = 0;
      laserbeam2.velocityY = 0;
      theif.velocityX = 0;
      theif.velocityY = 0;
    }
   /* if (laserbeam2.isTouching(theif)) {
      text(70);
      text("THEIF IS CAUGHT",120,200);
      laserbeam1.velocityX = 0;
      laserbeam1.velocityY = 0;
      laserbeam2.velocityX = 0;
      laserbeam2.velocityY = 0;
      theif.velocityX = 0;
      theif.velocityY = 0;
      
    }*/
   if (theif.isTouching(diamond)) {
     text(70);
     text("DIAMOND HAS BEEN STOLEN");
     theif.velocityX = 0;
     theif.velocityY = 0;
      
    }
     
    
  
          
        
             
        
        
        
    
  

  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

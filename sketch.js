
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect1 = createSprite(900, 100, 50, 50);
  fixedRect1.shapeColor = "green";

  fixedRect2 = createSprite(300, 100, 50, 50);
  fixedRect2.shapeColor = "green";

  

  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "blue";
    fixedRect1.shapeColor = "blue";
  }
  
  else if(isTouching(movingRect,fixedRect)){

    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";

  }

  else {
    movingRect.shapeColor = "green";
    fixedRect1.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
 

   if(isTouching(movingRect,fixedRect2)){
    fixedRect3 = createSprite(500, 100, 50, 50);
    fixedRect3.shapeColor = "red";
  }




//bounceOff(movingRect,fixedRect)
  drawSprites();
}





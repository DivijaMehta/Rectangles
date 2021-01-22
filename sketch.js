var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect = createSprite(700,200,60,80);
  movingRect.shapeColor="green";

  fixedRect.debug=true;
  movingRect.debug=true;

  movingRect.velocityX=-3;
  fixedRect.velocityX=2;
}

function draw() {
  background(255,255,255);  
  // movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY;

 var dis = (movingRect.width/2)+(fixedRect.width/2);
  console.log("disCenter : "+dis)
  var dis2 = movingRect.x-fixedRect.x;
  console.log("dis2 : "+dis2)

  var dis3 = fixedRect.x-movingRect.x;
  console.log("dis3 : "+dis3)


  // if(movingRect.x-fixedRect.x < (movingRect.width/2)+(fixedRect.width/2)
  //     && fixedRect.x-movingRect.x<(movingRect.width/2)+(fixedRect.width/2)
  //     && movingRect.y-fixedRect.y < (movingRect.height/2)+(fixedRect.height/2)
  //     && fixedRect.y-movingRect.y<(movingRect.height/2)+(fixedRect.height/2)){
  //   fixedRect.shapeColor="red";
  //   movingRect.shapeColor="red";
  // }else{
  //   fixedRect.shapeColor="green";
  //   movingRect.shapeColor="green";
  // }

if(movingRect.x-fixedRect.x < (movingRect.width/2)+(fixedRect.width/2)
&& fixedRect.x-movingRect.x<(movingRect.width/2)+(fixedRect.width/2)){
    movingRect.velocityX=-1 * movingRect.velocityX;
    fixedRect.velocityX=-1 * fixedRect.velocityX;
}
  
  drawSprites();
}
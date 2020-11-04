var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(200,100,100,100);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(500,300,100,100);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(300,500,100,100);
  gameObject3.shapeColor="green";
  gameObject4=createSprite(100,400,100,100);
  gameObject4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  drawSprites();
 if (isTouching(movingRect,gameObject1))
{
  movingRect.shapeColor = "blue";
  gameObject1.shapeColor = "blue";

}
else
{
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
}
}

function isTouching(object1,Object2){
  if (object1.x - Object2.x < Object2.width/2 + object1.width/2
    && Object2.x - object1.x < Object2.width/2 + object1.width/2
    && object1.y - Object2.y < Object2.height/2 +object1.height/2
    && Object2.y - object1.y < Object2.height/2 + object1.height/2) {
  return true;
}
else {

  return false;
}
}





















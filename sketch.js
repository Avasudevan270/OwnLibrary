var movingRect,fixedRect

var gameObject1, gameObject2

function setup(){
  createCanvas(400,400)

  movingRect = createSprite(200,200,50,80)
  fixedRect = createSprite(200, 300, 80, 50)
  gameObject1 = createSprite( 100, 100, 50, 50)
  gameObject2 = createSprite (350, 100, 50, 50)

  gameObject2.velocityX = -3



  gameObject1.shapeColor = "blue"
  gameObject2.shapeColor = "yellow "

  fixedRect.shapeColor= "red"
  movingRect.shapeColor= "red"

  //movingRect.velocityY= 2
  //fixedRect.velocityY=-2

}
function draw(){
 background(0)

collide(gameObject1, gameObject2)


movingRect.x = mouseX
movingRect.y = mouseY

if (isTouching(movingRect, gameObject2)){

  gameObject2.shapeColor= "lightGreen"
}
else {
  gameObject2.shapeColor= "blue"
}



  drawSprites();
}



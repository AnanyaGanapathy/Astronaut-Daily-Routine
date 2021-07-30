var astronaut;
var edges;
var sleep;
var brush;
var gym;
var eat;
var bath;
var drink;
var move;

function preload() {
bg = loadImage("Images/iss.png")
sleep = loadAnimation("Images/sleep.png")
brush = loadAnimation("Images/brush.png")
bath = loadAnimation("Images/bath1.png", "Images/bath2.png")
gym = loadAnimation("Images/gym11.png", "Images/gym12.png", "Images/gym1.png", "Images/gym2.png")
eat = loadAnimation("Images/eat1.png", "Images/eat2.png")
drink = loadAnimation("Images/drink1.png", "Images/drink2.png")
move = loadAnimation("Images/move.png")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  astronaut = createSprite(300, 230)
  astronaut.addAnimation("sleeping", sleep)
  astronaut.scale = 0.1


}

function draw() {
  background(bg);  
  edges = createEdgeSprites();
  astronaut.bounceOff(edges)

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }
  
  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming", gym)
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityY = 0
    astronaut.velocityX = 0
    }
  
  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("bathing", bath)
    astronaut.changeAnimation("bathing")
    astronaut.x = 350
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }
  
  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("eating", eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }
  
  if (keyDown("m")) {
    astronaut.addAnimation("moving", move)
    astronaut.changeAnimation("moving")
    //astronaut.scale = 0.1
    //astronaut.y = 350
    astronaut.velocityY = -1
    astronaut.velocityX = -1
  }

  drawSprites();
}


function preload(){
  
 // backgroundImage = loadImage("image/bg1.png");
  boyy = loadImage("images/p1.gif");
  boyy2 = loadImage("images/p2.gif");
  boyy3 = loadImage("images/left.gif");
  bg = loadImage("images/bg.gif");
  

 
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  ground1 = createSprite(300,300);
  ground1.addImage(bg);
  ground1.scale = 15;
 player = createSprite(200,400)
 player.addImage("b",boyy2)
 
}

function draw() {
  //background(bg);
  // moving ground
 drawSprites();
 
 movingRight();
 movingLeft();
 
}

function movingRight(){
  if(keyDown("right"))
  {player.x += 5
    player.addImage("b",boyy)
  }
  if(keyWentUp("right"))
  {
    player.addImage("b",boyy2)
  }
}

function movingLeft(){
  if(keyDown("left"))
 {player.x -= 5
   player.addImage("b",boyy3)
 }
 if(keyWentUp("left"))
 {
   player.addImage("b",boyy2)
 }
}
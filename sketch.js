var trex , trexImage;
var ground , groundImage , invisibleGround;

function preload()
{
trexImage = loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage = loadImage("ground2.png");

}

function setup() {
  createCanvas(600, 200);
trex = createSprite(200,180,25,25);
trex.addAnimation("running",trexImage);
trex.scale = 0.5;
ground = createSprite(300,190,1,500);
ground.addImage("Ground",groundImage);
ground.velocityX = -2;
ground.x = ground.width/2;
invisibleGround = createSprite(300,195,600,1)
invisibleGround.visible = false;  

}

function draw() {
  background(220);
if(keyDown("space"))
{
trex.velocityY = -10;
  }
 trex.velocityY = trex.velocityY + 0.5;   
 trex.collide(invisibleGround);    
 if(ground.x<0)
 {
 ground.x = ground.width/2;
 }
drawSprites();
}
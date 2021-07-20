var capsuleImg;
var capsule;
var capsuleUpImg;
var capsuleLeftImg;
var capsuleRightImg;
var ISSImg;
var ISS;
var spacebg;
var hasDocked = false;
var docked = true;

function preload(){
capsuleImg = loadImage("Docking-undocking/spacecraft1.png");
ISSImg = loadImage("Docking-undocking/iss.png");
spacebg = loadImage("Docking-undocking/spacebg.jpg")
capsuleUpImg = loadImage("Docking-undocking/spacecraft2.png");
capsuleLeftImg = loadImage("Docking-undocking/spacecraft4.png");
capsuleRightImg = loadImage("Docking-undocking/spacecraft3.png");

}

function setup() {
  createCanvas(800,400);
  capsule = createSprite(400, 300, 50, 50);
  capsule.addImage("docking",capsuleImg);
  capsule.scale = 0.1;
  
  ISS = createSprite(400,100);
  ISS.addImage(ISSImg);
  ISS.scale = 0.9;



}

function draw() {
  background(spacebg);  

  if(!hasDocked){

    capsule.x = capsule.x + random(-2,3);

    if(keyDown(UP_ARROW)){
   capsule.y = capsule.y-10
  
  }

  if(keyDown(DOWN_ARROW)){
    capsule.y = capsule.y+10
    capsule.addImage(capsuleUpImg);
   }

   
  if(keyDown(LEFT_ARROW)){
    capsule.x = capsule.x-10
    capsule.addImage(capsuleLeftImg);
   }

   if(keyDown(RIGHT_ARROW)){
    capsule.x = capsule.x+10
    capsule.addImage(capsuleRightImg);
   }

  }

  if(capsule.isTouching(ISS)){
text("spacecraft has docked ",200,200)

  }


  drawSprites();
}
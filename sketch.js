
function preload() {
 back=loadImage("images/garden.png");
  cat=loadImage("images/tomthree.png");
  mice =loadImage("images/jerryfour.png")
  cat2=loadImage("images/tomone.png")
  mice2=loadImage("images/jerryone.png")
}

function setup(){
    createCanvas(800,700);
  forground=createSprite(300,300);
  forground.addImage(back);
  forground.velocityX=-3;
  forground.sacle=6;
  tom=createSprite(600,590,10,10);
   tom.addImage(cat);
   tom.scale=0.1;
   jerry=createSprite(100,590,10,10);
   jerry.addImage(mice);
   jerry.scale=0.1;
   jerry.setCollider("circle",0,0,40);
   jerry.debug = false
 
}
function draw() {
  background("white");
 if(forground.x<310 ){
  
  forground.x=forground.width/2
 }
 if(keyWentDown("up")){
 tom.velocityX=-4;


 }
 if(keyWentUp("up")){
  tom.velocityX=0; 
  }
 
 if(jerry.isTouching(tom)){

  tom.velocityX=0; 
  tom.addImage(cat2);
  jerry.addImage(mice2);
 }
    drawSprites();
}

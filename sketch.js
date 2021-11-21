const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgimg;

//creating the blocks
var block1,block1img;
var block2,block2img;
var block3,block3img;
var block4,block4img;
var block5,block5img;
var block6,block6img;
var block7,block7img;
var block8,block8img;
var block9,block9img;
var block10,block10img;
var block11,block11img;
var block12,block12img;
var block13,block13img;
var block14,block14img;
var block15,block15img;





function preload(){
  bgimg=loadImage("construction sitecode.PNG");

  block1img=loadImage("cemetblock.png");
  block2img=loadImage("cemetblock.png");
  block3img=loadImage("cemetblock.png");
  block4img=loadImage("cemetblock.png");
  block5img=loadImage("cemetblock.png");
  block6img=loadImage("cemetblock.png");
  block7img=loadImage("cemetblock.png");
  block8img=loadImage("cemetblock.png");
  block9img=loadImage("cemetblock.png");
  block10img=loadImage("cemetblock.png");
  block1img=loadImage("cemetblock.png");
  block11img=loadImage("cemetblock.png");
  block12img=loadImage("cemetblock.png");
  block13img=loadImage("cemetblock.png");
  block14img=loadImage("cemetblock.png");
  block15img=loadImage("cemetblock.png");



}


function setup() {
  createCanvas(400,400);
  //Blocks
  //Layer1
  block1=createSprite(260,380,10,20);
  block1.size=0.02;
  block1.addAnimation(block1img)

  block2=createSprite(280,380,10,20);
  block2.size=0.02;
  block2.addAnimation(block2img)

  block3=createSprite(300,380,10,20);
  block3.size=0.02;
  block3.addAnimation(block3img)

//Layer2
  block4=createSprite(260,360,10,20);
  block4.size=0.02;
  block4.addAnimation(block4img)

  block5=createSprite(280,360,10,20);
  block5.size=0.02;
  block5.addAnimation(block5img)

  block6=createSprite(300,360,10,20);
  block6.size=0.02;
  block6.addAnimation(block6img)
//layer3
  block7=createSprite(260,340,10,20);
  block7.size=0.02;
  block7.addAnimation(block7img)

  block8=createSprite(280,340,10,20);
  block8.size=0.02;
  block8.addAnimation(block8img)

  block9=createSprite(300,340,10,20);
  block9.size=0.02;
  block9.addAnimation(block9img)
  //layer4

  block10=createSprite(260,320,10,20);
  block10.size=0.02;
  block10.addAnimation(block10img)

  block11=createSprite(280,320,10,20);
  block11.size=0.02;
  block11.addAnimation(block11img)

  block12=createSprite(300,320,10,20);
  block12.size=0.02;
  block12.addAnimation(block12img)

//layer5
  block13=createSprite(260,300,10,20);
  block13.size=0.02;
  block13.addAnimation(block13img)

  block14=createSprite(280,300,10,20);
  block14.size=0.02;
  block14.addAnimation(block14img)

  block15=createSprite(300,300,10,20);
  block15.size=0.02;
  block15.addAnimation(block15img)




  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  image(bgimg,0,0,width,height);
  
  Engine.update(engine);
  drawSprites();
}



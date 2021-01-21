const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(480,height,960,20);

  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }

  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
 
  
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  ground.display();
}

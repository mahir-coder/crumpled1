
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	
}

function setup() {
	createCanvas(800, 700);
	groundSprite = createSprite(width/2,height-30,width,10)
	box1s = createSprite(60,60,60,50)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	box1 = Bodies.rectangle(box1s.x,box1s.y,box1s.width,box1s.height)
	World.add(world,box1)
	ground = Bodies.rectangle(groundSprite.x,groundSprite.y,groundSprite.width,groundSprite.height)

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




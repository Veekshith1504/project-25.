
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObject , paperObject , groundObject

function preload () {


}

function setup() {
	createCanvas(1600 , 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbinObject  = new Dustbin(1200 , 650);
	paperObject = new Paper (200 , 450 , 40);
	groundObject = new Ground(width/2 , 670 , width , 20);

	//Create the Bodies Here.


	Engine.run(engine);


  
}
    

function draw() {
  rectMode(CENTER);
  background("white");
  
 dustbinObject.display();
 paperObject.display();
 groundObject.display();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
  Matter.Body.applyForce(paperObject.body , paperObject.body.position , {x : 90 , y : -90});

  }

}


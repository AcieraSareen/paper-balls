const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObj,paperObj;
var world;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	groundObj=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(900,650);
	paperObj=new Paper(200,350,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  

  groundObj.display();
  dustbinObj.display();
  paperObj.display();
}

function keyPressed(){
if(keyCode === UP_ARROW) {

	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:70,y:-200});
}
}


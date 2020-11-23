
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1;
var dustbin1,dustbin2,dustbin3;
var paper1;

function setup() {
	createCanvas(1200, 400);

    engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
	dustbin1 = new dustbin(950,325,15,100)
	dustbin2 = new dustbin(1050,380,200,15)
	dustbin3 = new dustbin(1150,325,15,100)

	paper1 = new paper(150,320,20)
	
	ground1 = new ground(600,392,1200,15)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  ground1.display();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world
var paperObJ;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	//chame o objeto dustbin(cesta) e posicione
	//chame o objeto paperObJ e posicione 

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); Engine.run(engine); Render.run(render);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  //chame o metodo display para  dustbinObj e  paperObJ
}

function keyPressed(){
	//escolha uma tecla para lancar a bola na cesta
	if(keyCode === ){
		Matter.Body.applyForce(paperObJ.body, paperObJ.body.position, {x: 145, y: -170});
	}
}


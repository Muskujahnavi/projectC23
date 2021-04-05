const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxpos=width/2-100;
	boxy=610;
	boxleftsprite=createSprite(boxpos+50,boxy,20,100);
	boxleftsprite.shapeColor="red";

	boxleftbody=Bodies.rectangle(boxpos,boxy,20,100,{isStatic:true});
	World.add(world,boxleftbody);

	boxbottomsprite=createSprite(boxpos+120,boxy+40,150,20);
	boxbottomsprite.shapeColor="red";

	boxbottombody=Bodies.rectangle(boxpos+100,boxy+45-20,100,20,{isStatic:true});
	World.add(world,boxbottombody);

	boxrightsprite=createSprite(boxpos+200,boxy,20,100);
	boxrightsprite.shapeColor="red";

	boxrightbody=Bodies.rectangle(boxpos+200-80,boxy,20,100,{isStatic:true});
	World.add(world,boxrightbody);

	Engine.run(engine);
  
	// var packageSprite={
	// 	restitution : 3.0
	// }

}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    
  }
}
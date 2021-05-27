const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload() {
//preload the images here
backgroundImage = loadImage("image/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(200,400,600,5);
  superhero = new Superhero(400,3,100,100);
  attach = new Throw(superhero.Body,{x:100,y:465});
  block1 = new block(280,350,30,40);
  block2 = new block(310,350,30,40);
  block3 = new block(340,350,30,40);
  block4 = new block(370,350,30,40);
  block5 = new block(400,350,30,40);
  block6 = new block(430,350,30,40);
  block7 = new block(460,350,30,40);
  block8 = new block(490,350,30,40);
  block9 = new block(310,315,30,40);
  block10 = new block(340,315,30,40);
  block11 = new block(370,315,30,40);
  block12 = new block(400,315,30,40);
  block13 = new block(430,315,30,40);
  block14 = new block(460,315,30,40);
  monster = new Monster(380,200,100,100);

  engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(backgroundImage);
  strokewidth(0);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x: mouseX,y:mouseY});
}

function mouseRealeased(){
  attach.fly();
}


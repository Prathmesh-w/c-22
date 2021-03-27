const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas, engine, world, ground,ball;

function setup(){
  canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic:true
  }

 ground = Bodies.rectangle(200,390,400, 10, options);
  World.add(world,ground);


var option1={restitution:0.8}


ball = Bodies.circle(200,100,10, option1);
  World.add(world,ball);
  
}

function draw(){
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  fill("lightgreen");
  rect(ground.position.x, ground.position.y, 400,10);

  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,10,10)
}

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var canvas, engine, world

function setup(){
  canvas = createCanvas(400,400)
  engine = Engine.create()
  world = engine.world;
  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,10, options)  
  World.add(world,ground);

  var option1 = {
    restitution : 0.9
  }

  ball = Bodies.circle(200,50,30, option1);
  World.add(world,ball);
}

function draw(){
  background("black");

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,10)

  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x, ball.position.y, 30, 30);

}
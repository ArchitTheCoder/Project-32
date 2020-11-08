const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

var score = 0;

var backgroundImg;
var bg = "ce2029.png";

function preload() {
  getBackgroundImage();
}

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  getBackgroundImage();

  ground = new Ground(470, 350, 300, 15);
  ground2 = new Ground(870, 240, 250, 15);

  polygon = new Shooter(200, 220, 30, 30)

  bbox1 = new Bluebox(380, 320, 30, 40)
  bbox2 = new Bluebox(410, 320, 30, 40)
  bbox3 = new Bluebox(440, 320, 30, 40)
  bbox4 = new Bluebox(470, 320, 30, 40)
  bbox5 = new Bluebox(500, 320, 30, 40)
  bbox6 = new Bluebox(530, 320, 30, 40)
  bbox7 = new Bluebox(560, 320, 30, 40)

  pbox1 = new Pinkbox(410, 280, 30, 40)
  pbox2 = new Pinkbox(440, 280, 30, 40)
  pbox3 = new Pinkbox(470, 280, 30, 40)
  pbox4 = new Pinkbox(500, 280, 30, 40)
  pbox5 = new Pinkbox(530, 280, 30, 40)

  gbox1 = new Greenbox(440, 240, 30, 40)
  gbox2 = new Greenbox(470, 240, 30, 40)
  gbox3 = new Greenbox(500, 240, 30, 40)

  box1 = new box(470, 200, 30, 40)

  bbox8 = new Bluebox(810, 220, 30, 40)
  bbox9 = new Bluebox(840, 220, 30, 40)
  bbox10 = new Bluebox(870, 220, 30, 40)
  bbox11 = new Bluebox(900, 220, 30, 40)
  bbox12 = new Bluebox(930, 220, 30, 40)

  gbox4 = new Greenbox(840, 180, 30, 40)
  gbox5 = new Greenbox(870, 180, 30, 40)
  gbox6 = new Greenbox(900, 180, 30, 40)

  pbox6 = new Pinkbox(870, 140, 30, 40)

  slingshot = new SlingShot(polygon.body, { x: 200, y: 200 });
}

function draw() {
  if (backgroundImg) 
        background(backgroundImg);


  textSize(35)
  fill("white")
  text("Score:" + score, 750, 40)

  Engine.update(engine);

  ground.display();
  ground2.display();

  polygon.display();

  bbox1.display();
  bbox2.display();
  bbox3.display();
  bbox4.display();
  bbox5.display();
  bbox6.display();
  bbox7.display();
  bbox8.display();
  bbox9.display();
  bbox10.display();
  bbox11.display();
  bbox12.display();



  pbox1.display();
  pbox2.display();
  pbox3.display();
  pbox4.display();
  pbox5.display();
  pbox6.display();


  gbox1.display();
  gbox2.display();
  gbox3.display();
  gbox4.display();
  gbox5.display();
  gbox6.display();

  box1.display();

  slingshot.display();

  bbox1.score();
  bbox2.score();
  bbox3.score();
  bbox4.score();
  bbox5.score();
  bbox6.score();
  bbox7.score();
  bbox8.score();
  bbox9.score();
  bbox10.score();
  bbox11.score();
  bbox12.score();

  pbox1.score();
  pbox2.score();
  pbox3.score();
  pbox4.score();
  pbox5.score();
  pbox6.score();

  gbox1.score();
  gbox2.score();
  gbox3.score();
  gbox4.score();
  gbox5.score();
  gbox6.score();

  box1.score();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  slingshot.fly()
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(polygon.body)
  }
}

async function getBackgroundImage() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
  var responseJSON = await response.json()

  var datetime = responseJSON.datetime
  var hour = datetime.slice(11, 13)

  if (hour >= 6 && hour <= 18) {
    bg = "ce2029.png"
  } else {
    bg = "1429822.jpg"
  }
  backgroundImg = loadImage(bg)

} 
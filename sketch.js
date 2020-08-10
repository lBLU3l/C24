const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, log1, log2, log3, log4, pig1, pig2, bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,320,70,70);
    box2 = new Box(1000,320,70,70);
    box3 = new Box(800,290,70,70);
    box4 = new Box(1000,290,70,70);
    box5 = new Box(900,200,70,70);
    log1 = new Log(900,300,270,PI/2);
    log2 = new Log(900,220,270,PI/2);
    log3 = new Log(825,180,150,PI/7);
    log4 = new Log(975,180,150,-PI/7);
    pig1 = new Pig(900,320);
    pig2 = new Pig(900,290);
    bird = new Bird(100,100);
    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log2.display();
    log1.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}
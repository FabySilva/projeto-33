const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var caixa, caixa2, caixa3, caixa4, caixa5;
var ground;
var pig1,pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    caixa = new Box(700,320,70,70);
    caixa2 = new Box(920,320,70,70);
    ground = new Ground(200,height,2000,20);
    pig1 = new Pig(810,350);
    log1 = new Log(810,260,300,PI/2);
    
    caixa3 = new Box(700,240,70,70);
    caixa4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    log2 = new Log(810,180,300,PI/2);

    caixa5 = new Box(810,160,70,70);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);

    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    caixa.display();
    caixa2.display(); 
    ground.display();
    pig1.display();
    log1.display();
    caixa3.display();
    caixa4.display();
    pig2.display();
    log2.display();
    caixa5.display();
    log3.display();
    log4.display();
    bird.display();
}
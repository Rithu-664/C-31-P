const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var ground;

var plinkos=[]
var particles=[]
var division=[]

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,797,480,10);
  
  for(var i=0; i <= 480; i=i+80){
    
    var div = new Division(i,800-150,10,300);
    division.push(div);
  }

  for(var k=40; k<=480; k=k+50){
    var plinko = new Plinko(k,800-725,10)
    plinkos.push(plinko);
  }
  for(var k=15; k<=480; k=k+50){
    var plinko2 = new Plinko(k,800-625,10)
    plinkos.push(plinko2);
  }
  for(var k=40; k<=480; k=k+50){
    var plinko3 = new Plinko(k,800-525,10)
    plinkos.push(plinko3);
  }
  for(var k=15; k<=480; k=k+50){
    var plinko4 = new Plinko(k,800-425,10)
    plinkos.push(plinko4);
  }

  if(frameCount%60===0){
    
    particles.push(new Particles(random(480/2-10,480/2+10),10,10));
  }
  

  Engine.run(engine);
}

function draw() {
  background(0);  
 
  ground.display();
  for(var j=0; j<division.length; j++ ){

    division[j].display();
  }
  
  for(var k=0; k<plinkos.length; k++){
    plinkos[k].display();
  }

  if(frameCount%30===0){
    
    particles.push(new Particles(random(480/2-10,480/2+10),10,10));
  }
  for (var l=0; l<particles.length; l++){
    particles[l].display();
  } 

  text(mouseX+","+mouseY,mouseX,mouseY)
  Engine.update(engine);

  
}
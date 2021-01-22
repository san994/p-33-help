var  Engine = Matter.Engine,
     World = Matter.World,
     Event = Matter.Event,
     Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisions,plinko,particle;
var divisionHeight=300;
var score = 0;
var words = "";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    


    
}
 


function draw() {
  background("black");

  textSize(25)
  text(" SCORE :  "+ score,30,50);

  textSize(25)
  text(" 500 "+words,10,550);

  textSize(25)
  text(" 500 "+words,90,550);

  textSize(25)
  text(" 400 "+words,170,550);

  textSize(25)
  text(" 400 "+words,250,550);

  textSize(25)
  text(" 300 "+words,330,550);

  textSize(25)
  text(" 300 "+words,410,550);

  textSize(25)
  text(" 200 "+words,490,550);

  textSize(25)
  text(" 200 "+words,570,550);

  textSize(25)
  text(" 100 "+words,650,550);

  textSize(25)
  text(" 100 "+words,730,550);


  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
  
   }

  
 



}





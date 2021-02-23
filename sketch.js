var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var divisions=[];  
var particles ;
var plinkos = [];
var score =0;
var gameState="play";
var turns=0;
var scr=[];
var divisionHeight=300;
var score =0;
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
  textSize(20)
  fill("white");
  text("Score : "+score,20,30);
  text("500",25,550);
  text("500",105,550);
  text("500",185,550);
  text("500",265,550);
  text("100",345,550);
  text("100",425,550);
  text("100",505,550);
  text("200",585,550);
  text("200",665,550);
  text("200",745,550);



  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
    
   
  
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if (gameState==="run"){
     scr=[particles.body.position.x];
     
     particles.display();
      if(particles.body.position.y>760){
  
        if(particles.body.position.x<300){
          score=score+500+Math.round((scr[scr.length-1])/4);
          
          gameState="play"
          
        }
        if(particles.body.position.x<540 && particles.body.position.x>300){
          score=score+100+Math.round((scr[scr.length-1])/4);
          
          gameState="play"
          
        }
        if(particles.body.position.x>540 ){
          score=score+200+Math.round((scr[scr.length-1])/4);
          
          gameState="play"
          
        }
    }
   }
   if(turns>5){
     gameState="end"
     textSize(100);
     fill("orange");
     text("Game Over",100,300);
   }
   
   fill ("yellow")
   
   rect (400,450,800,6)

}
function mousePressed(){
if (gameState==="play"&& turns<6){
  particles=new Particle(mouseX,10, 10,10);
  gameState="run";

  turns++
 
}
}
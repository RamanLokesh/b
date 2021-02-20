var canvas,block,wall1,wall2,wall3,wall4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
  

    //create 4 different surfaces
    wall1=createSprite(50,385,85,20);
    wall1.shapeColor="green";


    wall2=createSprite(150,385,85,20);
    wall2.shapeColor="blue";
  

    wall3=createSprite(250,385,85,20);
    wall3.shapeColor="orange";
  

    wall4=createSprite(350,385,85,20);
    wall4.shapeColor="yellow";
   

    
    //create box sprite and give velocity
    block=createSprite(random(20,360),10,20,20);
    block.velocityX=3;
    block.velocityY=3;
    block.shapeColor="white";
    
   
}

function draw() {
    background("pink");
    //create edgeSprite
var edges=createEdgeSprites();
block.bounceOff(edges);



//add condition to check if box touching surface and make it box
if(block.isTouching(wall1)){
    block.shapeColor="green";
    block.bounceOff(wall1);
    music.play();
}
if(block.isTouching(wall2)){
    block.shapeColor="blue";
    block.bounceOff(wall2);
    music.play();
}
if(block.isTouching(wall3)){
    block.shapeColor="orange";
    block.collide(wall3)
    block.velocityX=0;
    block.velocityY=0;
    music.stop();
}
if(block.isTouching(wall4)){
    block.shapeColor="yellow";
    block.bounceOff(wall4);
    music.play();
}

drawSprites();
}

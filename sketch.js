const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var a;
var circles=[];
var engine, world;


function setup() {
  createCanvas(1200,400);
  stroke(255)

  platform = new Ground(300,230 ,70 ,100);
  //level one 
  b1 = new Box(330,235,30,40) ; 
  b2 = new Box(360,235,30,40);
  b3 = new Box(390,235,30,40);
  b4 = new Box(420,235,30,40);
  b5 = new Box(450,235,30,40);

  //level two  
  b6 = new Box(360,195,30,40);
  b7 = new Box(390,195,30,40);
  b8 = new Box(420,195,30,40);

  //level three 
  b9 = new Box(390,15530,40);

  polygon = Bodies.circle(50,200,20); 
  this.polygonImage = loadImage("polygon.png") ; 
  World.add(world,polygon) ; 
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  imageMode(CENTRE);
  Image(0,0,50,200) ; 
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function mouseDragged(){
  
  Matter.Body.setPosition(bird.body,{x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();   
}




function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 